import { Link } from 'react-router-dom';

export default function Hello() {
  return (
    <div>
      <div className="Hello">
        <h1>My photo Cropper</h1>
      </div>
      <div className="Hello">
        <Link to="/photo">
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="camera">
              📸 &nbsp;
            </span>
            Crop Photo
          </button>
        </Link>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
}
