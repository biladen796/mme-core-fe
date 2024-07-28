'use client';
import { catFace } from '@/assets/images';
import { homeContent } from '@/screens/home/constants';
import styled from '@emotion/styled';
import {
  Container,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

interface MenuItem {
  id: number;
  label: string;
  url: string;
}

function ResponsiveAppBar({ items }: { items: MenuItem[] }) {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
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
          height: isBelowMd ? 80 : 90,
        }}>
        {!isBelowMd && (
          <Grid container spacing={2} alignItems={'center'} height={'100%'}>
            <Grid item xs={2}>
              <Link href={'/'}>
                <Stack direction="row" spacing={1} alignItems={'center'}>
                  <Image
                    src={catFace}
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
        )}
        {isBelowMd && (
          <>
            <Stack
              direction="row"
              height={'100%'}
              spacing={1}
              alignItems={'center'}>
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Stack direction="row" spacing={1} alignItems={'center'}>
                <Image
                  src={catFace}
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
            </Stack>
            <Drawer
              anchor="left"
              open={drawerOpen}
              PaperProps={{
                sx: {
                  width: '60%',
                  backgroundColor: 'var(--background-header)',
                },
              }}
              onClose={toggleDrawer(false)}>
              <List>
                {items.map((item) => (
                  <ListItemButton
                    key={item.id}
                    onClick={() => {
                      const element = document.getElementById(item.url);
                      element?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'end',
                      });
                      toggleDrawer(false)();
                    }}>
                    <ListItemText
                      color={'var(--text-color)'}
                      primaryTypographyProps={{
                        sx: {
                          fontSize: 16,
                          fontWeight: 700,
                        },
                      }}
                      primary={item.label}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Drawer>
          </>
        )}
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
