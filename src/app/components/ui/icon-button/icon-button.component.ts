import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Input() color?: string;
  @Input() ariaLabel?: string;
  @Input() textLabel?: string;
  @Input() icon = 'home';
}
