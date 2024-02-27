import {Component, OnInit} from '@angular/core';
import {WordFacade} from "../../facade/word.facade";
import {Word} from "../../model/word.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private wordFacade: WordFacade) {}
  dataSource: any = [];
  displayedColumns: string[] = ['id', 'word', 'meaning', 'type'];

  async ngOnInit(): Promise<void> {
    this.dataSource = await this.wordFacade.getAllWords();
    console.log(this.dataSource)
  }
}
