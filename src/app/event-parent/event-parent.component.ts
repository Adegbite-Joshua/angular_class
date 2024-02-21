import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventChildComponent } from '../event-child/event-child.component';

@Component({
  selector: 'app-event-parent',
  standalone: true,
  imports: [EventChildComponent, FormsModule],
  templateUrl: './event-parent.component.html',
  styleUrl: './event-parent.component.css'
})
export class EventParentComponent {
  public text = '';
  public messageText = '';
  public name = 'Adegbite';
  public data = '';


  logText(value: any){
    console.log(value);
  }

  receiveResponse(data: any){
    this.data = data;
  }

  sendMessage(){
    this.messageText = this.text;
    
  }
}
