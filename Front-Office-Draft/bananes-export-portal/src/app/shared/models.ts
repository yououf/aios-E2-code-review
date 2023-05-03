export interface Employee {
  id: number;
  name: string;
  role: string;
  budget: number;
  items: Item[];
  arrivalDate: Date;
}

export interface Item {
  id: number;
  type: ItemType;
  price: number;
}

export interface Commercial {
  id: number;
  name: string;
  budget: number;
  items: CommercialItem[];
}

export interface CommercialItem {
  id: number;
  name: string;
  type: ItemType;
  price: number;
}

export interface Trader {
  id: number;
  name: string;
  items: TraderItem[];
}

export interface TraderItem {
  id: number;
  name: string;
  type: ItemType;
  price: number;
}

export interface Developer {
  id: number;
  name: string;
  budget: number;
  items: DeveloperItem[];
}

export interface DeveloperItem {
  id: number;
  name: string;
  type: ItemType;
  price: number;
}

export enum ItemType {
  Laptop = 'ordinateur portable',
  Desktop = 'ordinateur fixe+écran',
  DockingStation = 'station d’accueil d’ordinateur portable',
  ExtraScreen = 'écran supplémentaire avec socle de fixation',
  Smartphone = 'smartphone',
  DeskPhone = 'téléphone fixe',
  WirelessHeadset = 'micro-casque sans fil',
}
