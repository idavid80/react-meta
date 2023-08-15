import './Nav.css'
export default function Nav() {
    return (
      <nav>
        <ul className='nav-links'>
          <li>
            <a href="/home">Hero Sections</a>
          </li>{" "}
          <li>
            <a href="/hightlights">Hightlights</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/footer">Footer</a>
          </li>
        </ul>
      </nav>
    );
  }