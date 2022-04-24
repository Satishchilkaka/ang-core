import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-observable-subscription',
  templateUrl: './observable-subscription.component.html',
  styleUrls: ['./observable-subscription.component.css']
})
export class ObservableSubscriptionComponent implements OnInit {
  observable: any;
  subscription: any;
  constructor() { }

  ngOnInit(): void {
    this.observable = interval(1000);
    this.subscription = this.observable.subscribe((x: any) => console.log(x));
    setTimeout(() => {
      this.subscription.unsubscribe();
    }
      , 5000, console.log('destroyed'));

  }

  ngOnDestroy() {
    setTimeout(() => {
      this.subscription.unsubscribe();
    }, 5000, console.log('destroyed'));
    // this.subscription.unsubscribe();


  }

}
