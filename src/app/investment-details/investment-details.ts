import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-investment-details',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './investment-details.html',
  styleUrl: './investment-details.css'
})
export class InvestmentDetails {

}
