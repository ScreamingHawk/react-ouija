import React from 'react'
import styled from 'styled-components'

import Goodbye from './Goodbye';
import Letter from './Letter';

const Wrapper = styled.main`
	margin-top: 2em;
	font-size: 1.5em;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`

const Row = styled.div`
	display: flex;
	justify-content: center;
`

const Board = () => {

	const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"]

	return (
		<Wrapper>
			{ rows.map((row, i) => (
				<Row key={i}>
					{ row.split('').map(l => (
						<Letter key={l} letter={l} />
					))}
				</Row>
			))}
			<Row>
				<Goodbye />
			</Row>
		</Wrapper>
	)
}

export default Board
