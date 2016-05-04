import {Component, OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';

import {UserService} from './user.service';
import {SpinnerComponent} from '../shared/spinner.component';

@Component({
  templateUrl: 'templates/users.component.html',
  providers: [UserService],
  directives: [RouterLink, SpinnerComponent]
})

export class UsersComponent implements OnInit {
  users: any[];
  isLoading=true;

  constructor(private _service: UserService){
  }

  ngOnInit(){
    this._service.getUsers()
      .subscribe(
        users => this.users = users,
        null,
        ()=> this.isLoading = false);
  }

  deleteUser(user){
    if(confirm('Are you sure you want to delete' + user.name + '?')){
      var index = this.users.indexOf(user);

      //remove one object with the position of index
      this.users.splice(index, 1);
      this._service.deleteUser(user.id)
        .subscribe( null,
                    err => {
                      alert("Could not delete the user.");
                      // Revert the view back to its original state
                      // by putting the user object at the index it used to be.
                      this.users.splice(index, 0, user);
                    });

    }
  }
}
