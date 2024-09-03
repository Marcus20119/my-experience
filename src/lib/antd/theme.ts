import { token } from './design-tokens';
import { BUTTON } from './design-tokens/button';
import { CAROUSEL } from './design-tokens/carousel';
import { CASCADER } from './design-tokens/cascader';
import { DATE_PICKER } from './design-tokens/date-picker';
import { DIVIDER } from './design-tokens/divider';
import { INPUT } from './design-tokens/input';
import { INPUT_NUMBER } from './design-tokens/input-number';
import { MODAL } from './design-tokens/modal';
import { PAGINATION } from './design-tokens/pagination';
import { SELECT } from './design-tokens/select';
import { SLIDER } from './design-tokens/slider';
import { STEPS } from './design-tokens/steps';
import { TABLE } from './design-tokens/table';
import { TABS } from './design-tokens/tabs';
import { TREE_SELECT } from './design-tokens/tree-select';
import { TYPOGRAPHY } from './design-tokens/typography';

export const theme = {
  components: {
    ['Button']: BUTTON,
    ['Carousel']: CAROUSEL,
    ['Cascader']: CASCADER,
    ['DatePicker']: DATE_PICKER,
    ['Divider']: DIVIDER,
    ['Input']: INPUT,
    ['InputNumber']: INPUT_NUMBER,
    ['Modal']: MODAL,
    ['Pagination']: PAGINATION,
    ['Select']: SELECT,
    ['Slider']: SLIDER,
    ['Steps']: STEPS,
    ['Table']: TABLE,
    ['Tabs']: TABS,
    ['TreeSelect']: TREE_SELECT,
    ['Typography']: TYPOGRAPHY,
  },
  token,
};
