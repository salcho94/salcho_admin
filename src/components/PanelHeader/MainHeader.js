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
import React from "react";

function PanelHeader(props) {
  return (
    <div
      className={
        "panel-header " +
        (props.size !== undefined ? "panel-header-" + props.size : "")
      }
    ><h4 className="mt-0 mb-0 pl-4 text-white"><strong>사이트 방문 현황</strong></h4>
      {props.content}
    </div>
  );
}

export default PanelHeader;
