// src/app/posts/posts.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WpService } from '../../services/wp.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{
  posts: any[] = [];

  constructor(private wp: WpService) {}

  ngOnInit() {
    this.wp.getPosts().subscribe((data: any) => {
      this.posts = data; 
    });
   
  }
}
