import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {CreateCardItemComponent} from '../create-card-item/create-card-item.component';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Subscription, take, takeLast, takeUntil} from 'rxjs';
import {FolderService} from '../data-acess/services/folder-management.service';
import {DetailFolder} from '../data-acess/models/folder.model';
import {Card} from '../data-acess/models/card.model';
import {DeckService} from '../data-acess/services/deck-mamagement.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'exe-project-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.scss'],
})
export class DeckDetailComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('container', {read: ViewContainerRef})
  container!: ViewContainerRef;
  componentRefs!: ComponentRef<CreateCardItemComponent>[];
  deckCreateForm!: FormGroup;
  idFolder: string | null = '';
  isPublic = true;
  subscription!: Subscription;
  folderDetail!: DetailFolder;

  cardlist: Card[] = new Array(1);
  constructor(
    private formBuilder: FormBuilder,
    private resolver: ComponentFactoryResolver,
    private router: ActivatedRoute,
    private folderService: FolderService,
    private deckService: DeckService,
    private toastr: ToastrService,
    private route: Router,
  ) {}

  ngOnInit(): void {
    this.idFolder = this.router.snapshot.paramMap.get('id');
    this.subscription = this.folderService
      .getFolderDetail(this.idFolder)
      .pipe(take(1))
      .subscribe((data) => {
        this.folderDetail = data;
      });

    this.deckCreateForm = this.formBuilder.group({
      nameDesk: ['Unnamed'],
      description: [''],
      isPublic: ['true'],
    });
  }
  get componentGroups(): FormArray {
    return this.deckCreateForm.get('components') as FormArray;
  }

  addComponent() {
    const componentGroup = this.formBuilder.group({
      nameDesk: ['Unnamed'],
      is_public: ['1'],
    });
    const componentFactory = this.resolver.resolveComponentFactory(
      CreateCardItemComponent,
    );
    const componentRef = this.container.createComponent(componentFactory);
    // this.componentRefs.push(componentRef );
    componentRef.instance.deleteComponent.subscribe(() => {
      this.removeComponent(componentRef);
    });
    this.cardlist.push(componentRef.instance.cardItem);
    componentRef.instance.cardItem;
    componentRef.instance.listenFormParent.pipe().subscribe((data) => {
      this.cardlist[this.container.indexOf(componentRef.hostView) + 1] =
        data as Card;
    });
  }
  removeComponent(componentRef: ComponentRef<any>) {
    // Xóa component khỏi ViewContainerRef
    this.cardlist.splice(this.container.indexOf(componentRef.hostView), 1);
    this.container.remove(this.container.indexOf(componentRef.hostView));
    componentRef.destroy();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  onSubmit() {
    this.cardlist = this.cardlist.filter((item) => item !== undefined);
    const body = {
      folder_id: this.folderDetail.data.id,
      name: this.deckCreateForm.controls['nameDesk'].value,
      description: this.deckCreateForm.controls['description'].value,
      is_public: !!this.deckCreateForm.controls['isPublic'].value,
      color: 0,
      order: 0,
      recall_strength: 0,
      reminder_time: null,
      learning_length: 0,
      spaced_repetition_strategy_level: 0,
      list_flash_cards: this.cardlist,
    };

    this.subscription = this.deckService
      .createNewDeck(body)
      .pipe()
      .subscribe(
        (data) => {
          if (data['status_code'] == 200) {
            this.toastr.success('Create successfully.', 'Create new desk');
            this.route.navigate(['folders']);
          } else {
            this.toastr.success('Create failed.', 'Create new desk');
          }
        },
        (error) => {
          if (error.status === 500) {
            this.toastr.error('An error occurred. Please try again later.');
          } else if (error.status == 400) {
            this.toastr.warning('Some thing wrong with input field');
          } else if (error.status == 404) {
            this.toastr.warning('Some thing wrong with input field');
          } else if (error.status == 422) {
            this.toastr.warning('Please input fields empty!');
          } else {
            this.toastr.error('An error occurred. Please try again later.');
          }
        },
      );
  }
  getData($event: Card) {
    this.cardlist[0] = $event as Card;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
