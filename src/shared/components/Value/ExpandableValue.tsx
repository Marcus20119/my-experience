import { Typography } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/tailwind';

const { Paragraph, Link } = Typography;

interface Props {
  className?: string;
  rows?: number;
  value?: null | string;
}

function ExpandableValue({ rows, value, className }: Props) {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);
  const [isEllipsis, setIsEllipsis] = useState(false);

  return (
    <Paragraph
      ellipsis={{
        rows: rows ?? 2,
        expandable: true,
        expanded,
        symbol: t('common.button.viewMore'),
        onExpand: () => {
          setExpanded(true);
        },
        onEllipsis(ellipsis) {
          setIsEllipsis(ellipsis);
        },
      }}
      className={cn('mb-0', className)}
    >
      {value}{' '}
      {isEllipsis ? (
        <Link
          onClick={() => {
            setExpanded(false);
          }}
          className={cn(className, 'text-system-information')}
        >
          {t('common.button.viewLess')}
        </Link>
      ) : null}
    </Paragraph>
  );
}

export default ExpandableValue;
