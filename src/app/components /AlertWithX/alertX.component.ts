import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-x',
  imports: [CommonModule],
  templateUrl: './alertX.component.html',
  styleUrls: ['./alertX.component.scss'],
})
export class AlertXComponent {
  @Input() message = '';
  @Input() type: 'success' | 'error' | 'info' = 'info';

  visible = true;

  close() {
    this.visible = false;
  }
}
