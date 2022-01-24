import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent {
  readonly title = 'Cooling Tower: Types';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
