import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Size, Variant } from '../../../../models/ui/common.model';

interface IconType {
  variant: Variant;
  icon: string;
}

@Component({
  selector: 'app-badge',
  imports: [CommonModule, MatIconModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
})
export class BadgeComponent {
  @Input() size: Size = 'sm';
  @Input() variant: Variant = 'neutral';
  @Input() hasBadgeIcon: boolean = false;
  @Input() hasCloseIcon: boolean = false;
  @Input() clickable: boolean = true;
  @Output() closed: EventEmitter<string> = new EventEmitter<string>();
  iconlist: IconType[] = [];

  onClosed(): void {
    this.closed.emit();
  }
}
