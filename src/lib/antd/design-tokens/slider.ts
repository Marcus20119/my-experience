import type { OverrideToken } from 'antd/es/theme/interface';
import { COLOR } from '@/shared/assets/styles/constants';

export const SLIDER: OverrideToken['Slider'] = {
  colorPrimaryBorderHover: COLOR.neutral['800'],
  controlSize: 24,
  handleActiveColor: COLOR.neutral['800'],
  handleColor: COLOR.neutral['800'],
  handleLineWidth: 2,
  handleLineWidthHover: 2,
  handleSize: 16,
  handleSizeHover: 16,
  railBg: COLOR.neutral['200'],
  railSize: 2,
  trackBg: COLOR.neutral['800'],
};
