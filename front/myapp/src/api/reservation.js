export const ReservationInsert_ = async (reservation) => {
    const response = await fetch(
        'https://api.elitebasketcamp.fr/reservation/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(reservation)
        }
    )
    const ReservationInsert = await response.json()
    return ReservationInsert
}

export const ReservationDelete_ = async (reservation) => {
    const response = await fetch(
        'https://api.elitebasketcamp.fr/reservation/delete', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(reservation)
        }
    )
    const ReservationDelete = await response.json()
    return ReservationDelete
}

export const ReservationUpdate_ = async (reservation) => {
    const response = await fetch(
        'https://api.elitebasketcamp.fr/reservation/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(reservation)
        }
    )
    const ReservationUpdate = await response.json()
    return ReservationUpdate
}

export const ReservationList_ = async () => {
    const response = await fetch(
        'https://api.elitebasketcamp.fr/reservation/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const ReservationList = await response.json()
    return ReservationList
}

export const ReservationDate_ = async () => {
    const response = await fetch(
        'https://api.elitebasketcamp.fr/reservation/info_date', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const ReservationDate = await response.json()
    return ReservationDate
}

export const ReservationPlace_ = async () => {
    const response = await fetch(
        'https://api.elitebasketcamp.fr/reservation/info_place', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const ReservationPlace = await response.json()
    return ReservationPlace
}

export const ReservationCategory_ = async () => {
    const response = await fetch(
        'https://api.elitebasketcamp.fr/reservation/info_category', {

            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const ReservationCategory = await response.json()
    return ReservationCategory
}