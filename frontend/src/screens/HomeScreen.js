import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import DOMPurify from "dompurify";

export default function HomeScreen(props) {
return (																				
<div>
<div classname="cover" > 																
    <img src="img/beer2.png" alt="beercover"></img>
    <span>Kater war gestern.<br></br>
         Heut' schon was getrunken? <br></br>
    </span>

    <a href="Angebote.html">
        <button type="button" name="cover_button">Durst löschen
        </button>
    </a>

    <img classname="cover_icon" src="img/katerkistenlogogold.png"
                alt="katerkistenlogogold" ></img>
</div>																								

<div classname="content">															

    <div classname="row left">
        <div classname="horizontal_line"></div>
    </div>

    <div classname="row left">													
        <div classname="h_content col-6 left">
                <a href="Angebote.html"><h2>Tipp des Monats</h2></a>
                    <p>Ihr habt abgestimmt!
                        <br></br>
                            Hier ist er, euer Tipp des Monats.
                        <br></br><br></br>
                        Ein unverkennbares und köstliches Geschenk für Liebhaber
                        des Tanqueray London Dry Gins, für Partys sowie für den Genuss
                        mit Freunden und Familie.
                    </p>

                <div classname="zu_ang">
                     <a href="Angebote.html">
                         <button type="button" name="zum_angebot">Zum Angebot
                         </button>
                     </a>
                 </div>
            </div>

        <div classname="h_content col-6 left tdm">
            <a href="Angebote.html">
                <img src="img/angebote/tipp_des_monats.png" alt="Tipp des Monats"></img>
            </a>
        </div>
    </div>

    <div classname="row left">
        <div classname="horizontal_line"></div>
    </div>

    <div classname="row left">												
        <div classname="h_content col-6 left laster">
                <img src="img/lastwagen_kater.png" alt="Express Lieferung"></img>
        </div>
        <div classname="h_content col-6 left">
                <h2>Express Lieferung</h2>
                <p>Wir behandeln eure Aufträge so fix wie kein anderer.
                    <br></br>
                    Überzeugt euch selbst und bestellt noch heute!
                    <br></br><br></br>
                    Wir liefern Werktags von 8 Uhr bis 24 Uhr
                    <br></br>
                    in Heidenheim und Umgebung.
                    <br></br>
                    Am Wochenende	sogar zu Rund um Uhr.
                    <br></br><br></br>
                    Für uns seid ihr nur einen Katzensprung entfernt.
                 </p>
        </div>
    </div>

    <div classname="row left">
        <div classname="horizontal_line"></div>
    </div>

    <div classname="row left">																
        <div classname="h_content col-6 left">
                <a href="Angebote.html"><h2>Angebote</h2></a>
                <p>Wir bieten die unterschiedlichsten Sets für jede Situation an.
                    <br></br>
                    Von entspannten Abenden Zuhause bis hin zu wilden Partynächten
                    mit Freunden.
                    <br></br>
                    Bei unserem vielfältigen Angebot ist mit
                    Sicherheit auch was für euch dabei!
                 </p>

                 <div classname="zu_ang">
                   <a href="Angebote.html">
                          <button type="button" name="zum_angebot">Zum Angebot
                          </button>
                      </a>
                  </div>

            </div>
        <div classname="h_content col-6 left getraenke">
                <a href="Angebote.html">
                    <img src="img/Getränke.png" alt="Getränke"></img>
                </a>
        </div>
    </div>
</div>																							
</div>	

);
};