import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly site = 'HVAC Resource Map';

  constructor(private titleService: Title) {
  }

  setTitle(title?: string): void {
    if (title) {
      this.titleService.setTitle(`${title} | ${this.site}`);
    } else {
      this.titleService.setTitle(this.site);
    }
  }
}
