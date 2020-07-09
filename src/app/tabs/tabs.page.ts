import { Component } from '@angular/core';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  
  userDetails  : any;
  localStorage : any;

  constructor(public databaseService : DatabaseService) {
    this.localStorage = localStorage;
    if(localStorage.email) {
      this.getUserProfile();
    }
  }

  getUserProfile() {
    var self = this;
    self.databaseService.getUser(function(user){
      if(user) {
        self.userDetails = user;
        //console.log("user Details : " ,self.userDetails);
      }
    })
  }

}
