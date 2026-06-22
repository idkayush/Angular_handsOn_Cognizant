import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
@Directive({ selector: '[appHighlight]', standalone: true })
export class HighlightDirective {
  @Input() appHighlight = 'yellow';
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') onEnter(){ this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.appHighlight || 'yellow'); }
  @HostListener('mouseleave') onLeave(){ this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor'); }
}
