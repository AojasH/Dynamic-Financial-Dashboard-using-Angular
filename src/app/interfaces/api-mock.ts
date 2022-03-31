export interface Spending {
	spent: string;
	value: number;
}

export interface ApiSpending {
	spending: Spending[];
}

export interface Overview {
	month: string;
	income: number;
	outcome: number;
}

export interface ApiOverview {
	overview: Overview[];
}
