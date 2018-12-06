<Router>
    <div>
    <Header />
      <hr />
      <Breadcrumbs />
      <hr />
      <Route exact path="/" component={HomePage} />
      <Route path="/test" component={Test} />
      <Route path="/topics" component={Topics} />
 
    </div>
  </Router>

const Breadcrumbs = () => <Route path="*" render={props => {
  let parts = props.location.pathname.split("/");
  const place = parts[parts.length-1];
  parts = parts.slice(1, parts.length-1);
  return <p>{parts.map(crumb)}/{place}</p>}} />

const crumb = (part, partIndex, parts) => {
      const path = ['', ...parts.slice(0, partIndex+1)].join("/");
      return <Link key={path} to={path} >{part}</Link>}
