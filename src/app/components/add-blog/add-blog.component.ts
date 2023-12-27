import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog.model';
import { Category } from 'src/app/models/categorie.model';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent implements OnInit {
  categories: Category[] = [];
  addBlogData: Blog = {
    id: '',
    author: '',
    title: '',
    description: '',
    image: '',
    publish_date: '',
    categories: [],
    email: '',
    data: undefined,
  };

  constructor(private blogsService: BlogsService, private router: Router) {}

  ngOnInit(): void {
    this.getCategories();
  }

  addBlog() {
    this.blogsService.addBlog(this.addBlogData).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
    console.log(this.addBlogData);
  }

  getCategories() {
    this.blogsService.getCategories().subscribe({
      next: (data) => {
        this.categories = data.data
          .map((category: Category) => ({
            id: category.id,
            title: category.title,
            text_color: category.text_color,
            background_color: category.background_color,
          }))
          .slice(0, 6);
        console.log(this.categories);
      },
    });
  }
}
