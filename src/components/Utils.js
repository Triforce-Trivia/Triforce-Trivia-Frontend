import request from 'superagent';

const URL = 'https://fast-taiga-92693.herokuapp.com';

export async function signup(email, password) {
    const data = await request
    .post(`${URL}/auth/signup`)
    .send({
        email: email,
        password: password
    })
    return data.body.token;
}

export async function signin(email,password) {
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
