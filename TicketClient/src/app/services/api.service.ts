import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Show } from '../models/show.interface';

@Injectable()
export class ApiService {
  constructor() {}
  //https://www.ebilet.pl/muzyka/festiwale/
  private readonly _description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  private readonly _fakeShows: Show[] = [
    {
      id: '23e77d47-1762-42eb-933b-85b5baf3d19d',
      name: 'Kraków Live Festival 2022',
      price: 155,
      description: this._description,
      imageSrc:
        'https://ebilet-media.azureedge.net/media/47004/klf_2022_basic_ebilet_900x507450.jpg',
    },
    {
      id: 'd071b2e5-bac2-4eb5-aa09-f8fa88c7d060',
      name: 'OFF Festival Katowice 2022',
      price: 60,
      description: this._description,
      imageSrc: 'https://ebilet-media.azureedge.net/media/46018/3-1450.jpg',
    },
    {
      id: 'beeee3bd-c4e3-455e-9365-690aa769c0f4',
      name: 'Audioriver Festival 2022',
      price: 189,
      description: this._description,
      imageSrc:
        'https://ebilet-media.azureedge.net/media/46855/audioriver-ogolna-900450.jpg',
    },
    {
      id: 'a6b895d6-ba89-4c0b-9310-476c45ec85d5',
      name: 'Sun Festival 2022: Kołobrzeg / Podczele',
      price: 100,
      description: this._description,
      imageSrc:
        'https://ebilet-media.azureedge.net/media/44894/900x507-71450.jpg',
    },
    {
      id: '7d206dd0-4f3e-41fc-a457-b5369ce1952c',
      name: 'Summer Dying Loud 2022',
      price: 20,
      description: this._description,
      imageSrc:
        'https://ebilet-media.azureedge.net/media/40288/900x507-1450.jpg',
    },
    {
      id: '826d5cfb-bad6-4168-b231-c34b10692305',
      name: '41. Międzynarodowy Festiwal Piknik Country i Folk Mrągowo 2022',
      price: 99,
      description: this._description,
      imageSrc:
        'https://ebilet-media.azureedge.net/media/44599/piknik-country-folk-2022-banner-900x507-v3450.jpg',
    },
    {
      id: '748ae143-e1f3-4cac-843d-3700837dba23',
      name: 'Męskie Granie 2022',
      price: 199,
      description: this._description,
      imageSrc:
        'https://ebilet-media.azureedge.net/media/46292/meskie-granie-900450.jpg',
    },
    {
      id: '42b735ac-fd73-42d7-84ff-86eeccf147e7',
      name: 'Tauron Nowa Muzyka Katowice',
      price: 299,
      description: this._description,
      imageSrc:
        'https://ebilet-media.azureedge.net/media/46724/tauron-900450.jpg',
    },
    {
      id: '20fd1b5e-09d1-4d2f-9af1-c99229a67788',
      name: 'Szczecin AmfiTunes',
      price: 63,
      description: this._description,
      imageSrc:
        'https://ebilet-media.azureedge.net/media/45454/amfi900x507450.jpg',
    },
    {
      id: '3f1506a7-445a-49ca-8228-689740fde5a1',
      name: 'Roztańczony PGE Narodowy 2022',
      price: 79,
      description: this._description,
      imageSrc:
        'https://ebilet-media.azureedge.net/media/47086/roztanczony-ebilet-aktualizacja-12_07-900x507-px450.jpg',
    },
    {
      id: 'd0752b1e-40c4-4721-8730-b5ca6a769117',
      name: 'Rockowizna 2022',
      price: 109,
      description: this._description,
      imageSrc:
        'https://ebilet-media.azureedge.net/media/46736/rockowizna-900x507px-cmyk1450.jpg',
    },
    {
      id: '5623ee08-8955-4643-82eb-da7e582125d4',
      name: 'Edison Festival 2022',
      price: 79,
      description: this._description,
      imageSrc:
        'https://ebilet-media.azureedge.net/media/45978/900x507-3450.jpg',
    },
  ];

  getShows(): Observable<Array<Show>> {
    return of(this._fakeShows);
  }
}

/*
https://www.ebilet.pl/muzyka/festiwale/krakow-live-festival/
https://www.ebilet.pl/muzyka/festiwale/off-festival/
https://www.ebilet.pl/muzyka/festiwale/audioriver/
https://www.ebilet.pl/muzyka/festiwale/sun-festival/
https://www.ebilet.pl/muzyka/festiwale/summer-dying-loud/
https://www.ebilet.pl/muzyka/festiwale/piknik-country/
https://www.ebilet.pl/muzyka/festiwale/meskie-granie/
https://www.ebilet.pl/muzyka/festiwale/tauron-nowa-muzyka/
*/
