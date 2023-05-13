import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div class="p-3 mb-2 bg-secondary-subtle text-emphasis-secondary">
    <Nav className="justify-content-evenly py-3" activeKey="/">
      <Nav.Item >
        <Link to="/home" type="button" class="btn btn-light"> Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/Form" type="button" class="btn btn-light"> Employee_form</Link>
      </Nav.Item>
    </Nav>
    </div>
  );
}