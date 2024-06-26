/**
 * @interface BankAccountInterface
 */

export class BankAccountInterface {
	constructor(name, balance) {
		this.name = name;
		this.balance = balance;
	}

	/**
	 * @abstract
	 * @param {number}
	 * @returns {number}
	 */
	async withdraw(amount) {
		throw new Error("Method must be implemented");
	}

	/**
	 * @abstract
	 * @param {number}
	 * @returns {number}
	 */
	async deposit(amount) {
		throw new Error("Method must be implemented");
	}

	/**
	 * @abstract
	 * @returns {number}
	 */
	check() {
		throw new Error("Method must be implemented");
	}

	/**
	 * @abstract
	 * @returns {void}
	 */
	cancel() {
		throw new Error("Method must be implemented");
	}

	/**
	 * @abstract
	 * @returns {string}
	 */
	profile() {
		throw new Error("Method must be implemented");
	}
}
