import styled from '@emotion/styled';

export const AppointmentsCalendarStyled = styled.div`
  .ant-table-cell {
    padding: 0 !important;
  }

  td {
    background-color: white !important;
  }

  .ant-table-cell:has(.time-range) {
    z-index: 400 !important;
  }

  th {
    height: 3rem !important; // 48px
  }
`;
