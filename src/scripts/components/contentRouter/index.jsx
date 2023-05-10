import { StateComponent } from 'amber';
import './styles.sass';
import OverviewPage from '../../contentPages/overview';
import Link from '../link';

const routes = [
  {
    path: '/',
    component: OverviewPage,
  },
];

const notFoundPage = () => (
  <>
    <h1>404</h1>
    <h4>Not Found!</h4>
    <Link to="/">Go to Home</Link>
  </>
);

const ContentRouter = class extends StateComponent {
  constructor() {
    super();
    this.state = {
      route: routes
        .find((route) => route.path === window.location.pathname).component || notFoundPage,
    };
  }

  find(path) {
    const activeRoute = routes.find((route) => route.path === path);
    if (activeRoute !== undefined) {
      this.insert(activeRoute);
    } else this.insert(notFoundPage);
  }

  insert(route) {
    this.setState({ route: route.component });
  }

  render() {
    return (
      <main className="content-router">
        {this.state.route}
      </main>
    );
  }
};

export default ContentRouter;
