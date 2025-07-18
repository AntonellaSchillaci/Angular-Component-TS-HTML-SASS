import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, OnDestroy {
  @Input() message = '';
  @Input() duration = 3000;
  @Output() closed = new EventEmitter<void>();

  timeoutId?: any;

  ngOnInit() {
    this.timeoutId = setTimeout(() => {
      this.closed.emit();
    }, this.duration);
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
