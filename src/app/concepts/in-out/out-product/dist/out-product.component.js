"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OutProductComponent = void 0;
var core_1 = require("@angular/core");
var OutProductComponent = /** @class */ (function () {
    function OutProductComponent() {
        this.testProduct = ['Product1', 'Product2', 'Product3', 'Product4', 'Product5'];
        this.productDetails = [
            {
                productName: 'Product1',
                productPrice: '$100',
                productDescription: 'Product1 Description'
            },
            {
                productName: 'Product2',
                productPrice: '$200',
                productDescription: 'Product2 Description'
            },
            {
                productName: 'Product3',
                productPrice: '$300',
                productDescription: 'Product3 Description'
            },
            {
                productName: 'Product4',
                productPrice: '$400',
                productDescription: 'Product4 Description'
            },
            {
                productName: 'Product5',
                productPrice: '$500',
                productDescription: 'Product5 Description'
            }
        ];
    }
    OutProductComponent.prototype.onGetProductInfo = function (name, description, price) {
        this.pDescription = description,
            this.pName = name,
            this.pPrice = price;
    };
    OutProductComponent.prototype.ngOnInit = function () {
    };
    OutProductComponent = __decorate([
        core_1.Component({
            selector: 'app-out-product',
            templateUrl: './out-product.component.html',
            styleUrls: ['./out-product.component.css']
        })
    ], OutProductComponent);
    return OutProductComponent;
}());
exports.OutProductComponent = OutProductComponent;
