import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private router: Router) { }

  title: string = "Learning a Language";

  @Input() dropdown: string[] = ["color"];

  ngOnInit(): void {
  }

  navigateToPage() {
    this.router.navigate(["/"]);
  }

}
