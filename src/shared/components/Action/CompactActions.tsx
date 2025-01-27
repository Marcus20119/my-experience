import type { SpaceCompactProps } from 'antd/lib/space/Compact';
import { Button, Popover, Tooltip } from 'antd';
import { cn } from '@/lib/tailwind';
import type { CompactActionEntity } from './types';
import { StyledCompactAction } from './styles';

interface Props extends SpaceCompactProps {
  actions: CompactActionEntity[];
}

function CompactActions({ actions, ...props }: Props) {
  return (
    <StyledCompactAction {...props}>
      {actions.map(action => {
        if (action.type === 'button') {
          return (
            <Popover
              content={action.popover}
              key={action.label}
              open={action.popover ? undefined : false}
              trigger="click"
            >
              <Tooltip placement="bottom" title={action.label}>
                <Button
                  className={cn(
                    'border-neutral-300',
                    action.disabled
                      ? 'bg-neutral-100'
                      : 'bg-neutral-0 hover:border-neutral-600 hover:bg-neutral-100',
                  )}
                  disabled={action.disabled}
                  icon={action.icon}
                  onClick={action.onClick}
                />
              </Tooltip>
            </Popover>
          );
        }

        if (action.type === 'custom') {
          return (
            <Tooltip key={action.label} placement="bottom" title={action.label}>
              {action.element}
            </Tooltip>
          );
        }

        return null;
      })}
    </StyledCompactAction>
  );
}

export default CompactActions;
