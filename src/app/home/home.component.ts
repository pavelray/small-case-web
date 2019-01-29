import { Component, OnInit } from '@angular/core';
import { StockService } from '../service/stock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchKey: string;
  searchResultList: any[];

  constructor(private service: StockService) { }

  ngOnInit() {
  }

  onKeyUp()
  {
    this.service.search(this.searchKey).subscribe(respose=>{
      this.searchResultList =  respose.json();
      console.log(this.searchResultList);
      console.log(this.searchResultList[0].name);
    });
  }
}
