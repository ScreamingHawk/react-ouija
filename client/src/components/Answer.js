import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.h2`
	width: 100%;
	color: red;
	display: flex;
	justify-content: space-around;
`

const Answer = props => {

	const { answer } = props

	if (!answer){
		return null
	}

	return (
		<div>
			<span>Spirits say: </span>
			<Wrapper>
				{answer}
			</Wrapper>
		</div>
	)
}

export default Answer
