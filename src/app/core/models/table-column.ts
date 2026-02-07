import { TemplateRef } from '@angular/core';

export interface TableColumn<T> {
  field?: keyof T;
  header: string;
  template?: TemplateRef<any>;
}
