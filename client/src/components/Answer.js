import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.h2`
	width: 100%;
	color: red;
	display: flex;
	justify-content: space-around;
`

const Answer = props => {
	return (
		<Wrapper>
			{props.answer}
		</Wrapper>
	)
}

export default Answer
