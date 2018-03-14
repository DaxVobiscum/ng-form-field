import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FieldHelperDirective } from './field-helper.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  @ViewChild(FieldHelperDirective) fieldHelper: FieldHelperDirective;
  
  form: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      ff1: fb.group({
        input: fb.control(undefined, [Validators.required])
      })
    });
  }
  
  ngAfterViewInit() {
    this.fieldHelper.addColor();
  }
}
