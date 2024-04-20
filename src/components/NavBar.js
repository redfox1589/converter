import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Конвертер</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/pages/news">Новости</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;