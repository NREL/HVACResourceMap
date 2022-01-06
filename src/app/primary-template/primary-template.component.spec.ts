import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryTemplateComponent } from './primary-template.component';

describe('PrimaryTemplateComponent', () => {
  let component: PrimaryTemplateComponent;
  let fixture: ComponentFixture<PrimaryTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
