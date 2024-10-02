import fs from "fs";

import { getContent, getIcon } from "./utils.mjs";

import { getProjects } from "./projects.mjs";
import { getSkills } from "./skills.mjs";

const supportedLanguages = ["en", "es"];

function section(id, content) {
    return `
    <section id=${id}>
        ${content}
    </section>
    `;
}

function intro(language) {
    return `
    <section id="intro">
        <div>
            <h1 id="intro-title">${getContent(language, "intro-title")}</h1>
            <h2 id="intro-subtitle">${getContent(language, "intro-subtitle")}</h1>
        </div>
        <a id="arrow-link" href="#aboutme">${getIcon("down-arrow")}</a>
        <p id="intro-bgcredits">
            <span>Photo by la Mare</span>
            <br>
            <a href="https://www.pexels.com/photo/aerial-view-of-city-buildings-3461070/">www.pexels.com</a>
        </p>
    </section>
    `;
}

function aboutme(language) {
    return `
    <h1 id="aboutme-title">${getContent(language, "aboutme-title")}</h1>
    ${getContent(language, "aboutme-desc")}
    `;
}

function projects(language) {
    return `
    <h1 id="projects-title">${getContent(language, "projects-title")}</h1>
    <div id="projects-list">
        ${getProjects(language)}
    </div>
    `;
}

function skills(language) {
    return `
    <h1 id="skills-title">${getContent(language, "skills-title")}</h1>
    <div id="skills-list">
        ${getSkills(language)}
    </div>
    `;
}

function generatePage(language) {
    const languageList = supportedLanguages.map(lang =>
        `
        <a href="../${lang}/index.html">${getIcon(`${lang}-flag`)}</a>
        `
    ).join('');

    return `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Adrian's website</title>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link type="text/css" href="../resources/styles.css" rel="stylesheet"/>
        </head>
        <body>
            <header>
                <nav>
                    <div id="language-list">
                        ${languageList}
                    </div>
                    <a id="nav_intro" href="#intro">${getContent(language, "home")}</a>
                    <a id="nav_aboutme" href="#aboutme">${getContent(language, "aboutme-title")}</a>
                    <a id="nav_tech" href="#skills">${getContent(language, "skills-title")}</a>
                    <a id="nav_projects" href="#projects">${getContent(language, "projects-title")}</a>
                    <a id="nav_contact" href="#contact">${getContent(language, "contact-title")}</a>
                </nav>
            </header>
            ${intro(language)}
            ${section("aboutme", aboutme(language))}
            ${section("skills", skills(language))}
            ${section("projects", projects(language))}
            <footer id="contact">
                <div id="socials">
                    <a target="_blank" href="https://www.linkedin.com/in/adrian-ruiz-garcia-050209194/">${getIcon("linkedin")}</a>
                    <a target="_blank" href="https://www.github.com/Flamekasai">${getIcon("github")}</a>
                </div>
                <a target="_blank" href="mailto:adrianruigjj@gmail.com">adrianruigjj@gmail.com</a>
                <a target="_blank" href="../resources/curriculum.pdf">${getContent(language, "curriculum")} (PDF)</a>
            </footer>
        </body>
    </html>
    `;
}

function generateIndex() {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Adrian's website</title>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 4em;
                    margin: 0;
                    height: 100svh;

                    background-color: #222;
                }
                img {
                    transition: all 0.2s ease-in-out;
                    max-width: 100%;
                }

                a {
                    outline: none;
                    width: 20%;
                }

                a:hover img, a:focus-visible {
                    transform: scale(1.25);
                }
            </style>
        </head>
        <body>
            <a href="en/index.html"><img src="../resources/en-flag.svg"></a>
            <a href="es/index.html"><img src="../resources/es-flag.svg"></a>
        </body>
    </html>
    `
}

function main(args) {
    let languages = supportedLanguages;
    if (args.length !== 0) {
        if (args.length !== 1) {
            console.log("USAGE: node generator.mjs [languages/all]");
            return;
        }
        const allString = ["all"].toString();
        const parsedLanguages = args[0].split(',');
        if (parsedLanguages.length != 0 && parsedLanguages.toString() !== allString) {
            languages = parsedLanguages;
        }
    }

    fs.mkdirSync(`./build`, { recursive: true });
    fs.mkdirSync(`./build/resources`, { recursive: true });
    fs.writeFile(`./build/index.html`, generateIndex(), { flag: "w" }, err => {
        if (err) {
            console.error(err);
        }
    });
    languages.forEach(lang => {
        if (!supportedLanguages.includes(lang)) {
            console.error(`Language "${lang}" is not supported.`);
            return;
        }
        fs.mkdirSync(`./build/${lang}`, { recursive: true });
        fs.writeFile(`./build/${lang}/index.html`, generatePage(lang), { flag: "w" }, err => {
            if (err) {
                console.error(err);
            }
        });
        console.log(`Generated language ${lang}`);
    });
}

main(process.argv.slice(2));
