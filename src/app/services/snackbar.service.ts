import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../shared/components/ui/snackbar/snackbar.component';
import { SnackBarConfig } from '../models/ui/snackbar-config.model';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  
  constructor(private snackBar: MatSnackBar) {}

  openSnackbar(data: SnackBarConfig) {
    const snackbarRef = this.snackBar.openFromComponent(SnackbarComponent, {
      panelClass: ['snackbar-override'],
      data: data,
      verticalPosition: 'top',
      duration: data.duration ?? 10 * 1000,
    });
  }
}
