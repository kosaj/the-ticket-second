import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowItemComponent {}

@NgModule({
  declarations: [ShowItemComponent],
  exports: [ShowItemComponent],
  imports: [CommonModule],
})
export class ShowItemModule {}
