// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Article from './Article'

const meta: Meta<typeof Article> = {
  component: Article,
}

export default meta

type Story = StoryObj<typeof Article>

export const Primary: Story = {}
