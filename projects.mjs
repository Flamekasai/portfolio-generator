import { getContent } from "./utils.mjs";

const projects = [
    {
        "id": "rolgrama",
        "name": "Rolgrama",
        "desc": {
            "en":
                `
                    <p>
                    Rolgrama is a role-playing campaign manager where
                    you can save information about all your tabletop rpg
                    campaigns and characters.
                    </p>

                    <p>
                    When you participate in a
                    campaign you have your character sheet screen where
                    you can view, add and remove information about your
                    own character.
                    </p>

                    <p>
                    You can also view the shared screen where the game
                    master (user who created the campaign) can add and
                    remove information visible to all players.
                    </p>
                `,
            "es":
                `
                    <p>
                    Rolgrama es un gestor de partidas de rol donde
                    puedes guardar información sobre tus campañas y
                    personajes.
                    </p>

                    <p>
                    Cuando participas en una campaña tienes un apartado
                    de hoja de personaje donde puedes ver, añadir y
                    eliminar información sobre tu propio personaje.
                    </p>

                    <p>
                    También existe una pantalla común donde el master
                    (usuario que creó la campaña) puede poner
                    información que pueden ver todos los jugadores.
                    </p>
                `
        },
        "technologies": [
            "Ionic", "Angular", "Firebase", "Node"
        ]
    },
    {
        "id": "flamingo",
        "name": "Flamingo",
        "desc": {
            "en":
                `
                    <p>
                    Flamingo is a social media app similar to Twitter,
                    where users can post text and images and follow
                    other people.
                    </p>

                    <p>
                    There are hashtags that can be added to posts or
                    followed so you can keep up with the latest news
                    about your interests.
                    </p>

                    <p>
                    It was developed by a team of 5 people where I did
                    most of the frontend, database administration and
                    user authentication and authorization.
                    </p>
                `,
            "es":
                `
                    <p>
                    Flamingo es una red social al estilo de Twitter
                    donde los usuarios pueden subir textos e imagenes y
                    seguir a otros usuarios.
                    </p>

                    <p>
                    Además puede seguir ciertos hashtags para mantenerse
                    al día de todos los posts que hablen sobre los temas
                    que te resulten de interes.
                    </p>

                    <p>
                    Fue un proyecto en grupo donde lleve a cabo el
                    diseño front-end casi por completo además de
                    administración de la base de datos y la
                    autenticación y autorización de usuarios.
                    </p>
                `
        },
        "technologies": [
            "C#", "ASP.NET", "SQL", "Bootsrap"
        ]
    },
    {
        "id": "sdapp",
        "name": "TermMMO",
        "desc": {
            "en":
                `
                    <p>
                    A distributed terminal-based MMO where players fight
                    each other to become the only survivor. The game was
                    written in python for both the client and the
                    server. They communicate through Kafka queues of
                    events.
                    </p>

                    <p>
                    The authentication is handled via API REST written
                    in javascript using node in the backend. On top of
                    that, an open weather API was consulted to generate
                    weather effects in the game based on real weather
                    data.
                    </p>

                    <p>
                    Players can also expectate through a web view as
                    shown in the picture.
                    </p>
                `,
            "es":
                `
                    <p>
                    Un MMO de terminal distribuido donde los jugadores
                    luchan entre sí y solo puede sobrevivir uno. El
                    juego fue escrito en python tanto para el cliente
                    como el servidor y se comunican mediante colas de
                    eventos con Kafka.
                    </p>

                    <p>
                    La autenticación de los usuarios se gestiona con una
                    API REST escrita en javascript y con node en el
                    backend. Además el juego obtenia datos
                    metereologicos de ciertas ciudades para generar
                    climas variados durante el juego.
                    </p>

                    <p>
                    Otros jugadores también pueden ver las partidas como
                    espectadores a traves de un navegador web. Como se
                    puede observar en la imagen.
                    </p>
                `
        },
        "technologies": [
            "Python", "Kafka", "Javascript", "SQL", "NodeJS"
        ]
    },
    {
        "id": "uaprojects",
        "name": "UAProjects",
        "desc": {
            "en":
                `
                    <p>
                    A project management tool where users can manage
                    projects, track issues and assign tasks to other
                    collaborators with different levels of priority.
                    With user authentication and authorization.
                    </p>
                `,
            "es":
                `
                    <p>
                    Una aplicación de gestión de proyectos donde los
                    usuarios pueden hacer el seguimiento de tareas y
                    problemas dentro de un proyecto así como asignarles
                    responsables y prioridades. Con autenticación y
                    autorización de usuarios.
                    </p>
                `
        },
        "technologies": [
            "PHP", "Laravel", "SQL", "Bootsrap"
        ]
    },
    {
        "id": "keymasters",
        "name": "Keymaster's Journey",
        "desc": {
            "en":
                `
                    <p>
                    A puzzle game made for the Amstrad CPC in 1.5 weeks.
                    It has different levels where the player has to get
                    to a key to proceed to the next level while avoiding
                    enemies.
                    </p>

                    <p>
                    The player has to take advantage of terrain
                    and clever movement to avoid them.
                    </p>
                `,
            "es":
                `
                    <p>
                    Un pequeño juego de puzzles para el Amstrad CPC en
                    1 semana y media donde el jugador tiene que llegar
                    hasta la llave para proceder al siguiente nivel
                    mientras evita a los enemigos.
                    </p>

                    <p>
                    El jugador debe
                    aprovechar el terreno y moverse de forma inteligente
                    para evitarlos.
                    </p>
                `
        },
        "technologies": [
             "Retro Virtual Machine", "Z80 Assembly", "CPCtelera", "WinAPE"
        ]
    },
    {
        "id": "conquista3D",
        "name": "Conquista3D",
        "desc": {
            "en":
                `
                    <p>
                    A remake of the 'takeover' mini game from 'Clubhouse
                    Games' for NDS with 3D physics and models.
                    </p>

                    <p>
                    I made all the programming and the game design with
                    Alvarin.
                    </p>

                    <p>
                    The green, orange and yellow teams models were made
                    by Sandra.
                    </p>

                    <p>
                    The Pink, blue and red models by Sergio.
                    </p>
                `,
            "es":
                `
                    <p>
                    Un remake en 3D del minijuego 'conquista' que
                    aparece en '42 Juegos de siempre' para la nintendo
                    DS. Donde se utilizan modelos 3D y físicas.
                    </p>

                    <p>
                    Yo me encargué de toda la programación y parte del
                    diseño con Alvarin.
                    </p>

                    <p>
                    Sandra hizo los modelos de los equipos verde,
                    naranja y amarillo.
                    </p>

                    <p>
                    Sergio los de los equipos rosa, azul y rojo.
                    </p>
                `
        },
        "technologies": [ "Unreal engine", "Blender" ]
    },
    {
        "id": "pl-transpiler",
        "name": "Transpiler",
        "desc": {
            "en":
                `
                    <p>
                    A compiler for a fictitious bytecode. The final
                    version was made with Bison and Flex, while the
                    first version was written by hand with no external
                    libraries as a learning exercise.
                    </p>
                `,
            "es":
                `
                    <p>
                    Un compilador para un bytecode ficticio. La versión
                    final fue desarrollada con Bison y Flex. Una primera
                    versión se hizo a mano sin librerías ni herramientas
                    externas como ejercicio de aprendizaje.
                    </p>
                `
        },
        "technologies": [ "C", "C++", "Bison", "Flex" ]
    },
    {
        "id": "learner",
        "name": "Learner",
        "desc": {
            "en":
                `
                    <p>
                    An AI made from scratch in C++ with backtracking and
                    easy to expand with new functionality.
                    </p>
                `,
            "es":
                `
                    <p>
                    Una IA hecha desde cero con C++. Con backtracking y
                    facilidad para añadir nueva funcionalidad.
                    </p>
                `
        },
        "technologies": [ "C++" ]
    }
];

function projectImage(id) {
    const missing = ["rolgrama", "uaprojects", "pl-transpiler"];
    let fileName = id;
    if (missing.includes(id)) {
        fileName = "missing";
    }
    return fileName;
}

export function getProjects(language) {
    return projects.map(project =>
    `
    <article id="${project.id}" class="project card">
        <img
            src="../resources/projects/${projectImage(project.id)}.png">
        <div class="project-content">
            <h2 class="project-title">${project.name}</h2>
            <div class="project-technologies">
            ${
                project.technologies.map(tech =>
                `
                    <span class="tag">${tech}</span>
                `
                ).join('')
            }
            </div>
            ${project.desc[language]}
        </div>
    </article>
    `
    ).join('');
}
