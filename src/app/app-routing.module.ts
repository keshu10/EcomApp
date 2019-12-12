import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'all-products',
    loadChildren: () => import('./all-products/all-products.module').then( m => m.AllProductsPageModule)
  },
  {
    path: 'product-details',
    loadChildren: () => import('./product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'view-cart',
    loadChildren: () => import('./view-cart/view-cart.module').then( m => m.ViewCartPageModule)
  },
  {
    path: 'check-out-order',
    loadChildren: () => import('./check-out-order/check-out-order.module').then( m => m.CheckOutOrderPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
