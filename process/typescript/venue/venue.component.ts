import {Component, OnInit} from 'angular2/core';
import {VenueService} from './venue.service'
import {SpinnerComponent} from '../shared/spinner.component'

@Component({
  templateUrl: 'templates/venue.component.html',
  providers: [VenueService],
  directives: [SpinnerComponent]
})

export class VenueComponent implements OnInit {
  event: any;
  venue: any;
  isLoading=true;

  constructor(private _service: VenueService){
  }

  ngOnInit(){

     this._service.getEventInfo()
      .subscribe(
        event => this.event = event,
        null,
        ()=> this.isLoading = false)

      this._service.getEventVenue()
        .subscribe(
          venue => this.venue = venue,
          null,
          ()=> this.isLoading = false)


  }
}
