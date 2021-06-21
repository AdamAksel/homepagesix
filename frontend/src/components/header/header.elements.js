import styled from 'styled-components'

export const HeadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  min-width: 410px;
`

export const HeadMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
`

export const HeadItem1 = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 2.8rem;
  min-width: 410px;
  @media (max-width: 910px) {
    font-size: 2.2rem;
  }
  @media (max-width: 659px) {
    font-size: 1.8rem;
  }
`

export const HeadItem2 = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 150%;
  font-weight: 70;
  min-width: 410px;
  @media (max-width: 910px) {
    font-size: 110%;
  }
`

export const HeadItem3 = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 270px;
  height: auto;
  padding: 20px;

  @media (max-width: 910px) {
    max-width: 230px;
  }
`
