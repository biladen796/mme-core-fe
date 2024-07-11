import Menu from '@/shared-components/menu';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
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
            label: 'Tokenomic',
            url: '/tokenomic',
          },
          {
            id: 4,
            label: 'FAQS',
            url: '/faqs',
          },
        ]}
      />
      {children}
    </section>
  );
};

export default HomeLayout;
