import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AjaxService } from '../../services/ajax.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AjaxService]
})
export class HomeComponent {
  public questions = [];
  public Title;
  public Quote;

  securityQuestionForm: any;
  constructor(public ajaxService: AjaxService) {

    this.renderQuote();
  }


  renderQuote() {
    this.ajaxService.renderQuote().subscribe(
      data => {
        let quote = data.json()[0];
        this.Title = quote.title;
        this.Quote = quote.content;
        console.log(this.Title, this.Quote, quote);
      },
      err => {
        console.error('Error in getting quote' + err);
      }
    );

  }
}
