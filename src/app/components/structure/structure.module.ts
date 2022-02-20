import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { UserComponent } from './user/user.component';
import { SidebarItemComponent } from './sidebar/item/item.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		SidebarComponent,
		TopbarComponent,
		UserComponent,
		SidebarItemComponent,
	],
	imports: [CommonModule, RouterModule, BrowserAnimationsModule],
	exports: [
		SidebarComponent,
		TopbarComponent,
		UserComponent,
		SidebarItemComponent,
	],
})
export class StructureModule {}
