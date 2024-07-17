'use client';
import { bcatFace } from '@/assets/images';
import { homeContent } from '@/screens/home/constants';
import styled from '@emotion/styled';
import { Container, Grid, Stack } from '@mui/material';
import Image from 'next/image';
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
        background: 'var(--background-header)',
        zIndex: 99,
      }}>
      <Container
        style={{
          height: 90,
        }}>
        <Grid container spacing={2} alignItems={'center'} height={'100%'}>
          <Grid item xs={2}>
            <Link href={'/'}>
              <Stack direction="row" spacing={1} alignItems={'center'}>
                <Image
                  src={bcatFace}
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
          </Grid>
          <Grid item xs={8}>
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
          </Grid>
          <Grid item xs={2}>
            <div></div>
          </Grid>
        </Grid>
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
