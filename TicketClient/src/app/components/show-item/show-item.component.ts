import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
} from '@angular/core';
import { Show } from 'src/app/models/show.interface';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowItemComponent {
  @Input() item!: Show;
}

@NgModule({
  declarations: [ShowItemComponent],
  exports: [ShowItemComponent],
  imports: [CommonModule],
})
export class ShowItemModule {}
