import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutTopnavComponent } from './without-topnav.component';

describe('WithoutTopnavComponent', () => {
  let component: WithoutTopnavComponent;
  let fixture: ComponentFixture<WithoutTopnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutTopnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutTopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
