import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowListComponent {}

@NgModule({
  declarations: [ShowListComponent],
  exports: [ShowListComponent],
  imports: [CommonModule],
})
export class ShowListModule {}
