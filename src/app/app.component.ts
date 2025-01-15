import { Component } from '@angular/core';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentSearchBarComponent } from './student-search-bar/student-search-bar.component';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'student-details-root',
  standalone: true,
  imports: [StudentTableComponent, StudentSearchBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
  title = 'student-management';
}
