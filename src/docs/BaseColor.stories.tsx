import { forwardRef } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BaseColorMap from '../components/BaseColorMap';

const BaseColorDom = forwardRef((props: any, ref) => {
  return (
    <BaseColorMap {...props}></BaseColorMap>
  )
})

export default {
  title: 'Getting Started/BaseColor',
  component: BaseColorDom,
  sort: 1,
  parameters: {
    controls: {
      disabled: false
    },
    options: {
      showPanel: true
    }
  }
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

BaseColor.args = {
  customStyle: {
    transparent: "transparent",
    current: "currentColor",

    black: "#000",
    blackAlpha: {
      50: 'rgba(0, 0, 0, 0.06)',
    },

    white: "#00f",

    grey: {
      50: '#171d2e',
      100: '#1d2338',
      200: '#262e48',
      300: '#272f4a',
      400: '#323c5d',
      // 该颜色去掉，browser填充是#262e48，描边是#465582, slicer填充#05304b,描边是#03507b
      // 500: '#343740',
      600: '#3a456a',
      700: '#465582',
      // 使用白色百分之50透明度替代
      800: '#53607d',
      900: '#5b637d',
      1000: '#8a9ec3',
      1100: '#e5e5e5',
    },

    red: {
      50: '#ff5959'
    },

    green: {
      50: '#90ffde',
      100: '#26cf70',
      200: '#03507b',
      300: '#07476f',
      // 使用透明度替代
      400: '#0f4770',
      // 使用#0D3856的地方改为#05304b
      500: '#05304b',
      // 使用透明度替代
      600: '#0d3450',
      800: '#051f32',
      900: '#031623',
    },

    greenAlpha: {
      50: 'rgba(0, 180, 255, 0.3)',
      100: 'rgba(50, 194, 255, 0.3)',
      200: 'rgba(0, 143, 203, 0.3)',
      300: 'rgba(0, 180, 255, 0.2)',
      400: 'rgba(0, 170, 255, 1)',
      500: 'rgba(0, 170, 255, 0.2)',
    },

    blue: {
      50: '#0050cb',
      100: '#3282fe',
      200: '#008fcb',
      300: '#32c2ff',
      400: '#3e8aff',
      700: '#0164fe',
      // 使用#35b7f8，#2ac7f6，#00aaff的地方改为#00b4ff
      900: '#00b4ff'
    },

    blueAlpha: {
      50: 'rgba(1, 100, 254, 0.2)',
      100: 'rgba(1, 100, 254, 0.3)',
      200: 'rgba(0, 80, 203, 0.3)',
      300: 'rgba(50, 130, 254, 0.3)',
    },

    yellow: {
      // 使用#ffb400的地方改为#fec900
      100: '#ffb400'
    },

  }
}