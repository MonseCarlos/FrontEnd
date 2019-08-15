const BASE_URL = 'https://whispering-shore-24263.herokuapp.com'
const token = localStorage.getItem('token')


export function getPaquete(idpaquete) {
    console.log(idpaquete)
    return fetch(`${BASE_URL}/paquetes/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token
        }, 
        body: JSON.stringify({_id: idpaquete})
    }).then(response => response.json())
}



function getList () {
    return fetch(`${BASE_URL}todos`,{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token
      }
    })
      .then(response => response.json())
      .then(data => {
        let task = data.map((todo) => {
          return todo
        })
        return task
      })
  }