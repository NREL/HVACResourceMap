import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent {
  readonly title = 'Steam Traps: Operation and Training Resources';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
