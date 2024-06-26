"use strict";
const getUser = document.querySelector("#user");
// const fromSubmit:HTMLFormElement | any | null  = document.querySelector("#form") ; or 
const formSubmit = document.querySelector("#form");
const main_container = document.querySelector(".main-section");
// Resuable Function
async function myCustoerFetch(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Nwtwork was not Ok - status ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data; // Dont forget parse join
}
// Result Function and Display the data of card ui
const showResult = (singleUser) => {
    const { avatar_url, login, url } = singleUser;
    main_container.insertAdjacentHTML("beforeend", `
        <div class="card">
            <img src=${avatar_url} class="avatar-for-main"  alt=${login} />
            <h3> ${login}  </h3>
            <hr>
            <div class="card-footer" >
                <img src=${avatar_url} class="avatar-for-footer" alt=${login} />
                <a href=${url} target="blank" >Github</a>
            </div>
        </div>
        `);
};
function fetchUserData(url) {
    myCustoerFetch(url, {}).then((userInfo) => {
        for (const singleUser of userInfo) {
            showResult(singleUser);
            // console.log(singleUser.id);
        }
    });
}
// Default function call 
fetchUserData("https://api.github.com/users");
// Serching function
formSubmit.addEventListener("submit", async (e) => {
    e.preventDefault();
    const serach = getUser.value.toLowerCase();
    try {
        const url = "https://api.github.com/users";
        const allUserData = await myCustoerFetch(url, {});
        // const matchingData = allUserData.filter((user) => {
        //     return user.login.toLowerCase().includes(serach);
        // });
        const matchingData = allUserData.filter((user) => {
            return user.login.toLowerCase().includes(serach);
        });
        main_container.innerHTML = "";
        if (matchingData.length === 0) {
            main_container?.insertAdjacentHTML("beforeend", `<h1>Matching not found </h1>`);
        }
        else {
            for (const singleUser of matchingData) {
                showResult(singleUser);
            }
        }
    }
    catch (error) {
        console.log(error);
    }
});
