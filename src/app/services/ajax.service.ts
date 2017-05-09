import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AjaxService {

public url:string="https://cors-everywhere.herokuapp.com/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

  constructor(private http: Http) { }

  renderQuote(): Observable<Response> {
    return this.http.get(this.url);
  }
}
