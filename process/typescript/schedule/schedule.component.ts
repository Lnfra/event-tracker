import {Component, OnInit} from 'angular2/core';
import {SponsorsComponent} from './sponsors.component';
import {ScheduleHeaderComponent} from './schedule-header.component';

@Component({
  templateUrl: 'templates/schedule.component.html',
  // directives: [SponsorComponent]
})

export class ScheduleComponent {
  currentTab: string = 'day1';
  
  selectDay(day){
    this.currentTab = day;
  }
}
