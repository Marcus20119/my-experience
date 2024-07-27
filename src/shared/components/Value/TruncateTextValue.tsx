import type { GetRef } from 'antd';
import type { TextProps } from 'antd/es/typography/Text';
import type { TooltipProps } from 'antd/lib';
import { Tooltip, Typography } from 'antd';
import { useRef } from 'react';

const { Text } = Typography;

type TextRef = GetRef<typeof Text>;

interface Props extends Omit<TextProps, 'children'> {
  tooltipProps?: TooltipProps;
  value?: null | string;
}

function TruncateTextValue({ tooltipProps, value, ...textProps }: Props) {
  const textRef = useRef<TextRef>(null);

  const shouldShowTooltip =
    (textRef.current?.clientHeight ?? 0) < (textRef.current?.scrollHeight ?? 0);

  return (
    <Tooltip
      getPopupContainer={triggerNode =>
        triggerNode.parentElement as HTMLElement
      }
      title={shouldShowTooltip ? value : undefined}
      {...tooltipProps}
    >
      <Text ref={textRef} {...textProps}>
        {value}
      </Text>
    </Tooltip>
  );
}

export default TruncateTextValue;
