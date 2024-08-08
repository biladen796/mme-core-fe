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
  bcatGif,
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
                marginTop: 16,
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
      <div id="#buy">
        <Container>
          <Stack
            justifyContent={'center'}
            alignItems={'center'}
            height={'100%'}>
            <StyledButton
              style={{
                maxWidth: '60%',
              }}
              onClick={() => {
                window.open(homeContent.links.pumpfun, '_blank');
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
              <StyledLink href={homeContent.links.teleLink} target="_blank">
                <Image
                  src={TeleIcon}
                  style={{
                    width: 28,
                    height: 28,
                  }}
                  alt="tele"
                />
              </StyledLink>
              <StyledLink href={homeContent.links.xLink} target="_blank">
                <Image
                  style={{
                    width: 28,
                    height: 28,
                  }}
                  src={XIcon}
                  alt="X"
                />
              </StyledLink>
              <StyledLink
                href={homeContent.links.dexscreenerLink}
                target="_blank">
                <Image
                  style={{
                    width: 28,
                    height: 28,
                  }}
                  src={DexScreenerIcon}
                  alt="dexscreener"
                />
              </StyledLink>
              <StyledLink href={homeContent.links.dextoolsLink} target="_blank">
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
              <StyledLink href={homeContent.links.birdEyeLink} target="_blank">
                <Image
                  style={{
                    width: 28,
                    height: 28,
                  }}
                  src={BirdEyeIcon}
                  alt="BirdEye"
                />
              </StyledLink>
              <StyledLink
                href={homeContent.links.coingeckoLink}
                target="_blank">
                <Image
                  style={{
                    width: 28,
                    height: 28,
                  }}
                  src={CoinGeckoIcon}
                  alt="CoinGecko"
                />
              </StyledLink>
              <StyledLink
                href={homeContent.links.coinmarketcapLink}
                target="_blank">
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
      <div id="#info">
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
              &bull; 100% fairlaunch via pump.fun
            </StyledTextContent>
            <StyledTextContent>&bull; No presale</StyledTextContent>
            <StyledTextContent>
              &bull; Only way to get {homeContent.token.tokenName} is to buy it
              on the open market
            </StyledTextContent>
          </div>
        </Container>
      </div>
      <div>
        <Container
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 70,
          }}>
          <Image width="320" height="320" alt="" src={bcatGif} />
        </Container>
      </div>
    </div>
  );
};

export default Home;

const StyledMainBanner = styled.div`
  height: 800px;
  /* background: url(${backgroundBanner.src}) center top / 100% no-repeat; */
`;

const StyledTextContent = styled.div`
  /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); */
  font-size: 28px;
  font-weight: 500;
  line-height: 1.4;
`;

const StyledButton = styled(Button)`
  background: var(--background-button-color);
  color: var(--text-color);
  padding: 10px 20px;
  font-weight: 700;
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

const StyledTokenContainer = styled.div`
  background-color: var(--background-swap-token-container);
  border-radius: 20px;
  overflow: hidden;
`;

const StyledTokenBody = styled(Stack)`
  background-color: var(--background-swap-token-body);
  padding: 10px 40px;
  border-radius: 20px;
`;

const StyledTokenHeader = styled(Stack)`
  padding: 10px 40px;
  border-radius: 20px;
`;

const StyledTokenName = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding: 8px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--background-button-color);
`;
