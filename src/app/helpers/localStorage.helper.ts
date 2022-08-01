export function lsSave(obj: object, name: string) {
	localStorage.setItem(name, JSON.stringify(obj));
}

export function lsRead(key: string) {
	return JSON.parse(localStorage.getItem(key) ?? '[]');
}
