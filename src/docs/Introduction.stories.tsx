import { forwardRef } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from "@emotion/styled";
import { css } from '@emotion/react'

const IntroductionDom = forwardRef((props: any, ref) => {
  return (
    <h1 style={{ color: '#fff' }}>welcom to YRC components</h1>
  )
})

export default {
  title: 'Getting Started/Introduction',
  component: IntroductionDom,
  sort: 1,
  parameters: {
    controls: {
      disabled: true
    },
    options: {
      showPanel: false
    }
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // backgroundColor: { control: 'color' },
  //   onClick: {
  //     action: 'clicked'
  //   },
  // },
} as ComponentMeta<typeof IntroductionDom>;

const Template: ComponentStory<typeof IntroductionDom> = (args) => <IntroductionDom {...args} />;

export const Introduction = Template.bind({});