import styled from 'styled-components'

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`
const CountryImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`
const CountryCardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`
const CountryTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`

const CountryCardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0;
`
const CountryCardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);
  
  & > b {
    font-weight: var(--fw-bold);
  }
`

const CountryCard = ({img, title, info = [], onClick}) => {
    return (
        <Wrapper onClick={onClick}>
            <CountryImage src={img} alt={title}/>
            <CountryCardBody>
                <CountryTitle>{title}</CountryTitle>
                <CountryCardList>
                    {info.map(el => (
                        <CountryCardListItem key={el.title}>
                            <b>{el.title}: </b> {el.description}
                        </CountryCardListItem>
                    ))}
                </CountryCardList>
            </CountryCardBody>
        </Wrapper>
    )
}

export default CountryCard