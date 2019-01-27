import { Component } from '@angular/core';
import {ModalModule} from 'angular-custom-modal';
import {FormsModule, NgForm} from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',

})
export class RegisterComponent {
  
  myvalue = '';

  constructor(public registerService: RegisterService ) { }

  onClickSave(form: NgForm){
    if(form.invalid 
      || form.value.repeatPassword != form.value.password)
    {
      this.myvalue = 'Password and Repeat-Password do not match';
      return;      
    }
    
    this.myvalue = form.value.username;
    this.registerService.addRegister(form.value.username, form.value.email, form.value.password);
  }
}
