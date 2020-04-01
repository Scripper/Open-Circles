import {Component, Input} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-svg-item',
  templateUrl: './svg-item.component.html',
  styleUrls: ['./svg-item.component.scss']
})
export class SvgItemComponent {
  @Input() name: string;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'advanced',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/advanced.svg'));
  }
}
