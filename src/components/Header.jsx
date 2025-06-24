import trollFace from "../images/troll-face.png";
export default function Header() {
  return (
    <header className="header">
      <img src={trollFace} alt="icon" />
      <h1>Memefy</h1>
    </header>
  );
}
