import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviourSubjectService } from '../services/behaviour-subject.service';

@Component({
  selector: 'app-behaviour-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './behaviour-child1.component.html',
  styleUrl: './behaviour-child1.component.css'
})
export class BehaviourChild1Component {
  constructor (public behavior: BehaviourSubjectService) {}

  public user_details_array = [
    {
      first_name: 'Joshua',
      last_name: 'Adeoye',
      age: 19,
      email: 'adegbitejoshua07@gmail.com'
    },
    {
      first_name: 'Joshua1',
      last_name: 'Adeoye1',
      age: 19,
      email: 'adegbitejoshua07@gmail.com1'
    },
    {
      first_name: 'Joshua2',
      last_name: 'Adeoye2',
      age: 19,
      email: 'adegbitejoshua07@gmail.com2'
    },
    {
      first_name: 'Joshua3',
      last_name: 'Adeoye3',
      age: 19,
      email: 'adegbitejoshua07@gmail.com3'
    },
    {
      first_name: 'Joshua4',
      last_name: 'Adeoye4',
      age: 19,
      email: 'adegbitejoshua07@gmail.com4'
    }
  ]

  public update_user_details (user_details: any) {
    console.log(user_details);
    
    this.behavior.behaviour.next(user_details);
  }
}
