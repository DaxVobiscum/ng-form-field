import {
  Directive,
  ViewContainerRef,
  Renderer2,
  TemplateRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';

@Directive({
  selector: '[appFormField]'
})
export class FormFieldDirective implements AfterViewInit {

  constructor(private viewContainer: ViewContainerRef) { }
  
  ngAfterViewInit() {
    
  }

}
