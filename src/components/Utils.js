import request from 'superagent';

const URL = 'https://fast-taiga-92693.herokuapp.com';


export async function signup(display_name, email, password) {
    const data = await request
    .post(`${URL}/auth/signup`)
        .send({
        name: display_name,
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
    .get(`${URL}/trivias`)
    return data.body;
}

export function matchId(id) {
    
}