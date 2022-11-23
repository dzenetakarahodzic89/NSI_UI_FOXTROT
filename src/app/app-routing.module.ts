import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { HasPermissionGuard } from './has-permission.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { NewEmployeeComponent } from './pages/new-employee/new-employee.component';
import { NewClientComponent } from './pages/new-client/new-client.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ViewClientComponent } from './pages/view-client/view-client.component';
import { EditClientComponent } from './pages/edit-client/edit-client.component';
import { ViewEmployeeComponent } from './pages/view-employee/view-employee.component';
import { EditEmployeeComponent } from './pages/edit-employee/edit-employee.component';
import { RolesAndPermissionsComponent } from './pages/roles-and-permissions/roles-and-permissions.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BranchesComponent } from './pages/branches/branches.component';
import { NewBranchComponent } from './pages/new-branch/new-branch.component';
import { ManagersComponent } from './pages/managers/managers.component';
import { NewManagerComponent } from './pages/new-manager/new-manager.component';
import { ViewManagerComponent } from './pages/view-manager/view-manager.component';
import { EditManagerComponent } from './pages/edit-manager/edit-manager.component';
import { NewRequestComponent } from './pages/new-request/new-request.component';
import { DocumentPreviewComponent } from './pages/document-preview/document-preview.component';
import { AllRequestsComponent } from './pages/all-requests/all-requests.component';
import { Permissions } from './models/Permissions';

const appRoutes: Routes = [
  {
    path: '',
    canActivate: [MsalGuard],
    canLoad: [MsalGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch: 'full',
        canActivate: [MsalGuard],
        canLoad: [MsalGuard]
      }
    ]
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    canActivate: [MsalGuard, HasPermissionGuard],
    canLoad: [MsalGuard, HasPermissionGuard],
    data: {
      permissions: [Permissions.REVIEW_EMPLOYEE]
    },
  },
  {
    path: 'employee/create',
    component: NewEmployeeComponent,
    canActivate: [MsalGuard, HasPermissionGuard],
    canLoad: [MsalGuard, HasPermissionGuard],
    data: {
      permissions: [Permissions.CREATE_EMPLOYEE]
    },
  },
  {
    path: 'employees/:id',
    component: ViewEmployeeComponent,
    pathMatch: 'full',
    canActivate: [MsalGuard, HasPermissionGuard],
    canLoad: [MsalGuard, HasPermissionGuard],
    data: {
      permissions: [Permissions.REVIEW_EMPLOYEE]
    },
  },
  {
    path: 'employees/:id/edit',
    component: EditEmployeeComponent,
    pathMatch: 'full',
    canActivate: [MsalGuard, HasPermissionGuard],
    canLoad: [MsalGuard, HasPermissionGuard],
    data: {
      permissions: [Permissions.ASSIGN_PERMISSION]
    },
  },
  {
    path: 'clients',
    component: ClientsComponent,
    canActivate: [MsalGuard, HasPermissionGuard],
    canLoad: [MsalGuard, HasPermissionGuard],
    data: {
      permissions: [Permissions.REVIEW_CLIENT_DATA]
    },
  },
  {
    path: 'clients/create',
    component: NewClientComponent,
    canActivate: [MsalGuard, HasPermissionGuard],
    canLoad: [MsalGuard, HasPermissionGuard],
    data: {
      permissions: [Permissions.CREATE_CLIENT_ACCOUNT]
    },
  },
  {
    path: 'clients/:id',
    component: ViewClientComponent,
    pathMatch: 'full',
    canActivate: [MsalGuard, HasPermissionGuard],
    canLoad: [MsalGuard, HasPermissionGuard],
    data: {
      permissions: [Permissions.REVIEW_CLIENT_DATA]
    },
  },
  {
    path: 'clients/:id/edit',
    component: EditClientComponent,
    pathMatch: 'full',
    canActivate: [MsalGuard, HasPermissionGuard],
    canLoad: [MsalGuard, HasPermissionGuard],
    data: {
      permissions: [Permissions.CREATE_CLIENT_ACCOUNT]
    },
  },
  {
    path: 'managers',
    component: ManagersComponent,
    canActivate: [MsalGuard, HasPermissionGuard],
    canLoad: [MsalGuard, HasPermissionGuard],
    data: {
      permissions: [Permissions.REVIEW_MANAGER]
    },
  },
  {
    path: 'manager/create',
    component: NewManagerComponent,
    canActivate: [MsalGuard, HasPermissionGuard],
    canLoad: [MsalGuard, HasPermissionGuard],
    data: {
      permissions: [Permissions.CREATE_MANAGER]
    },
  },
  {
    path: 'managers/:id',
    component: ViewManagerComponent,
    pathMatch: 'full',
    canActivate: [MsalGuard, HasPermissionGuard],
    canLoad: [MsalGuard, HasPermissionGuard],
    data: {
      permissions: [Permissions.REVIEW_MANAGER]
    },
  },
  {
    path: 'managers/:id/edit',
    component: EditManagerComponent,
    pathMatch: 'full',
    canActivate: [MsalGuard, HasPermissionGuard],
    canLoad: [MsalGuard, HasPermissionGuard],
    data: {
      permissions: [Permissions.CREATE_MANAGER]
    },
  },
  {
    path: 'requests',
    component: RequestsComponent,
    pathMatch: 'full',
    canActivate: [MsalGuard, HasPermissionGuard],
    canLoad: [MsalGuard, HasPermissionGuard],
    data: {
      permissions: [Permissions.REVIEW_OWN_REQUEST]
    },
  },
  {
    path: 'roles-and-permissions',
    component: RolesAndPermissionsComponent,
    pathMatch: 'full',
    canActivate: [MsalGuard, HasPermissionGuard],
    canLoad: [MsalGuard, HasPermissionGuard],
    data: {
      permissions: [Permissions.ASSIGN_PERMISSION]
    },
  },
  {
    path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full',
    canActivate: [MsalGuard],
    canLoad: [MsalGuard]
  },
  {
    path: 'branches',
    component: BranchesComponent,
    pathMatch: 'full',
    canActivate: [MsalGuard, HasPermissionGuard],
    canLoad: [MsalGuard, HasPermissionGuard],
    data: {
      permissions: [Permissions.REVIEW_BRANCH]
    },
  },
  {
    path: 'branches/create',
    component: NewBranchComponent,
    pathMatch: 'full',
    canActivate: [MsalGuard, HasPermissionGuard],
    canLoad: [MsalGuard, HasPermissionGuard],
    data: {
      permissions: [Permissions.CREATE_BRANCH]
    },
  },
  {
    path: 'clientrequests',
    component: AllRequestsComponent,
    canActivate: [MsalGuard, HasPermissionGuard],
    canLoad: [MsalGuard, HasPermissionGuard],
    data: {
      permissions: [Permissions.REVIEW_CLIENT_REQUEST]
    }
  },
  {
    path: 'request/:id',
    component: NewRequestComponent,
    pathMatch: 'full',
    canActivate: [MsalGuard, HasPermissionGuard],
    canLoad: [MsalGuard, HasPermissionGuard],
    data: {
      permissions: [Permissions.REVIEW_OWN_REQUEST]
    }
  },
  {
    path: 'request/:id/edit',
    component: NewRequestComponent,
    pathMatch: 'full',
    canActivate: [MsalGuard, HasPermissionGuard],
    canLoad: [MsalGuard, HasPermissionGuard],
    data: {
      permissions: [Permissions.CREATE_REQUEST]
    }
  },
  {
    path: 'document/:id',
    component: DocumentPreviewComponent,
    pathMatch: 'full',
    canActivate: [MsalGuard, HasPermissionGuard],
    canLoad: [MsalGuard, HasPermissionGuard],
    data: {
      permissions: [Permissions.REVIEW_OWN_DOCUMENT]
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
