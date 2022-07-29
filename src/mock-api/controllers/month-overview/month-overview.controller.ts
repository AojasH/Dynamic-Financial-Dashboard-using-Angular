import { lsRead } from 'src/app/helpers/localStorage.helper';
import { MonthOverview } from 'src/app/interfaces/month-overview';

export function monthOverviewController(): MonthOverview[] {
	const data = 'monthOverview';

	return lsRead(data);
}
