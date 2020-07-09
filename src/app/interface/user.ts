export class User {
    id: string;
    name: string;
    email:string;
    isAdmin  : false; // By default user will not be Admin
    isDeleted : false
    countryCode : number;
    mobileNumber: any;
    address: string;
    selectedUserState:string;
    selectedUserCity:string;
}
