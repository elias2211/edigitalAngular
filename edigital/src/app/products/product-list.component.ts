import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent{
    
    welcomeText: string = 'Welcome!';
    products: any[] = [
            
    {
        "productId": 2,
        "productName": "Matrix",
        "productCode": "GDN-002",
        "releaseDate": "March 18, 2019",
        "price": 39.99,
        "productRating": 4.4
    } ,  
    {
        "productId": 2,
        "productName": "Game of thrones",
        "productCode": "GDN-0098",
        "releaseDate": "May 8, 2019",
        "price": 89.99,
        "productRating": 4.9
    }  
    
  ];
}