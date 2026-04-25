import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackBarConfig } from '../../../../models/ui/snackbar-config.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-snackbar',
  imports: [CommonModule, MatSnackBarModule],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.css',
})
export class SnackbarComponent {
  isList: boolean = false;
  hasHeader: boolean = false;
  type = 'primary';
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public config: SnackBarConfig,
    private snackbarRef: MatSnackBarRef<SnackbarComponent>,
  ) {}

  onClose() {
    console.log('snackbar closed');
    this.snackbarRef.dismiss();
  }
}
