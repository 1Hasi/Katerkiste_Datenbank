import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import DOMPurify from "dompurify";



export default function UeberUnsScreen(props) {
return (						

<div>
	<div className="main"> 																				


			<div className="content">
			<div className="row center uu_h">															
			<h2>Über uns</h2>
			</div>
				<div className="row left uu_h">														
					<div className="uu_content col-6 left">
						<img src="img/warehouse.jpg" alt="HQ"></img>
					</div>
					<div className="uu_content col-6 left">
						<p> Die Katerkiste ist ein Lieferservice, welcher stets hart daran
							arbeitet, die Wünsche ihrer Kunden zu erfüllen.
							Wir schätzen unsere	Kundschaft sehr, weshalb wir kontinuierlich
							neue Angebote kreieren.
							<br></br><br></br>
							 Die höchste Priorität bei unseren Lieferungen ist die
							 Kundenzufriedenheit. Dementsprechend gehen wir gerne auf
							 individuelle Wünsche ein und sind jederzeit bei Problemen
							 erreichbar.
							<br></br><br></br>
							 Wir haben ein großartiges Team, welches sich mit Freude und
							 Leidenschaft stets bemüht, das Unternehmen voranzubrigen.
							 <br></br><br></br>
							 Wir sind sehr glücklich und dankbar für die großartige
							 Unterstützung von unseren Kunden und Sponsoren. ♥

						</p>
					</div>
				</div>

				<div className="row left">
					<div className="horizontal_line">
					</div>
				</div>

				<div className="row left uu_h">														
					<h2>Das Team</h2>
					<div className="flex">
						<div className="formimg">
							<img className="imgCenter" src="img/MA/HasanH.png" alt="Hasan Haji"></img>
							<h4>CEO</h4>
							<h4 className="name">Hasan Haji</h4>
							<p>Der Kopf der Bande und Gründer der Katerkiste.
								<br></br>
								Zu seinen Aufgaben zählen die Bearbeitung und Weiterleitung von
								eingehenden Aufträgen.
								<br></br>
								Außerdem arbeitet er an der Expansion der Katerkiste, damit
								diese	demnächst auch in deiner Stadt zur Verfügung steht.
								<br></br><br></br>
								Bei zu viel Stress schlägt er seine Arbeiter.
							</p>
						</div>

						<div className="formimg">
							<img className="imgCenter" src="img/MA/MaxH.jpg" alt="Max Hettler"></img>
							<h4>Marketing Manager</h4>
							<h4 className="name">Max Hettler</h4>
							<p>Einer der beiden ältesten Mitgliedern des Lieferservice.
								<br></br>
								Wirbt für das Produkt sowohl lokal als auch im Netz.
								<br></br><br></br>
								Hört er von unzufriedenen Kunden, verschwinden diese für immer.
							</p>
						</div>
						<div className="formimg">
							<img className="imgCenter" src="img/MA/DennisP.png" alt="Dennis Prichodko"></img>
							<h4>Content Creator</h4>
							<h4 className="name">Dennis Prichodko</h4>
							<p> Das andere älteste Mitglied.
								<br></br>
								Erstellt mit Leidenschaft neue
								Produkte, um das Portfolio zu erweitern und neue Kundengruppen
								anzusprechen.
								<br></br><br></br>
								Er wurde noch nie bezahlt.
							</p>
						</div>
						<div className="formimg">
							<img className="imgCenter" src="img/MA/PatrickS.jpg" alt="Patrick Schneider"></img>
							<h4>Content Creator</h4>
							<h4 className="name">Patrick Schneider</h4>
							<p>Nun auch schon längere Zeit mit im Unternehmen tätig.
								<br></br>
								Arbeitet an bestehenden Produkten, um sie zu optimieren und
								an neuartige Trends anzupassen.
								<br></br><br></br>
								Jede dritte Bestellung kommt von ihm.
							</p>
						</div>

						<div className="formimg">
							<img className="imgCenter" src="img/MA/PhilippW.png" alt="Philipp Wagner"></img>
							<h4>Maskottchen</h4>
							<h4 className="name">Philipp Wagner</h4>
							<p>Das neuste Mitglied im Team.
								<br></br>
								Führt die Bestellungen aus und Liefert zuverlässig
								an die vereinbarte Adresse.
								<br></br><br></br>
								Trägt während der Arbeit einen Katzenanzug.
							</p>
						</div>
					</div>
				</div>
			</div>																							
		</div>																									

																									
   </div>

);
};
