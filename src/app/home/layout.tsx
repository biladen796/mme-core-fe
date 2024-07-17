'use client';
import { bcatFacePink } from '@/assets/images';
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
            label: 'Buy',
            url: '#buy',
          },
          {
            id: 3,
            label: 'Info',
            url: '#info',
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
  background-image: url(${bcatFacePink.src});
  background-repeat: repeat;
  background-size: 68px 68px;
  background-position: top left;
  min-height: 100vh;
`;
