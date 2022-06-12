import cn from 'classnames'
import { FC } from 'react'
import s from './Swatch.module.css'
import { Check } from '@components/icons'
import Button, { ButtonProps } from '@components/ui/Button'
import { isDark } from '@lib/colors'
import Image from 'next/image'

interface Props {
  active?: boolean
  children?: any
  className?: string
  label?: string
  variant?: 'size' | 'color' | string
  color?: string
  image?: string
}

const Swatch: FC<Omit<ButtonProps, 'variant'> & Props> = ({
  className,
  color = '',
  label,
  variant = 'size',
  active,
  ...props
}) => {
  variant = variant?.toLowerCase()
  label = label?.toLowerCase()

  const rootClassName = cn(
    s.root,
    {
      [s.active]: active,
      [s.size]: variant === 'size',
      [s.color]: color,
      [s.dark]: color ? isDark(color) : false,
    },
    className
  )

  return (
    <Button
      className={rootClassName}
      style={
        variant === 'style'
          ? {
              padding: '20px',
              paddingLeft: '40px',
              paddingRight: '40px',
              width: 'fit-content',
            }
          : color
          ? { backgroundColor: color }
          : {}
      }
      aria-label="Variant Swatch"
      {...props}
    >
      {variant === 'color' && active && (
        <span>
          <Check />
        </span>
      )}
      {variant === 'size' ? label : null}
      {variant === 'style' ? (
        active ? (
          <div className="font-bold text-violet">{label}</div>
        ) : (
          <div>{label}</div>
        )
      ) : null}
    </Button>
  )
}

export default Swatch
