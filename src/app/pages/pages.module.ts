import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructureModule } from '../components/structure/structure.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
@NgModule({
	declarations: [PagesComponent],
	imports: [CommonModule, PagesRoutingModule, StructureModule],
})
export class PagesModule {}
