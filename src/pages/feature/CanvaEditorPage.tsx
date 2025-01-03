import {
  CanvaEditor,
  CanvaItemType,
} from '@/app/features/feature/canva-editor';
import { type BreadCrumbItem, useHeaderStore } from '@/app/features/header';
import { useSidebarStore } from '@/app/features/sidebar';
import { ContentLayout } from '@/app/layout';
import { useCalculateElementSize } from '@/shared/hooks';
import { useTranslation } from 'react-i18next';

function CanvaEditorPage() {
  const { t } = useTranslation();
  const { getHeaderHeight } = useHeaderStore();
  const { getSidebarWidth } = useSidebarStore();
  const { height, width } = useCalculateElementSize({
    heightOffset: getHeaderHeight(),
    widthOffset: getSidebarWidth(),
  });

  const breadCrumb: BreadCrumbItem[] = [
    {
      title: t('layout.title.feature'),
    },
    {
      title: t('layout.title.canvaEditor'),
    },
  ];

  return (
    <ContentLayout
      breadCrumb={breadCrumb}
      contentNoPadding
      title={t('layout.title.canvaEditor')}
    >
      <CanvaEditor
        asset={{
          image: {
            urls: [
              '/src/shared/assets/images/cat-1.png',
              '/src/shared/assets/images/cat-2.jpg',
              '/src/shared/assets/images/cat-3.jpg',
              '/src/shared/assets/images/cat-4.jpg',
              '/src/shared/assets/images/cat-5.jpg',
              '/src/shared/assets/images/cat-6.jpg',
              '/src/shared/assets/images/cat-7.jpg',
              '/src/shared/assets/images/cat-8.jpg',
              '/src/shared/assets/images/cat-9.jpg',
              '/src/shared/assets/images/cat-10.jpg',
            ],
          },
        }}
        height={height}
        initialItems={[
          {
            height: 17,
            id: '1',
            rotation: 0,
            type: CanvaItemType.Image,
            url: '/src/shared/assets/images/cat-1.png',
            width: 15,
            x: 10,
            y: 10,
            zIndex: 0,
          },
        ]}
        width={width}
      />
    </ContentLayout>
  );
}

export default CanvaEditorPage;
