// tooltip.directive.ts
import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: '[appTooltip]' })
export class TooltipDirective {
  @Input('appTooltip') tooltipText = '';
  private tooltipEl: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.tooltipEl = this.renderer.createElement('span');
    this.renderer.appendChild(
      this.tooltipEl,
      this.renderer.createText(this.tooltipText)
    );
    this.renderer.appendChild(document.body, this.tooltipEl);
    this.renderer.addClass(this.tooltipEl, 'tooltip');

    const rect = this.el.nativeElement.getBoundingClientRect();
    this.renderer.setStyle(this.tooltipEl, 'top', `${rect.top - 36}px`);
    this.renderer.setStyle(this.tooltipEl, 'left', `${rect.left}px`);
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltipEl) {
      document.body.removeChild(this.tooltipEl);
      this.tooltipEl = null;
    }
  }
}