import { UserInterface } from "./client.interface";

export class User implements UserInterface{
	public token!: number; // Note that the `null assertion` `!` is required in strict mode.
	public username!: string; // for nullable fields
	public created_at!: Date;
	public last_connection!: Date;

	constructor(data: UserInterface) {
		Object.assign(this, data);
	}
}