import { Component, ViewChild } from '@angular/core';
import { SummaryComponent } from './summary/summary.component';

@Component({
  selector: 'app-quick-play',
  templateUrl: './quick-play.component.html',
  styleUrls: ['./quick-play.component.scss']
})
export class QuickPlayComponent {

  @ViewChild(SummaryComponent) summary : SummaryComponent;

  updateSummaryList() {
    this.summary.ngOnInit();
  } 
  
}
