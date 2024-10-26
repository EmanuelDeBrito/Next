"use server"

export const takeDataForm = (data: FormData) => {
    const nome = data.get('nome');
    const idade = data.get('idade');

    console.log('Nome: ', nome);
    console.log('Idade: ', idade);
}