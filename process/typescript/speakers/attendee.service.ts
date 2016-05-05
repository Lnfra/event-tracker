import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AttendeeService {
  private _url = "http://localhost:3000/api/";

  constructor(private _http: Http){
  }

  getEventOrders(){
    return this._http.get(this._url + 'eventOrders')
      .map( res => res.json());
  }

}
