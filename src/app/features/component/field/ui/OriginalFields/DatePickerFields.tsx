import type { OriginalFieldForm } from '@/app/features/component/field';
import type { GridCardItem } from '@/shared/components';
import type { TimeRangePickerProps } from 'antd/lib';
import { Card, Picker } from '@/shared/components';
import { Form } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function DatePickerFields() {
  const { t } = useTranslation();

  const [selectedStartDate, setSelectedStartDate] = useState(dayjs());

  const rangePresets: TimeRangePickerProps['presets'] = [
    {
      label: 'A week',
      value: [selectedStartDate, selectedStartDate.add(1, 'week')],
    },
    {
      label: '2 weeks',
      value: [selectedStartDate, selectedStartDate.add(2, 'week')],
    },
    {
      label: 'A month',
      value: [selectedStartDate, selectedStartDate.add(1, 'month')],
    },
    {
      label: '2 months',
      value: [selectedStartDate, selectedStartDate.add(2, 'month')],
    },
    {
      label: 'A year',
      value: [selectedStartDate, selectedStartDate.add(1, 'year')],
    },
    {
      label: '2 years',
      value: [selectedStartDate, selectedStartDate.add(2, 'year')],
    },
  ];

  const grids: GridCardItem[] = [
    {
      content: (
        <Form.Item<OriginalFieldForm>
          label={t('component.label.datePicker')}
          name="datePicker"
        >
          <Picker.Date />
        </Form.Item>
      ),
      span: 8,
    },
    {
      content: (
        <Form.Item<OriginalFieldForm>
          label={t('component.label.rangeDatePicker')}
          name="rangeDatePicker"
        >
          <Picker.RangeDate />
        </Form.Item>
      ),
      span: 8,
    },
    {
      content: (
        <Form.Item<OriginalFieldForm>
          label={t('component.label.presetPicker')}
          name="presetPicker"
        >
          <Picker.RangeDate
            onCalendarChange={dates => {
              if (dates?.[0]) {
                setSelectedStartDate(dates?.[0]);
              }

              if (dayjs(dayjs(dates?.[1])).isBefore(dayjs(dates?.[0]))) {
                return;
              }
            }}
            presets={rangePresets}
          />
        </Form.Item>
      ),
      span: 8,
    },
    {
      content: (
        <Form.Item<OriginalFieldForm>
          label={t('component.label.weekPicker')}
          name="weekPicker"
        >
          <Picker.Week showNow />
        </Form.Item>
      ),
      span: 8,
    },
    {
      content: (
        <Form.Item<OriginalFieldForm>
          label={t('component.label.timePicker')}
          name="timePicker"
        >
          <Picker.Time />
        </Form.Item>
      ),
      span: 8,
    },
    {
      content: (
        <Form.Item<OriginalFieldForm>
          label={t('component.label.rangeTimePicker')}
          name="rangeTimePicker"
        >
          <Picker.RangeTime />
        </Form.Item>
      ),
      span: 8,
    },
  ];

  return (
    <Card.Grid grids={grids} title={t('component.title.datePickerFields')} />
  );
}

export default DatePickerFields;
