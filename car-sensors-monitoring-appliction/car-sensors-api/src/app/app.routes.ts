import { Routes } from "@angular/router";
import { SensorTesterComponent } from "./sensor-tester/sensor-tester.component";

export const routes: Routes = [
  { path: "", component: SensorTesterComponent }, // Default route points to SensorTesterComponent
  { path: "**", redirectTo: "" }, // Redirect any unknown routes to the main page
];
