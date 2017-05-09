import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public players:any;
  constructor(public dataService:DataServiceService) {

   }

  ngOnInit() {
    this.players = this.dataService.characterNames();
  }

}
