import {Injectable, OnDestroy} from '@angular/core';
import {Observable, Subject, timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Injectable()
export class DestroyService implements OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  constructor() {}
  getDestroySubject(): Observable<void> {
    return this.destroy$.asObservable();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
