import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginDialogComponent {}

@NgModule({
  declarations: [LoginDialogComponent],
  exports: [LoginDialogComponent],
  imports: [CommonModule],
})
export class LoginDialogModule {}
