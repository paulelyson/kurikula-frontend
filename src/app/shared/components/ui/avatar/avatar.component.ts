import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Size } from '../../../../models/ui/common.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css',
})
export class AvatarComponent {
  @Input() size: Size = 'md';
  @Input() label: string = ''
  @Output() avatarclicked: EventEmitter<string> = new EventEmitter();
  image = 'https://placehold.co/60?text=No+Image&font=poppins';

}
