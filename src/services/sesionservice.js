const BASE_URL = 'https://whispering-shore-24263.herokuapp.com'
const token = localStorage.getItem('token')
const _id = localStorage.getItem('_id')


export function getSesion() {
    return fetch(`${BASE_URL}/sesiones/`, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token
        }, 
        body: JSON.stringify({id_user: _id})
    }).then(response => response.json())
    .then(data => {
      let listsesion = data.message.map((row) => {
        return row.id_paquete
      })
      return listsesion
    })
}


