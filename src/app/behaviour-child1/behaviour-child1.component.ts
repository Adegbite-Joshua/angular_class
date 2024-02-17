import { CommonModule } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BehaviourSubjectService } from '../services/behaviour-subject.service';

@Component({
  selector: 'app-behaviour-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './behaviour-child1.component.html',
  styleUrl: './behaviour-child1.component.css'
})


export class BehaviourChild1Component {
  constructor (public behaviorSubject: BehaviourSubjectService, private zone: NgZone) {}

  public user_details_array:any = [];

  ngOnInit() {
    this.behaviorSubject.user_details_array.subscribe((res)=>{
      this.user_details_array = res;
    })
  }


  public update_user_details (user_details: any, index: number) {
    this.behaviorSubject.behaviour.next({...user_details, index});
  }

  public user_details_array_cache:any = [];

  public change_details(index: number, details: any): void {
    // this.user_details_array[index] = details;
    console.log(this.user_details_array);
  }

}
