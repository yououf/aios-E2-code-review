import { Component } from '@angular/core';
import { DataService } from './core/data.service';
import { Employee, ItemType } from './shared/models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bananes-export-portal';
  public employees: Employee[] = [];
  newItemType = ItemType;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.employees = this.dataService.getEmployees();
  }

  addEmployee() {
    const newEmployee: Employee = {
      id: this.employees.length + 1,
      name: 'Younes OUFRID',
      budget: 999,
      role: 'Architect',
      arrivalDate: new Date(),
      items: [],
    };
    this.dataService.addEmployee(newEmployee);
    this.dataService.getEmployees();
  }
}
