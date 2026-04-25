import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonShade, ButtonSize, ButtonType, ButtonVariant, ButtonWidth } from '../../../../models/ui/button-config.model';
@Component({
  selector: 'app-button',
  imports: [CommonModule],

  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() action: string = '';
  @Input() variant: ButtonVariant = 'default';
  @Input() size: ButtonSize = 'md';
  @Input() type: ButtonType = 'default';
  @Input() shade: ButtonShade = 'default';
  @Input() width: ButtonWidth = 'width-auto';
  @Input() btnType: 'submit' | 'button' | 'reset' = 'button';
  @Input() icon: string = 'none';
  @Input() disabled: boolean = false;
  @Output() btnclicked: EventEmitter<string> = new EventEmitter<string>();

  onClicked(): void {
    this.btnclicked.emit(this.action);
  }
}
