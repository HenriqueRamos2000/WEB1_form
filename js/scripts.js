/*!
* Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('form');

    form.addEventListener('submit', async(event) => {
        event.preventDefault();

        const nomeValue = document.getElementById('nome').value;
        const emailValue = document.getElementById('email')?.value;
        const textValue = document.getElementById('mensagem')?.value;

        const formData = {
            nome: nomeValue,
            email: emailValue,
            mensagem: textValue, 
        }

        console.log('Dados coletados', formData);

        const response = await fetch('https://minhasAPI.com/cadastro',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
    })
})