import html from '../src/asset/skills/html.png'
import css from '../src/asset/skills/css.png'
import git from '../src/asset/skills/git.png'
import github from '../src/asset/skills/github.png'
import javascript from '../src/asset/skills/javascript.png'
import react from '../src/asset/skills/react.png'
import vue from '../src/asset/skills/vue.png'
import tailwind from '../src/asset/skills/tailwind.png'
import sass from '../src/asset/skills/sass.png'
import npm from '../src/asset/skills/npm.png'
import instagram from '../src/asset/instagram.svg'
import gh from '../src/asset/gh.svg'
import linkedin from '../src/asset/linkedin.svg'
import trading from '../src/asset/trading.png'
import teknofest from '../src/asset/teknofest.png'
import gurubintang from '../src/asset/gurubintang.png'
import diesnatalis from '../src/asset/diesnatalis.png'
import weatherio from '../src/asset/weatherio.png'
import nexter from '../src/asset/nexter.png'
import twonana from '../src/asset/twonana.png'
import tvmaze from '../src/asset/vue-tvmaze.png'


const skills = [html, css, tailwind, git, github, javascript, react, vue, sass, npm]

class Project {
    constructor(image, title, desc, url, stack) {
        this.image = image
        this.title = title
        this.desc = desc
        this.url = url
        this.stack = stack
    }
}

class Contact {
    constructor(image, url) {
        this.image = image
        this.url = url
    }
}

const mainProject = [
    new Project(teknofest, 'Teknofest Proclub Web Portal', 'Web portal made for Proclub Telkom University recruitment registration 2022.', 'https://teknofest.proclub.tech/', [javascript, react, sass]),
    new Project(gurubintang, 'Guru Bintang', 'a MVP product for the development of education and skills for honorary teachers as a condition for the Proclub Telkom University probation phase 2021.', 'https://gurubintang.vercel.app/', [javascript, react, sass]),
    new Project(diesnatalis, 'Dies Natalis of HIMA Fisika Unpad', 'An anniversary web platform for the Association of Physics Departments, Padjadjaran University.', 'https://unpad-project.vercel.app/', [javascript, react, sass]),
]

const otherProject = [
    new Project(weatherio, 'Weatherio', 'an API based web apps to track and search different weather in different city.', 'https://weatherio.vercel.app/', [javascript, react, sass]),
    new Project(nexter, 'Nexter', 'Nexter is a website for realtors to promote the houses they sell. This is a course based project from Udemy with some improvements that I made.', 'https://nexter01.netlify.app/', [html, css, javascript, sass]),
    new Project(tvmaze, 'Vue TV Maze API', 'an API based web apps to display tv programs using TVMaze API.', 'https://vue-tvmaze-api.vercel.app/', [vue, javascript, css]),
    new Project(trading, 'Trading Watcher', 'Trading watcher is a private dashboard created to monitor and adjust crypto coins according to user needs.', '', [javascript, react, sass]),
    new Project(twonana, 'Twonana Portfolio', 'a portfolio website collection of nft assets.', '', [javascript, react, sass])
]

const contacts = [
    new Contact(linkedin, 'https://www.linkedin.com/in/usein-akbar-896379206/'),
    new Contact(gh, 'https://github.com/UseinAkbar'),
    new Contact(instagram, 'https://www.instagram.com/useinakbarr/')
]

export {skills, mainProject, otherProject, contacts}