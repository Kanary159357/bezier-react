import React from 'react'

import { fireEvent } from '@testing-library/dom'
import { act } from '@testing-library/react'

import { css } from '~/src/foundation'

import { render } from '~/src/utils/testUtils'

import Tooltip, {
  TOOLTIP_CONTENT_TEST_ID,
  TOOLTIP_TEST_ID,
} from './Tooltip'
import type TooltipProps from './Tooltip.types'

const RootTooltip: React.FC<TooltipProps> = ({ children, ...rests }) => (
  <Tooltip {...rests}>
    { children }
  </Tooltip>
)

describe('Tooltip test >', () => {
  let props: TooltipProps

  const content = 'Hovered'

  beforeEach(() => {
    props = {
      children: 'Text',
      content,
    }

    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  const renderTooltip = (optionProps?: TooltipProps) => render(
    <RootTooltip {...props} {...optionProps} />,
  )

  it('Tooltip with default props', () => {
    const { baseElement, getByTestId } = renderTooltip()

    act(() => {
      fireEvent.mouseOver(getByTestId(TOOLTIP_TEST_ID))

      jest.runAllTimers()
    })

    expect(baseElement).toMatchSnapshot()
  })

  it('Tooltip with contentInterpolation prop', async () => {
    const { baseElement, getByTestId } = renderTooltip({
      contentInterpolation: css`background-color: black;`,
    })

    act(() => {
      fireEvent.mouseOver(getByTestId(TOOLTIP_TEST_ID))

      jest.runAllTimers()
    })

    expect(baseElement).toMatchSnapshot()
  })

  it('TooltipContent not rendered at first', async () => {
    const { queryByTestId } = renderTooltip()

    expect(queryByTestId(TOOLTIP_CONTENT_TEST_ID)).toBeNull()
  })

  it('TooltipContent rendered after mouseover', async () => {
    const { getByTestId, queryByTestId } = renderTooltip()

    act(() => {
      fireEvent.mouseOver(getByTestId(TOOLTIP_TEST_ID))

      jest.runAllTimers()
    })

    expect(queryByTestId(TOOLTIP_CONTENT_TEST_ID)).toBeVisible()
  })

  it('Tooltip with disabled prop not rendered even after mouseover', async () => {
    const { getByTestId, queryByTestId } = renderTooltip({ disabled: true })

    act(() => {
      fireEvent.mouseOver(getByTestId(TOOLTIP_TEST_ID))

      jest.runAllTimers()
    })

    expect(queryByTestId(TOOLTIP_CONTENT_TEST_ID)).toBeNull()
  })
})
