import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent {}

@NgModule({
  declarations: [OrderComponent],
  exports: [OrderComponent],
  imports: [CommonModule],
})
export class OrderModule {}
