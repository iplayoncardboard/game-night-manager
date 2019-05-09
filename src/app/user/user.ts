
export interface User {
    id: string;
    firstName: string;
    lastName: string
    location: Location;
    email: string;
    
}


export interface Location {
    houseNumber: string;
    street: string;
    city: string;
    state: string;
    zip: string
}