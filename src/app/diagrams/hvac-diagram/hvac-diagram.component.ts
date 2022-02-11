import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-hvac-diagram',
  templateUrl: './hvac-diagram.component.svg',
  styleUrls: ['./hvac-diagram.component.scss']
})
export class HvacDiagramComponent {
  active: {[key: string]: true} = {
  };
  classList: string[] = [];

  constructor(private sharedService: SharedService) {
    this.sharedService.selectors$.subscribe(selectors => {
      const active: {[key: string]: true} = {};
      const classList: string[] = [];
      selectors.forEach(selector => {
        active[selector] = true;
        classList.push(selector);
      });
      this.active = active;
      this.classList = classList;
    });
  }

}
