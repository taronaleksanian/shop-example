import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <div className="border-bottom overflow-hidden">
      <div className="container-fluid">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={heroImg}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Online Shop Site: "Globex Marketplace"
            </h1>
            <p className="lead">
              Welcome to Globex Marketplace, your ultimate destination for all
              your shopping needs! Discover a vast collection of products at
              your fingertips and indulge in a seamless online shopping
              experience. Whether you're searching for trendy fashion apparel,
              cutting-edge electronics, home decor essentials, or unique gifts,
              we've got you covered.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
