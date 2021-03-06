import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './service/auth-guard.service';

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
    loadChildren: () => import('./view-cart/view-cart.module').then( m => m.ViewCartPageModule),
    canActivate:[AuthGuardService]
  },
  {
    path: 'check-out-order',
    loadChildren: () => import('./check-out-order/check-out-order.module').then( m => m.CheckOutOrderPageModule)
  },
  {
    path: 'rate-review',
    loadChildren: () => import('./rate-review/rate-review.module').then( m => m.RateReviewPageModule)
  },
  {
    path: 'filter-product',
    loadChildren: () => import('./filter-product/filter-product.module').then( m => m.FilterProductPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'myaddress',
    loadChildren: () => import('./myaddress/myaddress.module').then( m => m.MyaddressPageModule)
  },
  {
    path: 'add-new-address',
    loadChildren: () => import('./add-new-address/add-new-address.module').then( m => m.AddNewAddressPageModule)
  },
  {
    path: 'myorders',
    loadChildren: () => import('./myorders/myorders.module').then( m => m.MyordersPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'view-order-details',
    loadChildren: () => import('./view-order-details/view-order-details.module').then( m => m.ViewOrderDetailsPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./wishlist/wishlist.module').then( m => m.WishlistPageModule)
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
