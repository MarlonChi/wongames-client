export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
}

type ItemProps = {
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
