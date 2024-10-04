import styled from '@emotion/styled';
import { WEEKLY_Z_INDEX } from '../model';

export const AppointmentsCalendarStyled = styled.div`
  .ant-table-cell {
    padding: 0 !important;
  }

  td {
    background-color: white !important;
  }

  th {
    height: 3rem !important; // 48px
  }

  .ant-table-cell:has(#time-range) {
    z-index: ${WEEKLY_Z_INDEX.rangeTimeCell} !important;
  }

  .calendar-item:hover {
    z-index: ${WEEKLY_Z_INDEX.itemHover} !important;
  }
`;
