import React, {
  useMemo,
  useState,
} from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import { base } from 'paths.macro'

import { Typography } from '~/src/foundation'

import { getTitle } from '~/src/utils/storyUtils'

import { Text } from '~/src/components/Text'

import Radio from './Radio'
import type RadioProps from './Radio.types'

export default {
  title: getTitle(base),
  component: Radio,
  argTypes: {
    onClick: { action: 'onClick' },
  },
} as Meta

const Template: Story<RadioProps> = ({
  children,
  ...otherRadioProps
}) => (
  <Radio {...otherRadioProps}>
    <Text>
      { children }
    </Text>
  </Radio>
)

export const Primary = Template.bind({})
Primary.args = {
  value: 1,
  watchingValue: 1,
  disabled: false,
  children: 'hello, world!',
}

export const MultiRadio = ({
  optionsRange,
  disableAfter,
}) => {
  const [selected, setSelected] = useState(1)

  const options = useMemo(() => Array.from(Array(optionsRange).keys()), [optionsRange])

  return (
    <>
      <Text typo={Typography.Size24}>
        selected Option: { selected }
      </Text>

      {
        options.map(value => (
          <Radio
            key={value}
            value={value}
            watchingValue={selected}
            onClick={v => setSelected(v)}
            disabled={value >= disableAfter}
          >
            <Text>
              { value }st option
            </Text>
          </Radio>
        ))
      }
    </>
  )
}

MultiRadio.args = {
  optionsRange: 10,
  disableAfter: 8,
}

MultiRadio.argTypes = {
  optionsRange: {
    control: {
      type: 'range',
      min: 1,
      max: 20,
    },
  },
}
