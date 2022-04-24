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
  getOpenSub: any;
  subscription2: any;
  xhr = new XMLHttpRequest();
  request = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='New_England_Patriots"


  ngOnInit(): void {


  }
  // getSubCount() {
  //   this.observable1 = interval(1000);
  //   // this.observable2 = interval(1000);

  //   this.getOpenSub = this.observable1.subscribe((x: any) => { return JSON.stringify(x) });
  //   // this.subscription2 = this.observable2.subscribe((x: any) => console.log('second', x));

  //   setTimeout(() => {
  //     this.getOpenSub.unsubscribe();
  //     // this.subscription2.unsubscribe();
  //     console.log('unsubscribed');
  //   }
  //     , 5000);
  // }

  ngOnDestroy() {
    //   setTimeout(() => {
    //     this.getOpenSub.unsubscribe();
    //   }, 500);
    //   this.getOpenSub.unsubscribe();

    //   console.log('destroyed');
  }

}
