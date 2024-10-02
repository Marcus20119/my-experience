import styled from '@emotion/styled';
import { Card } from 'antd';

export const CardStyled = styled(Card)`
  border-radius: 0.5rem !important; // 4px

  .ant-card-head,
  .ant-card-body {
    padding: 4px;
  }
  .ant-card-head {
    min-height: 32px;
  }
`;
