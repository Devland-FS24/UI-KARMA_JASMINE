import { Component } from '@angular/core';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [],
  template: `
    <div>
      <p>{{message}}</p>
      <button (click)="handleClick()">Click to change</button>
    </div>
  `,
  styles: ``
})
export class DepartmentComponent {

  active: boolean = true;

  get message() {
    return this.active ? 'on' : 'off';
  }

  handleClick() {
    this.active = !this.active;
  }

}
