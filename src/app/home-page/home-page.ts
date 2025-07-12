import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [ CommonModule,RouterModule],
  standalone: true,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
