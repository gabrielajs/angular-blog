import { Component } from '@angular/core';
import { FooterComponent } from "../../layouts/footer/footer.component";
import { PostCardComponent } from "../../layouts/post-card/post-card.component";
import { SubscriptionFormComponent } from "../../subscription-form/subscription-form.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.sass',
    imports: [FooterComponent, PostCardComponent, SubscriptionFormComponent]
})
export class HomeComponent {

}
