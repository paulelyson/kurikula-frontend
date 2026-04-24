export type RowContentType = 'image' | 'title' | 'text' | 'badge' | 'action';

export interface RowActionConfig {
  type: 'icon' | 'button';
  name: string;
  icon?: string;
  size?: string;
  tooltip?: string;
}

export interface RowColumnConfig {
  id: number;
  type: RowContentType;
  header?: string;           // drives the header row
  content?: string | string[]; // text or badge array
  subtitle?: string;         // only for type: 'title'
  image?: string;            // only for type: 'image'
  weight?: number;           // relative column width, default 1
  actions?: RowActionConfig[]; // only for type: 'action'
}