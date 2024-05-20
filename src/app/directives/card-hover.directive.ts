import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[CardHover]'
})
export class CardHoverDirective {

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#f6f6f6',"#0053a4");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null,null);
  }

  private highlight(color: string | null, bcolor: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    // this.renderer.setStyle(this.el.nativeElement.querySelector('button'), 'background-color', bcolor);
  }
}
