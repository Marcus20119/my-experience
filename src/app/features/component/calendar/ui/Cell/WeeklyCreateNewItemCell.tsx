import { COLOR } from '@/shared/assets/styles/constants';
import { Flex } from 'antd';
import { Add } from 'iconsax-react';

interface Props {
  hour: number;
  minute: number;
}

function WeeklyCreateNewItemCell({ hour: _h, minute: _m }: Props) {
  return (
    <Flex
      align="center"
      className="group h-full cursor-pointer p-0.5"
      justify="center"
    >
      <Flex
        align="center"
        className="hidden h-full w-full rounded-md transition-all group-hover:flex group-hover:bg-secondaryLight"
        justify="center"
      >
        <Flex
          align="center"
          className="h-5 w-5 rounded-full bg-primary"
          justify="center"
        >
          <Add color={COLOR.secondary} size="16" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default WeeklyCreateNewItemCell;
