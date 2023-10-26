'use client'

import React from 'react'
import Game from '../../../templates/Game'
import { GameTemplateProps } from '../../../templates/Game/types'
import {
  descriptionHTML,
  galleryMock,
  gameDetails,
  gameInfoMock,
  highlightMock,
  sliderMock
} from '../../../templates/Game/mock'

export default function Index(props: GameTemplateProps) {
  return (
    <Game
      {...props}
      cover="'https://images.unsplash.com/photo-1531842477197-54acf89bff98?auto=format&fit=crop&q=80&w=1365&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
      gameInfo={gameInfoMock}
      gallery={galleryMock}
      description={descriptionHTML}
      details={gameDetails}
      upcomingGames={sliderMock}
      upcomingHighlight={highlightMock}
      recommendedGames={sliderMock}
    />
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'cyberpunk-2077' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: {
      cover:
        'https://images.unsplash.com/photo-1531842477197-54acf89bff98?auto=format&fit=crop&q=80&w=1365&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      gameInfo: {
        title: 'Borderlands 3',
        price: '215,00',
        description:
          'Experience the epic space strategy games that redefined the RTS genre. Control your fleet and buld an armada across more than 30 single-player missions.'
      },
      gallery: galleryMock,
      description: descriptionHTML,
      details: gameDetails,
      upcomingGames: sliderMock,
      upcomingHighlight: highlightMock,
      recommendedGames: sliderMock
    }
  }
}
