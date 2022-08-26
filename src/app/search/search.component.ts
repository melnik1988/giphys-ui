import { Component, OnInit } from '@angular/core';
import { giphy } from '../interface/giphy';
import { GetGiphysService } from '../services/get-giphys.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public valueSearch: string = '';
  public letters: string[] = [];

  giphys: giphy[] = [];

  displayedColumns: string[] = ['urlList'];
  dataSource = new MatTableDataSource<string>();


  constructor(private getGiphysService: GetGiphysService) { }

  ngOnInit(): void {
    this.dataSource.paginator = null;
    this.letters = [];
  }

  getGiphys() {
    if (this.letters.length == 0) 
      this.addLetter()
      
    this.getGiphysService.getGiphys(this.letters).subscribe(res => {
      this.giphys = res;
      let list_url:string[] = []; 

      this.giphys.forEach((g) => {
        g.urlList.forEach((u) => {        
          list_url.push(u);
        });
      })

      this.dataSource = new MatTableDataSource<string>(list_url);
    });
  }

  addLetter() {
    this.letters.push(this.valueSearch);
    this.valueSearch = '';
  }

}
