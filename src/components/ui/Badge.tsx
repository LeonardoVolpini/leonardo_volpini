// components/ui/Badge.tsx
import { FC } from 'react'

interface BadgeProps {
  variant?: 'default' | 'secondary' | 'destructive'
  className?: string
  children: React.ReactNode
}

export const Badge: FC<BadgeProps> = ({
  variant = 'default',
  className = '',
  children
}) => {
  const variantClasses = {
    default: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    destructive: 'bg-destructive text-destructive-foreground'
  }

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  )
}