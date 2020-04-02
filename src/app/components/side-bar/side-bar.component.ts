import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  linkList;
  listOfLinks;
  constructor(private el: ElementRef) {
    this.listOfLinks = this.el.nativeElement.querySelectorAll('.link-list_item');
    this.linkList = [
      {
        icon: 'users-list',
        name: 'users list',
        active: true,
      },
      {
        icon: 'daily',
        name: 'daily'
      },
      {
        icon: 'course',
        name: 'course'
      },
      {
        icon: 'leveling-system',
        name: 'leveling system'
      },
      {
        icon: 'live-streams',
        name: 'live streams'
      },
      {
        icon: 'advanced',
        name: 'advanced'
      },
      {
        icon: 'video-analytics',
        name: 'video analytics'
      },
    ];
  }
}
