import {Component, OnInit} from '@angular/core';
import {WordFacade} from "../../facade/word.facade";
import {Word} from "../../model/word.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-topic-table',
  templateUrl: './topic-table.component.html',
  styleUrls: ['./topic-table.component.css']
})
export class TopicTableComponent implements OnInit {
  dataSource: Word[] = [];
  selectedTopic: string = '';

  constructor(private wordFacade: WordFacade,private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    this.route.url.subscribe(segments => {
      // Extract the last segment (topic) from the URL
      this.selectedTopic = segments[segments.length - 1].path;
      // Fetch data based on the selected topic
      this.updateDataSource();
    });
  }

  async updateDataSource() {
    if (this.selectedTopic) {
      this.dataSource = await this.wordFacade.getWordsByTopic(this.selectedTopic);
    }
  }

}
