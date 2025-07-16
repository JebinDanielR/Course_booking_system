export interface Student {
    id:number;
    name:string;
    email:string;
    enrolledCourseIds:number[];
    registrationDate?:string;
    phoneNumber?:number;
}
