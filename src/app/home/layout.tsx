'use client';
import { billy } from '@/assets/images';
import Footer from '@/shared-components/footer';
import Menu from '@/shared-components/menu';
import styled from '@emotion/styled';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <HomeContainer>
      <Menu
        items={[
          {
            id: 1,
            label: 'Home',
            url: '/home',
          },
          {
            id: 2,
            label: 'Swap',
            url: '/swap',
          },
          {
            id: 3,
            label: 'Info',
            url: '/tokenomic',
          },
          // {
          //   id: 4,
          //   label: 'FAQS',
          //   url: '/faqs',
          // },
        ]}
      />
      {children}
      <Footer />
    </HomeContainer>
  );
};

export default HomeLayout;

const HomeContainer = styled.section`
  background-image: url(${billy.src});
  background-repeat: repeat;
  background-size: auto;
  background-position: top left;
  min-height: 100vh;
`;
