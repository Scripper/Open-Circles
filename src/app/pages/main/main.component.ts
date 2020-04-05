import { Component, OnInit } from '@angular/core';
import {MockUsersService} from '../../api/mock-users.service';
import {Form, FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ModalComponent} from '../../components/modal/modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [MockUsersService]
})
export class MainComponent implements OnInit {
  userList;
  searchForm: FormGroup;
  formSubscribe: Subscription;
  constructor(private mockData: MockUsersService, public dialog: MatDialog) {
    this.searchForm = new FormGroup({
      searchValue: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.mockData.dataToSend.subscribe( (data) => {
      this.userList = data;
    });
    this.formSubscribe = this.searchForm.valueChanges.subscribe((value) => {
      console.log(value);
      this.mockData.filterData(value.searchValue);
    });
    this.mockData.mockGenerator();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '820px',
      height: '540px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
