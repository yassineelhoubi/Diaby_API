export class UserDiary {
    _id: string;
    userId: string;
    type: "insulin" | "pill" | "sugarLevel";
    value: number;
    notes: string;
}
