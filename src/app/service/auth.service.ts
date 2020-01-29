import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  
  constructor(private firebaseAuth: AngularFireAuth) { 
    this.user = firebaseAuth.authState;
  }

  signup(callback, email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        callback(true)
        console.log('Success!', value);
      })
      .catch(error => {
        callback(false)
        console.log('Something went wrong:',error.message);
      });
  }

  login(callback, objectEmail) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(objectEmail.email, objectEmail.password)
      .then(value => {
        callback(true)
        console.log('Nice, it worked!', value);
      })
      .catch(error => {
        callback(false,error)
        console.log('Something went wrong:',error.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

  //logOutFunction
	logOutFunction(callback){
    localStorage.removeItem("id");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("name");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("email");
    callback(true);
	}

}
