import { BankAccountInterface } from "./bank-account-interface.js";
import { ResponseError } from "./error-response.js";

export class BankAccount extends BankAccountInterface {
	constructor(name, balance = 0) {
		super(name, balance);
		this.isOperationInProgress = false;
		this.amount = 0;
	}

	profile(user) {
		this.name = user;
		return this.name;
	}

	withdraw(amount) {
		console.log("Withdraw amount:", amount);
		this.isOperationInProgress = true;
		this.amount = amount;

		if (typeof amount !== "number" || isNaN(amount) || amount > this.balance) {
			throw new ResponseError("Invalid deposit amount");
		}

		try {
			this.balance -= amount;
			return this.balance;
		} finally {
			this.isOperationInProgress = false;
		}
	}

	deposit(amount) {
		console.log("Deposit amount:", amount);
		this.isOperationInProgress = true;
		this.amount = amount;

		if (typeof amount !== "number" || isNaN(amount) || amount <= 0) {
			throw new ResponseError("Invalid deposit amount");
		}

		try {
			this.balance += amount;
			return this.balance;
		} finally {
			this.isOperationInProgress = false;
		}
	}

	check() {
		return {
			name: this.name,
			balance: this.balance,
		};
	}
}
