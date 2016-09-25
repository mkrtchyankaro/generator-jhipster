import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { <%=angular2AppName%>SharedModule } from './shared/shared.ng2module';
import { <%=angular2AppName%>CommonModule } from './components/common.ng2module';
import { <%=angular2AppName%>AdminModule } from './admin/admin.ng2module';
import { <%=angular2AppName%>AccountModule } from './account/account.ng2module';

import { XSRFStrategyProvider } from './shared/XSRF-strategy.provider';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
<%_ if (enableTranslation){ _%>
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
<%_ } _%>

@NgModule({
    imports: [
        BrowserModule,
        <%=angular2AppName%>SharedModule,
        <%=angular2AppName%>CommonModule,
        <%=angular2AppName%>AdminModule,
        <%=angular2AppName%>AccountModule
    ],
    declarations: [
        HomeComponent,
        NavbarComponent<%_ if (enableTranslation){ _%>,
        ActiveMenuDirective
        <%_ } _%>

    ],
    providers: [
        XSRFStrategyProvider
    ],
    bootstrap: [ HomeComponent ]
})
export class <%=angular2AppName%>AppModule {}
