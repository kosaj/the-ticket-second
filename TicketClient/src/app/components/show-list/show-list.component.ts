import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Show } from 'src/app/models/show.interface';
import { ShowItemModule } from '../show-item/show-item.component';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowListComponent {
  trackById(index: number, show: Show): string {
    return show.id;
  }
}

const routes: Routes = [
  { path: '', component: ShowListComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [ShowListComponent],
  exports: [ShowListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ShowItemModule],
})
export class ShowListModule {}
