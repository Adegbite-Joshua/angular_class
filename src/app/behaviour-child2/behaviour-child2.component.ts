import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviourSubjectService } from '../services/behaviour-subject.service';

@Component({
  selector: 'app-behaviour-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './behaviour-child2.component.html',
  styleUrl: './behaviour-child2.component.css'
})
export class BehaviourChild2Component {
  constructor (public behavior:BehaviourSubjectService) {}

  public user_details: {
    first_name?: string|undefined,
    last_name?: string|undefined,
    age?: number|undefined,
    email?: string|undefined,
    
  } = {};

  ngOnInit () {
    this.behavior.behaviour.subscribe(value=>{
      this.user_details = value;
    })    
  }

}
