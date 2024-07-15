'use client';
import styled from '@emotion/styled';
import { Container, Stack } from '@mui/material';
import * as React from 'react';

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
        background: '#A5A06F',
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
          <div>Icon</div>
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
          <div>Connect</div>
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
