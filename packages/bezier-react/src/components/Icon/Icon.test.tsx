import React from 'react'

import { LightFoundation } from '~/src/foundation'

import { render } from '~/src/utils/testUtils'

import {
  ICON_TEST_ID,
  Icon,
} from './Icon'
import type IconProps from './Icon.types'
import { AllIcon } from './generated'

describe('Icon test >', () => {
  let props: IconProps

  beforeEach(() => {
    props = {
      source: AllIcon,
    }
  })

  const renderIcon = (optionProps?: IconProps) => render(
    <Icon {...props} {...optionProps} />,
  )

  it('Icon inherits fill color', () => {
    const { getByTestId } = renderIcon()

    const renderedIcon = getByTestId(ICON_TEST_ID)

    expect(renderedIcon).toHaveStyle('color: inherit;')
  })

  it('Icon receives custom color Theme Key', () => {
    const { getByTestId } = renderIcon({ source: AllIcon, color: 'bgtxt-olive-dark' })

    const renderedIcon = getByTestId(ICON_TEST_ID)

    expect(renderedIcon).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-olive-dark']};`)
  })
})
