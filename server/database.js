const mongoose = require('mongoose');
const UserModel = require('./models/user')

class Database {
  constructor() {
    this.signUp()
  }

  signUp(data) {
    if (data) {
        return new Promise((resolve, reject) => {
        mongoose.connect(process.env.MONGO, {useNewUrlParser: true})
        .then(() => {
                console.log('Database connection successful')

                const user = new UserModel({
                    email: data.email,
                    username: data.username,
                    password: data.password
                })

                user.save()
                    .then(res => {
                        console.log("save successful")
                        resolve(res)
                    })
                    .catch(err => {
                        console.log("save not successful")
                        reject(err)
                    })
        })
        .catch(err => {
            console.error('Database connection error')
            reject(err)
        })

        })
    } 
  }
}
module.exports = new Database()