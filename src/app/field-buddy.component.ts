import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-field-buddy',
  templateUrl: './field-buddy.component.html',
  styleUrls: ['./field-buddy.component.css']
})
export class FieldBuddyComponent implements OnInit {

  @Input() control: FormControl;
  
  public message: string;
  
  constructor() { }

  ngOnInit() {
  }
  
  setMessage(message: string) {
    this.message = message;
  }
  
  clearMessage() {
    this.message = undefined;
  }

}
