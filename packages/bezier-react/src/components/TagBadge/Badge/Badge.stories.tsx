import React from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import { base } from 'paths.macro'

import { getTitle } from '~/src/utils/storyUtils'

import {
  TagBadgeSize,
  TagBadgeVariant,
} from '~/src/components/TagBadge'

import { Badge } from './Badge'
import type BadgeProps from './Badge.types'

export default {
  title: getTitle(base),
  component: Badge,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: Object.keys(TagBadgeSize).map(k => TagBadgeSize[k]),
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: Object.keys(TagBadgeVariant).map(k => TagBadgeVariant[k]),
      },
    },
  },
} as Meta

const Template: Story<BadgeProps> = ({
  children,
  ...badgeProps
}) => (
  <Badge {...badgeProps}>
    { children }
  </Badge>
)

export const Primary: Story<BadgeProps> = Template.bind({})
Primary.args = {
  children: 'Design',
  size: TagBadgeSize.M,
  iconName: 'apple',
  variant: TagBadgeVariant.Default,
}
