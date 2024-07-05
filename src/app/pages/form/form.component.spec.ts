import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../services/form.service';
import { Question, Response } from '../../models/question.models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  questionForm: FormGroup;
  response: string | undefined;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.questionForm = this.fb.group({
      question: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.questionForm.valid) {
      const question: Question = this.questionForm.value;
      this.formService.sendQuestion(question).subscribe(
        (data: Response) => this.response = data.response,
        error => console.error(error)
      );
    }
  }
}
