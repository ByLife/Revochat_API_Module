import { UserInterface } from "./client.interface";

export class User implements UserInterface{
	public id!: number; // Note that the `null assertion` `!` is required in strict mode.
	public nonce!: number;
	public publicAddress!: string;
	public username?: string; // for nullable fields

	constructor(data: UserInterface) {
		Object.assign(this, data);
	}
}