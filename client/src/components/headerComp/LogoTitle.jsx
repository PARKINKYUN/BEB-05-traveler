import React from 'react';
import styled from 'styled-components';
import { theme } from '../../style/theme';

function LogoTitle() {
  return (
    <LogoTitle_D>
      <a href="http://localhost:3000/">T r a v e l e r</a>
    </LogoTitle_D>
  );
}

export default LogoTitle;

const LogoTitle_D = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Noto+Sans+KR:wght@100&display=swap');

  text-align: center;
  font-family: 'Aboreto', cursive;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: ${theme.fs_15};
  font-weight: ${theme.fw_700};
  color: ${theme.black};
  letter-spacing: -1px;
  white-space: nowrap;

  margin-left: auto;
  margin-right: auto;
`;
