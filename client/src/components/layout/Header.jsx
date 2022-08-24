import { Layout, Row, Col, Modal } from 'antd';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../../style/theme';
import Register from '../../pages/home/Register';
import axios from 'axios';
import * as HeaderComp from '../headerComp';

const { Header: _Header } = Layout;

function HeaderComponent({ userInfo, setUserInfo, token, setToken, setCookie }) {
  const [visible, setVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isJoinVisible, setIsJoinVisible] = useState(false);
  const [joinID, setJoinID] = useState('');
  const [joinName, setJoinName] = useState('');
  const [joinPW, setJoinPW] = useState('');

  const handleJoinOk = () => {
    axios
      .post('http://localhost:4000/user/join', {
        user_id: joinID,
        nickname: joinName,
        password: joinPW,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          setIsJoinVisible(false);
        }
      });
  };

  const handleJoinCancel = () => {
    setIsJoinVisible(false);
  };

  return (
    <Row justify="center" align="middle" style={{ marginTop: 20, marginBottom: 2 }}>
      <Col span={24}>
        <Header>
          <LogoWrapper>
            <HeaderComp.SideBarComp visible={visible} setVisible={setVisible} />
            <HeaderComp.DrawerComp
              setVisible={setVisible}
              visible={visible}
              token={token}
              userInfo={userInfo}
            />
            <HeaderComp.LogoTitle />
            <HeaderComp.LoginButton
              isLoginVisible={isLoginVisible}
              setIsLoginVisible={setIsLoginVisible}
              token={token}
              userInfo={userInfo}
            />
            <HeaderComp.LoginModal
              isLoginVisible={isLoginVisible}
              setToken={setToken}
              setIsLoginVisible={setIsLoginVisible}
              setIsJoinVisible={setIsJoinVisible}
              setUserInfo={setUserInfo}
              setCookie={setCookie}
            />

            <Modal
              visible={isJoinVisible}
              onOk={handleJoinOk}
              onCancel={handleJoinCancel}
              footer={[]}
            >
              <Register
                handleJoinOk={handleJoinOk}
                setJoinID={setJoinID}
                setJoinName={setJoinName}
                setJoinPW={setJoinPW}
              />
            </Modal>
          </LogoWrapper>
        </Header>
      </Col>
    </Row>
  );
}

const Header = styled(_Header)`
  @import url('https://fonts.googleapis.com/css2?family=Aboreto&display=swap');
  font-family: 'Aboreto', cursive;
  background-color: ${theme.beige};
  color: ${theme.black};
  z-index: 1000;
  a:link,
  a:visited,
  a:active,
  a:hover {
    text-decoration: #decfac wavy underline;
    color: ${theme.brown};
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  font-family: 'Aboreto', cursive;
  font-family: 'Noto Sans KR', sans-serif;
  border: 5px solid transparent;
`;

export default HeaderComponent;