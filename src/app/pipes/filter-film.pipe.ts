import { Pipe, PipeTransform } from '@angular/core';
import { Video } from '../models/video';

@Pipe({
  name: 'filterFilm'
})
export class FilterFilmPipe implements PipeTransform {

  transform(value: any, search: string): Video[] {
    if (!search || !value) {
      return value;
    }
    const filteredVideos = value.filter(el => el.title.includes(search));
    return filteredVideos;
  }

}
