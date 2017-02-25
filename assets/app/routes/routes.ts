// Routes

import { LayoutComponent } from "./../layout/layout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ManufactoryFormComponent } from "./dashboard/manufactoryForm/manufactoryForm.component";
import { ModelFormComponent } from "./dashboard/modelForm/modelForm.component";
import { HomeComponent } from "./home/home.component";
import { ManufactoryComponent } from "./manufactory/manufactory.component";
import { NewsFormComponent } from "./dashboard/newsForm/newsForm.component";
import { GliderFormComponent } from "./dashboard/gliderForm/gliderForm.component";
import { CompanysComponent } from "./manufactory/companys/companys.component";
import { GliderModelsComponent } from "./manufactory/gliderModels/gliderModels.component";
import { GliderDetailsComponent } from "./manufactory/gliderDetails/gliderDetails.component";
import { WeatherComponent } from "./weather/weather.component";
import { ChatroomComponent } from "./chatrooms/chatroom.component";

import { AuthGuard } from "./../core/autentication/auth.guard";

import { Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "", component: LayoutComponent,
                children: [
                    { path: "", redirectTo: "home", pathMatch: "full" },
                    { path: "home", component: HomeComponent },
                    {
                        path: "manufactories", component: ManufactoryComponent,
                        children: [
                            { path: "", redirectTo: "companys", pathMatch: "full" },
                            { path: "companys", component: CompanysComponent },
                            { path: "company/:id", component: GliderModelsComponent },
                            { path: "detail/:id", component: GliderDetailsComponent }

                        ]

                    },
                    {
                        path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard],
                        children: [
                            { path: "", redirectTo: "addcompany", pathMatch: "full" },
                            { path: "addcompany", component: ManufactoryFormComponent, canActivate: [AuthGuard]  },
                            { path: "addmodel", component: ModelFormComponent, canActivate: [AuthGuard]  },
                            { path: "addglider", component: GliderFormComponent, canActivate: [AuthGuard]  },
                            { path: "adddnews", component: NewsFormComponent, canActivate: [AuthGuard]  }
                        ]
                    },
                    { path: "weather", component: WeatherComponent },
                    { path: "chatroom", component: ChatroomComponent }
                ]
            }
        ]
    },
      // Not found
    { path: "**", redirectTo: "home" }
];

export const appRoutingProviders: any[] = [

];

export default routes;
