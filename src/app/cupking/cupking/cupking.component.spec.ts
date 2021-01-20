import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupkingComponent } from './cupking.component';

describe('CupkingComponent', () => {
  let component: CupkingComponent;
  let fixture: ComponentFixture<CupkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CupkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CupkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
