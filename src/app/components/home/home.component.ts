import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { Category } from 'src/app/models/categorie.model';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];
  blogs: Blog[] = [];

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.getCategories();
    this.getBlogs();
  }

  getCategories() {
    this.blogsService.getCategories().subscribe({
      next: (data) => {
        this.categories = data.data.map((category: Category) => ({
          id: category.id,
          title: category.title,
          text_color: category.text_color,
          background_color: category.background_color,
        }));
        console.log(this.categories);
      },
    });
  }

  getBlogs() {
    this.blogsService.getBlogs().subscribe({
      next: (data: Blog) => {
        this.blogs = data.data.map((blog: Blog) => ({
          id: blog.id,
          title: blog.title,
          description: blog.description,
          image: blog.image,
          publish_date: blog.publish_date,
          author: blog.author,
          categories: blog.categories.map((category: Category) => ({
            id: category.id,
            title: category.title,
            text_color: category.text_color,
            background_color: category.background_color,
          })),
        }));
        console.log(this.blogs);
      },
    });
  }
}
