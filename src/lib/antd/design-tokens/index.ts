import type { AliasToken } from 'antd/es/theme/interface';
import { COLOR } from '@/shared/assets/styles/constants';

export const token: Partial<AliasToken> = {
  colorBgBase: COLOR.neutral['100'],
  colorError: COLOR.system.error,
  colorErrorBg: COLOR.system.errorSoft,
  colorErrorHover: COLOR.system.errorHover,
  colorInfo: COLOR.system.information,
  colorInfoBg: COLOR.system.informationSoft,
  colorSuccess: COLOR.system.success,
  colorSuccessBg: COLOR.system.successSoft,
  colorTextBase: COLOR.neutral['800'],
  colorWarning: COLOR.system.alert,
  colorWarningBg: COLOR.system.alertSoft,
};
