import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
   
  public first_name:string = '';
  public last_name:string = '';
  public email:string = '';
  public password:string = '';
  public address:string = '';
  public age:string = '';

  createAccount () {
    let sign_up_details = {
      first_name : this.first_name,
      last_name : this.last_name,
      email : this.email,
      password : this.password,
      address : this.address,
      age : this.age,
    }
    

  }
}
