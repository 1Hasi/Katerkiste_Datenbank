import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import DOMPurify from "dompurify";



export default function KontaktScreen(props) {
return (																	


	<div className="main"> 																				


			<div className="content">															
				<div className="contact col-6 left">								
					<h2>Kontakt</h2>

					<div className="contact_data col-12 left">
						<img src="img/icons/telefon_white.png" alt="Telefon"></img>
						<a href="tel:+49 1523 6260903" target="_blank">
							07321 9642069
						</a>
					</div>

					<div className="contact_data col-12 left">
						<img src="img/icons/mail_white.png" alt="MailTo"></img>
						<a href="mailto:katerkiste@gmx.de" target="_blank">
							katerkiste@gmx.de
						</a>
					</div>

					<div className="contact_data col-12 left">
						<img src="img/icons/instagram_white.png" alt="Intagram"/>
						<a href="https://www.instagram.com/kater_kiste/" target="_blank">
								@kater_kiste
						</a>
					</div>

					<div className="contact_data col-12 left">
						<img src="img/icons/facebook_white.png" alt="Facebook"></img>
						<a href="https://www.facebook.com/kater.kiste/" target="_blank">
							kater.kiste
						</a>
					</div>

					<div className="contact_data col-12 left">
						<img src="img/icons/twitter_white.png" alt="Twitter"></img>
						<a href="https://twitter.com/katerkiste/" target="_blank">
							@katerkiste
						</a>
					</div>
				</div>


				<div className="impressum col-6 left">										
					<h2>Impressum</h2>
					<p> &#169; Katerkiste GmbH <br></br>
							Katzenallee 69 <br></br>
							89522 Heidenheim <br></br> <br></br>

							Handelsregister-Nr.: DSS43312 <br></br>
							Amtsgericht Heidenheim <br></br>
							USt.-ID-Nr.: DE3467825
					</p>
				</div>

				<div className="col-6 left">
					<div className="horizontal_line"></div>
				</div>

				<div className="team_k col-6 left">						
					<Link to="/ueberuns">
						<h2>Das Team</h2>
					</Link>
					<p>
						Hasan Haji <br></br>
						Max Hettler <br></br>
						Dennis Prichodko <br></br>
						Patrick Schneider <br></br>
						Philipp Wagner
					</p>
				</div>
			</div>																							
		</div>	
																										
);
};