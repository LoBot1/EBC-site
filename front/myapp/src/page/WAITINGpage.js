import NavBar from "../components/navbar"
import "../style/wait.css"

export function Waiting() {
    return <div className="Waitingcontent">
        <NavBar />
        <div className="texte">
            <h1> Site bientot disponible, inscription et + d'informations directement par mail a l'adresse : <br></br>  <span className="blue">contact.elitebasketcamp@gmail.com</span> </h1>
        </div>


    </div>
}