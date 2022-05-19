import styled from 'styled-components'

const Wrapper = styled.article`

`
const CountryImage = styled.img`

`
const CountryCardBody = styled.div`

`
const CountryTitle = styled.h3`

`

const CountryCardList = styled.ul`

`
const CountryCardListItem = styled.li`

`

const CountryCard = ({img, title, info = [], onClick}) => {
    return (
        <Wrapper onClick={onClick}>
            <CountryImage />
            <CountryCardBody>
                <CountryTitle></CountryTitle>
                <CountryCardList>
                    {info.map(el => {
                        <CountryCardListItem key={el.title}>
                            <b>{el.title}: </b> {el.description}
                        </CountryCardListItem>
                    })}
                </CountryCardList>
            </CountryCardBody>
        </Wrapper>
    )
}

export default CountryCard