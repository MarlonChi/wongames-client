export type GalleryProps = {
  items: GalleryImageProps[]
}

export type GalleryImageProps = {
  src: string
  label: string
}

export type ModalProps = {
  isOpen: boolean
}
