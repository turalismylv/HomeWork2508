const mail = "turalhi@gmail.com";
const pass = 123456;

function getIdByAuth(mail, pass) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mail === "turalhi@gmail.com" && pass === 123456) {
                const data = { id: 4500 };
                return resolve(data);
            } else {
                return reject({ err: "Auth failed" });
            }
        }, 500)
    })

}

function getUserInfo(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 4500) {
                const info = { name: "Tural", surname: "Ismayilov", age: 21 }

                return resolve(info);
            } else {
                return reject({ err: "No user info!" })

            }
        }, 500)
    })

}

function checkAge(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let drinkingAllowed
            if (age > 17) {
                drinkingAllowed = true;
                return resolve(drinkingAllowed);
            }
            else if (age < 18) {
                drinkingAllowed = false;
                return resolve(drinkingAllowed);
            }
            else {
                return reject({ err: "No details found" })
            }
        }, 500)
    })

}
const myList=["Jameson", "Chivas Regal", "Jack Daniels"];
function checkDrinkingAllow(drinkingAllowed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (drinkingAllowed === true) {
                return resolve(myList);
            }
            else if (drinkingAllowed === false) {
                return reject({ err: "Boyuyende gel" });
            }
            else {
                return reject({ err: "No detals found2" });
            }
        }, 500)
    })



}

function getIdByViskey(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name) {
                const beverage = { id: 1234 }
                return resolve(beverage);

            }
            else {
                return reject({ err: "No detals found Id" })
            }
        }, 500)
    })


}

function getViskeyInfo(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1234) {
                return resolve({ name:myList[0], alcohol: 40, slogan: "THIS IS BAWQABIRWEY" });
            } else {
                return reject({ err: "Melumat yoxdur" })
            }
        }, 500)
    })


}


getIdByAuth(mail, pass)
    .then(
        data => getUserInfo(data.id)
            .then(
                info => checkAge(info.age)
                    .then(
                        drinkingAllowed => checkDrinkingAllow(drinkingAllowed)
                            .then(
                                viskeylist => getIdByViskey(viskeylist[0])
                                    .then(
                                        beverage => getViskeyInfo(beverage.id)
                                        .then(detals=>console.log(detals))
                                        .catch(err => console.log(err))
                                        )

                                    .catch(err => console.log(err))
                            )
                            .catch(err => console.log(err))
                    )
                    .catch(err => console.log(err))
            )
            .catch(err => console.log(err))
    )
    .catch(err => console.log(err))
