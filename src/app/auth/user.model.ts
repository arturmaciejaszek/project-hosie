export interface User {
    uid: string;
    email: string;
    access: string;
    name: string;
    photoURL?: string;
}

export interface Client extends User {
    cName: string;
    nip: number;
    postal: string;
    address: string;
    city: string;
    country: string;
}
