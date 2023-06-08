import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  Optional,
} from '@angular/core';
import {IInputField} from '../data-access/models/desk.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LearningService} from '../data-access/services/learning.service';
import {Subscription, of} from 'rxjs';
import {take} from 'rxjs';
import {Folder, INewFolder} from '../data-access/models/folder.model';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {switchMap, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

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
    folderName: '',
  };
  showNewFolder: boolean = false;
  editMode: boolean = false;
  folderList: Folder[] = [];
  newFolder!: INewFolder;
  folderName!: string;
  errorMessage!: string;
  newFolderCreatedId!: string;
  newfolderName: string = 'new folder';
  newfolderNameInput: string = '';

  @Output() listenFormParent: EventEmitter<IInputField> =
    new EventEmitter<IInputField>();
  constructor(
    private formBuilder: FormBuilder,
    private folderService: LearningService,
    private router: Router,
    @Optional() private dialogRef: MatDialogRef<CreateNewDecksPopupComponent>,
  ) {}

  ngOnInit(): void {
    this.formController = this.formBuilder.group({
      deckName: [''],
      folderName: [''],
      folder: [''],
    });
    this.subscription = this.folderService
      .getFolderOfUser()
      .pipe(take(1))
      .subscribe((data) => (this.folderList = data.data));
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
    this.errorMessage = '';
    this.inputField.deckName = event.target.value;
    this.listenFromParent();
  }
  onInputFolderName(event: any) {
    this.newfolderNameInput = event.target.value;
  }
  enterEditMode() {
    this.editMode = true;
  }
  createNewDesk(id: string): void {
    this.router.navigate(['deck', id]);
  }

  onSubmit() {
    if (this.inputField.deckName !== '') {
      if (this.folderName === 'new folder') {
        if (this.editMode) {
          this.newFolder = {
            folder_name: this.newfolderNameInput,
            is_public: true,
          };
        } else {
          this.newFolder = {
            folder_name: this.newfolderName,
            is_public: true,
          };
        }

        this.subscription = this.folderService
          .createNewFolder(this.newFolder)
          .pipe()
          .subscribe((data) => {
            this.newFolderCreatedId = data.data.id;
            this.createNewDesk(this.newFolderCreatedId);
            this.closeDialog();
          });
      } else this.createNewDesk(this.folderName), this.closeDialog();
    } else {
      this.errorMessage = 'Bạn chưa nhập Deck Name!';
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
