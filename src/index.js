import { createHome } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact";
import './styles.css'

function loadPage(content, component) {
    content.innerHTML = ""
    content.appendChild(component());
}

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById('content');

    document.getElementById("home-btn").addEventListener('click', () => {
        console.log('home click')
        loadPage(content, createHome)
    });
    document.getElementById("menu-btn").addEventListener('click', () => {
        console.log('menu click')
        loadPage(content, createMenu)
    });
    document.getElementById("contact-btn").addEventListener('click', () => {
        console.log('contact click')
        loadPage(content, createContact)
    });

});

loadPage(content, createHome);   // Load the home page by default