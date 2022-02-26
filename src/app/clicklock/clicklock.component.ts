import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-clicklock',
  templateUrl: './clicklock.component.html',
  styleUrls: ['./clicklock.component.css']
})
export class ClicklockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickForm = new FormGroup({
    number: new FormControl(''),
    checked: new FormControl('')
  });

  submit() {

  }

}
