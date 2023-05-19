import fbIcon from "../assets/fb.svg";
import instaIcon from "../assets/insta.svg";
import twitterIcon from "../assets/twitter.svg";

export default function Footer() {
  return (
    <div className="container-fluid border-top">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <div className="col-md-4 d-flex align-items-center">
          <span className="text-muted">© 2021 Company, Inc</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="/">
              <img src={fbIcon} alt="facebook page" />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="/">
              <img src={instaIcon} alt="insta page" />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="/">
              <img src={twitterIcon} alt="twitter page" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
