import React from 'react'
import styled from 'styled-components'
import {useState, useEffect} from 'react'
import {Container} from './Container'
import { IoMoonOutline, IoMoonSharp} from 'react-icons/io5'

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: (--color-ui-base);
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

const Title = styled.a.attrs({
    href: '/'
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`

const ThemeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  //font-weight: var(--fw-bold);
  text-transform: capitalize;
`



const Header = () => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light' )

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])
    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>The World is Yours!</Title>
                    <ThemeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? (
                            <IoMoonOutline size='14px'/>
                        ) : (<IoMoonSharp size='14px'/>)}

                        <span style={{marginLeft: '0.75rem'}}>{theme} Theme</span>
                    </ThemeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}

export default Header