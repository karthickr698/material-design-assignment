import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notfound">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="content">
              <h1>404</h1>
              <h2 style={{ textAlign: "center" }}>
                Not Found / server maintenance
              </h2>
              <div className="content-button">
                <Link to="/home" className="btn btn-lg btn-warning ">
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
