import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Movie} from '../../Movie';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  menus = ['/Adventure', '/Action', '/Horror', '/Comedy', '/Detective', '/Cartoon', '/Dramas', '/Documentary', '/Family'];
  SearchMovie = '';
  name: string;

  constructor(private dataService: DataService) {
  }

  category: Movie [] = [];

  check(index) {
    switch (index) {
      case 0:
        this.dataService.getMovie().subscribe((data: Movie) => this.category = data['Adventure']);
        break;
      case 1:
        this.dataService.getMovie().subscribe((data: Movie) => this.category = data['Action']);
        break;
      case 2:
        this.dataService.getMovie().subscribe((data: Movie) => this.category = data['Horror']);
        break;
      case 3:
        this.dataService.getMovie().subscribe((data: Movie) => this.category = data['Comedy']);
        break;
      case 4:
        this.dataService.getMovie().subscribe((data: Movie) => this.category = data['Detective']);
        break;
      case 5:
        this.dataService.getMovie().subscribe((data: Movie) => this.category = data['Cartoon']);
        break;
      case 6:
        this.dataService.getMovie().subscribe((data: Movie) => this.category = data['Dramas']);
        break;
      case 7:
        this.dataService.getMovie().subscribe((data: Movie) => this.category = data['Documentary']);
        break;
      case 8:
        this.dataService.getMovie().subscribe((data: Movie) => this.category = data['Family']);
        break;
      default:
        break;
    }
  }
    ngOnInit(): void {
      this.dataService.getMovie().subscribe((data: Movie) => this.category = data['Adventure']);
    }
  }
