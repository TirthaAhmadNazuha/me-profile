function Link(props, childs) {
  const { to } = props;
  return (
    <a
      href={to}
      onClick={() => {
        window.dispatchEvent(new PopStateEvent('popstate'));
      }}
    >
      {childs}
    </a>
  );
}

export default Link;
