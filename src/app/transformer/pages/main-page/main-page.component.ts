import { Component, inject } from '@angular/core';
import { TextAreaComponent } from '../../components/text-area/text-area.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CardService } from '../../services/card-service.service';
import { ResultComponent } from '../../components/result/result.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    TextAreaComponent,
    SidebarComponent,
    ResultComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
