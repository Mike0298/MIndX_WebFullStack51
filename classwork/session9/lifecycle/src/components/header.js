const Header = (props) => {
  return (
    <header>
      <div className={"logo"}> Logo </div>
      <input onChange={props.keyword} />
    </header>
  );
};

export default Header;
