import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Home - My Awesome Website');
    this.metaService.updateTag({
      name: 'description',
      content: 'Welcome to the homepage of My Awesome Website. Explore our features and content.',
    });
  }
}
