import React, { useState } from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import base from 'paths.macro'

import {
  Typography,
  css,
} from '~/src/foundation'

import { noop } from '~/src/utils/functionUtils'
import { getTitle } from '~/src/utils/storyUtils'

import {
  StarFilledIcon,
  ViewIcon,
} from '~/src/components/Icon'
import { ListItem } from '~/src/components/ListItem'
import type { ListItemProps } from '~/src/components/ListItem'
import { Text } from '~/src/components/Text'

import SectionLabel from './SectionLabel'
import type SectionLabelProps from './SectionLabel.types'

export default {
  title: getTitle(base),
  component: SectionLabel,
} as Meta

const testNumberLabel = (
  <div
    style={{
      width: '30px',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      borderRadius: 6,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text typo={Typography.Size13}>1</Text>
  </div>
)

const testWrapperInterpolation = css`
  background-color: red;
`

const Template: Story<SectionLabelProps & {
  listItemProps: ListItemProps
  wrapperWidth: number
}> = ({ listItemProps, wrapperWidth, ...otherSectionLabelProps }) => {
  const [open, setOpen] = useState(true)
  const toggle = () => setOpen(v => !v)

  return (
    <div style={{ width: wrapperWidth }}>
      <SectionLabel
        {...otherSectionLabelProps}
      />
      <SectionLabel
        rightContent={{
          icon: 'plus-circle',
          iconColor: 'bgtxt-teal-normal',
          onClick: noop,
        }}
        {...otherSectionLabelProps}
      />
      <SectionLabel
        rightContent={(
          <Text typo={Typography.Size13}>5</Text>
        )}
        {...otherSectionLabelProps}
      />
      <SectionLabel
        leftContent={{ icon: 'star-filled' }}
        {...otherSectionLabelProps}
      />
      <SectionLabel
        leftContent={{
          icon: 'star-filled',
          iconColor: 'bgtxt-yellow-normal',
          onClick: noop,
        }}
        {...otherSectionLabelProps}
      />
      <SectionLabel
        leftContent={(
          <div style={{ backgroundColor: 'red', width: 20, height: 20 }} />
        )}
        {...otherSectionLabelProps}
      />
      <SectionLabel
        leftContent={{ icon: 'star-filled' }}
        {...otherSectionLabelProps}
        content="Teams • 3141592653589794626"
      />
      <SectionLabel
        leftContent={{ icon: 'star-filled' }}
        rightContent={[
          testNumberLabel,
          { icon: 'plus-circle-filled', onClick: noop },
          { icon: 'chevron-up', iconColor: 'txt-black-darkest', onClick: noop },
        ]}
        {...otherSectionLabelProps}
        content="Teams • 3141592653589794626"
      />
      <SectionLabel
        rightContent={{ icon: open ? 'chevron-down' : 'chevron-right' }}
        {...otherSectionLabelProps}
        open={open}
        onClick={toggle}
      >
        <ListItem
          leftIcon={StarFilledIcon}
          content="안 읽은 메시지"
          {...listItemProps}
        />
        <ListItem
          leftIcon={ViewIcon}
          content="팔로잉"
          {...listItemProps}
        />
      </SectionLabel>
      <SectionLabel
        help={{ tooltipContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }}
        rightContent={{ icon: open ? 'chevron-down' : 'chevron-right' }}
        {...otherSectionLabelProps}
      />
      <SectionLabel
        rightContent={{ icon: open ? 'chevron-down' : 'chevron-right' }}
        wrapperInterpolation={testWrapperInterpolation}
        {...otherSectionLabelProps}
      />
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  content: 'Teams • 6',
  divider: false,
  listItemProps: {},
  wrapperWidth: 200,
}

Primary.argTypes = {
  wrapperWidth: {
    control: {
      type: 'range',
      min: 100,
      max: 300,
    },
  },
}
