document.addEventListener('DOMContentLoaded', function() {
    // Cargar datos del XML
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cargarDatos(this);
        }
    };
    xhttp.open("GET", "info.xml", true);
    xhttp.send();
});

function cargarDatos(xml) {
    const xmlDoc = xml.responseXML;

    // Información personal
    const personalInfo = xmlDoc.getElementsByTagName('personal-info')[0];
    document.getElementById('name').innerText += personalInfo.getElementsByTagName('name')[0].textContent;
    document.getElementById('email').innerText += personalInfo.getElementsByTagName('email')[0].textContent;
    document.getElementById('phone').innerText += personalInfo.getElementsByTagName('phone')[0].textContent;
    const address = personalInfo.getElementsByTagName('ubi')[0].textContent;
    document.getElementById('ubi').innerText += address;

    // Idiomas
    const languages = personalInfo.getElementsByTagName('languages')[0].getElementsByTagName('language');
    const languagesList = Array.from(languages).map(language => language.textContent).join(', ');
    document.getElementById('languages').innerText += languagesList;

    // Acerca de Mí
    const aboutMe = xmlDoc.getElementsByTagName('about-me')[0].getElementsByTagName('description')[0].textContent;
    document.getElementById('about-me').innerText += aboutMe;

    // Experiencia
    const experience = xmlDoc.getElementsByTagName('experience')[0].textContent;
    const experienceList = document.getElementById('experience-list');
    const listItem = document.createElement('li');
    listItem.innerHTML = experience;
    experienceList.appendChild(listItem);

    // Habilidades
    const skills = xmlDoc.getElementsByTagName('skills')[0].getElementsByTagName('skill');
    const skillsList = document.getElementById('skills-list');
    for (let i = 0; i < skills.length; i++) {
        const skillItem = document.createElement('li');
        skillItem.textContent = skills[i].textContent;
        skillsList.appendChild(skillItem);
    }
}

