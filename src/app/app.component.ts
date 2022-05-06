import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Options } from 'overlayscrollbars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  readonly showTopNav = true;
  readonly showAlternate = true;

  isHome = false;
  scrollOptions: Options = {
    overflowBehavior: {
      x: 'hidden'
    },
    sizeAutoCapable: false
  };

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHome = event.url === '/';
      }
    });
  }
}
