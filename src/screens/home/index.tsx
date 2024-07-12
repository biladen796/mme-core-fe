'use client';
import {
  BirdEyeIcon,
  CoinGeckoIcon,
  CoinMarketCapIcon,
  DexScreenerIcon,
  DexToolsIcon,
  TeleIcon,
  XIcon,
  backgroundBanner,
} from '@/assets/images';
import { homeContent } from '@/screens/home/constants';
import styled from '@emotion/styled';
import { Button, Container, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <StyledMainBanner>
        <Container
          style={{
            height: 800,
          }}>
          <Stack
            justifyContent={'center'}
            alignItems={'center'}
            height={'100%'}>
            <Image
              src={homeContent.banner.image}
              alt="Banner Image"
              style={{
                width: 350,
                height: 350,
                border: '5px solid white',
                borderRadius: 20,
              }}
              objectFit="contain"
            />
            <StyledTextContent
              style={{
                maxWidth: '50%',
                marginTop: 20,
              }}>
              {homeContent.banner.bannerText}
            </StyledTextContent>
          </Stack>
        </Container>
      </StyledMainBanner>
      <div>
        <Container>
          <Stack
            justifyContent={'center'}
            alignItems={'center'}
            height={'100%'}>
            <StyledButton
              style={{
                maxWidth: '60%',
              }}>
              Buy some {homeContent.token.tokenName}
            </StyledButton>
            <StyledTextContent
              style={{
                maxWidth: '60%',
                margin: '20px 0',
              }}>
              {homeContent.token.contractAddress}
            </StyledTextContent>
            <Stack flexWrap={'wrap'} direction={'row'}>
              <StyledLink href={homeContent.links.teleLink}>
                <Image
                  src={TeleIcon}
                  style={{
                    width: 28,
                    height: 28,
                  }}
                  alt="tele"
                />
              </StyledLink>
              <StyledLink href={homeContent.links.xLink}>
                <Image
                  style={{
                    width: 28,
                    height: 28,
                  }}
                  src={XIcon}
                  alt="X"
                />
              </StyledLink>
              <StyledLink href={homeContent.links.dexscreenerLink}>
                <Image
                  style={{
                    width: 28,
                    height: 28,
                  }}
                  src={DexScreenerIcon}
                  alt="dexscreener"
                />
              </StyledLink>
              <StyledLink href={homeContent.links.dextoolsLink}>
                <Image
                  style={{
                    width: 28,
                    height: 28,
                  }}
                  src={DexToolsIcon}
                  alt="dexstools"
                />
              </StyledLink>
            </Stack>
            <Stack flexWrap={'wrap'} direction={'row'} mt={4}>
              <StyledLink href={homeContent.links.birdEyeLink}>
                <Image
                  style={{
                    width: 28,
                    height: 28,
                  }}
                  src={BirdEyeIcon}
                  alt="BirdEye"
                />
              </StyledLink>
              <StyledLink href={homeContent.links.coingeckoLink}>
                <Image
                  style={{
                    width: 28,
                    height: 28,
                  }}
                  src={CoinGeckoIcon}
                  alt="CoinGecko"
                />
              </StyledLink>
              <StyledLink href={homeContent.links.coinmarketcapLink}>
                <Image
                  style={{
                    width: 28,
                    height: 28,
                  }}
                  src={CoinMarketCapIcon}
                  alt="CoinMarketCap"
                />
              </StyledLink>
            </Stack>
          </Stack>
        </Container>
      </div>
      <div>
        <Container
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 70,
            marginBottom: 70,
          }}>
          <div
            style={{
              maxWidth: '60%',
            }}>
            <StyledTextContent>
              &bull; 100% locked liquidity pool
            </StyledTextContent>
            <StyledTextContent>&bull; No presale</StyledTextContent>
            <StyledTextContent>
              &bull; Only way to get {homeContent.token.tokenName} is to buy it
              on the open market
            </StyledTextContent>
          </div>
        </Container>
      </div>
      {/* <div>
        <Container>
          <div>FAQS content</div>
        </Container>
      </div> */}
    </div>
  );
};

export default Home;

const StyledMainBanner = styled.div`
  height: 800px;
  /* background: url(${backgroundBanner.src}) center top / 100% no-repeat; */
`;

const StyledTextContent = styled.div`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  font-size: 28px;
  font-weight: 500;
  line-height: 1.4;
`;

const StyledButton = styled(Button)`
  background: var(--background-button-color);
  color: var(--text-color);
  padding: 10px 20px;
  font-size: 24px;
  :hover {
    background: var(--background-button-color-hover);
  }
`;

const StyledLink = styled(Link)`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background-color: var(--background-button-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 15px;
`;
