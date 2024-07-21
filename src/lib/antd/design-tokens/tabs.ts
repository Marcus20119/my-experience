import type { OverrideToken } from 'antd/es/theme/interface';
import { COLOR } from '@/shared/assets/styles/constants';

export const TABS: OverrideToken['Tabs'] = {
  colorPrimary: COLOR.neutral['700'],
  inkBarColor: COLOR.primary,
  horizontalItemPadding: '12px 16px',
  horizontalItemGutter: 8,
  titleFontSize: 16,
};
