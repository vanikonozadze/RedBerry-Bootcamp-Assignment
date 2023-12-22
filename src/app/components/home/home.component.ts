import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  categories: any[] = [];

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.getCategories();
    this.getBlogs();
  }

  getCategories() {
    this.blogsService.getCategories().subscribe({
      next: (data) => {
        this.categories = data.data
          .map((category: any) => ({
            id: category.id,
            title: category.title,
            textColor: category.text_color,
            backgroundColor: category.background_color,
          }))
          .slice(0, 6);

        console.log(this.categories);
      },
    });
  }

  getBlogs() {
    this.blogsService.getBlogs().subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
