import { ReactSession } from 'react-client-session';
import { bagInsert_ } from "../components/bag/bagInsert";
import ReactPlayer from 'react-player'
import "../style/resainfo.css";
import NavBarBlack from "../components/navbariconblack";
import Slider from '../components/slider';
import { useEffect, useState } from 'react';
import "../style/carouselslide.css"
export function ReservationInfo(props) {
    const userId = ReactSession.get("id");
    const info = ReactSession.get("props");

    const [pathMainImage, setPathMainImage] = useState("");
    const [pathImage1, setPathImage1] = useState("");
    const [pathImage2, setPathImage2] = useState("");
    const [pathImage3, setPathImage3] = useState("");
    const [pathVideo, setPathVideo] = useState("");

    useEffect(() => {
        if (info.resa.mainImage.length > 0) {
            setPathMainImage("https://api.elitebasketcamp.fr/image/" + info.resa.mainImage)
        }
        if (info.resa.image1.length > 0) {
            setPathImage1("https://api.elitebasketcamp.fr/image/" + info.resa.image1)
        }
        if (info.resa.image2.length > 0) {
            setPathImage2("https://api.elitebasketcamp.fr/image/" + info.resa.image2)
        }
        if (info.resa.image3.length > 0) {
            setPathImage3("https://api.elitebasketcamp.fr/image/" + info.resa.image3)
        }
        if (info.resa.video.length > 0) {
            setPathVideo("https://api.elitebasketcamp.fr/image/" + info.resa.video)
        }

    }, [info.resa.mainImage])



    const newBag = async (resa) => {
        if (ReactSession.get("login") != 1) {
            props.setAlerts(20); //toast d'alerte
            props.setShow(true); //toast afficher
            props.setColors(2); //toast vert
        }
        else {
            bagInsert_({ "user_id": userId, "reservation_id": resa })
            props.setAlerts(17); //toast d'alerte
            props.setShow(true); //toast afficher
            props.setColors(0); //toast vert
            setTimeout(() => { ReactSession.set("props", "") }, 1000);
            setTimeout(() => { window.location.replace('/all_reservation_list') }, 1000);
        }
    }

    if (ReactSession.get("login") && ReactSession.get("login") == 1) {
        return info && <div className="allrsrvlist-contain">
            <NavBarBlack />
            <div className="slide" >

                <div className="slide1 card">

                    <div className='inforforslide'>
                        <div className="pt">
                            <div className="info2responsive">
                                <div className="cardinforesponsive"><h1>Elite BasketCamp - </h1><h1 className="typeage spaceL" value="category"> {info.resa.category}</h1></div>
                                <div className='inforesponsive'>
                                    <div className="cardinforesponsive1 space"><h2>{info.resa.place} - </h2></div>
                                    <div className="cardinforesponsive1 2"><h2 className="p2" value="price"> {info.resa.price} €</h2></div>
                                </div>
                            </div>
                            <div className="ptG ">

                                <div className='carouselforslide'>
                                    <section>
                                        <div class="container">
                                            <div class="carousel11">
                                                <input type="radio" name="slides" id="slide-1" />
                                                <input type="radio" name="slides" id="slide-2" />
                                                <input type="radio" name="slides" id="slide-3" />
                                                <input type="radio" name="slides" id="slide-4" />
                                                <input type="radio" name="slides" id="slide-5" />
                                                <input type="radio" name="slides" id="slide-6" />
                                                <ul class="carousel__thumbnails">
                                                    <li>
                                                        <label for="slide-1"><img src={pathMainImage} alt="Image du stage d'Elite Basket Camp" /></label>
                                                    </li>
                                                    <li>
                                                        <label for="slide-2"><img src={pathImage1} alt="Image du stage d'Elite Basket Camp" /></label>
                                                    </li>
                                                    <li>
                                                        <label for="slide-3"><img src={pathImage2} alt="Image du stage d'Elite Basket Camp" /></label>
                                                    </li>
                                                    <li>
                                                        <label for="slide-4"><img src={pathImage3} alt="Image du stage d'Elite Basket Camp" /></label>
                                                    </li>
                                                    {/* <li>
                                                        <label for="slide-5"><ReactPlayer url={pathVideo} /></label>
                                                    </li> */}
                                                </ul>
                                                <ul class="carousel__slides">
                                                    <li class="carousel__slide">
                                                        <figure>
                                                            <div>
                                                                <img src={pathMainImage} alt="" />
                                                            </div>
                                                            <figcaption>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                <span class="credit">Photo: Tim Marshall</span>
                                                            </figcaption>
                                                        </figure>
                                                    </li>
                                                    <li class="carousel__slide">
                                                        <figure>
                                                            <div>
                                                                <img src={pathImage1} alt="Image du stage d'Elite Basket Camp" />                                                </div>
                                                            <figcaption>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                <span class="credit">Photo: Christian Joudrey</span>
                                                            </figcaption>
                                                        </figure>
                                                    </li>
                                                    <li class="carousel__slide">
                                                        <figure>
                                                            <div>
                                                                <img src={pathImage2} alt="Image du stage d'Elite Basket Camp" />                                                </div>
                                                            <figcaption>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                <span class="credit">Photo: Steve Carter</span>
                                                            </figcaption>
                                                        </figure>
                                                    </li>
                                                    <li class="carousel__slide">
                                                        <figure>
                                                            <div>
                                                                <img src={pathImage3} alt="Image du stage d'Elite Basket Camp" />                                                </div>
                                                            <figcaption>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                <span class="credit">Photo: Aleksandra Boguslawska</span>
                                                            </figcaption>
                                                        </figure>
                                                    </li>
                                                    <li class="carousel__slide">
                                                        <figure>
                                                            {/* <div> <ReactPlayer url={pathVideo} /></div> */}
                                                            <figcaption>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                <span class="credit">Photo: Rosan Harmens</span>
                                                            </figcaption>
                                                        </figure>
                                                    </li>
                                                </ul>
                                                <ul class="carousel__thumbnails_responsive">
                                                    <li>
                                                        <label for="slide-1"><img src={pathMainImage} alt="Image du stage d'Elite Basket Camp" /></label>
                                                    </li>
                                                    <li>
                                                        <label for="slide-2"><img src={pathImage1} alt="Image du stage d'Elite Basket Camp" /></label>
                                                    </li>
                                                    <li>
                                                        <label for="slide-3"><img src={pathImage2} alt="Image du stage d'Elite Basket Camp" /></label>
                                                    </li>
                                                    <li>
                                                        <label for="slide-4"><img src={pathImage3} alt="Image du stage d'Elite Basket Camp" /></label>
                                                    </li>
                                                    {/* <li>
                                                        <label for="slide-5"><ReactPlayer url={pathVideo} /></label>
                                                    </li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                </div>
                            </div>
                            <div className="ptD">

                                <div className="cardinfo">"<h1>"Elite BasketCamp</h1><h1 className="typeage" value="category">{info.resa.category}"</h1></div>
                                <div className="info2">
                                    <div className="cardinfo"><h2>{info.resa.place}</h2></div>
                                    <div className="cardinfo 2"><h2 className="p2" value="price">{info.resa.price}€</h2></div>
                                </div>
                                <div className="info3">
                                    <div className="cardinfoDate"><h2> Début du stage  </h2><p value="start_date">{info.resa.start_date}</p></div>
                                    <div className="cardinfoDate"><h2> fin du stage  </h2><p value="finish_date">{info.resa.finish_date}</p></div>
                                </div>
                                <div className="checkproduct">
                                    <input className="validbasket" type="button" onClick={() => newBag(info.resa.id)} value="Ajouter au panier" />
                                    <a href='/bag' className="seebasket" type="button" value="Voir mon panier" >Voir mon panier</a>

                                </div>
                                <div className="cardinfoDesc"><p value="description">{info.resa.desc}</p></div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="slide2card">
                    <Slider />
                </div>


                <div className="slide3card">
                    <div className="ptG">
                        <div className="cardinfo1"><p value="category">"Elite BasketCamp {info.resa.category}"</p></div>
                        <div className="cardinfo2"><h2>Salle de {info.resa.place}</h2></div>
                        <div className="cardinfoDesc"><p value="description">{info.resa.desc2}</p></div>
                    </div>
                    <div className="ptD">
                        <div className="cardinfo"><p value="avaible">{info.resa.avaible}</p></div>
                    </div>
                </div>
                <div className="card" key={info.resa.id}>

                </div></div>

        </div>
    } else {
        props.setAlerts(21); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(2); //toast vert
        setTimeout(() => { window.location.replace('/verify_email') }, 1500)
    }

}
