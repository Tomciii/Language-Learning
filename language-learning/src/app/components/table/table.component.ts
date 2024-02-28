import {Component, Input, OnInit} from '@angular/core';
import {WordFacade} from "../../facade/word.facade";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent{

  @Input() dataSource: any = [];

  displayedColumns: string[] = ['id', 'word', 'meaning', 'type'];

  async ngOnInit(): Promise<void> {
  }
}
