import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { IInputField } from '../data-access/models/desk.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LearningService } from '../data-access/services/learning.service';
import { Subscription } from 'rxjs';
import { take } from 'rxjs';
import { Folder, INewFolder } from '../data-access/models/folder.model';

@Component({
  selector: 'exe-project-create-new-decks-popup',
  templateUrl: './create-new-decks-popup.component.html',
  styleUrls: ['./create-new-decks-popup.component.scss'],
})
export class CreateNewDecksPopupComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  formController!: FormGroup;
  inputField: IInputField = {
    deckName: '',
    folderName: ''
  };
  showNewFolder: boolean = false;
  editMode: boolean = false;
  folderList: Folder[] = [];
  newFolder!: INewFolder;
  newFolderCreatedId!: string;
  newfolderName: string = "new folder";
  newfolderNameInput: string = "new folder";

  @Output() listenFormParent: EventEmitter<IInputField> = new EventEmitter<IInputField>();
  constructor(private formBuilder: FormBuilder, private folderService: LearningService) { }

  ngOnInit(): void {
    this.formController = this.formBuilder.group({
      deckName: [''],
      folderName: [''],
    });
    this.subscription = this.folderService
      .getFolderOfUser()
      .pipe(take(1))
      .subscribe(
        (data) => (
          (this.folderList = data.data)
        ),
      );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  listenFromParent() {
    this.listenFormParent.emit(this.inputField);
  }
  createNewFolder() {
    this.showNewFolder = true;
  }
  deleteNewFolder() {
    this.showNewFolder = false;
  }

  onInputName(event: any) {
    this.inputField.deckName = event.target.value;
    this.listenFromParent();
  }
  enterEditMode() {
    this.editMode = true;
  }
  onSubmit() {
    console.log("first")
    this.inputField.folderName = this.formController.value.folderName
    console.log("inputField: ", this.inputField)

    if ( this.inputField.folderName === "new folder") {
      if (this.editMode) {
        this.newFolder = {
          folder_name: this.newfolderNameInput,
          is_public: false
        }
      } else (
        this.newFolder = {
          folder_name: this.newfolderName,
          is_public: false
        }
      )
      this.subscription = this.folderService
        .createNewFolder(this.newFolder)
        .pipe()
        .subscribe(
          (data) => {
            this.newFolderCreatedId = data.data.id
          }
        );
    }
  }
}
