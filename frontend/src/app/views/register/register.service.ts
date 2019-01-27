import { Register } from './register.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class RegisterService{

    private registers: Register[] = [];
    
    getRegisters(){
        return [...this.registers];
    }

    addRegister(username: string, email: string, password: string)
    {        
        const register: Register = {
            uname: username,
            email: email,
            pwd: password
        };

        this.registers.push(register);
    }
}