export default [
  {
    title: 'Price',
    name: 'price',
    type: 'checkbox',
    field: [
      {
        label: 'Under $50',
        name: 'under-50'
      },
      {
        label: 'Under $100',
        name: 'under-100'
      },
      {
        label: 'Under $150',
        name: 'under-150'
      },
      {
        label: 'Under $200',
        name: 'under-200'
      },
      {
        label: 'Free',
        name: 'free'
      },
      {
        label: 'Discounted',
        name: 'discounted'
      }
    ]
  },
  {
    title: 'Sort by',
    name: 'sort_by',
    type: 'radio',
    field: [
      {
        label: 'High to low',
        name: 'high-to-low'
      },
      {
        label: 'Low to high',
        name: 'low-to-high'
      }
    ]
  },
  {
    title: 'System',
    name: 'system',
    type: 'checkbox',
    field: [
      {
        label: 'Windows',
        name: 'windows'
      },
      {
        label: 'Linux',
        name: 'linux'
      },
      {
        label: 'MacOS',
        name: 'macos'
      }
    ]
  },
  {
    title: 'Genre',
    name: 'genre',
    type: 'checkbox',
    field: [
      {
        label: 'Action',
        name: 'action'
      },
      {
        label: 'Adventure',
        name: 'adventure'
      },
      {
        label: 'FPS',
        name: 'fps'
      },
      {
        label: 'MMORPG',
        name: 'mmorpg'
      },
      {
        label: 'RPG',
        name: 'rpg'
      },
      {
        label: 'Indie',
        name: 'indie'
      },
      {
        label: 'Shooters',
        name: 'shooters'
      },
      {
        label: 'Simulation',
        name: 'simulation'
      }
    ]
  }
]
