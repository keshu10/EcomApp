import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/interface/user';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

   // user object - type: User
   user: User = new User();

   // array of user - type: User
   users: User[];
   //addressListDisplay : Observable<any>;
   
  constructor(private afs: AngularFirestore) { 

  }

  // You need to return the doc to get the current cursor.
  getCollection(ref, queryFn?): Observable<any[]> {
    return this.afs.collection(ref, queryFn).snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        const doc = a.payload.doc;
        return { id, ...data, doc };
      });
    })
    )
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

  //get Address details from firestore
  // getAddress = (callback) => {
  //   var self = this;
  //   const scoresRef = this.afs.collection('UserCollection').doc(localStorage.id).collection('OrderAddress');
  //   this.addressListDisplay = scoresRef.valueChanges();
  //   callback(self.addressListDisplay);
  // }

    // this method takes an User object and
  // update an object of User to the Firestore document
  updateUser(user: User) {
    // convert object of type User to JSON object
    // because Firestore understand JSON
    const userObject = {...user};
    this.afs.doc('UserCollection/' + user.id).update(userObject);
  }

}
