import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import ghostLogo from '../assets/ghost.png'
import socket from '../global/socket'

const Wrapper = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
`

const GhostWrapper = styled.div`
	display: flex;
	max-width: 100%;
	flex-wrap: wrap;
	justify-content: center;
`

const GhostImg = styled.img.attrs({
	src: ghostLogo,
	alt: 'ghost',
})`
	max-height: 200px;
	max-width: 40vw;
`

const Question = () => {

	const [connected, setConnected] = useState(0)

	useEffect(() => {
		// Listen for connected
		socket.on('connected is', c => {
			console.log(`Setting connected to ${c}`)
			setConnected(c)
		})

		// Unsub
		return () => {
			socket.off('connected is')
		}
	})

	const s = connected === 1 ? '' : 's'

	const ghosts = []
	for (let i = 0; i < connected; i++){
		ghosts.push(<GhostImg key={'ghost'+i}/>)
	}

	return (
		<Wrapper>
			<GhostWrapper>
				{ghosts}
			</GhostWrapper>
			<span>
				{connected} spirit{s} connected...
			</span>
		</Wrapper>
	)
}

export default Question
