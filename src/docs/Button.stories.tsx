import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  sort: 2,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    onClick: {
      action: 'clicked'
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const presetTheme = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
presetTheme.args = {
  // type: 'default',
  presetTheme: 'primary',
  disabled: false,
  children: 'Test Button',
  size: 'md'
};


// export const Small = Template.bind({});
// Small.args = {
//   // size: 'sm',
//   children: 'Button',
// };
