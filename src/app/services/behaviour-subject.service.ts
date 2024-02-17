import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourSubjectService {

  constructor() { }
  public behaviour = new BehaviorSubject<any>({})
  public user_details_array = new BehaviorSubject<Array<Object>>(this.get_user_details())

  get_user_details(){
    if (localStorage['behavior_users']) {
      return JSON.parse(localStorage['behavior_users']);
    } else{
      return [];
    }
  }

  sign_up(user: any){
    try {
      if (localStorage['behavior_users']) {
        let all_new_users = [...JSON.parse(localStorage['behavior_users']), user]
        localStorage.setItem('behavior_users', JSON.stringify(all_new_users))
        return true;
      } else{
        localStorage.setItem('behavior_users', JSON.stringify([user]))
        return true;
      }
    } catch (error) {
      console.log(error);
      
      return false;
    }
  }

  
}
