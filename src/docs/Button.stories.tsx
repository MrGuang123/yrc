import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {
      action: 'clicked'
    },
    label: {
      options: ['sm', 'md', 'lg'],
      mapping: {
        sm: <b>ssss</b>
      }
    }
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
};


// export const Small = Template.bind({});
// Small.args = {
//   // size: 'sm',
//   children: 'Button',
// };