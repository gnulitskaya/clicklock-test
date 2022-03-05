import { ClickService } from './../state/click.service';
import { CheckedService } from './../state/checked.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

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

  ngOnInit(): void {
  }

  clickForm = new FormGroup({
    number: new FormControl(''),
    checked: new FormControl('')
  });

  submit() {
    // this._checkedCreateService.updateChecked({})
    // this.counter++
    this.clickService.updateClick();
    this.counter = this.clickService.counter;
    this.date = this.clickService.myDate;
  }

}
