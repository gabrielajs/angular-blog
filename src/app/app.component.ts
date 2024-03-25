import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layouts/header/header.component";
import { CategoryNavbarComponent } from "./layouts/category-navbar/category-navbar.component";
import { FooterComponent } from "./layouts/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass',
    imports: [RouterOutlet, HeaderComponent, CategoryNavbarComponent, FooterComponent]
})
export class AppComponent {
  title = 'angular-blog';
}
