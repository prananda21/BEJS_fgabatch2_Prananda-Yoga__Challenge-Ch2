import { BankAccount } from "./bank_account.js";

let user = new BankAccount();

class BankSystem {
	static createUser() {
		let username;
		while (true) {
			username = prompt(`Input your name`);
			if (username === undefined || username === "") {
				alert("Invalid username");
				return;
			} else if (username === null) {
				// prompt canceled
				return;
			} else {
				break;
			}
		}

		try {
			user.profile(username);
			alert(`Hello ${user.name}`);
		} catch (error) {
			alert(error.message);
		}
	}

	static async withdrawBalance() {
		let amount;

		while (true) {
			amount = prompt("Withdraw Section\nInput amount");
			if (amount === null) {
				return;
			}

			amount = Number(amount);

			if (!isNaN(amount) && amount > 0) {
				break;
			} else {
				alert("Invalid amount, please enter a valid amount");
			}
		}

		try {
			const balance = await new Promise((resolve) => {
				setTimeout(() => {
					resolve(user.withdraw(amount));
				}, 3000);
			});

			alert(`Current balance: ${balance}`);
		} catch (error) {
			alert(error.message);
		}
	}

	static async depositBalance() {
		let amount;

		while (true) {
			amount = prompt("Deposit Section\nInput amount");
			if (amount === null) {
				return;
			}

			amount = Number(amount);

			if (!isNaN(amount) && amount > 0) {
				break;
			} else {
				alert("Invalid amount, please enter a valid amount");
			}
		}

		try {
			const balance = await new Promise((resolve) => {
				setTimeout(() => {
					resolve(user.deposit(amount));
				}, 3000);
			});

			alert(`Current balance: ${balance}`);
		} catch (error) {
			alert(error.message);
		}
	}

	static async getInfo() {
		try {
			const checkUser = await new Promise((resolve) => {
				setTimeout(() => {
					resolve(user.check());
				}, 1000);
			});

			alert(`Name: ${checkUser.name}\nBalance: ${checkUser.balance}`);
		} catch (error) {
			alert(error.message);
		}
	}

	static cancelProcess() {
		try {
			user.cancel();
			return;
		} catch (error) {
			alert(error.message);
		}
	}
}

async function main() {
	BankSystem.createUser();

	let choice;
	while (true) {
		choice = prompt(
			"Choose an operation:\n1. Deposit\n2. Withdraw\n3. Get Info\n4. Cancel\n5. Exit"
		);

		switch (choice) {
			case "1":
				await BankSystem.depositBalance();
				break;
			case "2":
				await BankSystem.withdrawBalance();
				break;
			case "3":
				await BankSystem.getInfo();
				break;
			case "4":
				BankSystem.cancelProcess();
				break;
			case "5":
				return;
			default:
				alert("Invalid choice");
				break;
		}
	}
}

main();
