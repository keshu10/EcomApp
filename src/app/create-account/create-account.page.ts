import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { DatabaseService } from '../service/database.service'
import { AuthService } from '../service/auth.service'

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  public name                   : any = "";
	public email                  : any = "";
  public password	              : any = "";
  public mobileNumber           : any = "";
  public selectedUserCity       : any = "";
  public selectedUserState      : any = "";
  public enteredPassword        : string;
  public conformPasswordIcon    : any = "eye";
  public conformPasswordType    : any = "password";
  public countryCode                  = {code:"+91"};
  public countryCodeDuplicate   : any = [];
  fullNameError                 : any;
  emailError                    : any;
  passwordError                 : any;
  mobileNoError                 : any;
  addressError                  : any;
  stateError                    : any;
  cityError                     : any;

  constructor(public navCtrl       : NavController,
              private toastCtrl   : ToastController,
              public databaseService : DatabaseService,
              public authService :AuthService) { 
  }

  ngOnInit() {
  }

  //checkInputValue
	checkInputValue(inputValue)  {
		var self = this;
		switch(inputValue) {
			case 'name':
			    self.fullNameError = "";
			    break;
			case 'email':
			    self.emailError = "";
			    break;
			case 'mobileNumber':
				self.mobileNoError = "";
				break;
			case 'password':
			    self.passwordError = "";
			    break;
		}
	}

  async createAccountConfromation(event) {
    var self = this;
    var currentTarget =  event.currentTarget;
    
    //Set the boolean variable for validate the field validation
    if(self.name == "" || self.name == undefined) {
      self.showErrorToast("Please enter full name");
      self.fullNameError = "Please enter full name";
      return;
    }
    if(self.email == "" || self.email == undefined) {
      self.showErrorToast("Please enter email");
      self.emailError  = "Please enter email";
      return;
    } else {
      //used for check email pattern
      var email         = self.email.trim();
      var enteredEmail  = email.toLowerCase();
      
      //var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
      var emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      //Here we will match the input email with the emailPattern
      if(enteredEmail != "" && enteredEmail != undefined) {
        if(enteredEmail.match(emailPattern)) {
        } else {
          //show the toast and return the msg
          self.showErrorToast("Please enter valid email");
          self.emailError  = "Please enter valid email";
          return;
        }
      } else {
        //show the toast and return the msg
        self.showErrorToast("Please enter email");
        self.emailError  = "Please enter email";
        return;
      }
      //Set the boolean variable for validate the field validation
      if(self.mobileNumber == "" || self.mobileNumber == undefined) {
        self.showErrorToast("Please enter mobile number");
        self.mobileNoError  = "Please enter mobile number";
        return;
      } else {
        var enteredNumber = self.mobileNumber;
        var phoneno       = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(enteredNumber[0] == 0) {
          self.showErrorToast("Number is not start with zero");
          self.mobileNoError  = "Number is not start with zero";
          return;
        
        } else if(enteredNumber.match(phoneno)) {
          var countryCode =  self.countryCode;
          
          if(self.password == "" || self.password == undefined) {
            self.showErrorToast("Please enter password");
            self.passwordError = "Please enter password";
            return;
          } else {
            //Get the input value and match with regex
            self.enteredPassword = self.password;
            var regRex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/; 
            
            //Here we will check the enter pwd with regRex
            if(self.enteredPassword != "") {
              if(self.enteredPassword.match(regRex)) {
                //Get the input value and match with regex
                var regRex          = /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/; 
              } else {
                  self.passwordError = "Password must be contain minimum 1 number and 1 alphabet and 6 character long";
                self.showErrorToast("Password must be contain minimum 1 number and 1 alphabet and 6 character long");
                return;
              } 
            } else {
                  self.passwordError = "Please enter password";
              //show the error toast
              self.showErrorToast("Please enter password");
              return;
            }
          }	
        } else {
          self.showErrorToast("Enter valid number");
          self.mobileNoError  = "Enter valid number";
          return;
        }
        if(self.selectedUserState == "" || self.selectedUserState == undefined) {
          self.showErrorToast("Please select state");
          self.stateError = "Please select state";
          return;
        }
        if(self.selectedUserCity == "" || self.selectedUserCity == undefined) {
          self.showErrorToast("Please select city");
          self.cityError = "Please select city";
          return;
        }
        self.authService.signup(function(isSuccess){
          if(isSuccess) {

          }
        }, email, self.password)

      }
      
    }
  }
  //showErrorToast function for error
  async showErrorToast(messages) {
		var self = this ;
		var toast = await self.toastCtrl.create({
			message         : messages,
			duration        : 2000,
			position        : 'top',
			cssClass        : "cmnToastColor"
		});
		toast.present();
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

  loginSignUp() {
    this.navCtrl.navigateForward('login');
  }

}
