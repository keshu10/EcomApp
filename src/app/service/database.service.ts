import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/interface/user';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

   // user object - type: User
   user: User = new User();

   // array of user - type: User
   users: User[];

  constructor(private afs: AngularFirestore) { 

  }

  // add a new user to Firestore database collection
  addUser(callback ,user: User) {
    // convert object of type User to JSON object
    user["timeStamp"] = firebase.firestore.FieldValue.serverTimestamp();
    user['timestampUpdate'] = firebase.firestore.FieldValue.serverTimestamp();
    let docRefId = this.afs.collection("UserCollection").ref.doc().id;
    user["id"] = docRefId;
    const userObject = {...user};
      this.afs.collection('UserCollection').doc(docRefId).set(userObject).then(function(){
      callback(true);
    })
  }

    //check email is exist or not in firestore
  chekEmailExistOrNot(callback ,userEmail) {
    // Chain equality for multiple properties
    var userDetails = {};
    const scoresRef = this.afs.collection('UserCollection').ref.where("email", "==", userEmail);
    var data = {
			isExist : false
		};
    scoresRef.get().then(function(querySnapshot) {
      if(!querySnapshot.empty) {
        data['isExist'] = true;
        querySnapshot.forEach(function(doc) {
          userDetails = doc.data();
          callback(true, data, userDetails);
        })
      } else {
        callback(true, data);
      }	
    });
  }

    //get user details from firestore
  getUser(callback) {
    var user = {};
    const scoresRef = this.afs.collection('UserCollection').ref.where("email", "==", localStorage.email)
    .get().then(function(querySnapshot) {
      if(!querySnapshot.empty) {
        querySnapshot.forEach(function(doc) {
          user = doc.data();
          callback(user);
        })
      } else {
        console.log("user not found")
      }	
    });
  }

    // this method takes an User object and
  // update an object of User to the Firestore document
  updateUser(user: User) {
    // convert object of type User to JSON object
    // because Firestore understand JSON
    const userObject = {...user};
    this.afs.doc('UserCollection/' + user.id).update(userObject);
  }

}
