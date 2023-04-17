import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './quick-play/play/play.component';
import { SummaryComponent } from './quick-play/summary/summary.component';
import { QuickPlayComponent } from './quick-play/quick-play.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PlayComponent,
    SummaryComponent,
    QuickPlayComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule, 
    MatButtonModule,
    HttpClientModule
  ],
  exports: [
    QuickPlayComponent
  ]
})
export class GameModule { }
