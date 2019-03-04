import { Component, OnInit } from '@angular/core';
// APM
// import { Component } from '@angular/core';

// CLI
@Component({
  selector: 'ct-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
// APM
// export class WelcomeComponent {
//   public pageTitle = 'Welcome';
// }

// CLI
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
