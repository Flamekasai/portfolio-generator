import fs from 'fs';

const skills = [
    {
        "name": {
            "en": "languages",
            "es": "lenguajes"
        },
        "items": [
            "C", "C++", "Java", "C#", "Python", "GDScript",
            "Javascript", "Typescript", "PHP",
            "Racket", "Lisp", "R"
        ],
    },
    {
        "name": "web",
        "items": [
            "HTML", "CSS", "Tailwind", "Bootstrap", "SCSS",
            "NodeJS", "Angular", "Ionic", "React", "Laravel",
            ".NET"
        ],
    },
    {
        "name": {
            "en": "gamedev",
            "es": "Desarrollo de videojuegos",
        },
        "items": [
            "Unreal engine", "Godot",
            "Raylib", "SFML", "SDL", "CPCTelera"
        ],
    },
    {
        "name": {
            "en": "databases",
            "es": "Bases de datos",
        },
        "items": [
            "SQL",
            "MongoDB",
            "Firebase"
        ],
    },
    {
        "name": {
            "en": "ai",
            "es": "IA",
        },
        "items": [
            "Keras",
            "Tensorflow",
            "PyTorch"
        ],
    },
    {
        "name": {
            "en": "others",
            "es": "otros",
        },
        "items": [ "Kafka" ],
    },
    /*
    {
        "name": "learning",
        "items": [ "OpenGL" ],
    },
    */
];

const projects = [
    {
        "id": "keymasters",
        "name": "Keymaster's Journey",
        "description": {
            "en": `
                Keymaster's Journey is a puzzle game made in assembly for the
                <strong>Amstrad</strong> PC with a very short amount of time. It
                has different levels where the player has to get to a key to
                proceed to the next level while avoiding enemies. Making a full
                game in assembly was really enjoyable.
            `,
            "es": `
                Keymaster's Journey es un juego de puzles para el Amstrad.
                Desarrollado en ensamblador en su totalidad en un corto periodo
                de tiempo. Tiene varios entornos en los que el jugador tiene que
                encontrar la forma de llegar hasta la salida del nivel sin ser
                atrapado por los enemigos. El realizar un proyecto entero en
                ensamblador fue realmente enriquecedor y divertido.
            `
        },
        "technologies": [
            "CPCTelera", "Z80 Assembly", "CPCTelera",
            "WinAPE", "Retro Virtual Machine"
        ],
    },
    {
        "id": "conquista",
        "name": "Conquista 3D",
        "description": {
            "en": `
                Conquista 3D is a party game made in Unreal as a 3D remake of
                the minigame 'takeover' from the NDS game 'Clubhouse Games'. All
                the programming, game design and level design was made by Alvaro
                and me. The models were made by Sandra and Sergio.
            `,
            "es": `
                Conquista 3D es un remake creado en Unreal engine del minijuego
                'conquista' de la colección de juegos '42 juegos de siempre'
                para la NDS. Alvaro y Yo realizamos toda la programación y el
                diseño de las nuevas mécanicas y mapas. Sandra y Sergio se
                encargaron de los modelos.
            `,
        },
        "technologies": ["Unreal Engine"],
    },
    {
        "id": "transpiler",
        "name": {
            "en": "Compiler from scratch",
            "es": "Compilador desde cero"
        },
        "description": {
            "en": `
                Developed a compiler for a fictional bytecode. I particularly
                enjoyed crafting the initial iteration <strong>from
                scratch</strong>, without external libraries, improving my
                understanding of core principles and compiler design. The final
                version, made with Bison and Flex, allowed me to learn
                industry-standard tools for parsing and lexical analysis.
            `,
            "es": `
                Un compilador creado para una maquina virtual propia. Disfruté
                mucho de la iteración inicial donde se creó todo el 'parser' y
                'lexer' desde cero. Una versión alternativa se creó con Bison y
                Flex permitiendome conocer herramientas usadas habitualmente en
                la industria.
            `,
        },
        "technologies": ["C", "C++", "Bison", "Flex"],
    },
    {
        "id": "termmmo",
        "name": "Terminal Battle Royale",
        "description": {
            "en": `
                <p>
                A distributed terminal-based battle royale where players fight
                each other to become the only survivor. The game was written in
                python for both the client and the server. They communicate
                through Kafka queues of events.
                </p>

                <p>
                The authentication is handled via API REST written in javascript
                using node in the backend. On top of that, an open weather API
                was consulted to generate weather effects in the game based on
                real weather data.
                </p>

                <p>
                Players can also expectate through a website in real time.
                </p>
            `,
            "es": `
                <p>
                Un battle royale de terminal donde los jugadores luchan entre sí
                para ser el último que queda en pie. Tanto el cliente como el
                servidor se escribieron en python. Ambos se comunican mediante
                colas de eventos de Kafka.
                </p>

                <p>
                La autenticación y autorizacióñ se gestiona mediante una API
                REST escrita en javascript utilizando node para el backend.
                Además el juego consulta APIs climatológicas para simular
                efectos basados en el clima real.
                </p>

                <p>
                Otros jugadores puede ver la partida en directo a traves de una
                web para espectadores.
                </p>
            `,
        },
        "technologies": ["Python", "Kafka", "NodeJS", "SQL"],
    },
    {
        "id": "rolgrama",
        "name": {
            "en": "Rolgrama: A System-Agnostic Tabletop RPG Manager",
            "es": "Rolgrama: Un gestor de partidas de rol agnostico"
        },
        "description": {
            "en": `
                D&D (Dungeons & Dragons) is the most played tabletop RPG system
                in the world. As a consecuence, most digital tools for managing
                tabletop RPG sessions are designed with D&D in mind despite the
                wide variety of systems with different strengths and interesting
                ideas. <strong>Rolgrama</strong> is a tabletop RPG manager that
                allows users to keep track of advancements, players, characters
                and GM-player synchronization in a generic, system-agnostic way,
                allowing players to enjoy their favourite hobby without being
                limited to one system.
            `,
            "es": `
                D&D (Dungeons & Dragons) es el sistema de rol de mesa más
                jugado del mundo. Como consecuencia, la mayoría de herramientas
                digitales se han desarrollado con él en mente pese a que hay
                muchos otros sistemas con otras fortalezas e ideas interesantes.
                Rolgrama es un gestor que permite el seguimiento de avances,
                jugadores y personajes sin estar diseñado con un sistema de
                reglas concreto. Por tanto le da a los usuarios una buena
                herramienta para disfrutar de su pasatiempo independientemente
                del sistema que usen.
            `
        },
        "technologies": ["Ionic", "Angular", "Firebase", "NodeJS"],
    },
    {
        "id": "flamingo",
        "name": {
            "en": "Flamingo: A social media platform",
            "es": "Red social Flamingo"
        },
        "description": {
            "en": `
                Flamingo is a social media app where you can share text and
                images and follow friends. Users can also make use of
                <strong>tags</strong> to follow topics that matter to them. It
                was developed by a team of 5 people where I did most of the
                frontend, database administration and user authentication and
                authorization.
            `,
            "es": `
                Flamingo es una red social donde puedes compartir publicaciones
                con texto e imagenes y conectar con amigos. También puede usar
                <strong>tags</strong> para hacer seguimiento de temas que te
                resulten de interes. Se desarrolló en un grupo de 5 donde yo
                hice la mayor parte del frontend, gestión de la base de datos,
                y autenticación y autorización de usuarios.
            `
        },
        "technologies": [ "C#", "ASP.NET", "SQL", "Bootstrap"],
    },
    {
        "id": "uaprojects",
        "name": {
            "en": "UAProjects: Task manager and Issue tracker",
            "es": "UAProjects: Herramienta de gestión de proyectos"
        },
        "description": {
            "en": `
                This project management tool enables users to efficiently manage
                projects, track issues, and assign tasks to collaborators with
                different levels of priority. With built-in user
                authentication and authorization, it ensures secure access with
                role administration.
            `,
            "es": `
                Una herramienta de gestión de proyectos que permite a los
                usuarios hacer seguimiento de problemas y asignar tareas a
                colaboradores con diferentes niveles de prioridad. Cuenta
                con autenticación y autorización de usuarios permitiendo
                gestionar el acceso a los contenidos a través de roles y
                perfiles.
            `
        },
        "technologies": ["PHP", "Laravel", "SQL", "Bootstrap"],
    },
];

const jobs = [
    {
        "from": `2024`,
        "to": {
            "en": `present`,
            "es": `presente`,
        },
        "position": {
            "en": `Full-stack Software Engineer`,
            "es": `Ingeniero de Software`
        },
        "company": "NTTData",
        "url": "https://www.nttdata.com/global/en/",
        "description": {
            "en":
                `
                <p>
                I contributed to the creation of applications deployed across
                multiple platforms serving a large number of clients worldwide.
                Supporting PC and Mobile native apps integrating cloud
                components enabling hybrid (online/offline) workflows to achieve
                high resilience in low connectivity scenarios and locations.
                </p>
                <p>
                I also created internal tools to improve and automate common
                tasks.
                </p>
                <p>
                    Key contributions:
                    <ul>
                        <li>Development of web UIs with industry leading technologies</li>
                        <li>Development of REST APIs</li>
                        <li>Development of automated tests (regresion, unit and integration)</li>
                    </ul>
                </p>
                `,
            "es": `
                <p>
                He contribuido en la creación de aplicaciones utilizadas por una
                gran cantidad de clientes al rededor del mundo en varias
                plataformas. Dando soporte tanto a PC como smartphones y
                con integración en la nube permitiendo flujos de trabajo
                híbridos, permitiendo una gran resiliencia en escenarios de
                baja conectividad.
                </p>
                <p>
                También desarrolle herramientas internas para la mejora y
                automatización de tareas habituales.
                </p>
                <p>
                    Contribuciones principales:
                    <ul>
                    <li>Desarrollo de interfaces web con las tecnologías más punteras en la industria</li>
                    <li>Desarrollo de APIs REST</li>
                    <li>Desarrollo de pruebas automatizadas tanto de regresión como de integración y unitarias</li>
                    </ul>
                </p>
            `
        },
    },
];

const literals = {
    "meta-title": {
        "en": "Adrian Ruiz Garcia's portfolio",
        "es": "Portfolio de Adrián Ruiz García",
    },
    "meta-description": {
        "en": `
            Adrian Ruiz Garcia's portfolio showcases his expertise as a
            software engineer and game developer, featuring details about
            his skills, work experience, and technologies in diverse fields
            such as web development, game development, low-level
            programming, compilers, and more.
        `,
        "es": `
            El portfolio de Adrián Ruiz Garcia muestra su experiencia como
            ingeniero de software y desarrollador de videojuegos. Detalla sus
            habilidades, experiencia laboral y tecnologías conocidas en diversos
            campos como el desarrollo web, el desarrollo de videojuegos, la
            programación a bajo nivel, diseño de compiladores y más.
        `
    },
    "intro-title": {
        "en": "Hi, I'm",
        "es": "Hola, soy"
    },
    "intro-description": {
        "en": `
            A <span class="text-accent">software engineer</span>
            and <span class="text-accent">game developer</span>
            who loves the carefull, from scratch, high quality craft of code.
        `,
        "es": `
            Un <span class="text-accent">ingeniero informático</span> y
            <span class="text-accent">desarrollador de videojuegos</span> al que
            le encanta la programación a bajo nivel y el desarrollo de software
            de calidad.
        `
    },
    "title-aboutme": {
        "en": "About Me",
        "es": "Sobre mí",
    },
    "title-skills": {
        "en": "Skills and Technologies",
        "es": "Habilidades y tecnologias"
    },
    "title-jobs": {
        "en": "Professional Experience",
        "es": "Experiencia laboral"
    },
    "title-projects": {
        "en": "Projects",
        "es": "Proyectos"
    }
};

const resources = {
    "email": `<svg class="icon-email" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>`,
    "github": `<svg class="icon-github" width="800px" height="800px" viewBox="-2 -2 24 24" version="1.1"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path> </g> </g> </g> </svg>`,
    "linkedin": `<svg class="icon-linkedin" fill="#000000" width="800px" height="800px" viewBox="-5.5 0 32 32" version="1.1"> <title>linkedin</title> <path d="M0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 1.844zM2.813 10.281c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 0-1.813-0.813-1.813-1.844zM7.844 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zM2.875 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z"/> </svg>`,
};

const supported_languages = [
    {
        id: "en",
        name: "english"
    },
    {
        id: "es",
        name: "español"
    },
];

function main() {
    for (const lang of supported_languages) {
        const output_directory = `./build/${lang.id}`;

        if (!fs.existsSync(output_directory)) {
            fs.mkdirSync(output_directory);
        }

        fs.writeFileSync(`./build/${lang.id}/index.html`, create_page(lang));
        console.log(`Generated language "${lang.name}"`);
    }

    fs.writeFileSync("./build/index.html", create_index());
}

function get_literal(id, language) {
    if (!literals[id]) {
        console.error(`(literals) Missing ${id}["${language.id}"]`);
        return id;
    }

    const literal = literals[id][language.id];
    if (!literal) {
        console.error(`(literals) Missing ${id}["${language.id}"]`);
        return id;
    }
    return literal;
}

function create_page(language) {
    const language_list = supported_languages.map((lang, index) => {
        let link = "";

        if (index !== 0) {
            link = `<span class="language-middot">&middot</span> `;
        }

        if (lang.id === language.id) {
            link += `<a id="selected-language" href="../${lang.id}/index.html">${lang.name}</a>`
        } else {
            link += `<a href="../${lang.id}/index.html">${lang.name}</a>`
        }

        return link;
    }).join("\n");

    return `<!DOCTYPE html>
    <html>
        <head>
            <title>${get_literal("meta-title", language)}</title>
            <meta charset="utf-8" />
            <meta name="description" content="${get_literal("meta-description", language)}" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="../styles.css" />
        </head>
        <body>
            <div id="language-selector">
                ${language_list}
            </section>
            <section id="intro">
                <img src="../resources/profile.jpg" />
                <h1>
                    ${get_literal("intro-title", language)}
                    <span class="text-accent">Adrian</span>
                </h1>
                <p>${get_literal("intro-description", language)}</p>
                <div class="contact-icons">
                    <a href="https://www.linkedin.com/in/adrian-ruiz-garcia-050209194/" target="_blank">${resources["linkedin"]}</a>
                    <a href="https://github.com/flamekasai" target="_blank">${resources["github"]}</a>
                    <a href="mailto:adrianruizgjj@gmail.com" target="_blank">${resources["email"]}</a>
                </div>
            </section>
            <section>
                <h2>${get_literal("title-skills", language)}</h2>
                <article id="skills">
                    ${create_skills(language)}
                </article>
            </section>
            <section>
                <h2>${get_literal("title-jobs", language)}</h2>
                <article id="jobs">
                    ${create_jobs(language)}
                </article>
            </section>
            <section>
                <h2>${get_literal("title-projects", language)}</h2>
                <article id="projects">
                    ${create_projects(language)}
                </article>
            </section>
            <footer>
            <a href="#top">Back to top</a>
            </footer>
        </body>
    </html>`;
    /*
            <section>
                <h2>${get_literal("title-aboutme", language)}</h2>
            </section>
    */
}

function create_skills(language) {
    let items = skills.map(category => {
        const category_items = category.items.map(item => {
            return `<li>${item}</li>`;
        }).join("\n");

        const name = typeof(category.name) === "string" ? category.name : category.name[language.id];

        return `
        <div class="skill-category">
            <h3>${name}</h3>
            <ul>
            ${category_items}
            </ul>
        </div>
        `;
    }).join("\n");

    return items;
}

function create_jobs(language) {
    return jobs.map(job => {
        const from        = typeof(job.from) == "string" ? job.from : job.from[language.id];
        const to          = typeof(job.to) == "string" ? job.to : job.to[language.id];
        const position    = job.position[language.id];
        const description = job.description[language.id];

        let valid = true;

        if (!position) {
            console.error(`(jobs) Missing job.position["${language.id}"] in ${job.position[language.id]} ${job.company}`);
            valid = false;
        }

        if (!from) {
            console.error(`(jobs) Missing job.from["${language.id}"] in ${job.position[language.id]} ${job.company}`);
            valid = false;
        }

        if (!to) {
            console.error(`(jobs) Missing job.to["${language.id}"] in ${job.position[language.id]} ${job.company}`);
            valid = false;
        }

        if (!description) {
            console.error(`(jobs) Missing job.description["${language.id}"] in ${job.position[language.id]} ${job.company}`);
            valid = false;
        }

        if (!valid) {
            return ``;
        }

        const company_name = job.url ? `<a href="${job.url}" target="_blank">${job.company}</a>` : job.company;

        return `
        <div class="card job-entry">
            <span class="time-period"><time>${from}</time> &mdash; <time>${to}</time></span>
            <h3>${job.position[language.id]} <span class="job-middot">&middot</span> ${company_name}</h3>
            ${description}
        </div>
        `;

    }).join("\n");
}

function create_projects(language) {
    return projects.map(project => {
        const name = typeof(project.name) === "string" ? project.name : project.name[language.id];
        if (!name) {
            console.error(`(projects) Missing project.name["${language.id}"] in ${project.id}`);
            return ``;
        }

        const description = project.description[language.id];
        if (!description) {
            console.error(`(projects) Missing project.description["${language.id}"] in ${project.id}`);
            return ``;
        }

        const tags = project.technologies.map(tech => {
            return `
                <span class="tag">${tech}</span>
            `;
        }).join("\n");

        return `
        <div class="card">
            <h3>${name}</h3>
            <div class="project-tags">${tags}</div>
            <p>${description}</p>
        </div>
        `;
    }).join("\n");
}

function create_index() {
    const language_list = supported_languages.map(lang => `<li><a href="./${lang.id}/index.html">${lang.name}</a></li>`).join("\n");
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Adrian Ruiz Garcia's portfolio</title>
            <meta charset="utf-8" />
            <meta name="description" content="
            Adrian Ruiz Garcia's portfolio showcases his expertise as a
            software engineer and game developer, featuring details about
            his skills, work experience, and technologies in diverse fields
            such as web development, game development, low-level
            programming, compilers, and more.
            "/>
            <meta name="author" content="Adrian Ruiz Garcia"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="styles.css" />
            <style>
            body
            {
                height: 100vh;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            ul
            {
                list-style: none;
                max-height: 50%;
                overflow-y: scroll;
                scrollbar-width: none;
            }

            ul li a
            {
                display: block;
                margin: 0.5em 0em;
                padding: 0.5em 1em;

                font-size: 2rem;
                text-transform: capitalize;
                text-align: center;

                color: var(--clr-accent);
            }

            #welcome a:hover,
            #welcome a:focus
            {
                background-color: #ffffff11;
            }
            </style>
        </head>
        <body>
        <ul id="welcome">
            ${language_list}
        </ul>
        </body>
    </html>
    `;
}

main();
