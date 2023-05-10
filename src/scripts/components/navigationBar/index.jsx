import { BaseComponent } from 'amber';
import './styles.sass';
import Link from '../link';

const NavigationBar = class extends BaseComponent {
  render() {
    return (
      <nav id="navbar">
        <div className="links">
          <Link to="/">overview</Link>
          <Link to="/galery">galery</Link>
          <Link to="/projects">projects</Link>
          <Link to="/contact">contact</Link>
          <Link to="/support">support</Link>
        </div>
      </nav>
    );
  }

  onConnected() {
    this.element.querySelector(`a[href="${window.location.pathname}"]`).classList.add('on');
  }
};

const Navbar = new NavigationBar();
Navbar.processJSX();

export default Navbar;
