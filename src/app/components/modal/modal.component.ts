import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  userInModal: FormGroup;
  FormBuilder: FormBuilder;
  userData;
  constructor(public dialogRef: MatDialogRef<ModalComponent>, private formBuilder: FormBuilder)
  {
    // this.userInModal = this.formBuilder.group({
    //   email: new FormControl('xtadsf'),
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   country: new FormControl(),
    //   company: new FormControl(),
    //   type: new FormControl(),
    //   level: new FormControl(),
    //   validated: new FormControl(),
    //   coins: new FormControl(),
    // });
  }
  ngOnInit(): void {
    console.log(this.userData);
    this.userInModal = this.formBuilder.group({
      email: new FormControl(this.userData.email),
      firstName: new FormControl(this.userData.firstName),
      lastName: new FormControl(this.userData.lastName),
      country: new FormControl(this.userData.country),
      company: new FormControl(this.userData.company),
      type: new FormControl(this.userData.type),
      level: new FormControl(this.userData.level),
      validated: new FormControl(this.userData.validated),
      coins: new FormControl(this.userData.coins),
    });
    console.log(this.userInModal);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
