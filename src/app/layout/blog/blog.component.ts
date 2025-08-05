// src/app/posts/posts.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WpService } from '../../services/wp.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog', 
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']  // ✅ Fixed typo here
})
export class BlogComponent implements OnInit {
  posts: any[] = [];

  constructor(private wp: WpService) {}

  ngOnInit() {
    this.wp.getPosts().subscribe((data: any) => {
      this.posts = data;
    });
  }
}

