export class User {
    _id: string;
    fName: string;
    lName: string;
    email: string;
    password: string;
    phone: string;
    diabetesType: 'A' | 'B';
    patientCode: string;
    weight: number;
    diet: string
    otherInfo: string[];
    role: string;
}