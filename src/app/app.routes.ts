import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./modules/auth/auth-routing.module').then((m) => m.AuthRoutingModule),
	},
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user-routing-module').then((m) => m.UserRoutingModule),
  },
  {
    path: 'course',
    loadChildren: () =>
      import('./modules/course/course-routing.module').then((m) => m.CourseRoutingModule),
  },
	{
		path: 'location',
		loadChildren: () =>
			import('./modules/location/location-routing.module').then((m) => m.LocationRoutingModule),
	},

];
