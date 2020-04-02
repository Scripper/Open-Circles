import { Component, OnInit } from '@angular/core';
import {MockUsersService} from '../../api/mock-users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [MockUsersService]
})
export class MainComponent implements OnInit {
  userList;
  constructor(private mockData: MockUsersService) { }

  ngOnInit(): void {
    this.userList = this.mockData.getData();
    console.log(this.userList);
    // this.userList.subscribe(() => {
    //   console.log(this.userList);
    // });
    this.mockData.fitlerData('');
  }
}
