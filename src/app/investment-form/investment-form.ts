import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, RouterModule } from '@angular/router';

export interface InvestmentForm {
	assetType: string,
	quantity: number,
	purchasePrice: number,
	date: string
}

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
		private router: Router
	) {
		this.investmentForm = this.fb.group({
			assetType: ['', [Validators.required]],
			quantity: ['', Validators.required],
			purchasePrice: ['', Validators.required],
			date: ['', Validators.required]
		});

		this.investmentForm.valueChanges.subscribe((data) => {
			console.log(data);
			console.log(this.investmentForm);

		})
	}

	saveInvestmentDetails() {
		console.log(this.investmentForm.value);
		this.router?.navigate(['/investment-details']);
	}
}
