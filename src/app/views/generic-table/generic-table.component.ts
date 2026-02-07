import { Component, Input, OnChanges } from '@angular/core';
import { TableColumn } from '../../core/models/table-column';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class GenericTableComponent<T> implements OnChanges {

  @Input() data: T[] = [];
  @Input() columns: TableColumn<T>[] = [];
  @Input() pageSize = 10;
  globalFilter: string = '';

  sortedData: T[] = [];
  filters: Partial<Record<keyof T, string>> = {};
  sortField: keyof T | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';

  currentPage = 1;

  ngOnChanges() {
    this.sortedData = [...this.data];
  }

  // Sorting
  sort(col: TableColumn<T>) {
    if (!col.field) return;

    if (this.sortField === col.field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = col.field;
      this.sortDirection = 'asc';
    }

    this.sortedData.sort((a, b) => {
      const valueA = a[col.field!];
      const valueB = b[col.field!];

      if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  applyFilters() {
    const filter = this.globalFilter.trim().toLowerCase();

    if (!filter) {
      this.sortedData = [...this.data];
      return;
    }

    this.sortedData = this.data.filter(row =>
      this.columns.some(col => {
        if (!col.field) return false;

        const raw = row[col.field as keyof T];

        if (raw instanceof Date) {
          const day = raw.getDate().toString().padStart(2, '0');
          const month = (raw.getMonth() + 1).toString().padStart(2, '0');
          const year = raw.getFullYear().toString();
          const normalized = `${day}/${month}/${year}`.toLowerCase();
          return (
            normalized.includes(filter) ||
            day.includes(filter) ||
            month.includes(filter) ||
            year.includes(filter)
          );
        }

        const value = String(raw ?? '').toLowerCase();
        return value.includes(filter);
      })
    );
  }

  // Pagination
  get paginatedData(): T[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.sortedData.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.sortedData.length / this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }
}
