export const Coach_profilInsert_ = async (coach_profile) => {
    const response = await fetch(
        'https://api.elitebasketcamp.fr/coach_profile/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(coach_profile)
        }
    )
    const Coach_profilInsert = await response.json()
    return Coach_profilInsert
}

export const Coach_profilDelete_ = async (coach_profile) => {
    const response = await fetch(
        'https://api.elitebasketcamp.fr/coach_profile/delete', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(coach_profile)
        }
    )
    const Coach_profilDelete = await response.json()
    return Coach_profilDelete
}

export const Coach_profilUpdate_ = async (coach_profile) => {
    const response = await fetch(
        'https://api.elitebasketcamp.fr/coach_profile/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(coach_profile)
        }
    )
    const Coach_profilUpdate = await response.json()
    return Coach_profilUpdate
}

export const Coach_profilList_ = async () => {
    const response = await fetch(
        'https://api.elitebasketcamp.fr/coach_profile/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const Coach_profilList = await response.json()
    return Coach_profilList
}

export const Coach_profilInform_ = async () => {
    const response = await fetch(
        'https://api.elitebasketcamp.fr/coach_profile/info', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const Coach_profilInfo = await response.json()
    return Coach_profilInfo
}