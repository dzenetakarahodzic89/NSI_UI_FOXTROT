import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { RippleModule } from 'primeng/ripple';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsListComponent } from './public/news-list/news-list.component';
import { NewsItemComponent } from './public/news-item/news-item.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CarouselModule } from 'primeng/carousel';
import { TabMenuModule } from 'primeng/tabmenu';

import { MsalInterceptor, MsalRedirectComponent, MSAL_GUARD_CONFIG, MSAL_INTERCEPTOR_CONFIG, MsalModule, MsalService, MSAL_INSTANCE, MsalInterceptorConfiguration, MsalGuardConfiguration, MsalGuard } from '@azure/msal-angular';
import { BrowserCacheLocation, Configuration, InteractionType, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { environment } from 'src/environments/environment';
import { HasRoleGuard } from './has-role.guard';
import { HasPermissionGuard } from './has-permission.guard';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { NewEmployeeComponent } from './pages/new-employee/new-employee.component';
import { NewClientComponent } from './pages/new-client/new-client.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ClientsComponent } from './pages/clients/clients.component';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { ListComponent } from './components/list/list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { WrapperComponent } from './wrapper/wrapper.component';
import { FormComponent } from './components/form/form.component';
import { BranchService } from './services/branch.service';
import { TokenInterceptor } from './token-interceptor.service';
import { UnauthorizedInterceptor } from './unauthorized-interceptor';
import { EditClientComponent } from './pages/edit-client/edit-client.component';
import { ViewClientComponent } from './pages/view-client/view-client.component';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { EditEmployeeComponent } from './pages/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './pages/view-employee/view-employee.component';
import { RolesAndPermissionsComponent } from './pages/roles-and-permissions/roles-and-permissions.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BranchesComponent } from './pages/branches/branches.component';
import { NewBranchComponent } from './pages/new-branch/new-branch.component';
import { ListUserComponent } from './pages/roles-and-permissions/list-user/list-user.component';
import { NewRequestComponent } from './pages/new-request/new-request.component';
import { DocumentPreviewComponent } from './pages/document-preview/document-preview.component';

import { QrCodeModule } from 'ng-qrcode';
import { ManagersComponent } from './pages/managers/managers.component';
import { NewManagerComponent } from './pages/new-manager/new-manager.component';
import { EditManagerComponent } from './pages/edit-manager/edit-manager.component';
import { ViewManagerComponent } from './pages/view-manager/view-manager.component';
import { AllRequestsComponent } from './pages/all-requests/all-requests.component';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: environment.clientId,
      redirectUri: environment.appRedirectUri,
      authority: environment.loginRedirectUri,
      postLogoutRedirectUri: environment.appRedirectUri
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
      storeAuthStateInCookie: false
    }
  });
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: {
      scopes: ['user.read']
    },
    loginFailedRoute: ''
  };
}

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  environment.protected.forEach(element => {
    protectedResourceMap.set(element[0], [element[1]]);
  });
  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap
  };
}


@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsItemComponent,
    DashboardComponent,
    NewEmployeeComponent,
    NewClientComponent,
    EmployeesComponent,
    NavbarComponent,
    SidebarComponent,
    ClientsComponent,
    ListComponent,
    WrapperComponent,
    FormComponent,
    EditClientComponent,
    ViewClientComponent,
    CardComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent,
    RolesAndPermissionsComponent,
    RequestsComponent,
    NewRequestComponent,
    DocumentPreviewComponent,
    ProfileComponent,
    BranchesComponent,
    NewBranchComponent,
    ListUserComponent,
    ManagersComponent,
    NewManagerComponent,
    EditManagerComponent,
    ViewManagerComponent,
    AllRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    RippleModule,
    TabViewModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule,
    TabMenuModule,
    MsalModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    QrCodeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (bs: BranchService) => () => bs.loadBranches(),
      deps: [BranchService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    },
    MsalService,
    MsalGuard,
    HasRoleGuard,
    HasPermissionGuard,
    AuthService,
    UserService
  ],
  bootstrap: [
    AppComponent,
    MsalRedirectComponent
  ],
  exports: [
    SidebarComponent
  ]
})
export class AppModule { }
