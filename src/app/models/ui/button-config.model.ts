export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger';
export type ButtonShade = 'default' | 'light';
export type ButtonWidth = 'width-filled' | 'width-auto';
export type ButtonVariant = 'default' | 'link';

export class ButtonConfig {
  id: number = 0;
  name: string = '';
  size: ButtonSize = 'md';
  type: ButtonType = 'default';
  shade: ButtonShade = 'default';
  width: ButtonWidth = 'width-auto';
  btnType: 'submit' | 'button' | 'reset' = 'button';
  variant: ButtonVariant = 'default';

  constructor(partial?: Partial<ButtonConfig>) {
    Object.assign(this, partial);
  }
}
