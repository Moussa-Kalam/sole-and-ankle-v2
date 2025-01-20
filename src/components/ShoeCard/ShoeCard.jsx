import React from 'react'
import styled from 'styled-components'

import { COLORS, WEIGHTS } from '../../constants'
import { formatPrice, pluralize, isNewShoe } from '../../utils'
import Spacer from '../Spacer'

const colors = {
  'new-release': COLORS.secondary,
  'on-sale': COLORS.primary,
}

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc}/>
        </ImageWrapper>
        <Spacer size={12}/>
        <Row>
          <Name>{name}</Name>
          <Price salePrice={salePrice}>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          <SalePrice>{salePrice && formatPrice(salePrice)}</SalePrice>
        </Row>
        {variant !== 'default' && <Flag variant={variant}>{variant}</Flag>}
      </Wrapper>
    </Link>
  )
}

const Link = styled.a`
    text-decoration: none;
    color: inherit;

`

const Wrapper = styled.article`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 344px;
    height: 370px;
`

const ImageWrapper = styled.div`
    position: relative;
    border-radius: 16px 16px 4px 4px;
    overflow: hidden;
`

const Image = styled.img`
    width: 100%;
`

const Row = styled.div`
    display: flex;
    font-size: 1rem;
    justify-content: space-between;
`

const Name = styled.h3`
    font-weight: ${WEIGHTS.medium};
    color: ${COLORS.gray[900]};
`

const Price = styled.span`
    text-decoration: ${props => props.salePrice && 'line-through'};
`

const ColorInfo = styled.p`
    color: ${COLORS.gray[700]};
`

const SalePrice = styled.span`
    font-weight: ${WEIGHTS.medium};
    color: ${COLORS.primary};
`

const Flag = styled.span`
    display: inline-block;
    position: absolute;
    top: 12px;
    right: -4px;
    color: ${COLORS.white};
    background-color: ${props => colors[props.variant]};
    font-weight: bold;
    text-transform: capitalize;
    border-radius: 2px;
    padding: 9px;
`

export default ShoeCard
