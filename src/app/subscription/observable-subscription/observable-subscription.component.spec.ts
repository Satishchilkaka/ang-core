import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { ObservableSubscriptionComponent } from './observable-subscription.component';

describe('ObservableSubscriptionComponent', () => {
  let component: ObservableSubscriptionComponent;
  let fixture: ComponentFixture<ObservableSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObservableSubscriptionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Basic Observables', () => {
    const results: ArrayLike<any> = [1];

    expect(results).toEqual([1]);
  })
});
describe('test', () => {
  it('should create', () => {
    expect(1).toBe(1);
  });
})