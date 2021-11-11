import Header from './Header/Header';

function Layout(props: any) {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
export default Layout;
