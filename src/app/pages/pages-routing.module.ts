import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/dashboard' },
	{
		path: 'dashboard',
		loadChildren: () =>
			import('./dashboard/dashboard.module').then(
				(m) => m.DashboardModule
			),
	},
	{
		path: 'investments',
		loadChildren: () =>
			import('./investments/investments.module').then(
				(m) => m.InvestmentsModule
			),
	},
	{
		path: 'config',
		loadChildren: () =>
			import('./config/config.module').then((m) => m.ConfigModule),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule {}
