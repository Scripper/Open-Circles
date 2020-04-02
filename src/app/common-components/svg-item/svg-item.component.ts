import {Component, Input} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-svg-item',
  templateUrl: './svg-item.component.html',
  styleUrls: ['./svg-item.component.scss']
})
export class SvgItemComponent {
  svgIcons;
  @Input() name: string;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.svgIcons = [
      {
        name: 'advanced',
        url: '/assets/svg/advanced.svg'
      },
      {
        name: 'course',
        url: '/assets/svg/course.svg'
      },
      {
        name: 'daily',
        url: '/assets/svg/daily.svg'
      },
      {
        name: 'leveling-system',
        url: '/assets/svg/leveling-system.svg'
      },
      {
        name: 'live-streams',
        url: '/assets/svg/live-streams.svg'
      },
      {
        name: 'users-list',
        url: '/assets/svg/users_list.svg'
      },
      {
        name: 'video-analytics',
        url: '/assets/svg/video_analytics.svg'
      },
    ];
    this.svgIcons.forEach((item) => {
      iconRegistry.addSvgIcon(
        item.name,
        sanitizer.bypassSecurityTrustResourceUrl(item.url));
    });
  }
}
