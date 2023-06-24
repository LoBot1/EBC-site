export const BagInsert_ = async (bag) => {
    const response = await fetch(
        'https://api.elitebasketcamp.fr/bag/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(bag)
        }
    )
    const BagInsert = await response.json()
    return BagInsert
}

export const BagDelete_ = async (bag) => {
    const response = await fetch(
        'https://api.elitebasketcamp.fr/bag/delete', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(bag)
        }
    )
    const BagDelete = await response.json()
    return BagDelete
}

export const BagUpdate_ = async (bag) => {
    const response = await fetch(
        'https://api.elitebasketcamp.fr/bag/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(bag)
        }
    )
    const BagUpdate = await response.json()
    return BagUpdate
}

export const BagList_ = async () => {
    const response = await fetch(
        'https://api.elitebasketcamp.fr/bag/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const BagList = await response.json()
    return BagList
}

export const BagInform_ = async () => {
    const response = await fetch(
        'https://api.elitebasketcamp.fr/bag/info', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const BagList = await response.json()
    return BagList
}
