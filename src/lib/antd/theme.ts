import { token } from './design-tokens';
import { BUTTON } from './design-tokens/button';
import { CAROUSEL } from './design-tokens/carousel';
import { DATE_PICKER } from './design-tokens/date-picker';
import { DIVIDER } from './design-tokens/divider';
import { INPUT } from './design-tokens/input';
import { INPUT_NUMBER } from './design-tokens/input-number';
import { MODAL } from './design-tokens/modal';
import { PAGINATION } from './design-tokens/pagination';
import { SELECT } from './design-tokens/select';
import { SLIDER } from './design-tokens/slider';
import { STEPS } from './design-tokens/steps';
import { TABS } from './design-tokens/tabs';
import { TYPOGRAPHY } from './design-tokens/typography';

export const theme = {
  components: {
    ['Button']: BUTTON,
    ['Typography']: TYPOGRAPHY,
    ['Steps']: STEPS,
    ['Input']: INPUT,
    ['InputNumber']: INPUT_NUMBER,
    ['Select']: SELECT,
    ['DatePicker']: DATE_PICKER,
    ['Carousel']: CAROUSEL,
    ['Tabs']: TABS,
    ['Modal']: MODAL,
    ['Divider']: DIVIDER,
    ['Slider']: SLIDER,
    ['Pagination']: PAGINATION,
  },
  token,
};
