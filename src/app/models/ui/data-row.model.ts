import { IconSize } from '../../shared/components/ui/icon/icon.component';
import { Size, Variant } from './common.model';

export type RowContentType = 'image' | 'title' | 'text' | 'badge' | 'action';

export class RowActionConfig {
  type: 'icon' | 'button' = 'button';
  name: string = '';
  icon: string = '';
  size: Size = 'md';
  variant: Variant = 'neutral';
  tooltip?: string;

  constructor(partial?: Partial<RowActionConfig>) {
    Object.assign(this, partial);
  }
}

export interface RowColumnConfig {
  id: number;
  type: RowContentType;
  header: string; // drives the header row
  content?: string | string[]; // text or badge array
  subtitle?: string; // only for type: 'title'
  image?: string; // only for type: 'image'
  weight?: number; // relative column width, default 1
  actions?: RowActionConfig[]; // only for type: 'action'
}
