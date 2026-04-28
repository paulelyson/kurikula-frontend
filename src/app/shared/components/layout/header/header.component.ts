import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvatarComponent } from '../../ui/avatar/avatar.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, AvatarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
