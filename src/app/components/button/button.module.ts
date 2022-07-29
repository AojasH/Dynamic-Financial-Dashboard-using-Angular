import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundButtonComponent } from './round/round.component';

@NgModule({
	declarations: [RoundButtonComponent],
	imports: [CommonModule],
	exports: [RoundButtonComponent],
})
export class ButtonModule {}
