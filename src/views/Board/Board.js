import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import Tr from './Tr';
import Post from './Post';
import Modal from './Modal';
import PanelHeader from "../../components/PanelHeader/PanelHeader";
import {Card, CardBody, CardHeader, Col, Row} from "reactstrap";

const Board = () => {
    const [info, setInfo] = useState([]);
    const [selected, setSelected] = useState('');
    const [modalOn, setModalOn] = useState(false);

    // 고유 값으로 사용 될 id
    // ref 를 사용하여 변수 담기
    const nextId = useRef(11);

//데이터 호출
    useEffect(() => {
        axios.get(url + "/board/list")
            .then(res =>  setInfo(res.data.result))
            .catch(err => console.log(err));
    }, []);

    const handleSave = (data) => {
        console.log(data);
        //데이터 수정하기
        if (data.id) { //수정 데이터에는 id가 존재
            setInfo(
                info.map(row => data.id === row.id ? {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    website: data.website,
                } : row))

        } else { //바로 추가하기
            // 데이터 추가하기 방법1
            // setInfo((prev) => {
            //   return [ ...prev, {
            //     id: nextId.current,
            //     name: data.name,
            //     email: data.email,
            //     phone: data.phone,
            //     website: data.website
            //   }]
            // });

            //데이터 추가하기 방법2
            setInfo(info => info.concat(
                {
                    id: nextId.current,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    website: data.website
                }
            ))
            nextId.current += 1;
        }
    }

    const handleRemove = (id) => {
        setInfo(info => info.filter(item => item.id !== id));
    }

    const handleEdit = (item) => {
        setModalOn(true);
        const selectedData = {
            id: item.id,
            name: item.name,
            email: item.email,
            phone: item.phone,
            website: item.website
        };
        console.log(selectedData);
        setSelected(selectedData);
    };

    const handleCancel = () => {
        setModalOn(false);
    }

    const handleEditSubmit = (item) => {
        console.log(item);
        handleSave(item);
        setModalOn(false);
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
                                    <table className="table table-striped table-dark">
                                        <thead>
                                        <tr>
                                            <th>글 번호</th>
                                            <th>제목</th>
                                            <th>내용</th>
                                            <th>작성자</th>
                                            <th>등록일</th>
                                            <th>수정</th>
                                            <th>삭제</th>
                                        </tr>
                                        </thead>
                                        <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
                                    </table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Board;