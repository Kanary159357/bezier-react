import { type FlattenSimpleInterpolation } from 'styled-components'

import {
  Rounding,
  type SemanticNames,
} from '~/src/foundation'

import {
  TextFieldSize,
  TextFieldVariant,
} from './TextField.types'

interface BackgroundColorProps {
  variant: TextFieldVariant
  focused: boolean
  hasError: boolean
  readOnly: boolean
}

export function getProperTextFieldBgColor({
  variant,
  focused,
  hasError,
  readOnly,
}: BackgroundColorProps): SemanticNames {
  if (variant === TextFieldVariant.Secondary) { return 'bg-black-lightest' }
  if (variant === TextFieldVariant.Primary && readOnly) { return 'bg-grey-lighter' }
  if (variant === TextFieldVariant.Primary && (focused || hasError)) { return 'bg-white-normal' }
  return 'bg-grey-lightest'
}

interface BorderRadiusProps {
  size: TextFieldSize
}

export function getProperTextFieldBorderRadius({
  size,
}: BorderRadiusProps): FlattenSimpleInterpolation {
  switch (size) {
    case TextFieldSize.XL:
      return Rounding.round12
    default:
      return Rounding.round8
  }
}
