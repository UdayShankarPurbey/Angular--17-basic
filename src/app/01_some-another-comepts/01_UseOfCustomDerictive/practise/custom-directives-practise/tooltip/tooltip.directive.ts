import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective {
  @Input() tooltip: string | undefined;
  private tooltipElement: HTMLElement | undefined | null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.createTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.destroyTooltip();
  }

  private createTooltip() {
    this.tooltipElement = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltipElement, 'tooltip');
    this.renderer.setProperty(this.tooltipElement, 'innerText', this.tooltip);
    
    const { top, left, width } = this.el.nativeElement.getBoundingClientRect();
    
    this.renderer.setStyle(this.tooltipElement, 'top', `${top - 30}px`); // Position above the element
    this.renderer.setStyle(this.tooltipElement, 'left', `${left + width / 2}px`); // Centered
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'opacity', '0');
    this.renderer.setStyle(this.tooltipElement, 'transition', 'opacity 0.3s');
    
    this.renderer.appendChild(document.body, this.tooltipElement);

    // Trigger a reflow to enable the transition
    requestAnimationFrame(() => {
      this.renderer.setStyle(this.tooltipElement, 'opacity', '1');
    });
  }

  private destroyTooltip() {
    if (this.tooltipElement) {
      this.renderer.setStyle(this.tooltipElement, 'opacity', '0');
      setTimeout(() => {
        this.renderer.removeChild(document.body, this.tooltipElement);
        this.tooltipElement = null;
      }, 300); // Match this duration to your CSS transition
    }
  }
}
