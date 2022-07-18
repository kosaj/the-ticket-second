import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent {}

const routes: Routes = [
  { path: '', component: OrderComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [OrderComponent],
  exports: [OrderComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OrderModule {}
