export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: React.ReactNode
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

export type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth'
>
