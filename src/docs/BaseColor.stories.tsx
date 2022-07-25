import { forwardRef } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BaseColorMap from '../components/BaseColorMap';

const BaseColorDom = forwardRef((props: any, ref) => {
  return (
    <BaseColorMap></BaseColorMap>
  )
})

export default {
  title: 'Getting Started/BaseColor',
  component: BaseColorDom,
  sort: 1,
  // parameters: {
  //   controls: {
  //     disabled: true
  //   },
  //   options: {
  //     showPanel: false
  //   }
  // }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // backgroundColor: { control: 'color' },
  //   onClick: {
  //     action: 'clicked'
  //   },
  // },
} as ComponentMeta<typeof BaseColorDom>;

const Template: ComponentStory<typeof BaseColorDom> = (args) => <BaseColorDom {...args} />;

export const BaseColor = Template.bind({});