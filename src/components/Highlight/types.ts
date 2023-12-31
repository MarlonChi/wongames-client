export type HighlightProps = {
  title: string
  subtitle: string
  backgroundImage: string
  floatImage?: string
  buttonLabel: string
  buttonLink: string
  alignment?: 'right' | 'left'
}

export type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'alignment'>
