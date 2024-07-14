'use client';
import { homeContent } from '@/screens/home/constants';
import styled from '@emotion/styled';
import { Container, Stack } from '@mui/material';
import * as React from 'react';
import Image from 'next/image';
import { billy } from '@/assets/images';
import Link from 'next/link';

interface MenuItem {
  id: number;
  label: string;
  url: string;
}

function ResponsiveAppBar({ items }: { items: MenuItem[] }) {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        height: 80,
        background: 'var(--background-header)',
        zIndex: 99,
      }}>
      <Container
        style={{
          height: '100%',
        }}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent={'space-between'}
          alignItems={'center'}
          height={'100%'}>
          <Link href={'/'}>
            <Stack direction="row" spacing={1} alignItems={'center'}>
              <Image
                src={billy}
                alt=""
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 20,
                }}
              />
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                }}>
                {homeContent.token.tokenName}
              </div>
            </Stack>
          </Link>
          <Container>
            <Stack
              width={'100%'}
              direction="row"
              spacing={12}
              justifyContent={'center'}>
              {items.map((item) => (
                <StyledMenuButton
                  key={item.id}
                  onClick={() => {
                    const element = document.getElementById(item.url);
                    element?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'end',
                    });
                  }}>
                  {item.label}
                </StyledMenuButton>
              ))}
            </Stack>
          </Container>
          <div></div>
        </Stack>
      </Container>
    </header>
  );
}
export default ResponsiveAppBar;

const StyledMenuButton = styled.div`
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  :hover {
    color: var(--text-color-hover);
  }
`;
