import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { signout } from './actions/userActions';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import AngebotsScreen from './screens/AngebotsScreen';


  function App() {

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
      dispatch(signout());
    };

    return (
      <BrowserRouter>
        <div className="grid-container">
          <header className="row">
            <div>
              <Link className="brand" to="/">
                Katerkiste
              </Link>
            </div>
            <div>
            <Link to="/">Home</Link>
              <Link to="/angebote">Angebote</Link>
              <Link to="/ueberuns">Über uns</Link>
              <Link to="/kontakt">Kontakt</Link>
              {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            </div>
          </header>
          <main>
            <Routes>
              <Route path="/product/:id" element={<ProductScreen/>}></Route>
              <Route path="/signin" element={<SigninScreen/>}></Route>
              <Route path="/register" element={<RegisterScreen/>}></Route>
              <Route path="/angebote" element={<AngebotsScreen/>}></Route>
             
              <Route path="/" element={<HomeScreen/>} exact></Route>
            </Routes>
          </main>
          <footer className="row center">										
		      	<div className="foot">
			      	  <h4>Ihr habt Fragen? Schreibt uns!</h4>
				      <div className="socialmedia left">
                <a href="https://www.instagram.com/kater_kiste/" target="_blank">
                  <img src="img/icons/instagram.png" alt="Intagram"/>
                </a>

                <a href="https://www.facebook.com/kater.kiste/" target="_blank">
                  <img src="img/icons/facebook.png" alt="Facebook"/>
                </a>

					      <a href="https://twitter.com/katerkiste/" target="_blank">
							    <img src="img/icons/twitter.png" alt="Twitter"/>
					    	</a>
				      </div>
			      </div>
			      <div className="foot">
              <Link to="/kontakt"><h4>Kontakt</h4></Link>
                <p> &copy Katerkiste GmbH <br></br>
                    Katzenallee 69 <br></br>
                    89522 Heidenheim <br></br>
                    Tel.: 07321 9642069 <br></br>
                </p>
            </div>
            <div className="foot">
                <h4>Sicher und bequem zahlen</h4>

				      <div className="pay left">
                  <a href="https://paypal.com/" target="_blank">
                    <img src="img/icons/paypal.png" alt="PayPal"></img>
                  </a>
                  <a href="https://visa.de/" target="_blank">
                    <img src="img/icons/visa.png" alt="Visa"></img>
                  </a>
                  <a href="https://mastercard.de/" target="_blank">
                    <img src="img/icons/mastercard.png" alt="MasterCard"></img>
                  </a>
              </div>
		        </div>
			      <div className="foot">
				        <a href="#totop">
					        <button className="totop_icon" type="button" title="Zum Anfang der Seite">
					          	&uArr;
					        </button>
			        	</a>
		        	</div>
	       
          
          </footer>
        </div>
      </BrowserRouter>
    );
  }

export default App;
