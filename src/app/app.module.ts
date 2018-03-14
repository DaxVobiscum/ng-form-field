import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormFieldDirective } from './form-field.directive';
import { FieldBuddyComponent } from './field-buddy.component';
import { FieldHelperDirective } from './field-helper.directive';


@NgModule({
  declarations: [
    AppComponent,
    FormFieldDirective,
    FieldBuddyComponent,
    FieldHelperDirective
  ],
  entryComponents: [
    FieldBuddyComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
