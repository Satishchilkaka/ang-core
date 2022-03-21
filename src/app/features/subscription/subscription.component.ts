import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  observable1: any;
  observable2: any;
  subscription: any;
  subscription2: any;
  xhr = new XMLHttpRequest();
  request = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='New_England_Patriots"


  ngOnInit(): void {
    this.observable1 = interval(4000);
    this.observable2 = interval(1000);

    this.subscription = this.observable1.subscribe((x: any) => console.log('first', x));
    this.subscription2 = this.observable2.subscribe((x: any) => console.log('second', x));

    setTimeout(() => {
      this.subscription.unsubscribe();
      this.subscription2.unsubscribe();
      console.log('unsubscribed');
    }
      , 5000);

  }

  ngOnDestroy() {
    // setTimeout(() => {
    //   this.subscription.unsubscribe();
    // }, 5000);
    //  this.subscription.unsubscribe();

    // console.log('destroyed');
  }

}
