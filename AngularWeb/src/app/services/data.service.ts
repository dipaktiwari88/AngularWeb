import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private contacts = [
    { id: 1, name: 'Dipak', address: 'Oslo', contact: 897576670, email: 'dipak@hotmail.com' },
    { id: 2, name: 'Suraj', address: 'Nagpur', contact: 897576671, email: 'suraj@hotmail.com' },
    { id: 3, name: 'Suman', address: 'Amethi', contact: 897576672, email: 'suman@hotmail.com' },
    { id: 4, name: 'Rekha', address: 'Amethi', contact: 897576673, email: 'rekha@hotmail.com' },
  ];

  constructor() { }

  public getContacts(): Array<{ id, name, address, contact, email }> {
    return this.contacts;
  }

  public createContacts(contact: { id, name, address, contact, email }): void {
    this.contacts.push(contact);
  }
}
