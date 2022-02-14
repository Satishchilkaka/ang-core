import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutProductComponent } from './out-product.component';

describe('OutProductComponent', () => {
  let component: OutProductComponent;
  let fixture: ComponentFixture<OutProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
