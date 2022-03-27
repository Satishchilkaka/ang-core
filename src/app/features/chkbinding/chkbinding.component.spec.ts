import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChkbindingComponent } from './chkbinding.component';

describe('ChkbindingComponent', () => {
  let component: ChkbindingComponent;
  let fixture: ComponentFixture<ChkbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChkbindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChkbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
