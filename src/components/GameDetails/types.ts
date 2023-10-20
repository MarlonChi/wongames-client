export type GameDetailsProps = {
  developer: string
  platforms: Platform[]
  releaseDate: string
  publisher: string
  rating: Rating
  genres: string[]
}

export type Platform = 'windows' | 'linux' | 'mac'

export type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'
