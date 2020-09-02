import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

/* Routes */
export const authRoutes: Routes = [
    {
        path: 'auth/login',
        component: LoginComponent,
    },
    {
        path: 'auth/signup',
        component: SignupComponent,
    },
    /* {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
    }*/
];

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
