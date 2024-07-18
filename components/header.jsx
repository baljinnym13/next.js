const Header = () => {
  return (
    <header
      style={{
        color: "white",
        display: "flex",
        height: "80px",
        backgroundColor: "#333",
      }}
    >
      <img
        src="https://img.freepik.com/premium-vector/dragon-logo-template-isolated-brand-identity-icon-abstract-vector-graphic_1239135-473.jpg?w=2000"
        alt="logo"
      />
      <div>
        <ul className="menu">
          <li>home</li>
          <li>service</li>
          <li>abaut</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
