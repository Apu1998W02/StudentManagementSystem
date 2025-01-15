import { Component } from '@angular/core';
import {FormsModule, FormControl, FormBuilder, ReactiveFormsModule} from "@angular/forms"
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'student-details-student-search-bar',
  imports: [FormsModule, ReactiveFormsModule,CommonModule,RouterOutlet],
  templateUrl: './student-search-bar.component.html',
  styleUrl: './student-search-bar.component.scss',
})

export class StudentSearchBarComponent {
  filter: FormControl;

  constructor (private fb: FormBuilder){
    this.filter = this.fb.control("", {nonNullable: true});
  }
}
