import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  routeId: any;
  product: any;

  constructor(private route: ActivatedRoute, private productsServive: ProductsService) { }

  ngOnInit(): void {
    this.routeId = Number(this.route.snapshot.paramMap.get('productId'));
    this.product = this.productsServive.getProduct(this.routeId);
  }

}
