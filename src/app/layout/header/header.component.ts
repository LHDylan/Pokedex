import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [
        RouterOutlet,
        RouterLink,
        MatToolbar
    ]
})
export class HeaderComponent {

}
