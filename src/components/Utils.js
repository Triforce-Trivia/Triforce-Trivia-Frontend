import request from 'superagent';

const URL = 'https://fast-taiga-92693.herokuapp.com';

export async function signup(email, password, display_name) {
    const data = await request
    .post(`${URL}/auth/signup`)
    .send({
        display_name: display_name,
        email: email,
        password: password
    })
    return data.body.token;
}

export async function signin(display_name, email, password) {
    const data = await request
    .post(`${URL}/auth/signin`)
    .send({
        display_name: display_name,
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

// export async function modifyQuestion(data) {
//     const data = await request
//     .get(`${URL}/trivias`)
//     return data.body;
// }