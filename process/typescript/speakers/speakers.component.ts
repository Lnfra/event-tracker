import {Component, OnInit} from 'angular2/core';
import {AttendeeService} from './attendee.service'
import {SpinnerComponent} from '../shared/spinner.component'

@Component({
  templateUrl: 'templates/speakers.component.html',
  providers: [AttendeeService],
  directives: [SpinnerComponent]
})

export class SpeakersComponent implements OnInit {
  attendees: any;
  isLoading=true;

  constructor(private _service: AttendeeService){
  }

  ngOnInit(){
     this._service.getEventOrders()
      .subscribe(
        attendees => this.attendees = attendees,
        null,
        ()=> this.isLoading = false)
  }
}
