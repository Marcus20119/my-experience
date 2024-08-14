import type { BreadCrumbItem } from '@/shared/types';
import { useGetTechnologyItems } from '@/app/features/technology';
import { ContentLayout } from '@/app/layout';
import { Ticket } from '@/shared/components/Ticket';
import { Flex } from 'antd';
import { useTranslation } from 'react-i18next';

function ConfigurationPage() {
  const { t } = useTranslation();
  const { technologyItems } = useGetTechnologyItems();

  const breadCrumb: BreadCrumbItem[] = [
    {
      route: {
        path: '/technology',
      },
      title: t('layout.title.technology'),
    },
    {
      title: t('layout.title.configuration'),
    },
  ];

  return (
    <ContentLayout
      breadCrumb={breadCrumb}
      title={t('layout.title.configuration')}
    >
      <Flex className="h-fit" gap="1.5rem" wrap>
        {technologyItems.configuration.map((props, index) => (
          <Ticket.ThreeD key={index} {...props} />
        ))}
      </Flex>
    </ContentLayout>
  );
}

export default ConfigurationPage;
