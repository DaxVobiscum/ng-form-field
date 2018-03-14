import {
  Directive,
  Renderer2,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[appFieldHelper]'
})
export class FieldHelperDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }
  
  addColor() {
    setTimeout(() => {
      const parentNode = this.renderer.parentNode(this.elementRef.nativeElement);
      const messageNode = parentNode.querySelector('p');
      this.renderer.setStyle(messageNode, 'color', 'red');
    });
  }

}
