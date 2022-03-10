import { ClickService } from './../state/click.service';
import { CheckedService } from './../state/checked.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import {ClickQuery} from "../state/click.store";
import {CheckedQuery} from "../state/checked.store";
import {Observable, Subject} from "rxjs";
import {IClickEvent} from "../state/click.interface";
import {filter, map, takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-clicklock',
  templateUrl: './clicklock.component.html',
  styleUrls: ['./clicklock.component.css']
})
export class ClicklockComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();

  public getLast$: Observable<IClickEvent | undefined> = this._clickQuery.getLastEntity().pipe(
    filter(v => v != null),
    map(v => v as IClickEvent),
    takeUntil(this.destroy$)
  )

  public getCount$: Observable<number> = this._clickQuery.getCountOfEntity().pipe(
    takeUntil(this.destroy$)
  )

  constructor(
    private _checkedService: CheckedService,
    private _checkedQuery: CheckedQuery,
    private _clickService: ClickService,
    private _clickQuery: ClickQuery,
  ) { }

    counter: number = 0;
    // date?: Date;
    isChecked: boolean = false;

   public clickForm = new FormGroup({
      input: new FormControl(null),
      checked: new FormControl(false)
    });

  ngOnInit(): void {
    // this.clickForm.get('checked')?.valueChanges.subscribe(v => {
    //   if(v) {this.clickForm.get('input')?.setValidators(Validators.required);
    //   // this.clickForm.get('input')?.value % 3 == 0;
    //   this.isChecked = true;
    //   console.log('checked')}
    //   else {
    //     this.clickForm.get('input')?.setValidators(null);
    //     this.isChecked = false;
    //     console.log('NOT checked')
    //   }
    //   // console.log('checked (v = v % 3 == 0)', this.clickForm.get('checked'));
    //   this.clickForm.get('input')?.updateValueAndValidity();
    // })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  click() {
    // this._checkedCreateService.updateChecked({})
    // this.counter++
    this._clickService.updateClick();
    // this.counter = this._clickService.counter;
    // this.date = this.clickService.myDate;

  }
}
