import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterModule], // Import RouterModule for routing
  template: `
    <nav>
      <a routerLink="/">Home</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
