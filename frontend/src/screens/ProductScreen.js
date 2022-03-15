import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const params = useParams();
  const {id: productId} = params;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/angebote">← Zur Übersicht</Link>
          <div className="flexAngebot">
            <div className="col-4 abstand höhe mitte">
              <img
                className="large"
                src={product.bild}
                alt={product.name}
              ></img>
            </div>
            <div className="breite höhe mitte">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </li>
                <li>Startpreis: {product.preis}€</li>
                <li>
                  Beschreibung:
                  <p>{product.beschreibung}</p>
                </li>
              </ul>
            </div>
            <div className="breite höhe mitte">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Startpreis</div>
                      <div className="price">{product.preis}€</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">Auf Lager</span>
                        ) : (
                          <span className="danger">Ausverkauft</span>
                        )}
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="primary block">Zum Warenkorb</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}