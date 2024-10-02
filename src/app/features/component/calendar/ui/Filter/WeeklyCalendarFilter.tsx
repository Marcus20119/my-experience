import type { MockWeeklyFilterEntity } from '@/app/features/component/calendar/model';
import type { ChangeDayjsToString } from '@/shared/types';
import type { FormInstance } from 'antd/lib';
import { Picker } from '@/shared/components';
import { useAppRouter, useAppSearchParams } from '@/shared/hooks';
import { Button, Flex, Form } from 'antd';
import dayjs from 'dayjs';
import { Add } from 'iconsax-react';
import queryString from 'query-string';
import { useEffect, useRef } from 'react';

interface Props {
  form: FormInstance<MockWeeklyFilterEntity>;
}

function WeeklyCalendarFilter({ form }: Props) {
  const { navigate } = useAppRouter();
  const isSetInitialValues = useRef(false);
  const searchParams =
    useAppSearchParams<ChangeDayjsToString<MockWeeklyFilterEntity>>();

  useEffect(() => {
    if (!isSetInitialValues.current) {
      const initialValues: MockWeeklyFilterEntity = {
        baseDate: dayjs(searchParams.baseDate || undefined),
      };

      form.setFieldsValue(initialValues);
      isSetInitialValues.current = true;
    }
  }, [form, searchParams.baseDate]);

  const onFinish = (values: MockWeeklyFilterEntity) => {
    const formattedValues: ChangeDayjsToString<MockWeeklyFilterEntity> = {
      baseDate: values.baseDate?.toISOString(),
    };

    navigate({
      search: queryString.stringify(formattedValues),
    });
  };

  return (
    <Flex align="center" justify="space-between">
      <Form<MockWeeklyFilterEntity> form={form} onFinish={onFinish}>
        <Form.Item<MockWeeklyFilterEntity> name="baseDate" noStyle>
          <Picker.Week onChange={form.submit} size="middle" />
        </Form.Item>
      </Form>

      <Button icon={<Add />} size="middle" type="primary">
        Add event
      </Button>
    </Flex>
  );
}

export default WeeklyCalendarFilter;
