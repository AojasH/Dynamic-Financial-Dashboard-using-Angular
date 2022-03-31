import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
	{
		path: '',
		component: PagesComponent,
		children: [
			{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
			{
				path: 'dashboard',
				loadChildren: () =>
					import('./dashboard/dashboard.module').then(
						(m) => m.DashboardModule
					),
				data: {
					title: 'Dashboard',
				},
			},
			{
				path: 'investments',
				loadChildren: () =>
					import('./investments/investments.module').then(
						(m) => m.InvestmentsModule
					),
				data: {
					title: 'Investimentos',
				},
			},
			{
				path: 'config',
				loadChildren: () =>
					import('./config/config.module').then(
						(m) => m.ConfigModule
					),
				data: {
					title: 'Configurações',
				},
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule {}
