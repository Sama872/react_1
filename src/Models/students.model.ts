export type Grade = 'A+' | 'A' | 'B+' | 'B' | 'C+' | 'C' | 'D+' | 'D' | 'F';
export interface ICourse{
    name:string,
    grade:Grade
}
export interface IUser{
    id:number,
    name:string,
    age:number,
    dept:string,
    courses:ICourse[]
}