import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class DataSharingService {
    constructor(){}
    private dataSource = new BehaviorSubject("default message");
    productList = this.dataSource.asObservable();
    productDetail = this.dataSource.asObservable();
    
    availProductListToService(data) {
        this.dataSource.next(data);
    }

    availProductDetailToService(data) {
        this.dataSource.next(data);
    }
}