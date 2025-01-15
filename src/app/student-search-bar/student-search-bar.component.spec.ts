import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSearchBarComponent } from './student-search-bar.component';

describe('StudentSearchBarComponent', () => {
  let component: StudentSearchBarComponent;
  let fixture: ComponentFixture<StudentSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentSearchBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
