/*!

=========================================================
* Now UI Dashboard React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";
import Main from "views/Main.js";
import Board from "views/Board/Board.js";

let adminRoute = [
  {
    path: "/main",
    name: "main",
    icon: "users_circle-08",
    component: Main,
    layout: "/admin"
  },
  {
    path: "/board",
    name: "board",
    icon: "design_bullet-list-67",
    component: Board,
    layout: "/admin"
  },
  {
   path: "/dashboard",
   name: "Dashboard",
   icon: "design_app",
   component: Dashboard,
   layout: "/admin"
 },
 {
   path: "/icons",
   name: "Icons",
   icon: "design_image",
   component: Icons,
   layout: "/admin"
 },
 {
   path: "/maps",
   name: "Maps",
   icon: "location_map-big",
   component: Maps,
   layout: "/admin"
 },
 {
   path: "/notifications",
   name: "Notifications",
   icon: "ui-1_bell-53",
   component: Notifications,
   layout: "/admin"
 },
 {
   path: "/user-page",
   name: "User Profile",
   icon: "users_single-02",
   component: UserPage,
   layout: "/admin"
 },
 {
   path: "/extended-tables",
   name: "Table List",
   icon: "files_paper",
   component: TableList,
   layout: "/admin"
 },
 {
   path: "/typography",
   name: "Typography",
   icon: "design-2_ruler-pencil",
   component: Typography,
   layout: "/admin"
 },
{
   pro: true,
   path: "/upgrade",
   name: "Upgrade to PRO",
   icon: "objects_spaceship",
   component: Upgrade,
   layout: "/admin"
 }
];
export default adminRoute;
