import { Component, OnInit } from '@angular/core';
import { CribsService } from './../services/cribs.service';
import { Http } from '@angular/http'

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
  
})
export class ListingComponent implements OnInit {

  cribs: Array<any>;
  error: string;

  constructor(private http: Http, private cribsService: CribsService) { }

  ngOnInit() {
    // this.http.get('data/cribs.json'), function(err,data)
    // this.http.get('data/cribs.json').then(data)
    // this.http.get('data/cribs.json').subscribe but before subscribe to observable make sure that we get it back.
    // operator called map to transform the vals to json
    // this.http.get('data/cribs.json')
    //   .map(res => res.json())
    //   .subscribe(
    //     data => this.cribs = data
    //error => this.error = error.statusText
    //);
    
    this.cribsService.getAllCribs()
      .subscribe(
        data => this.cribs = data,
        error => this.error = error.statusText
        );
}

}
