import {
  Directive,
  Input,
  ComponentFactoryResolver,
  ViewRef,
  ViewContainerRef,
  Renderer2,
  TemplateRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldBuddyComponent } from './field-buddy.component';

@Directive({
  selector: '[appFormField]'
})
export class FormFieldDirective implements AfterViewInit {

  controlGroup: FormGroup;
  
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }
  
  @Input() set appFormField(controlGroup: FormGroup) {
    if (controlGroup) {
      this.controlGroup = controlGroup;
      this.viewContainer.createEmbeddedView(this.templateRef);
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(FieldBuddyComponent);
      this.viewContainer.createComponent(componentFactory);
    }
  }

  ngAfterViewInit() { }
}
