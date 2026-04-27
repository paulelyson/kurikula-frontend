import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ButtonComponent } from '../../ui/button/button.component';


@Component({
  selector: 'app-tab',
  imports: [ MatTabsModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css',
})
export class TabComponent {
  @Input() selected: number = 0;
  @Input() tabs: string[] = [];
}
