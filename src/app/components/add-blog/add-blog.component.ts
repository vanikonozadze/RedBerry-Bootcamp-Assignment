import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
    image: '', // Change the type to string for a base64 representation
    publish_date: '',
    categories: [],
    email: '',
    data: undefined,
  };

  constructor(
    private blogsService: BlogsService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.handleFile(file);
  }

  handleFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.addBlogData.image = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  addBlog() {
    this.blogsService.addBlog(this.addBlogData).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.error(err);
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
