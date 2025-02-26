import { createContext } from 'react'

import { noop } from '~/src/utils/functionUtils'

import { type ToastContextType } from './Toast.types'

const ToastContext = createContext<ToastContextType>({
  add: () => '',
  update: () => '',
  remove: noop,
  removeAll: noop,
  leftToasts: [],
  rightToasts: [],
})

export default ToastContext
