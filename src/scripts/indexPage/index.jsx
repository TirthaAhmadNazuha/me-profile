import { BaseComponent } from 'amber';
import './styles.sass';
import Navbar from '../components/navigationBar';
import ContentRouter from '../components/contentRouter';

const IndexPage = class extends BaseComponent {
  render() {
    return (
      <div id="index-page">
        <header>
          <div className="cover">
            <div className="cover-image">
              <span>Will show image</span>
            </div>
          </div>
          <div className="profile-info">
            <div className="profile-image" />
            <h2 className="name">Tirtha Ahmad Nazuha</h2>
            <h5>JavaScript Develover</h5>
          </div>
          <Navbar />
        </header>
        <ContentRouter />
      </div>
    );
  }
};

export default IndexPage;
