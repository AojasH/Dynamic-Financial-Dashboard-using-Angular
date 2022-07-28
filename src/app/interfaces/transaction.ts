export interface Transaction {
	name: string;
	date: Date;
	category: string;
	value: number;
	method: {
		name: string;
		flag?: string;
		icon: string;
	};
}
