import { Component, Input, input } from '@angular/core';
import { User } from '../../services/api.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  template: `
    <div class="employee-card" [style]="{ backgroundColor: bgColor }">
      <h1>{{user?.first_name}} {{user?.last_name}}</h1>
      <p>Email: {{user?.email}}</p>
      <button id="btnSelectUser" (click)="handleClick()">Select user</button>
    </div>
  `,
  styles: ``
})
export class EmployeeComponent {

  bgColor = 'indigo';

  @Input() user: User | undefined;

  handleClick() {
    this.bgColor = 'tomato';
  }

}