import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviourSubjectService } from '../services/behaviour-subject.service';
import { BehaviourChild1Component } from '../behaviour-child1/behaviour-child1.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-behaviour-child2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './behaviour-child2.component.html',
  styleUrl: './behaviour-child2.component.css',
  providers: [BehaviourChild1Component]
})
export class BehaviourChild2Component {
  constructor (public behaviorSubject:BehaviourSubjectService, public BehaviourChild1Component: BehaviourChild1Component, public form_builder:FormBuilder) {}

  public user_details: {
    first_name?: string|undefined,
    last_name?: string|undefined,
    age?: number|undefined,
    email?: string|undefined,
    
  } = {};

  public index:number = 0;

  public update_form = this.form_builder.group({
    first_name: [this.user_details.first_name, [Validators.required, Validators.minLength(1), Validators.maxLength(150)]],//['default value']
    last_name: [this.user_details.last_name, [Validators.required, Validators.minLength(1), Validators.maxLength(150)]],//['default value']
    email: [this.user_details.email, [Validators.required, Validators.email]],//['default value']
    age: [this.user_details.age, [Validators.required]],//['default value']
  })
  
  ngOnInit () {
    this.behaviorSubject.behaviour.subscribe(value=>{
      this.user_details = value;
      this.update_form.patchValue({
        last_name: value.last_name,
        first_name: value.first_name,
        age: value.age,
        email: value.email,
      })
      this.index = value.index;
    })   
    
    Object.keys(this.update_form.controls).forEach((key)=>{
      this.update_form.get(key)?.valueChanges.subscribe(value=>{
        this.change_value();
      })
    }) 
  }
  
  public current_user_details_array:Array<object> = [];
  change_value() {    
    if (!this.update_form.errors) {
      this.current_user_details_array = this.behaviorSubject.user_details_array.value;
      this.current_user_details_array[this.index] = this.update_form.value
      this.behaviorSubject.user_details_array.next(this.current_user_details_array);
    }
    
  }

  save_editted_details() {
    if (!this.update_form.errors) {
      this.change_value();
      this.behaviorSubject.user_details_array.next(this.current_user_details_array);
      localStorage.setItem('behavior_users', JSON.stringify(this.current_user_details_array))
    }
  }

  delete_user() {
    if (!this.update_form.errors) {
      this.change_value();
      this.current_user_details_array = this.current_user_details_array.filter((user, index)=> index != this.index);
      
      this.behaviorSubject.user_details_array.next(this.current_user_details_array);
      localStorage.setItem('behavior_users', JSON.stringify(this.current_user_details_array))
    }
  }

}
