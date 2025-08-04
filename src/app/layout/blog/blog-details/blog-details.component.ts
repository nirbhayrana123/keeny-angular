// src/app/layout/blog-details/blog-details.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; // ✅ Required for route param
import { RouterModule } from '@angular/router';
import { WpService } from '../../../services/wp.service';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ CommonModule is required for *ngIf, etc.
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'] // ✅ Fix typo: should be style**Urls**
})
export class BlogDetailsComponent {
  route = inject(ActivatedRoute);
  wp = inject(WpService);

  post: any = null;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.wp.getPost(id).subscribe((res) => {
      this.post = res;
    });
  }
}
