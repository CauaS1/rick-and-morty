import './index.css';

export default function Header() {
  return(
    <div className="header">
      <div className="header-content">
        <a href="/">Rick and Morty</a>

        <div className="others">
          <a href="/">Main</a>
          <a href="/location">Location</a>
        </div>
      </div>
    </div>
  );
}