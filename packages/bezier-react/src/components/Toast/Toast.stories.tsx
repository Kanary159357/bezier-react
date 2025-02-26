import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import { base } from 'paths.macro'

import { styled } from '~/src/foundation'

import { noop } from '~/src/utils/functionUtils'
import {
  getTitle,
  iconList,
} from '~/src/utils/storyUtils'

import {
  Button,
  ButtonColorVariant,
  ButtonStyleVariant,
} from '~/src/components/Button'
import { ProgressBar } from '~/src/components/ProgressBar'
import {
  StackItem,
  VStack,
} from '~/src/components/Stack'

import type ToastProps from './Toast.types'
import { type ToastOptions } from './Toast.types'
import {
  ToastAppearance,
  ToastPreset,
} from './Toast.types'
import ToastElement from './ToastElement'
import ToastProvider from './ToastProvider'
import useToast from './useToast'

export default {
  title: getTitle(base),
  component: ToastElement,
  argTypes: {
    preset: {
      control: {
        type: 'select',
        options: ToastPreset,
      },
    },
    appearance: {
      control: {
        type: 'radio',
        options: {
          ...ToastAppearance,
          undefined,
        },
      },
    },
    iconName: {
      control: {
        type: 'select',
        options: [
          ...iconList,
          undefined,
        ],
      },
    },
    content: {
      control: {
        type: 'text',
      },
    },
    autoDismissTimeout: {
      control: {
        type: 'range',
        min: 1000,
        max: 6000,
        step: 100,
      },
    },
  },
} as Meta

const Container = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #ddd;
  border: 1px solid grey;
`

const Template: Story<ToastProps> = (args) => <ToastElement {...args} />

export const Primary = Template.bind({})

Primary.args = {
  content: '안내문구입니다.\nnewLine',
  preset: ToastPreset.Default,
  appearance: undefined,
  iconName: undefined,
  actionContent: '새로고침',
  onClick: noop,
}

function Div({
  content,
  preset,
  appearance,
  iconName,
  actionContent,
}) {
  const toast = useToast()

  const [count, setCount] = useState(0)
  const [display, setDisplay] = useState('액션 함수 테스트')

  const handleAction = (value) => {
    setDisplay(value)
  }

  const handleClick = () => {
    const currentContent = `${count}. ${content}`

    toast.addToast(currentContent, {
      preset,
      appearance,
      iconName,
      actionContent,
      onClick: () => handleAction(currentContent),
    })

    setCount(count + 1)
  }

  const handleNeverDismiss = () => toast.addToast('이건 사라지지 않아요!', {
    appearance: ToastAppearance.Success,
    iconName: 'channel-smile-filled',
    autoDismiss: false,
  })

  const handleRightToast = () => toast.addToast('오른쪽!', {
    rightSide: true,
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleClick, [])

  return (
    <div>
      <button type="button" onClick={handleClick}>Toast!</button>
      <button type="button" onClick={handleRightToast}>Right Side!</button>
      <button type="button" onClick={handleNeverDismiss}>never dismiss</button>
      <button type="button" onClick={() => toast.removeAllToasts()}>RemoveAll!</button>
      <div>{ display }</div>
    </div>
  )
}

interface WithActionProps {
  autoDismissTimeout: number
}

export const WithAction: Story<ToastProps & WithActionProps> = ({
  autoDismissTimeout,
  content,
  preset,
  appearance,
  iconName,
  actionContent,
}) => (
  <Container id="story-wrapper">
    <ToastProvider
      autoDismissTimeout={autoDismissTimeout}
    >
      <Div
        content={content}
        preset={preset}
        appearance={appearance}
        iconName={iconName}
        actionContent={actionContent}
      />
    </ToastProvider>
  </Container>
)

WithAction.args = {
  autoDismissTimeout: 2000,
  content: '안내문구입니다.',
  preset: ToastPreset.Default,
  appearance: undefined,
  iconName: undefined,
  actionContent: '액션 함수 테스트',
}

function ZIndexController() {
  const { addToast } = useToast()

  const handleClick = useCallback((zIndex?: number) => {
    addToast(`z-index: ${zIndex}`, {
      preset: ToastPreset.Default,
      zIndex,
    })
  }, [addToast])

  return (
    <div>
      <button type="button" onClick={() => handleClick()}>default</button>
      <button type="button" onClick={() => handleClick(1000)}>z-index: 1000</button>
      <button type="button" onClick={() => handleClick(3000)}>z-index: 3000</button>
    </div>
  )
}

const Box = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2000;
  width: 100vw;
  height: 200px;
  background-color: ${({ foundation }) => foundation?.theme['bgtxt-orange-lighter']};
`

export const WithZIndex: Story<ToastProps> = () => (
  <Container id="story-wrapper">
    <ToastProvider>
      <ZIndexController />
      <Box>
        z-index: 2000
      </Box>
    </ToastProvider>
  </Container>
)

function CustomContentToastController() {
  const toast = useToast()

  const onClickCustomButtonInToast = useCallback(() => {
    toast.removeAllToasts()
  }, [toast])

  const handleClick = useCallback((option?: ToastOptions) => {
    toast.addToast((
      <VStack spacing={6} align="stretch">
        <StackItem>
          <Button
            text="Close All Toasts"
            styleVariant={ButtonStyleVariant.Primary}
            colorVariant={ButtonColorVariant.Blue}
            onClick={onClickCustomButtonInToast}
          />
        </StackItem>
        <StackItem>
          <ProgressBar
            width="100%"
            value={Math.random()}
          />
        </StackItem>
      </VStack>
    ), {
      preset: ToastPreset.Default,
      ...option,
    })
  }, [
    toast,
    onClickCustomButtonInToast,
  ])

  return (
    <div>
      <button type="button" onClick={() => handleClick()}>default</button>
      <button type="button" onClick={() => handleClick({ autoDismiss: false })}>never dismiss</button>
    </div>
  )
}

export const CustomContent: Story<ToastProps> = () => (
  <Container id="story-wrapper">
    <ToastProvider>
      <CustomContentToastController />
    </ToastProvider>
  </Container>
)

function UpdateContentToastController() {
  const toast = useToast()
  const toastId = useRef('')

  const onClickCustomButtonInToast = useCallback(() => {
    toast.removeAllToasts()
  }, [toast])

  const handleOpenToast = useCallback((option?: ToastOptions) => {
    toastId.current = toast.addToast((
      <VStack spacing={6} align="stretch">
        <StackItem>
          <Button
            text="Close All Toasts"
            styleVariant={ButtonStyleVariant.Primary}
            colorVariant={ButtonColorVariant.Blue}
            onClick={onClickCustomButtonInToast}
          />
        </StackItem>
        <StackItem>
          <ProgressBar
            width="100%"
            value={Math.random()}
          />
        </StackItem>
      </VStack>
    ), {
      preset: ToastPreset.Default,
      ...option,
    })
  }, [
    toast,
    onClickCustomButtonInToast,
  ])

  const handleUpdateToast = useCallback((option?: ToastOptions) => {
    if (toastId.current) {
      toast.updateToast(toastId.current, (
        <VStack spacing={6} align="stretch">
          <StackItem>
            <Button
              text="Close All Toasts"
              styleVariant={ButtonStyleVariant.Primary}
              colorVariant={ButtonColorVariant.Blue}
              onClick={onClickCustomButtonInToast}
            />
          </StackItem>
          <StackItem>
            <ProgressBar
              width="100%"
              value={Math.random()}
            />
          </StackItem>
        </VStack>
      ), {
        preset: ToastPreset.Default,
        ...option,
      })
    }
  }, [
    toast,
    onClickCustomButtonInToast,
  ])

  return (
    <div>
      <button type="button" onClick={() => handleOpenToast({ autoDismiss: false })}>Add</button>
      <button type="button" onClick={() => handleUpdateToast({ autoDismiss: true })}>Update</button>
    </div>
  )
}

export const UpdateContentToast: Story<ToastProps> = () => (
  <Container id="story-wrapper">
    <ToastProvider>
      <UpdateContentToastController />
    </ToastProvider>
  </Container>
)
