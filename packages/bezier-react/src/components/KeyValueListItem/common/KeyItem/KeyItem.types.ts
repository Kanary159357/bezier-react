import type React from 'react'

import type {
  BezierComponentProps,
  ChildrenProps,
} from '~/src/types/ComponentProps'

import type {
  BezierIcon,
  IconName,
} from '~/src/components/Icon'

interface KeyItemOptions {
  keyIcon?: IconName | BezierIcon | React.ReactNode
}

export interface KeyItemProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  KeyItemOptions {}
