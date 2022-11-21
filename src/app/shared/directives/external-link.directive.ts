import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'a[href]'
})
export class ExternalLinkDirective implements OnChanges {
  @HostBinding('attr.href') hrefAttr: string | null = null;
  @HostBinding('attr.rel') relAttr: string | null = null;
  @HostBinding('attr.target') targetAttr: string | null = null;
  @Input() href: string | undefined;

  ngOnChanges() {
    if (this.href) {
      this.hrefAttr = this.href;

      if (this.isLinkExternal(this.href)) {
        this.relAttr = 'noopener';
        this.targetAttr = '_blank';
      } else {
        this.relAttr = null;
        this.targetAttr = null;
      }
    }
  }

  private isLinkExternal(href: string | null) {
    if (!href || href.startsWith('mailto:')) return false;
    return new URL(document.baseURI).origin !== new URL(href, document.baseURI).origin;
  }
}
