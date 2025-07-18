import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-tabs',
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() tabs: Tab[] = [];
  activeIndex = 0;

  setActive(index: number) {
    this.activeIndex = index;
  }
}
