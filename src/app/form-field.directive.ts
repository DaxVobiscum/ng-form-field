import {
  Directive,
  Input,
  ComponentFactoryResolver,
  Renderer2,
  ElementRef,
  ViewContainerRef,
  TemplateRef
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FieldBuddyComponent } from './field-buddy.component';

@Directive({
  selector: '[appFormField]'
})
export class FormFieldDirective {

  controlGroup: FormGroup;
  
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }
  
  @Input() set appFormField(controlGroup: FormGroup) {
    if (controlGroup) {
      this.controlGroup = controlGroup;
      this.viewContainer.createEmbeddedView(this.templateRef);
      const fieldBuddyFactory = this.componentFactoryResolver.resolveComponentFactory(FieldBuddyComponent);
      const fieldBuddy: FieldBuddyComponent = this.viewContainer.createComponent(fieldBuddyFactory).instance as FieldBuddyComponent;
      fieldBuddy.control = this.controlGroup.get('input') as FormControl;
      fieldBuddy.control.statusChanges.subscribe(() => {
        if (fieldBuddy.control.invalid) {
          const errors = fieldBuddy.control.errors;
          if (errors && errors.required) {
            fieldBuddy.setMessage('Field is required.');
            setTimeout(() => {
              const parentNode = this.renderer.parentNode(this.elementRef.nativeElement);
              const messageNode = parentNode.querySelector('p');
              this.renderer.setStyle(messageNode, 'color', 'red');
            });
          }
        } else {
          fieldBuddy.clearMessage();
        }
      });
    }
  }
}
