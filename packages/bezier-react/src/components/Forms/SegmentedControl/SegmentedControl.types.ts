import type {
  BoxSizingUnit,
  ExplicitDefaulting,
} from '~/src/types/CSS'
import type {
  ActivatableProps,
  BezierComponentProps,
  ChildrenProps,
  OptionItemHostProps,
} from '~/src/types/ComponentProps'

import type { FormComponentProps } from '~/src/components/Forms/Form.types'

type SegmentedControlBaseProps = BezierComponentProps & ChildrenProps & FormComponentProps

type CSSSizingProperty = number | string | ExplicitDefaulting | BoxSizingUnit

export enum SegmentedControlSize {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
}

interface SegmentedControlOptions {
  width?: CSSSizingProperty

  /**
   * Size variant of this SegmentedControl.
   *
   * @default SegmentedControlSize.M
   */
  size?: SegmentedControlSize
}

export default interface SegmentedControlProps extends
  SegmentedControlBaseProps,
  OptionItemHostProps<number>,
  SegmentedControlOptions {}

export interface SegmentedControlItemProps extends
  SegmentedControlBaseProps,
  Pick<ActivatableProps, 'active'> {}
