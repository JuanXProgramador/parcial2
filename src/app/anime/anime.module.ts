import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnimeListComponent,AnimeDetailComponent],
  exports: [AnimeListComponent]
})
export class AnimeModule { }
