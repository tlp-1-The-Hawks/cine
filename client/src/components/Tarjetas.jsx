import React from 'react';
import '../../public/style/Tarjetas.css'
export const Tarjetas = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="tarjeta card">
              <img
                src="/img/image-example.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="tarjeta card">
              <img
                src="/img/image-example.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="tarjeta card">
              <img
                src="/img/image-example.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="tarjeta card">
              <img
                src="/img/image-example.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
