import { BaseComponent } from 'amber';
import '../styles/index.sass';
import IndexPage from './indexPage';

const App = class extends BaseComponent {
  render() {
    return (
      <div className="app">
        <IndexPage />
      </div>
    );
  }
};

export default App;
