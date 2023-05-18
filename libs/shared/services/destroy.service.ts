import {Injectable, OnDestroy} from '@angular/core';
import {Subject, timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Injectable()
export class DestroyService implements OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  constructor() {
    timer(0, 1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        // Handle timer value
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
