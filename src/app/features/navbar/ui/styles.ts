import styled from '@emotion/styled';

export const StyledMenu = styled.div`
  .ant-menu-item {
    height: 2.25rem;
  }

  .ant-menu-title-content {
    font-weight: 600;
  }

  .ant-menu-sub {
    .ant-menu-title-content {
      font-weight: 400;
    }
  }

  .ant-menu-item-selected {
    position: relative;
    background-color: unset;
    color: unset;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0.75rem;
      top: 0;
      width: 0.125rem;
      background-color: var(--primary-color);
    }
  }
`;
