import { Injectable } from '@angular/core';
import {
  Commercial,
  CommercialItem,
  ItemType,
  Trader,
  TraderItem,
  Developer,
  DeveloperItem,
  Employee,
  Item,
} from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private employees: Employee[] = [
    {
      id: 1,
      name: 'Employee 1',
      budget: 3000,
      role: 'developer',
      items: [
        { id: 1, type: ItemType.Laptop, price: 1800 },
        {
          id: 2,
          type: ItemType.DockingStation,
          price: 400,
        },
        { id: 3, type: ItemType.ExtraScreen, price: 250 },
        {
          id: 4,
          type: ItemType.WirelessHeadset,
          price: 250,
        },
      ],
      arrivalDate: new Date('2023-06-01'),
    },
    {
      id: 2,
      name: 'Employee 2',
      budget: 3000,
      role: 'trader',
      items: [
        {
          id: 1,
          type: ItemType.Desktop,
          price: 2200,
        },
        { id: 2, type: ItemType.ExtraScreen, price: 250 },
        { id: 3, type: ItemType.DeskPhone, price: 100 },
      ],
      arrivalDate: new Date('2023-06-01'),
    },
    {
      id: 3,
      name: 'Employee 3',
      budget: 3000,
      role: 'commercial',
      items: [
        { id: 1, type: ItemType.Laptop, price: 1800 },
        {
          id: 2,
          type: ItemType.DockingStation,
          price: 400,
        },
        { id: 3, type: ItemType.ExtraScreen, price: 250 },
        { id: 4, type: ItemType.Smartphone, price: 600 },
        { id: 5, type: ItemType.DeskPhone, price: 100 },
        {
          id: 6,
          type: ItemType.WirelessHeadset,
          price: 250,
        },
      ],
      arrivalDate: new Date('2023-06-01'),
    },
  ];

  private commercials: Commercial[] = [
    {
      id: 1,
      name: 'Commercial 1',
      budget: 3000,
      items: [
        { id: 1, name: 'Laptop', type: ItemType.Laptop, price: 1800 },
        {
          id: 2,
          name: 'Docking Station',
          type: ItemType.DockingStation,
          price: 400,
        },
        { id: 3, name: 'Extra Screen', type: ItemType.ExtraScreen, price: 250 },
        { id: 4, name: 'Smartphone', type: ItemType.Smartphone, price: 600 },
        { id: 5, name: 'Desk Phone', type: ItemType.DeskPhone, price: 100 },
        {
          id: 6,
          name: 'Wireless Headset',
          type: ItemType.WirelessHeadset,
          price: 250,
        },
      ],
    },
    {
      id: 2,
      name: 'Commercial 2',
      budget: 3000,
      items: [
        { id: 1, name: 'Laptop', type: ItemType.Laptop, price: 1800 },
        {
          id: 2,
          name: 'Docking Station',
          type: ItemType.DockingStation,
          price: 400,
        },
        { id: 3, name: 'Extra Screen', type: ItemType.ExtraScreen, price: 250 },
        { id: 4, name: 'Smartphone', type: ItemType.Smartphone, price: 600 },
        { id: 5, name: 'Desk Phone', type: ItemType.DeskPhone, price: 100 },
        {
          id: 6,
          name: 'Wireless Headset',
          type: ItemType.WirelessHeadset,
          price: 250,
        },
      ],
    },
  ];

  private traders: Trader[] = [
    {
      id: 1,
      name: 'Trader 1',
      items: [
        {
          id: 1,
          name: 'Desktop Computer',
          type: ItemType.Desktop,
          price: 2200,
        },
        { id: 2, name: 'Extra Screen', type: ItemType.ExtraScreen, price: 250 },
        { id: 3, name: 'Desk Phone', type: ItemType.DeskPhone, price: 100 },
      ],
    },
    {
      id: 2,
      name: 'Trader 2',
      items: [
        {
          id: 1,
          name: 'Desktop Computer',
          type: ItemType.Desktop,
          price: 2200,
        },
        { id: 2, name: 'Extra Screen', type: ItemType.ExtraScreen, price: 250 },
        { id: 3, name: 'Desk Phone', type: ItemType.DeskPhone, price: 100 },
      ],
    },
  ];

  private developers: Developer[] = [
    {
      id: 1,
      name: 'Developer 1',
      budget: 3000,
      items: [
        { id: 1, name: 'Laptop', type: ItemType.Laptop, price: 1800 },
        {
          id: 2,
          name: 'Docking Station',
          type: ItemType.DockingStation,
          price: 400,
        },
        { id: 3, name: 'Extra Screen', type: ItemType.ExtraScreen, price: 250 },
        {
          id: 4,
          name: 'Wireless Headset',
          type: ItemType.WirelessHeadset,
          price: 250,
        },
      ],
    },
    {
      id: 2,
      name: 'Developer 2',
      budget: 3000,
      items: [
        { id: 1, name: 'Laptop', type: ItemType.Laptop, price: 1800 },
        {
          id: 2,
          name: 'Docking Station',
          type: ItemType.DockingStation,
          price: 400,
        },
        { id: 3, name: 'Extra Screen', type: ItemType.ExtraScreen, price: 250 },
        {
          id: 4,
          name: 'Wireless Headset',
          type: ItemType.WirelessHeadset,
          price: 250,
        },
      ],
    },
    {
      id: 3,
      name: 'Developer 3',
      budget: 3000,
      items: [
        { id: 1, name: 'Laptop', type: ItemType.Laptop, price: 1800 },
        {
          id: 2,
          name: 'Docking Station',
          type: ItemType.DockingStation,
          price: 400,
        },
        { id: 3, name: 'Extra Screen', type: ItemType.ExtraScreen, price: 250 },
        {
          id: 4,
          name: 'Wireless Headset',
          type: ItemType.WirelessHeadset,
          price: 250,
        },
      ],
    },
  ];

  constructor() {}

  // Employee methods
  public getEmployees(): Employee[] {
    return this.employees;
  }

  public getEmployeeById(id: number): Employee {
    const employee = this.employees.find((employee) => employee.id === id);
    if (employee) {
      return employee;
    } else {
      throw new Error(`Employee with id ${id} not found`);
    }
  }

  public addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  public updateEmployee(employee: Employee): void {
    const index = this.employees.findIndex((emp) => emp.id === employee.id);
    if (index !== -1) {
      this.employees[index] = employee;
    }
  }

  public deleteEmployee(id: number): void {
    const index = this.employees.findIndex((employee) => employee.id === id);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }

  public getEmployeeItemsById(id: number): Item[] {
    const employee = this.employees.find((emp) => emp.id === id);
    if (employee) {
      return employee.items;
    }
    return [];
  }

  public getEmployeeItemById(employeeId: number, itemId: number): Item {
    const employee = this.employees.find((emp) => emp.id === employeeId);
    if (employee) {
      const item = employee.items.find((item) => item.id === itemId);
      if (item) {
        return item;
      } else {
        throw new Error(
          `Item with id ${itemId} not found for employee with id ${employeeId}`
        );
      }
    } else {
      throw new Error(`Employee with id ${employeeId} not found`);
    }
  }

  public setEmployeeArrivalDate(id: number, arrivalDate: Date): void {
    const employee = this.employees.find((emp) => emp.id === id);
    if (employee) {
      employee.arrivalDate = arrivalDate;
    } else {
      throw new Error(`Employee with id ${id} not found`);
    }
  }

  // Commercial methods
  public getCommercials(): Commercial[] {
    return this.commercials;
  }

  public getCommercialById(id: number): Commercial {
    const commercial = this.commercials.find(
      (commercial) => commercial.id === id
    );
    if (commercial) {
      return commercial;
    } else {
      throw new Error(`Commercial with id ${id} not found`);
    }
  }

  public addCommercial(commercial: Commercial): void {
    this.commercials.push(commercial);
  }

  public updateCommercial(commercial: Commercial): void {
    const index = this.commercials.findIndex(
      (comm) => comm.id === commercial.id
    );
    if (index !== -1) {
      this.commercials[index] = commercial;
    }
  }

  public deleteCommercial(id: number): void {
    const index = this.commercials.findIndex(
      (commercial) => commercial.id === id
    );
    if (index !== -1) {
      this.commercials.splice(index, 1);
    }
  }

  public getCommercialItemsById(id: number): CommercialItem[] {
    const commercial = this.commercials.find((comm) => comm.id === id);
    if (commercial) {
      return commercial.items;
    }
    return [];
  }
  public getCommercialItemById(
    commercialId: number,
    itemId: number
  ): CommercialItem {
    const commercial = this.commercials.find(
      (comm) => comm.id === commercialId
    );
    if (commercial) {
      const item = commercial.items.find((item) => item.id === itemId);
      if (item) {
        return item;
      } else {
        throw new Error(
          `Item with id ${itemId} not found for commercial with id ${commercialId}`
        );
      }
    } else {
      throw new Error(`Commercial with id ${commercialId} not found`);
    }
  }

  // Trader methods
  public getTraders(): Trader[] {
    return this.traders;
  }

  public getTraderById(id: number): Trader {
    const trader = this.traders.find((trader) => trader.id === id);
    if (trader) {
      return trader;
    } else {
      throw new Error(`Trader with id ${id} not found`);
    }
  }

  public addTrader(trader: Trader): void {
    this.traders.push(trader);
  }

  public updateTrader(trader: Trader): void {
    const index = this.traders.findIndex((trad) => trad.id === trader.id);
    if (index !== -1) {
      this.traders[index] = trader;
    }
  }

  public deleteTrader(id: number): void {
    const index = this.traders.findIndex((trader) => trader.id === id);
    if (index !== -1) {
      this.traders.splice(index, 1);
    }
  }

  public getTraderItemsById(id: number): TraderItem[] {
    const trader = this.traders.find((trad) => trad.id === id);
    if (trader) {
      return trader.items;
    }
    return [];
  }

  public getTraderItemById(traderId: number, itemId: number): TraderItem {
    const trader = this.traders.find((trad) => trad.id === traderId);
    if (trader) {
      const item = trader.items.find((item) => item.id === itemId);
      if (item) {
        return item;
      } else {
        throw new Error(
          `Item with id ${itemId} not found for trader with id ${traderId}`
        );
      }
    } else {
      throw new Error(`Trader with id ${traderId} not found`);
    }
  }

  // Developer methods
  public getDevelopers(): Developer[] {
    return this.developers;
  }

  public getDeveloperById(id: number): Developer {
    const developer = this.developers.find((developer) => developer.id === id);
    if (developer) {
      return developer;
    } else {
      throw new Error(`Developer with id ${id} not found`);
    }
  }

  public addDeveloper(developer: Developer): void {
    this.developers.push(developer);
  }

  public updateDeveloper(developer: Developer): void {
    const index = this.developers.findIndex((dev) => dev.id === developer.id);
    if (index !== -1) {
      this.developers[index] = developer;
    }
  }

  public deleteDeveloper(id: number): void {
    const index = this.developers.findIndex((developer) => developer.id === id);
    if (index !== -1) {
      this.developers.splice(index, 1);
    }
  }

  public getDeveloperItemsById(id: number): DeveloperItem[] {
    const developer = this.developers.find((dev) => dev.id === id);
    if (developer) {
      return developer.items;
    }
    return [];
  }

  public getDeveloperItemById(
    developerId: number,
    itemId: number
  ): DeveloperItem {
    const developer = this.developers.find((dev) => dev.id === developerId);
    if (developer) {
      const item = developer.items.find((item) => item.id === itemId);
      if (item) {
        return item;
      } else {
        throw new Error(
          `Item with id ${itemId} not found for developer with id ${developerId}`
        );
      }
    } else {
      throw new Error(`Developer with id ${developerId} not found`);
    }
  }
}
