import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ConfigComponent } from './config.component';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: '', component: ConfigComponent }]),
	],
})
export class ConfigModule {}
