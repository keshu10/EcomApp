export class User {
    id: string;
    name: string;
    email:string;
    isAdmin  : false; // By default user will not be Admin
    isDeleted : false
    countryCode : number;
    mobileNumber: number;
    address: string;
    state:string;
    city:string;
}
