import { ProductListRouteModule } from './product-list-route.module';

describe('ProductListRouteModule', () => {
  let productListRouteModule: ProductListRouteModule;

  beforeEach(() => {
    productListRouteModule = new ProductListRouteModule();
  });

  it('should create an instance', () => {
    expect(productListRouteModule).toBeTruthy();
  });
});
