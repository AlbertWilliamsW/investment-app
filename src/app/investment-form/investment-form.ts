import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
	selector: 'app-investment-form',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, RouterModule],
	templateUrl: './investment-form.html',
	styleUrl: './investment-form.css'
})
export class InvestmentForm {
	investmentForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private route: ActivatedRoute 
	) {
		this.investmentForm = this.fb.group({
			assetType: ['', [Validators.required]],
			quantity: ['', Validators.required],
			purchasePrice: ['', Validators.required],
			date: ['', Validators.required]
		});
	}

	saveInvestmentDetails() {
		console.log(this.investmentForm.value);
		this.router?.navigate(['/investment-details']);
	}
}
