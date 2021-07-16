import Header from './Header/Header';

function Layout(props: any) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
export default Layout;
