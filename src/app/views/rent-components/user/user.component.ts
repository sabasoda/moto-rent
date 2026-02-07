import { Component } from '@angular/core';
import { GenericTableComponent } from '../../generic-table/generic-table.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [GenericTableComponent, DatePipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {

  users: any[] = [{
    name: 'John Doe1',
    email: 'XKo7F@example.com',
    birthDate: new Date(new Date().setDate(new Date().getDate() - 1000))
  },
  {
    name: 'Jane Doe2',
    email: 'YtX2l@example.com',
    birthDate: new Date(new Date().setDate(new Date().getDate() - 2000))
  },
  {
    name: 'Lois Doe3',
    email: 'YtX6l@example.com',
    birthDate: new Date(new Date().setDate(new Date().getDate() - 3000))
  },
  {
    name: 'Clark Doe4',
    email: 'YtX1l@example.com',
    birthDate: new Date(new Date().setDate(new Date().getDate() - 4000))
  }];

  delete(row: any): void {
    console.log(row);
  }

  edit(row: any): void {
    console.log(row);
  }
}
