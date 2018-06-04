import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/header/header.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { FooterComponent } from './admin/footer/footer.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FormComponent } from './admin/form/form.component';
import { TableComponent } from './admin/table/table.component';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'form', component: FormComponent },
    { path: 'table', component: TableComponent }
];


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        DashboardComponent,
        FormComponent,
        TableComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
        ),
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
