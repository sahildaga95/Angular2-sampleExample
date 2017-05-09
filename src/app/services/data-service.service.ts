import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceService {

  constructor() { }
  public characterNames(){
   return [
     {name: 'Sachin Tendulkar', NickName:'Master Blaster'},
     {name: 'Rahul Dravid', NickName:'The Wall'},
     {name: 'MS Dhoni', NickName:'Captain Cool'}
     ];
  }
}
