const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');


class UsersRepo {
    constructor() {
        this.users = [];
        this.id = 0;
        this.fileName = path.join(__dirname, 'users.dat')
        this.copyFromUserDat();
    }

    copyFromUserDat() {

        fs.readFile(this.fileName, 'utf8', (err, data) => {
            if (err) {
                this.users = [];
            } else {
                this.users = JSON.parse(data)
            }
        })
    }

    getAllUsers() {
        return this.users;
    }

    async addNewUser(userData) {                 // {userNAme :.. , password:.... , role:...}
        const { userName, password, role } = userData
        if (!this.ifUserExists(userName)) {
            const hashedPassword = await bcrypt.hash(password, 10);
            console.log(hashedPassword)
            const newUser = {
                id: this.id,
                userName: userName,
                password: hashedPassword,
                role: role,
            };
            console.log(hashedPassword)
            this.id += 1;
            this.users.push(newUser)
            console.log(newUser)
            console.log(this.users)
            fs.writeFile(this.fileName, JSON.stringify(this.users), 'utf8', (err) => {
                if (err) {
                    console.log({ err: err })
                }
            })
            return true;
        } else {
            return false;
        }

    }

    ifUserExists(userName) {
        const ifExists = this.users.find(user => user.userName === userName)
        if (ifExists) {
            return true;
        }
        return false;
    }

    // passwordValidation(userPassword) {

    // }

    ifUserRegistered(user) {
        const userData = this.users.find(u => u.userName === user.userName)
        // console.log(userData)
        if (userData) {
            return userData
        } else {
            return false;
        }
    }

}

const userRepo = new UsersRepo();

module.exports = {
    addNewUser: (userData) => userRepo.addNewUser(userData),
    getAllUsers: () => userRepo.getAllUsers(),
    ifUserRegistered: (userData) => userRepo.ifUserRegistered(userData),
};







