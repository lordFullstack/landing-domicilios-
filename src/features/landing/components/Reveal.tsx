import { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import { useReveal } from '../hooks/useReveal'

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  delay?: number
}

export const Reveal = ({ children, className, delay = 0, ...props }: RevealProps) => {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      className={clsx(
        'transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:translate-y-0',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      {...props}
    >
      {children}
    </div>
  )
}
