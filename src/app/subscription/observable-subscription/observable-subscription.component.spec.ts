import { ComponentFixture, TestBed } from '@angular/core/testing';
import { from, of } from 'rxjs';

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
    const results: any = [];
    const source = of(1, 2, 3, 4, 5);
    const subscription = source.subscribe(
      (n: number) => results.push(n),
      (err: any) => console.error(err),
      () => console.log('done'),

    );

    expect(results).toEqual([1, 2, 3, 4, 5]);



  })
});
describe('test', () => {
  it('should create', () => {
    expect(1).toBe(1);
  });
})