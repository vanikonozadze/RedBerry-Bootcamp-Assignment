import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/blog.model';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blog: Blog = {
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

  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.blogsService.getBlog(id).subscribe({
            next: (response) => {
              this.blog = response;
              console.log(this.blog);
            },
          });
        }
      },
    });
  }
}
