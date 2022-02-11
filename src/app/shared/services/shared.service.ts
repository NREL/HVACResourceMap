import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly site = 'HVAC Resource Map';

  private _selectorsSubject = new BehaviorSubject<string[]>([]);
  readonly selectors$ = this._selectorsSubject.asObservable();

  constructor(private titleService: Title) {
  }

  setTitle(title?: string): void {
    if (title) {
      this.titleService.setTitle(`${title} | ${this.site}`);
    } else {
      this.titleService.setTitle(this.site);
    }
  }

  setActiveSelectors(selectors: string | string[] = []): void {
    if (typeof selectors === 'string') {
      this._selectorsSubject.next([selectors]);
    } else {
      this._selectorsSubject.next(selectors);
    }
  }
}
