import * as SlotPrimitive from '@radix-ui/react-slot';
import classnames from 'classnames';
import * as React from 'react';

import { As, unreachable } from '../helpers';

export type TextSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type TextColor = 'gray' | 'white';
export type TextTransform = 'uppercase' | 'lowercase' | 'capitalize';
export type TextWeight = 'normal' | 'medium';

interface TextOwnProps {
  color?: TextColor;
  size?: TextSize;
  transform?: TextTransform;
  weight?: TextWeight;
}

type TextProps = As<'span', 'div', 'p'> & TextOwnProps;

const getSizesClassNames = (size: TextSize | undefined) => {
  switch (size) {
    case '1':
      return 'text-xs';
    case undefined:
    case '2':
      return 'text-sm';
    case '3':
      return 'text-base';
    case '4':
      return 'text-lg';
    case '5':
      return ['text-17px', 'md:text-xl tracking-[-0.16px]'];
    case '6':
      return 'text-2xl tracking-[-0.288px]';
    case '7':
      return 'text-[28px] leading-[34px] tracking-[-0.416px]';
    case '8':
      return 'text-[35px] leading-[42px] tracking-[-0.64px]';
    case '9':
      return 'text-6xl leading-[73px] tracking-[-0.896px]';
    default:
      return unreachable(size);
  }
};

const getWeightClassNames = (weight: TextWeight | undefined) => {
  switch (weight) {
    case undefined:
    case 'normal':
      return 'font-normal';
    case 'medium':
      return 'font-medium';
    default:
      return unreachable(weight);
  }
};

export const Text = React.forwardRef<HTMLSpanElement, Readonly<TextProps>>(
  (
    { as: Tag = 'span', size = '2', transform, weight = 'normal', className, children, ...props },
    forwardedRef
  ) => (
    <SlotPrimitive.Slot
      ref={forwardedRef}
      className={classnames(
        className,
        transform,
        getSizesClassNames(size),
        getWeightClassNames(weight)
      )}
      {...props}
    >
      <Tag>{children}</Tag>
    </SlotPrimitive.Slot>
  )
);

Text.displayName = 'Text';
