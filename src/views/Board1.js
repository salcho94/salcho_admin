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
import axios from 'axios';




const Board1 = () => {
    const BoardList = async () => {
        axios.get("https://salcho.cf:3000/board/list")
            .then(function (response) {
                console.log(response);
            }).catch(function (error) {
            // 오류발생시 실행
        }).then(function () {
            // 항상 실행
        });

        // async await 함수를 사용할 때,

        try {
            const data = await axios.get("url");
        } catch {
            // 오류 발생시 실행
        }
    }
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
                    Salcho Board 관리자 페이지 입니다.
                  </p>
                </CardHeader>
                <CardBody>

                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
  )

}

export default Board1;
