import {Component, Input} from 'angular2/core';

//Component to show the font awesome spinner
//Visible is set to true by default;
@Component({
  selector: 'spinner',
  template: `<i *ngIf="visible" class="fa fa-spinner fa-spin fa-3x"></i>`
})
export class SpinnerComponent {
  @Input() visible = true;
}
