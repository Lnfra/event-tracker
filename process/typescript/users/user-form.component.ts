import {Component, OnInit} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {CanDeactivate, Router, RouteParams} from 'angular2/router';
import {UserService} from './user.service'

import {BasicValidators} from '../shared/basicValidators';
import {User} from './user'

@Component({
  templateUrl: 'templates/user-form.component.html',
  providers: [UserService]
})
export class UserFormComponent implements OnInit, CanDeactivate {
  form: ControlGroup;
  title: string;
  user = new User();

  constructor(
    fb: FormBuilder,
    private _router: Router,
    private _routeParams: RouteParams,
    private _userService: UserService
  ) {
    this.form = fb.group({
        name: ['', Validators.required],
        email: ['', BasicValidators.email],
        phone: [],
        address: fb.group({
          street: [],
          suite: [],
          city: [],
          zipcode: []
        })
    });
  } // end of constructor

  //When creating a new user
  save(){
    var result;
    if(this.user.id){
      result = this._userService.updateUser(this.user)
    } else {
      result = this._userService.addUser(this.user)
    }

    result.subscribe(x => {
      //When user clicks post to API and redirect to another page
      this._router.navigate(['Users']);
    })
  }

  //Just after constructor runs, ngOnInit is run
  ngOnInit(){
    var id  = this._routeParams.get('id');
    this.title = id ? 'Edit User' : 'Add User';
    if(!id){
      return;
    } else {
      this._userService.getUser(id)
        .subscribe(
          user => this.user = user,
          response => {
            if(response.status == 404){
              this._router.navigate(['NotFound']);
            }
          });
    }
  }

  //Trigger the alert box if user tries to naviagte away with unsaved changes.
  routerCanDeactivate(){
    if(this.form.dirty){
      return confirm('You have unsaved changes. Are you sure you want to naviagte away?');
    } else {
      return true;
    }
  }
}
