import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Movie} from '../../Movie';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  menus = ['/Adventure', '/Action', '/Horror', '/Comedy', '/Detective', '/Cartoon'];
  SearchMovie = '';
  name: string;
  constructor(private dataService: DataService) {
  }

  category: Movie [] = [];

  ngOnInit(): void {
    this.dataService.getMovie().subscribe((data: Movie) => this.category = data["Adventure"]);
  }

}
