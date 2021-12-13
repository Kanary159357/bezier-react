/* External dependencies */
import { MouseEvent } from 'react'

/* Internal dependencies */
import { BezierComponentProps, SizeProps, DisableProps } from 'Types/ComponentProps'

interface SwitchOptions {
  checked?: boolean
  onClick?: (checked: boolean, event: MouseEvent) => void
}

export default interface SwitchProps extends
  BezierComponentProps,
  SizeProps<number>,
  DisableProps,
  SwitchOptions {}

type StyledSwitchProps = Required<SizeProps<number> & Omit<SwitchOptions, 'onClick'>>

export interface WrapperProps extends
  StyledSwitchProps,
  Required<DisableProps> {}

export interface ContentProps extends StyledSwitchProps {}
