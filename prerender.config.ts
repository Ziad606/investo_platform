import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  {
    path: 'Home',
    loadComponent: () =>
      import('./src/app/pages/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  {
    path: 'LandingPage',
    loadComponent: () =>
      import('./src/app/pages/landing-page/landing-page.component').then(
        (m) => m.LandingPageComponent
      ),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./src/app/pages/auth-model/auth-model.component').then(
        (m) => m.AuthModelComponent
      ),
  },
  {
    path: 'error',
    loadComponent: () =>
      import('./src/app/shared/componentes/error/error.component').then(
        (m) => m.ErrorComponent
      ),
  },
  {
    path: 'success',
    loadComponent: () =>
      import('./src/app/shared/componentes/success/success.component').then(
        (m) => m.SuccessComponent
      ),
  },
  {
    path: 'UpgradeRole',
    loadChildren: () =>
      import('./src/app/features/upgrade-role/routes').then(
        (m) => m.upgradeRoutes
      ),
  },
  {
    path: 'UserProfile',
    loadComponent: () =>
      import('./src/app/pages/user-profile/user-profile.component').then(
        (m) => m.UserProfileComponent
      ),
  },
  {
    path: 'ProjectDetails',
    loadChildren: () =>
      import('./src/app/features/project/routes').then(
        (m) => m.PROJECT_DETAILS_ROUTES
      ),
  },
];

// Routes that should be handled by SSR instead of prerendering
export const ssrRoutes = [
  '/InvestorDashboard',
  '/BusinessDashboard',
  '/AdminDashboard',
  '/BusinessCreation',
  /^\/ProjectDetails\/\d+(?!\/\w+$)/, // ProjectDetails with invalid tab
  /^\/profile\/\d+(?!$)/, // Profile with invalid ID
];

// Define the parameters for dynamic routes
export const prerenderParams = {
  'profile/:id': [{ id: '1' }, { id: '2' }, { id: '3' }],
  'ProjectDetails/:id': [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ],
  'ProjectDetails/:id/:tab': (() => {
    const tabs = [
      'overview',
      'business-info',
      'discussion',
      'team-members',
      'updates',
      'documents',
      'offer',
    ];
    const params = [];
    for (let id = 1; id <= 5; id++) {
      for (const tab of tabs) {
        params.push({ id: id.toString(), tab });
      }
    }
    return params;
  })(),
};
