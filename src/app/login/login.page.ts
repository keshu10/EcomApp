import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { User } from '../interface/user';
import { DatabaseService } from '../service/database.service';
import { AuthService } from '../service/auth.service';
import * as firebase         from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email                  : any = "";
  public password	              : any = "";
  public conformPasswordIcon    : any = "eye";
  public conformPasswordType    : any = "password";

     // user object - type: User
     user: User = new User();

     // array of users - type: User
     users: User[];

  constructor(public navCtrl         : NavController,
              public toastCtrl       : ToastController,
              private alertCtrl      : AlertController,
              public loadingCtrl     : LoadingController,
              public databaseService : DatabaseService,
              public afAuth          : AngularFireAuth,
              public authService     : AuthService,
              private afs            : AngularFirestore) {

              }

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

  openLoginPassword(email) {
    var self = this;
  }

  userLoginWithSocial(provider) {
    var provider = provider;
    var self = this;
    if(provider === 'facebook') {
      var self = this;
      var providerF = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(providerF)
      .then(function(response) {
        // successful authentication response here
        console.log("successful authentication response here");
        localStorage.setItem('email', response.user.email);
        localStorage.setItem('name', response.user.displayName);
        //Add visitor/user details here..
        localStorage.setItem("userIs" , "Customer");
        var userCollection = firebase.firestore().collection("UserCollection").doc();
        var docid           = userCollection.id; 
        userCollection.set({
          provider      : provider,
          isAnonymous   : false,
          //uid           : response.user.uid,
          displayName   : response.user.displayName,
          dob           : '',
          email         : response.user.email,
          emailVerified : response.user.emailVerified,
          id            : docid,
          photoURL      : response.user.photoURL,
          refreshToken  : response.user.refreshToken,
          createDate    : Number(new Date()),
          updateDate    : Number(new Date())
        })
        .then(function() {
          window.history.back();
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
      })
      .catch(function(error) {
        // unsuccessful authentication response here
        //console.log(error);
        if(error.code == 'auth/account-exists-with-different-credential') {
          alert(error.message + " " + error.email);
        }
      });
    } else if(provider === 'google') {
      var providerG = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(providerG)
      .then(function(response) {
        // successful authentication response here
        console.log("successful authentication response here");
        localStorage.setItem('email', response.user.email);
        localStorage.setItem('name', response.user.displayName);
        localStorage.setItem("userIs" , "Customer");
        //Add visitor/user details here..
      var userCollection1 = firebase.firestore().collection("UserCollection").doc();
      var docid           = userCollection1.id;
      userCollection1.set({
        provider           : provider,
        isAnonymous        : false,
        //uid                : response.user.uid,
        name               : response.user.displayName,
        dob                : '',
        email              : response.user.email,
        emailVerified      : response.user.emailVerified,
        id                 : docid,
        profilePhoto       : response.user.photoURL,
        refreshToken       : response.user.refreshToken,
        timeStamp          : Number(new Date()),
        timestampUpdate    : Number(new Date())
        })
        .then(function() {
          window.history.back();
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
      })
      .catch(function(error) {
        //console.log(error);
        // unsuccessful authentication response here
        if(error.code == 'auth/account-exists-with-different-credential') {
          alert(error.message + " " + error.email);
        }
      });
    } else if(provider === 'twitter') {
      var self = this;
      var providerT = new firebase.auth.TwitterAuthProvider();
      firebase.auth().signInWithPopup(providerT)
      .then(function(response) {
        // successful authentication response here
        console.log("successful authentication response here");
        localStorage.setItem('email', response.user.email);
        localStorage.setItem('name', response.user.displayName);
        localStorage.setItem("userIs" , "Customer");
        //Add visitor/user details here..
        var userCollection2 = firebase.firestore().collection("UserCollection").doc()
        var docid           = userCollection2.id;
        userCollection2.set({
          provider           : provider,
          isAnonymous        : false,
          uid                : response.user.uid,
          name               : response.user.displayName,
          dob                : '',
          email              : response.user.email,
          emailVerified      : response.user.emailVerified,
          id                 : docid,
          profilePhoto       : response.user.photoURL,
          refreshToken       : response.user.refreshToken,
          timeStamp          : Number(new Date()),
          timestampUpdate    : Number(new Date())
        })
        .then(function() {
          window.history.back();
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
      })
      .catch(function(error) {
        // unsuccessful authentication response here
        //console.log(error);
        if(error.code == 'auth/account-exists-with-different-credential') {
          alert(error.message + " " + error.email);
        }
      });
    }
  }

  checkUserIsLoggedIn(user: User) {
    var self = this;
    //Set the boolean variable for validate the field validation
    if(self.user.email == "" || self.user.email == undefined) {
        self.showErrorToast("Enter email ");
        return;
    }
    
    if(self.password == "" || self.password  == undefined) {
        self.showErrorToast("Enter password");
        return;
    } else {
        //Get the input value and match with regex
        var enteredPassword = self.password;
        var regRex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/; 
        
        //Here we will check the enter Password with regRex
        if(enteredPassword != "") {
            if(enteredPassword.match(regRex)) {
                //
            } else {
                self.showErrorToast("Password must contain minimum 1 number, 1 alphabet and 6 character long");
                return;
            } 
        } 
    }
    //code to check email pattern
    var email          = self.user.email.trim();
    var enteredEmail   = email.toLowerCase();
    
    //used for match the entered email with Regex
    var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    //Here we will match the input email with the emailPattern
    if(enteredEmail != "" && enteredEmail != undefined) {
        if(enteredEmail.match(emailPattern)) {
        } else {
          self.showErrorToast("Enter valid email");
          return;
        }
    } else {
        self.showErrorToast("Enter email");
        return;
    }
    var objectEmail = {
        "email"    : enteredEmail,
        "password" : this.password.trim(),
    }
    //check email and phone
    self.databaseService.chekEmailExistOrNot(function(isSucess, data, userDetails){
        if(isSucess && data && data.isExist){
        //Call the singInUserInFb function for check entered user is valid or not
          self.singInUserEmail(objectEmail, userDetails);
        }else {
          self.showErrorToast("Email is not registerd.");
        }
    }, enteredEmail);
  }

  async singInUserEmail(objectEmail, userDetails) {
    var self = this;
     //Enable the loader after call the FB function
     var loading = await self.loadingCtrl.create({
      message: "Loading..."
    });
    await loading.present();

    self.authService.login(function(isSucess, error) {
      if(isSucess) {
        self.onAuthStateChanged(self, userDetails, loading);
      } 
      else {
        var errorCode     = error.code;
        //used for if user is entered wronr passwrord or user is not found the DB.
        if (errorCode === 'auth/wrong-password') {
          //show alert for if user is entered wrong password
          self.showModal('WARNING', 'Wrong password', '');
          if(loading) {
            //disable the loder
            loading.dismiss();
          }
          
        } else {
          //show alert for if user is deleted from FB
          self.showModal('WARNING', 'There is no user record corresponding to this identifier. Enter valid email and password OR Create account.', '');
          if(loading) {
            //disable the loder
            loading.dismiss();
          }
        }
      }
    }, objectEmail)
  }

  async onAuthStateChanged(self : any , userDetails , loading : any) {
    var match = false;
    this.afAuth.auth.onAuthStateChanged(function(user) {
      if(user != null && !match) {
        match = true;
        var userId      = userDetails.id;
        var data        = {};
          //Passs the data in the below give URL 
        var usersRef = firebase.firestore().collection('UserCollection').doc(userId)
        usersRef.get().then(function(doc) {
            if(doc.exists) {
              data["user"] = doc.data();
              localStorage.setItem("email",       data["user"].email);
              localStorage.setItem("phoneNumber", data["user"].phoneNumber);
              localStorage.setItem("name", data["user"].name);
              localStorage.setItem("id",          data["user"].id);
              localStorage.setItem("isLoggedIn",  "true");
              //create the object of the userDetails..
              if(loading) {
                //disable the loder
                loading.dismiss();
              }
              //redirect after login success
              self.navCtrl.navigateRoot('tabs/tab1');
            }else{
              if(loading) {
                loading.dismiss();
              }
            }
        });
      } else {
        loading.dismiss();
      }
    });
  }

  async showModal(header, message, buttons) {
    var alertM = await this.alertCtrl.create({
      header : header,
      message: message,
      buttons: ['OK']
    });
    await alertM.present();
  }

  //showErrorToast function for cmnd for error
  async showErrorToast(messages) {
    var self = this ;
    var toast = await self.toastCtrl.create({
        message         : messages,
        duration        : 2000,
        position        : 'bottom',
        cssClass        : "cmnToastColor"
    });
    await toast.present();
  }

  // showSuccessToast function for show success
  async showSuccessToast(messages) {
    var toast = await this.toastCtrl.create({
        message: messages,
        duration: 1000,
        position: 'bottom',
        cssClass: "cmnToastSuccesss"
    });
    await toast.present();
  }

  openCreateAccount() {
    this.navCtrl.navigateForward('create-account');
  }

}
