import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[data-picker-btn]' // Attribute selector
})
export class DataPickerBtnDirective {

  constructor(private el: ElementRef) {
    console.log('DataPicke  rBtnDirective')

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#caaa75');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
