const Logo = ({ collapsed }) => {
  return (
    <a href="/">
      <div className="logo" style={{ textAlign: "center" }}>
        {collapsed ? "A.V." : "Algorithm Viewer"}
      </div>
    </a>
  );
};

export default Logo;
