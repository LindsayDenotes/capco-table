// import { Component, OnInit } from '@angular/core'; // CLI
import { Component } from '@angular/core'; // APM

// CLI
@Component({
  selector: 'ct-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
// APM
export class WelcomeComponent {
  public pageTitle = 'Welcome';
}

// CLI
// export class WelcomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
