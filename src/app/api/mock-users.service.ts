import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockUsersService {
  fakeData = [];
  dataToSend = [];
  constructor() {
  }
  mockGenerator() {
    for(let i = 1; i < 20; i++) {
      const newUser = {
        id: i,
        email: `leffler.karelle${i}@marcellus.net`,
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
  }
  getData() {
    this.mockGenerator();
    this.dataToSend = this.fakeData;
    return this.dataToSend;
  }
  fitlerData(value: string) {
    this.dataToSend = this.fakeData.filter((item) => {
      const searchValue = value.toLowerCase();
      const dataValue = item.email.toLowerCase();
      if (dataValue.indexOf(searchValue, 0)) {
        return true;
      }
      return false;
    });
  }
}
