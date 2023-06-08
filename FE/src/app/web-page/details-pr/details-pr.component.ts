import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-details-pr',
  templateUrl: './details-pr.component.html',
  styleUrls: ['./details-pr.component.scss']
})
export class DetailsPrComponent {
  DetailProducts:any={};// thông tin SP
  ProductsSimilar:any[]=[]; // SP liên quan

  constructor (
    private infoId_Pr:ActivatedRoute,
    private getOnePr:ServiceService,
  ){
    this.infoId_Pr.paramMap.subscribe((idPr:any)=>{
      const id=idPr.get("id");
      this.getOnePr.getOnePr(id).subscribe((dataDetails:any)=>{
        this.DetailProducts=dataDetails.data;
        
        this.getOnePr.getAllPr().subscribe((dataSimilar:any)=>{
          dataSimilar.map((xem:any)=>{
            this.DetailProducts.categoryID.products.map((idPr2:any)=>{
              if(xem._id==idPr2){
                this.ProductsSimilar.push(xem);
              };
            });
          });
        });
        console.log(this.DetailProducts.categoryID.products);
      });
    });
  };




  
};
