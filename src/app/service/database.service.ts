import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/interface/user';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: AngularFirestore) { 

  }

  // add a new user to Firestore database collection
  addUser(callback ,user: User) {
    // convert object of type User to JSON object
    // because Firestore understand JSON
    const userObject = {...user};
    return this.firestore.collection('UserCollection').add(userObject);
    callback(true)
  }

    // this method returns list of User document,
  // fetched from Firestore database collection
  getUser() {
    return this.firestore.collection('UserCollection').snapshotChanges();
  }

    // this method takes an User object and
  // update an object of User to the Firestore document
  updateUser(user: User) {
    // convert object of type User to JSON object
    // because Firestore understand JSON
    const userObject = {...user};
    this.firestore.doc('UserCollection/' + user.id).update(userObject);
  }

  // this method takes an User Id and
  // delete an User document from the Firestore collection
  deleteUser(userId: string) {
    this.firestore.doc('UserCollection/' + userId).delete();
  }

}
