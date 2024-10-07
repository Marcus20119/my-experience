import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  baseDate: Dayjs | string;
}

export const useGetMonthlyRangeDay = ({ baseDate }: Props) => {
  const { i18n } = useTranslation();

  const startDay = useMemo(() => {
    if (i18n.language === 'vi') {
      return dayjs(baseDate).startOf('month').day(1).startOf('day');
    }

    return dayjs(baseDate).startOf('month').startOf('week');
  }, [baseDate, i18n.language]);

  const endDay = useMemo(() => {
    if (i18n.language === 'vi') {
      return dayjs(baseDate).endOf('month').day(0).add(1, 'week').endOf('day');
    }

    return dayjs(baseDate).endOf('month').endOf('week');
  }, [baseDate, i18n.language]);

  return {
    endDay,
    startDay,
  };
};
