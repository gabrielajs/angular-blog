import { Component } from '@angular/core';
import { FooterComponent } from "../../layouts/footer/footer.component";
import { PostCardComponent } from "../../layouts/post-card/post-card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.sass',
    imports: [FooterComponent, PostCardComponent]
})
export class HomeComponent {

}
