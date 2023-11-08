export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

export type ItemProps = {
  title: string
  name: string
  type: string
  field: Fields[]
}

type Fields = {
  label: string
  name: string
}

type Values = {
  [field: string]: boolean | string
}

export type WrapperProps = {
  isOpen: boolean
}
