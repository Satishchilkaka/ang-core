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
  someSource: any
  newSource: any;
  constructor() { }

  ngOnInit(): void {
    this.observable = interval(1000);
    // this.subscription = this.observable.subscribe((x: any) => console.log(x));

    this.someSource = interval(1000);

    this.newSource.subscribe((x: any) => console.log('x is', x));
    setTimeout(() => {
      this.subscription.unsubscribe();
    }, 5000, console.log('destroyed'));

  }

  ngOnDestroy() {

    // this.subscription.unsubscribe();


  }

}
