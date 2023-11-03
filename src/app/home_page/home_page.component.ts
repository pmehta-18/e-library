import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home_page.component.html',
  styleUrls: ['./home_page.component.css'],
})
export class HomePageComponent {
  readonly categories = [
    {
      title: 'Fiction',
      iconPath: '../assets/images/Fiction.svg',
      key: 'fiction',
    },
    {
      title: 'Philosophy',
      iconPath: '../assets/images/Philosophy.svg',
      key: 'philosophy',
    },
    {
      title: 'Drama',
      iconPath: '../assets/images/Drama.svg',
      key: 'drama',
    },
    {
      title: 'History',
      iconPath: '../assets/images/History.svg',
      key: 'history',
    },
    {
      title: 'Humour',
      iconPath: '../assets/images/Humour.svg',
      key: 'humour',
    },
    {
      title: 'Adventure',
      iconPath: '../assets/images/Adventure.svg',
      key: 'adventure',
    },
    {
      title: 'Politics',
      iconPath: '../assets/images/Politics.svg',
      key: 'politics',
    },
  ];
}
