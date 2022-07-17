import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {}

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [CommonModule],
})
export class LoginModule {}
