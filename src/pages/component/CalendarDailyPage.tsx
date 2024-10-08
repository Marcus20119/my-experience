import type {
  MockDailyCalendarEntity,
  MockDailyFilterEntity,
} from '@/app/features/component/calendar';
import {
  DailyCalendar,
  DailyCalendarFilter,
  DayOfWeek,
  formatRangeDate,
  mockDailyData,
} from '@/app/features/component/calendar';
import { useHeaderStore } from '@/app/features/header';
import CalendarLayout from '@/app/layout/CalendarLayout';
import { SPACING } from '@/shared/assets/styles/constants';
import { Modal, Value } from '@/shared/components';
import { useCalculateElementSize, useToggle } from '@/shared/hooks';
import { Flex, Form, Typography } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import { cn } from '@/lib/tailwind';

const { Paragraph, Text, Title } = Typography;

function CalendarDailyPage() {
  const { getHeaderHeight } = useHeaderStore();
  const { height } = useCalculateElementSize({
    heightOffset: getHeaderHeight() + SPACING.contentPadding * 2 + 58 + 50, // 58 - filter height, 50 - header height
  });
  const {
    onClose: onCloseDetail,
    onOpen: onOpenDetail,
    open: openDetail,
  } = useToggle();

  const [selectedItem, setSelectedItem] = useState<MockDailyCalendarEntity>();

  const [form] = Form.useForm<MockDailyFilterEntity>();

  const baseDate = Form.useWatch('baseDate', form);

  return (
    <CalendarLayout
      route={{
        path: '/component/calendar/daily',
      }}
    >
      <Flex gap="1rem" vertical>
        <DailyCalendarFilter form={form} />
        <DailyCalendar<MockDailyCalendarEntity>
          baseDate={baseDate}
          dataSource={mockDailyData}
          disabledCell={[
            {
              dayOfWeek: DayOfWeek.Sunday,
              type: 'dayOfWeek',
            },
            {
              dayOfWeek: DayOfWeek.Saturday,
              hours: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
              minutes: hour => (hour === 13 ? [30] : [0, 30]),
              type: 'dayOfWeek',
            },
          ]}
          itemRender={(item, { groupCount, height, mode }) => (
            <Flex
              className={cn(
                'h-full w-full',
                mode === 'in-calendar'
                  ? 'rounded-sm px-1 py-0.5 shadow-md'
                  : 'rounded-md px-2 py-1',
              )}
              style={{
                backgroundColor: item.color,
              }}
              vertical
            >
              <Text>
                {groupCount > 2
                  ? dayjs(item.startTime).format('H:mm')
                  : `${dayjs(item.startTime).format('H:mm')} - ${dayjs(item.endTime).format('H:mm')}`}
              </Text>
              <Title
                className={cn(
                  'text-sm',
                  height < 160 && 'line-clamp-3',
                  height < 120 && 'line-clamp-2',
                  height < 80 && 'line-clamp-1',
                )}
                level={3}
              >
                {item.title}
              </Title>
              {mode === 'in-popover' ? (
                <Paragraph className="text-xs">{item.description}</Paragraph>
              ) : null}
            </Flex>
          )}
          maxItemShowPerGroup={5}
          onClickItem={item => {
            setSelectedItem(item);
            onOpenDetail();
          }}
          onCreateNewItem={startTime => {
            console.log(startTime);
          }}
          scroll={{ x: 'max-content', y: height }}
        />
      </Flex>
      <Modal.CalendarItem
        color={selectedItem?.color}
        onCancel={() => {
          onCloseDetail();
          setSelectedItem(undefined);
        }}
        open={openDetail}
        title={selectedItem?.title}
      >
        <Value.List
          value={[
            formatRangeDate({
              endTime: selectedItem?.endTime,
              startTime: selectedItem?.startTime,
            }),
            selectedItem?.description,
          ]}
        />
      </Modal.CalendarItem>
    </CalendarLayout>
  );
}

export default CalendarDailyPage;
