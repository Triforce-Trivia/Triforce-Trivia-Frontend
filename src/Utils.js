import request from 'superagent';

const URL = 'https://triforce-trivia.herokuapp.com';


export async function signup(name, email, password) {
    const data = await request
    .post(`${URL}/auth/signup`)
        .send({
        display_name: name,
        email: email,
        password: password
    })
    return data.body.token;
}

export async function signin(email, password) {
    const data = await request
    .post(`${URL}/auth/signin`)
    .send({
        email: email,
        password: password
    })
    return data.body.token;
}

export async function logout() {
    const data = await request
    .get(`${URL}/`)
    .send({
        email: '',
        password: ''
    })
    return data.body;
}

export async function getTrivia() {
    const data = await request
    .get(`${URL}/zombies`)
    return data.body;
}


export async function getZombies() {
    const data = await request
    .get(`${URL}/zombies`)
    return data.body;
}


export async function getWereWolves() {
    const data = await request
    .get(`${URL}/wereWolves`)
    return data.body;
}


// export async function getUserScore() {
//     const data = await request
//         .get
// }


