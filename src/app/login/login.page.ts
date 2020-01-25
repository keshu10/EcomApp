import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public conformPasswordIcon    : any = "eye";
  public conformPasswordType    : any = "password";

  constructor(public navCtrl         : NavController) { }

  ngOnInit() {
  }

  showAndHidePassword(event){
    //this.createAccountForm.value.newPassword
    var password = document.getElementById("password");
    var eventInput = event.currentTarget.parentElement.getElementsByTagName("input")
    if(eventInput[0].type == "password"){
        eventInput[0].type = "text";
        password.getElementsByTagName("input")[0].type   = "text";
        this.conformPasswordType = "text";
        this.conformPasswordIcon = "eye-off";
    } else {
        eventInput[0].type  = "password";
        password.getElementsByTagName("input")[0].type    = "password";
        this.conformPasswordType = "password";
        this.conformPasswordIcon = "eye";
    }
}

openCreateAccount() {
  this.navCtrl.navigateForward('create-account');
}

}
