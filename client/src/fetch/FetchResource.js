
export default class FetchResource {

    static post(data, link) {
        return new Promise((resolve, reject) => {
            fetch(link, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
              })
                .then(resp => {
                    if (resp.ok) {
                        resp.json()
                            .then(res => {
                                resolve(res);
                            }) 
                    } else {
                        reject(resp.statusText);
                    }
                })
        })
    }

}