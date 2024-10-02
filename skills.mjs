import { getContent } from "./utils.mjs";

const skills = {
    "languages": [
        "C", "C++", "Java", "C#", "Python", "Javascript", "Typescript",
        "PHP", "Racket", "Lisp", "R"
    ],
    "web": [
        "HTML", "CSS", "Tailwind", "Bootstrap", "SCSS", "NodeJS",
        "Angular", "Ionic", "React", "Laravel"
    ],
    "gamedev": [
        "Unreal engine", "Raylib", "SFML", "OpenGL (WIP)",
        "CPCTelera"
    ],
    "ai": [ "Keras", "Tensorflow", "PyTorch" ],
    "others": [
        "SQL", "MongoDB", "Firebase", "networking", "Kafka", "testing",
        "Git", "TFS"
    ]
};

export function getSkills(lang) {
    return Object.keys(skills).map(category =>
        `
        <article class="card">
            <h2 id="${category}">${getContent(lang, "skills-"+category)}</h2>
            ${
                skills[category].map(skill => `
                <span id="skill-${skill}" class="tag">${skill}</span>
                `
                ).join('')
            }
        </article>
        `).join("");
}
