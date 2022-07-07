import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Button',
  component: Button
} as ComponentMeta<typeof Button>

// https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const HelloWorld = Template.bind({})

// https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: 'hello world'
}

export const ClickMe = Template.bind({})
ClickMe.args = {
  label: 'clickMe'
}