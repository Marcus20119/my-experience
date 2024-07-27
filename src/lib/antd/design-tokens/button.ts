import type { OverrideToken } from 'antd/es/theme/interface';
import { COLOR } from '@/shared/assets/styles/constants';

export const BUTTON: OverrideToken['Button'] = {
  borderColorDisabled: COLOR.neutral['300'],
  borderRadius: 10,
  colorTextBase: COLOR.primaryText,
  colorTextLightSolid: COLOR.primaryText,
  controlHeight: 40,
  controlHeightLG: 48,
  controlHeightSM: 32,
  dangerColor: COLOR.neutral[0],
  defaultBg: COLOR.neutral['100'],
  defaultBorderColor: COLOR.neutral['100'],
  defaultColor: COLOR.neutral['600'],
  defaultGhostBorderColor: COLOR.neutral['800'],
  defaultGhostColor: COLOR.neutral['800'],
  defaultHoverBorderColor: COLOR.neutral['600'],
  defaultHoverColor: COLOR.neutral['600'],
  fontSize: 16,
  marginXS: 4,
  paddingBlockLG: 12,
  paddingInlineLG: 24,
};
