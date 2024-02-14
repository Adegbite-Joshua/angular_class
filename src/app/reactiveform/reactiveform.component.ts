import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  // form1: FormGroup;
  // form2: FormGroup;
  constructor(public form_builder:FormBuilder){}

  public sign_up_form = this.form_builder.group({
    first_name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],//['default value']
    last_name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],//['default value']
    email: ['', [Validators.required, Validators.email]],//['default value']
    password: ['', [Validators.required, Validators.minLength(5)]],//['default value']
    age: ['', [Validators.required]],//['default value']
  })


  ngOnInit(){
    //Getting access to the values
    console.log(this.sign_up_form.value);
    console.log(this.sign_up_form.value['email']);

    console.log(this.sign_up_form.controls.first_name.errors);

    //Resetting the form

    // this.sign_up_form.controls['email'].setValue('');
  }

  logValues(){
    console.log(this.sign_up_form.controls.last_name);
    
  }

}
