import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-event-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './event-child.component.html',
  styleUrl: './event-child.component.css'
})
export class EventChildComponent {
  @Input() public logText: any 
  @Input() public text: any 

  @Output() public eventemit = new EventEmitter

  public response = ''

  check(){
    this.logText({name: 'jsjhshs'});
  }

  send() {
    this.eventemit.emit(this.response);
  }
}
