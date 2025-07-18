import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-field',
  imports: [CommonModule],
  templateUrl: './formfield.component.html',
  styleUrls: ['./formfield.component.scss']
})
export class FormFieldComponent {
  @Input() label = '';
  @Input() error: string | null = null;
}
