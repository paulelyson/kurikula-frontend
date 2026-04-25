type SnackBarType = 'primary' | 'success' | 'warning' | 'error' | 'dafault';

export class SnackBarConfig {
  type: SnackBarType = 'dafault';
  message: string[] = [];
  header?: string;
  action?: string[];
  icon: string = 'info';
  duration?: number;

  constructor(partial?: Partial<SnackBarConfig>) {
    Object.assign(this, partial);
  }
}
