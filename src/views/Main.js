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
import {Line} from "react-chartjs-2";
import {dashboardPanelChart} from "../variables/charts";
import MainHeader from "../components/PanelHeader/MainHeader";


const Main = () => {
  return (
      <>
        <MainHeader
            size="md"
            content={
              <Line
                  data={dashboardPanelChart.data}
                  options={dashboardPanelChart.options}
              />
            }
        />
        <div className="content">
          <Row>
            <Col md={12}>
              <Card>
                <CardHeader>
                  <h5 className="title">SALCHO 관리자 페이지 입니다.</h5>
                  <p className="category">방문해 주셔서 감사합니다.</p>
                </CardHeader>
                <CardBody>
                  <div className="typography-line">
                    <h6>
                      <span><strong>공정경쟁 지원 시스템</strong><br/>신규구축</span><div>사용기술 및 언어 Java,Jquery,JavaScript,Sql,SpringFrameWrok,MyBatis,Jsp,Mysql,Html,Css,Jstl</div>
                    </h6>
                  </div>
                  <div className="typography-line">
                    <h6>
                      <span><strong>콘텐츠 분쟁조정 위원회</strong><br/>기능개선 및 유지보수</span><div>사용기술 및 언어  Java,Jquery,JavaScript,Tibero,SpringFrameWrok,MyBatis,Jsp,Mysql,Html,Css,Jstl</div>
                    </h6>
                  </div>
                  <div className="typography-line">
                    <h6>
                      <span><strong>국립국어원 한국어 교원자격</strong><br/>고도화 및 리뉴얼 진행</span><div>사용기술 및 언어  Java,Jquery,JavaScript,Cubrid,SpringFrameWrok,MyBatis,Jsp,Mysql,Html,Css,Jstl,BootStrap</div>
                    </h6>
                  </div>
                  <div className="typography-line">
                    <h6>
                      <span><strong>신기한 나라 Live</strong><br/>프론트단 개발 및 수정</span><div>사용기술 및 언어 <br/> Jquery,JavaScript,thymeleaf</div>
                    </h6>
                  </div>
                  <div className="typography-line">
                    <h6>
                      <span><strong>한솔 관리자</strong><br/>부분 개발</span><div>사용기술 및 언어  <br/> Java,Jquery,JavaScript,Sql,SpringBoot,MyBatis,Jsp,Mysql,Html,Css,Jstl</div>
                    </h6>
                  </div>
                  <div className="typography-line">
                    <h6>
                      <span><strong>AltiCast - 피플카</strong><br/> VOC 응대 및 부분개발</span><div>사용기술 및 언어<br/>  TypeScript,Swagger</div>
                    </h6>
                  </div>
                  <div className="typography-line">
                    <span>사이트 연결 링크 입니다.</span>
                    <blockquote>
                      <p className="blockquote blockquote-primary">
                        <ul className="cursor-pointer ">
                          <li><a href="https://www.fcss.or.kr/">공정경쟁 지원 시스템</a></li>
                          <li><a href="https://www.kcdrc.kr/">콘텐츠분쟁조정위원회</a></li>
                          <li><a href="https://kteacher.korean.go.kr/">국립국어원 한국어 교원자격</a></li>
                          <li><a href="https://tdphangulmweb.eduhansol.com/mlive/">신기한 나라 Live</a></li>
                          <li><a href="https://tdpdownload.eduhansol.com/admin/login">한솔 관리자</a></li>
                          <li><a href="https://cs-admin.staging.raidea.net/sign-in?fallbackUrl=/operation-status/reservation">AltiCast</a></li>
                        </ul>
                      </p>
                    </blockquote>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
  )

}

export default Main;
