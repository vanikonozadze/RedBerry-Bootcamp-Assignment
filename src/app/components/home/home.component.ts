import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  categories: any[] = [];
  blogs: any[] = [];

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.getCategories();
    this.getTokenAndBlogs();
  }

  getCategories() {
    this.blogsService.getCategories().subscribe({
      next: (data) => {
        this.categories = data.data.map((category: any) => ({
          id: category.id,
          title: category.title,
          textColor: category.text_color,
          backgroundColor: category.background_color,
        }));

        console.log(this.categories);
      },
    });
  }

  getTokenAndBlogs() {
    this.blogsService.getToken().subscribe({
      next: (tokenData) => {
        this.blogsService.authToken = tokenData.token; // Set the obtained token
        console.log(tokenData);
        this.getBlogs();
      },
    });
  }

  getBlogs() {
    this.blogsService.getBlogs().subscribe({
      next: (blogsData) => {
        this.blogs = blogsData.data;
        console.log(this.blogs);
      },
    });
  }
}
