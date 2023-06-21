import { useEffect, useMemo, useState } from "react";
import { ReactSession } from 'react-client-session';
import { reservationDate_ } from "../components/reservation/reservationDate";
import { reservationPlace_ } from "../components/reservation/reservationPlace";
import { reservationCategory_ } from "../components/reservation/reservationCategory";
import "../style/reservationCard.css";
import { Display } from "../components/display/allReservationList";
import { reservationList_ } from "../components/reservation/reservationList";
import { RemoveEntity, RemoveEntityObject } from "../components/sliceArray";
import NavBar from "../components/navbar";
import NavBarBlack from "../components/navbariconblack";

function listKey(objects) {
    // renvoie un tableau de clé des cles de objects en un seul exemplaire
    const list = []
    objects.map((object) => {
        const key = Object.keys(object)
        if (list.includes(key[0]) === false) {
            list.push(key[0])
        }
    })
    return list
}

export function AllReservationList(props) {

    const [isLoaded, setIsLoaded] = useState(false);
    const [reservation, setReservation] = useState(null);
    const [search, setSearch] = useState();
    const [resaListDate, setResaListDate] = useState(); // date de début
    const [resaListPlace, setResaListPlace] = useState();
    const [resaListCategory, setResaListCategory] = useState();
    const [filterArray, setFilterArray] = useState([]);
    const [displayValue, setDisplayValue] = useState([]);
    const [value, setValue] = useState([]);

    const [count, setCount] = useState(0)
    const [key, setKey] = useState([]);

    const renderValue = useMemo( () =>
    {
        return value?.map((resa, key) => {
            return <Display key={key} resa={resa} setAlerts={props.setAlerts} setShow={props.setShow} setColors={props.setColors} />
        })
    }, [value])

    useEffect(() => {
        const getData = setInterval(() => {
            if(!isLoaded){
                const reservationFetched = reservationList_();
                const placeFetched = reservationPlace_();
                const dateFetched = reservationDate_();
                const categoryFetched = reservationCategory_();
        
                reservationFetched
                    .then(result => setReservation(result))
                    .catch(error => console.error('Erreur avec notre API :', error.message));
        
                placeFetched
                    .then(result => setResaListPlace(result))
                    .catch(error => console.error('Erreur avec notre API :', error.message));
        
                dateFetched
                    .then(result => setResaListDate(result))
                    .catch(error => console.error('Erreur avec notre API :', error.message));
        
                categoryFetched
                    .then(result => setResaListCategory(result))
                    .catch(error => console.error('Erreur avec notre API :', error.message));
                return setIsLoaded(!isLoaded);
                }else{
                    // Make sure to clear your interval in the else case,
                    // or it will keep running (even though you don't see it)
                    clearInterval(getData);
                }
            }, []);
    
            // Clear the interval every time `useEffect` runs
            return () => clearInterval(getData);       

    }, [isLoaded]);

    useEffect(() => {
        if (reservation) {
            setDisplayValue([...reservation])
            setValue([...reservation])
        }
    }, [reservation]);

    useEffect(() => {
        if (filterArray) {
            setKey(listKey(filterArray))
        }
    }, [filterArray]);

    useEffect (() => {
        if (filterArray.length > 0){
            setValue([])
            setCount(0)
            filterArray.forEach((filter) => {
                setCount(0)
                reservation.forEach((resa) => {
                        if (filter[key[0]] == resa[key[0]] && key.length === 1)
                        {
                            setValue((oldFilter) => {
                                let newFilter = [...oldFilter];
                                newFilter = [...oldFilter, resa]
                                return newFilter
                            });
                        }
                        else if (filter[key[0]] == resa[key[0]] && filterArray[count][key[1]] == resa[key[1]] && key.length === 2)
                        {
                            setValue((oldFilter) => {
                                let newFilter = [...oldFilter];
                                newFilter = [...oldFilter, resa]
                                return newFilter
                            });
                        }
                        else if (filter[key[0]] == resa[key[0]] && filterArray[count][key[1]] == resa[key[1]] && filterArray[count+1][key[2]] == resa[key[2]] && key.length === 3)
                        {
                            setValue((oldFilter) => {
                                let newFilter = [...oldFilter];
                                newFilter = [...oldFilter, resa]
                                return newFilter
                            });
                        }

                })
                setCount((oldValue) => {return oldValue+1})
            })
    }else{
        setCount(0)
        setValue(displayValue);
    }

    }, [key])



    const searchChoice = (params, object) => {
        if (params.target.checked) {
            setFilterArray((oldFilter) => {
                let newFilter = [...oldFilter, object];                
                return newFilter
            });}
        else {
            setFilterArray((oldFilter) => {
                let newFilter = [...oldFilter];
                newFilter = newFilter.filter(value => value !== object)
                return newFilter
            });
        }

        setSearch(true)
        
    }

    

    if ( ReactSession.get("login") && ReactSession.get("login") == 1){
    return reservation &&
        <div className="rsrv-content">
            <NavBarBlack />
            <div className="all-rsrv">
                <div className="search-rsrvlist PTG">
                    <h2>Lieux</h2>
                    {/* <input type="checkbox" value="all" onChange={searchChoice} /> All */}
                    {resaListPlace && resaListPlace.map((resa, key) => {
                        return <div key={key}><input type="checkbox" value={resa.place} onChange={(params) =>{searchChoice(params,resa)}} /> {resa.place}  </div>
                    })}
                    <h2>Date de début</h2>
                    {/* <input type="checkbox" value="all" onChange={searchChoice} /> All */}
                    {resaListDate && resaListDate.map((resa, key) => {
                        return <div key={key}><input type="checkbox" value={resa.start_date} onChange={(params) =>{searchChoice(params,resa)}} /> {resa.start_date}  </div>
                    })}
                    <h2>Catégorie d'âge</h2>
                    {/* <input type="checkbox" value="all" onChange={searchChoice} /> All */}
                    {resaListCategory && resaListCategory.map((resa, key) => {
                        return <div key={key}><input type="checkbox" value={resa.category} onChange={(params) =>{searchChoice(params,resa)}} /> {resa.category}  </div>
                    })}
                </div>
                <div className="card-all PTD">
                     {renderValue}
                </div>
            </div>
        </div>
    }else{
        props.setAlerts(21); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(2); //toast vert
        setTimeout(() => { window.location.replace('/verify_email') }, 1500);
    }

}
