import {Component, OnInit, OnDestroy, OnChanges} from '@angular/core';
import {Desk} from '../data-access/models/desk.model';
import {LearningService} from '../data-access/services/learning.service';
import {catchError, take, throwError} from 'rxjs';
import {Subscription} from 'rxjs';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import {CreateNewDecksPopupComponent} from '../create-new-decks-popup/create-new-decks-popup.component';
import {ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'exe-project-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss'],
})
export class SearchSectionComponent implements OnInit, OnChanges {
  seachDeckList: Desk[] = [];
  totalDesk: number = 0;
  subscription!: Subscription;
  searchName: string = '';
  constructor(
    private learngSerivce: LearningService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private toastr: ToastrService,
  ) {
    this.route.queryParams.subscribe((params) => {
      this.searchName = params['query'];
      // Sử dụng searchQuery cho mục đích tìm kiếm
    });
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchName = params['query'];
      this.subscribeToSearchDeck();
    });
  }
  private subscribeToSearchDeck(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.learngSerivce
      .getSearchDeck(this.searchName)
      .pipe(
        take(1),
        catchError((error) => {
          // Xử lý lỗi ở đây
          this.toastr.warning('An error occurred while retrieving data.');
          // Trả về một Observable để tiếp tục xử lý lỗi hoặc đưa ra giá trị mặc định
          return throwError('Đã xảy ra lỗi khi lấy dữ liệu.');
        }),
      )
      .subscribe((data) => {
        this.seachDeckList = data.data;
        console.log('hehe ,data  this.seachDeckList', this.seachDeckList);
        this.totalDesk = data.total_count;
      });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  ngOnChanges(): void {}
  openPopup() {
    const dialogConfig = new MatDialogConfig();
    const dialogRef: MatDialogRef<CreateNewDecksPopupComponent> =
      this.dialog.open(CreateNewDecksPopupComponent, {
        ...dialogConfig,
      });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
    });
  }
}
