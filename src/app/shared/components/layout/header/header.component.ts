import { Component, Input, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvatarComponent } from '../../ui/avatar/avatar.component';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, AvatarComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() isTransparent: boolean = true;
  isLoggedIn: WritableSignal<boolean> = signal(false);

}
