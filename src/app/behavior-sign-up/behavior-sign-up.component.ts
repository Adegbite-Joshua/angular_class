import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviourSubjectService } from '../services/behaviour-subject.service';

@Component({
  selector: 'app-behavior-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './behavior-sign-up.component.html',
  styleUrl: './behavior-sign-up.component.css'
})
export class BehaviorSignUpComponent {
  constructor(public formBuilder: FormBuilder, public router: Router, private behaviorSubjectService: BehaviourSubjectService) { }

  public sign_up_form = this.formBuilder.group({
    first_name: ['', [Validators.required,]],
    last_name: ['', [Validators.required,]],
    email: ['', [Validators.required,]],
    age: ['', [Validators.required,]],
    image: ['', [Validators.required,]],
    image_base_64: ['']
  })

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.convertImageToBase64(file);
    }
  }


  convertImageToBase64(file: File) {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.sign_up_form.patchValue({
          image_base_64: reader.result as string
        });
        console.log(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  sign_up() {
    let perform_sign_up = this.behaviorSubjectService.sign_up(this.sign_up_form.value);
    if (perform_sign_up) {
      this.router.navigate(['/behaviour_subject']);
    }
    // console.log(this.sign_up_form.value);

    // console.log(perform_sign_up);

  }
}
