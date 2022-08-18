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
import PanelHeader from "../components/PanelHeader/PanelHeader";
import {Card, CardBody, CardHeader, Col, Row} from "reactstrap";


const Board = () => {
  return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={12}>
              <Card>
                <CardHeader>
                  <h5 className="title">SAlCHO 게시판 관리</h5>
                  <p className="category">
                    Handcrafted by our friends from{" "}
                  </p>
                </CardHeader>
                <CardBody>
                    <table>
                        <thead>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>test</td>
                                <td>test</td>
                                <td>test</td>
                                <td>test</td>
                                <td>test</td>
                            </tr>
                        </tbody>
                    </table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
  )

}

export default Board;
