export const ConditionInsert_ = async (condition) => {
    const response = await fetch(
        'https://api.elitebasketcamp.fr/condition/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(condition)
        }
    )
    const ConditionInsert = await response.json()
    return ConditionInsert
}

export const ConditionDelete_ = async (condition) => {
    const response = await fetch(
        'https://api.elitebasketcamp.fr/condition/delete', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(condition)
        }
    )
    const ConditionDelete = await response.json()
    return ConditionDelete
}

export const ConditionUpdate_ = async (condition) => {
    const response = await fetch(
        'https://api.elitebasketcamp.fr/condition/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(condition)
        }
    )
    const ConditionUpdate = await response.json()
    return ConditionUpdate
}

export const ConditionList_ = async () => {
    const response = await fetch(
        'https://api.elitebasketcamp.fr/condition/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const ConditionList = await response.json()
    return ConditionList
}