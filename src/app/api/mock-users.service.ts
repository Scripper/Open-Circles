import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockUsersService {
  fakeData = [];
  dataToSend: Subject<any> = new Subject();
  constructor() {}

  mockGenerator() {
    for (let i = 1; i < 501; i++) {
      const newUser = {
        id: i,
        email: `leaflet.karalee${i}@marcellus.net`,
        firstName: 'Lewis',
        lastName: 'Taylor',
        country: 'Korea',
        company: 'green',
        type: 'Business',
        level: 12,
        validated: true,
        coins: Math.floor(Math.random() * 5000),
        subscriptionType: 99,
        subscriptionDate: '11/02/2016'
      };
      this.fakeData.push(newUser);
    }
    this.dataToSend.next(this.fakeData);
  }

  // addItem() {
  //   const user = [...this.fakeData, {
  //     id: 1,
  //     email: `leaflet.karalee1marcellus.net`,
  //     firstName: 'Lewis',
  //     lastName: 'Taylor',
  //     country: 'Korea',
  //     company: 'green',
  //     type: 'Business',
  //     level: 12,
  //     validated: true,
  //     coins: Math.floor(Math.random() * 5000),
  //     subscriptionType: 99,
  //     subscriptionDate: '11/02/2016'
  //   }];
  //   this.fakeData = user;
  //   this.dataToSend.next(user);
  // }

  filterData(value) {
    let searchValue;
    let dataValue;
    const filteredData = this.fakeData.filter((item) => {
      searchValue = value.toLowerCase();
      dataValue = item.email.toLowerCase();
      return dataValue.indexOf(searchValue) + 1;
    });
    this.dataToSend.next(filteredData);
  }

}
