import styled from 'styled-components'

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`

const InfoListGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }

`
const InfoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const InfoListItem = styled.li`
  line-height: 1.8;

  & b > {
    font-weight: var(--fw-bold);
  }
`

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  gap: 1.5rem;
  
  & > b{
    font-weight: var(--fw-bold);
  }
  
  @media(min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`

const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  gap: 1rem;
`

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`

const Info = (props) => {
    const {
        title,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion, topLevelDomain, currencies = [],
        languages = [],
        borders = [],
        link,
    } = props
    return (
        <Wrapper>
            <InfoImage src={ flag } alt={ title }/>
            <div>
                <InfoTitle>{ title }</InfoTitle>
                <InfoListGroup>
                    <InfoList>
                        <InfoListItem>
                            <b>Native Name:</b> { nativeName }
                        </InfoListItem>
                        <InfoListItem>
                            <b>Population:</b> { population }
                        </InfoListItem>
                        <InfoListItem>
                            <b>Region:</b> { region }
                        </InfoListItem>
                        <InfoListItem>
                            <b>Subregion:</b> { subregion }
                        </InfoListItem>
                        <InfoListItem>
                            <b>Capital:</b> { capital }
                        </InfoListItem>
                        <InfoListItem>
                            <b>Native Name:</b> { nativeName }
                        </InfoListItem>
                    </InfoList>
                    <InfoList>
                        <InfoListItem>
                            <b>Top Level Domain:</b> { topLevelDomain.map(d => <span
                            key={ d }>{ d }</span>) }
                        </InfoListItem>
                        <InfoListItem>
                            <b>Currencies:</b> { currencies.map(c => <span
                            key={ c.code }>{ c.name } </span>) }
                        </InfoListItem>
                        <InfoListItem>
                            <b>Languages:</b> { languages.map(l => <span
                            key={ l.name }>{ l.name } </span>) }
                        </InfoListItem>
                    </InfoList>
                </InfoListGroup>
                <Meta>
                    <b>Border Countries</b>
                    {!borders.length ? (
                        <span>There is no border countries</span>
                    ) : (
                        <TagGroup>
                            {borders.map(b => (<Tag key={b} >{b}</Tag>))}
                        </TagGroup>
                    )}
                </Meta>
            </div>
        </Wrapper>
    )
}

export default Info