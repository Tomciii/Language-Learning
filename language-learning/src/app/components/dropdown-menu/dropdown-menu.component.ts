import {Component, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent {
  constructor(private router: Router, private http: HttpClient) {}
  @Input() buttonTitle: string = "";
  @Input() menuItems: string[] = [""];
  @Input() handleClickValue: string = "";

  navigateToPage(pageName: string) {
    this.router.navigate(["flashcards", pageName]);
  }


}
