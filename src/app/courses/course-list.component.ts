import { Component } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list-component.html',
})
export class CourseListComponent {
  courses: Course[] = [];
  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: "Angular Forms",
        imageUrl: "",
        price: 99.99,
        code: "XPS-9876",
        duration: 120,
        rating: 4.5,
        releaseDate: "December, 2019"
      },
      {
        id: 2,
        name: "Angular HTTP",
        imageUrl: "",
        price: 45.99,
        code: "LHS-4938",
        duration: 80,
        rating: 4.3,
        releaseDate: "February, 2020"
      },
    ];
  }
}
