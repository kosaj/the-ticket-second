import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
})
export class HeaderModule {}
