import type { DeepReadonly } from '@/shared/types';
import FormModal from '@/pages/component/FormModal';

export const MODAL_ROUTES = [
  {
    path: 'user',
    routes: [
      {
        element: FormModal,
        match: 'edit',
        path: '/edit',
      },
    ],
  },
] as const satisfies DeepReadonly<ModalRouter[]>;
