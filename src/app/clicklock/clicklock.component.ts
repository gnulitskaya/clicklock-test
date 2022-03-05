import { ClickService } from './../state/click.service';
import { CheckedService } from './../state/checked.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-clicklock',
  templateUrl: './clicklock.component.html',
  styleUrls: ['./clicklock.component.css']
})
export class ClicklockComponent implements OnInit {

  constructor(private _checkedCreateService: CheckedService,
    private clickService: ClickService) { }

    counter: number = 0;
    date?: Date;
    isChecked: boolean = false;

    clickForm = new FormGroup({
      input: new FormControl(null),
      checked: new FormControl(false)
    });

  ngOnInit(): void {
    this.clickForm.get('checked')?.valueChanges.subscribe(v => {
      if(v) {this.clickForm.get('input')?.setValidators(Validators.required);
      // this.clickForm.get('input')?.value % 3 == 0;
      this.isChecked = true;
      console.log('checked')}
      else {
        this.clickForm.get('input')?.setValidators(null);
        this.isChecked = false;
        console.log('NOT checked')
      }
      // console.log('checked (v = v % 3 == 0)', this.clickForm.get('checked'));
      this.clickForm.get('input')?.updateValueAndValidity();
    })
  }

  submit() {
    // this._checkedCreateService.updateChecked({})
    // this.counter++
    this.clickService.updateClick();
    this.counter = this.clickService.counter;
    this.date = this.clickService.myDate;

  }
}
