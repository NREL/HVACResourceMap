import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'a[href]'
})
export class ExternalLinkDirective {
  @HostBinding('attr.rel') relAttr?: string;
  @HostBinding('attr.target') targetAttr?: string;
  @Input() href = '';

  constructor(private elementRef: ElementRef) {
  }

  ngOnChanges() {
    if (this.isExternal()) {
      this.relAttr = 'noopener';
      this.targetAttr = '_blank';
    } else {
      this.relAttr = undefined;
      this.targetAttr = undefined;
    }
  }

  private isExternal() {
    return this.elementRef.nativeElement.origin !== location.origin;
  }
}
