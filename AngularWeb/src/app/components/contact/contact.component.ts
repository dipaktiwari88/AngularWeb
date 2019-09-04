import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private contacts;
  private selectedContact;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.contacts = this.dataService.getContacts();
  }

  selectContact(contact): void {
    this.selectedContact = contact;
  }
}
