import {
  Directive,
  Input,
  Renderer2,
  ElementRef,
  HostBinding,
  ComponentFactoryResolver,
  ViewContainerRef,
  TemplateRef
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FieldBuddyComponent } from './field-buddy.component';
import { FieldHelperDirective } from './field-helper.directive';

@Directive({
  selector: '[appFormField]'
})
export class FormFieldDirective {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    this.fieldHelper = new FieldHelperDirective(elementRef, renderer);
  }
  
  @Input() set appFormField(control: FormControl) {
    if (control) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      const fieldBuddyFactory = this.componentFactoryResolver.resolveComponentFactory(FieldBuddyComponent);
      const fieldBuddy: FieldBuddyComponent = this.viewContainer.createComponent(fieldBuddyFactory).instance as FieldBuddyComponent;
      fieldBuddy.control = control;
      fieldBuddy.control.statusChanges.subscribe(() => {
        if (fieldBuddy.control.invalid) {
          const errors = fieldBuddy.control.errors;
          if (errors && errors.required) {
            fieldBuddy.setMessage('Field is required.');
            this.fieldHelper.addColor();
          }
        } else {
          fieldBuddy.clearMessage();
        }
      });
    }
  }
  
  @HostBinding('attr.appFieldHelper') fieldHelper: FieldHelperDirective;
}
