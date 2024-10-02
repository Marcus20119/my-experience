import type { Language } from '@/shared/types';
import type { DefaultOptionType } from 'antd/es/select';
import { Select } from '@/shared/components';
import { useLocalStore } from '@/shared/stores';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

function ChangeLanguage() {
  const { i18n, t } = useTranslation();
  const { language, setLocalStates } = useLocalStore();

  const options: DefaultOptionType[] = [
    {
      label: t('common.language.en'),
      value: 'en',
    },
    {
      label: t('common.language.vi'),
      value: 'vi',
    },
  ];

  return (
    <Select<Language>
      className="w-[20rem]"
      onChange={(language: Language) => {
        i18n.changeLanguage(language);
        dayjs.locale(language);
        setLocalStates({ language });
      }}
      options={options}
      size="middle"
      value={language}
      variant="filled"
    />
  );
}

export default ChangeLanguage;
