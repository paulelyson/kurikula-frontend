import { FilterDisplay } from '../../models/ui/common.model';

export const getFilterDisplay = (filter: Record<string, any>, exclude: string[] = ['page']): FilterDisplay[] => {
  return Object.entries(filter)
    .map(([key, val]) => ({ field: key, value: val }))
    .filter((x) => x.value && !exclude.includes(x.field));
};
