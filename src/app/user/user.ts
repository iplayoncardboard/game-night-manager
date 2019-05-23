import {Location} from '../shared/models/location';
import { SpawnSyncOptionsWithBufferEncoding } from 'child_process';
export interface User {
    id: string;
    firstName: string;
    lastName: string
    location: Location;
    email: string;
    bggUserId: string;
    
}


