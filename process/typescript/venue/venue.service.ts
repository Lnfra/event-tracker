import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VenueService {
  private _url = "https://fathomless-garden-38356.herokuapp.com/api/";

  constructor(private _http: Http){
  }

  getEventInfo(){
    return this._http.get(this._url + 'eventInfo')
      .map( res => res.json());
  }

  getEventVenue(){
    return this._http.get(this._url + 'eventVenue')
      .map( res => res.json());
  }

}
