import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private contact: { id, name, address, contact, email } = { id: null, name: '', address: '', contact: null, email: '' }

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  public createContact(): void {
    this.dataService.createContacts(this.contact);
    this.contact = { id: null, name: '', address: '', contact: null, email: '' };

  }
}
