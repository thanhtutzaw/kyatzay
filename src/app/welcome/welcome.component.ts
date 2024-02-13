import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [MatButtonModule, RouterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  constructor(private dataService: DataService) {}
  items = this.dataService.techStacks;
}
