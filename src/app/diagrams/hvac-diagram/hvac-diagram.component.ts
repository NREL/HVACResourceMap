import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-hvac-diagram',
  templateUrl: './hvac-diagram.component.svg',
  styleUrls: ['./hvac-diagram.component.scss']
})
export class HvacDiagramComponent implements AfterViewInit {
  @ViewChild('svg') svg?: ElementRef;

  active: { [key: string]: true } = {};
  classList: string[] = [];
  transformOriginX = 0;
  transformOriginY = 0;

  constructor(
    private element: ElementRef,
    private sharedService: SharedService
  ) {
    this.sharedService.selectors$.subscribe(selectors => {
      const active: { [key: string]: true } = {};
      const classList: string[] = [];
      selectors.forEach(selector => {
        active[selector] = true;
        classList.push(selector);
      });
      this.active = active;
      this.classList = classList;

      this.updateTransformOrigin();
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateTransformOrigin();
    })
  }

  private updateTransformOrigin() {
    //console.log(this.classList);
    if (this.svg && this.classList.length === 1) {
      const containerRect = this.element.nativeElement.getBoundingClientRect();
      const svgRect = this.svg.nativeElement.getBoundingClientRect();
      const childRect = this.svg.nativeElement.querySelector(`#${this.classList[0]}`).getBoundingClientRect();
      //console.log('containerRect', containerRect);
      //console.log('svgRect', svgRect);
      //console.log('childRect', childRect);
      const childCentroid = {
        x: childRect.left + childRect.width / 2,
        y: childRect.top + childRect.height / 2,
      };
      //console.log(childCentroid);

      const x = childCentroid.x - svgRect.left;
      const y = childCentroid.y - svgRect.top;

      // Account for padding and border
      const containerWidth = containerRect.width - 32;

      // Any x value less than half the container width (or larger than half the container width) becomes 0% or 100% respectively
      this.transformOriginX = Math.round(this.clamp(x - containerWidth / 2, 0, svgRect.width - containerWidth) / (svgRect.width - containerWidth) * 100);
      this.transformOriginY = Math.round(y / svgRect.height * 100);
      // just a bit of padding at top (don't translate Y if it's a tiny amount or it cuts off the top)
      if (this.transformOriginY < 10){
        this.transformOriginY = 0;
      }
    } else {
      this.transformOriginX = 0;
      this.transformOriginY = 0;
    }
  }

  private clamp(value: number, min: number, max: number): number {
    console.log(value, min, max);
    if (min > max) {
      throw new Error('Clamp min must be <= to max');
    }
    if (value > max) {
      value = max;
    } else if (value < min) {
      value = min;
    }
    return value;
  }

}
