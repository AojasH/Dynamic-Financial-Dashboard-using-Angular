export function lsSave(obj: object) {
	localStorage.setItem('transactions', JSON.stringify(obj));
}

export function lsRead(key: string) {
	return JSON.parse(localStorage.getItem(key) ?? '[]');
}
