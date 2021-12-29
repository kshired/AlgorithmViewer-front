const Logo = ({ collapsed }) => {
  return (
    <div className="logo" style={{ textAlign: "center" }}>
      {collapsed ? "A.V." : "Algorithm Viewer"}
    </div>
  );
};

export default Logo;
