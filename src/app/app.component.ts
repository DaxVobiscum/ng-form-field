import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  form: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      ff1: fb.group({
        input: fb.control(undefined, [Validators.required])
      })
    });
  }
}
