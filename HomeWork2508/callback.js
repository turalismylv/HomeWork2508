const mail = "turalhi@gmail.com";
const pass = 123456;

function getIdByAuth(mail, pass, successCallback, errorCallback) {
    setTimeout(() => {
        if (mail === "turalhi@gmail.com" && pass === 123456) {
            const data = { id: 4500 };
            return successCallback(data);
        } else {
            return errorCallback({ err: "Auth failed" });
        }
    }, 500)
}

function getUserInfo(id, successCallback, errorCallback) {
    setTimeout(() => {
        if (id === 4500) {
            const info = { name: "Tural", surname: "Ismayilov", age: 21 }

            return successCallback(info);
        } else {
            return errorCallback({ err: "No user info!" })

        }
    }, 500)
}

function checkAge(age, successCallback, errorCallback) {
    setTimeout(() => {
        let drinkingAllowed
        if ( age > 17) {
            drinkingAllowed = true;
            return successCallback(drinkingAllowed);
        }
         else if (age < 18) {
            drinkingAllowed = false;
            return successCallback(drinkingAllowed);
        }
         else {
            return errorCallback({ err: "No details found" })
        }
    }, 500)

}

function checkDrinkingAllow(drinkingAllowed, successCallback, errorCallback) {
    setTimeout(() => {
        if (drinkingAllowed === true) {
            return successCallback(["Jameson", "Chivas Regal", "Jack Daniels"]);
        }
        else if (drinkingAllowed === false) {
            return errorCallback({ err: "Boyuyende gel" });
        }
        else {
            return errorCallback({ err: "No detals found2" });
        }

    }, 500)

}

function getIdByViskey(name, successCallback, errorCallback) {
    setTimeout(() => {
        if (name) {
            const beverage = { id: 1234 }
            return successCallback(beverage);

        }
        else {
            return errorCallback({ err: "No detals found Id" })
        }
    }, 500)

}

function getViskeyInfo(id, successCallback, errorCallback) {
    setTimeout(() => {
        if (id === 1234) {
            return successCallback({ alcohol: 40, slogan: "THIS IS BAWQABIRWEY" });
        } else {
            return errorCallback({ err: "Melumat yoxdur" })
        }
    }, 500)

}

getIdByAuth(
    mail,
    pass,
    (data) => {
        getUserInfo(
            data.id,
            (userInfo) => {
                checkAge(
                    userInfo.age,
                    (drinkingAllowed) => {
                        checkDrinkingAllow(
                            drinkingAllowed,
                            (viskeyList) => {
                                getIdByViskey(
                                    viskeyList[0],
                                    (beverage) => {
                                        getViskeyInfo(beverage.id,
                                            (info) => {
                                                console.log("Viskey Info", info);
                                            }, (err) => console.log("This is Error", err)
                                        )


                                    }, 
                                    (err) => console.log("This is Error", err)
                                )
                            }, 
                            (err) => console.log("This is Error", err)
                        )
                    },
                    (err) => console.log("This is Error", err)

                )
            },
            (err) => console.log("This is Error", err)

        )
    },
    (err) => console.log("This is Error", err)
);

