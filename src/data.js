import html from '../src/asset/skills/html.png'
import css from '../src/asset/skills/css.png'
import git from '../src/asset/skills/git.png'
import github from '../src/asset/skills/github.png'
import javascript from '../src/asset/skills/javascript.png'
import react from '../src/asset/skills/react.png'
import reactquery from '../src/asset/skills/reactquery.png'
import reduxIcon from '../src/asset/skills/redux.png'
import midtrans from '../src/asset/skills/midtrans.png'
import vue from '../src/asset/skills/vue.png'
import tailwind from '../src/asset/skills/tailwind.png'
import sass from '../src/asset/skills/sass.png'
import npm from '../src/asset/skills/npm.png'
import laravel from '../src/asset/skills/Laravel.png'
import php from '../src/asset/skills/PHP.png'
import nextjs from '../src/asset/skills/Nextjs.png'
import instagram from '../src/asset/instagram.svg'
import gh from '../src/asset/gh.svg'
import linkedin from '../src/asset/linkedin.svg'
import trading from '../src/asset/trading.png'
import teknofest from '../src/asset/teknofest.png'
import gurubintang from '../src/asset/gurubintang.png'
import diesnatalis from '../src/asset/diesnatalis.png'
import bic from '../src/asset/bic.png'
import weatherio from '../src/asset/weatherio.png'
import nexter from '../src/asset/nexter.png'
import twonana from '../src/asset/twonana.png'
import tvmaze from '../src/asset/vue-tvmaze.png'
import gostorage from '../src/asset/gostorage.png'
import pmbonline from '../src/asset/pmbonline.png'
import sportgather from '../src/asset/sportgather.png'


const skills = [html, css, javascript, sass, tailwind, react, nextjs, reduxIcon, reactquery, git, github, npm]

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
    constructor(image, title, url) {
        this.image = image
        this.title = title
        this.url = url
    }
}

const mainProject = [
    new Project(teknofest, 'Teknofest Proclub Web Portal', 'Web portal made for Proclub Telkom University recruitment registration 2022.', 'https://github.com/helloproclub/teknofest-web-fe/tree/master', [javascript, react, sass]),
    new Project(gurubintang, 'Guru Bintang', 'a MVP product for the development of education and skills for honorary teachers as a condition for the Proclub Telkom University probation phase 2021. Among the features are user and admin auth, course CRUD, course transactions, course access, certificate printing, and course purchase history.', 'https://gurubintang.vercel.app/', [javascript, react, sass]),
    new Project(diesnatalis, 'Dies Natalis of HIMA Fisika Unpad', 'An anniversary web platform for the Association of Physics Departments, Padjadjaran University. Among the features are live stream & live chat embedded YouTube, journey of association, and exhibition display.', 'https://unpad-project.vercel.app/', [javascript, react, sass]),
]

const otherProject = [
    new Project(bic, 'Batununggal Indah Club', 'A web application as a solution to facilitate customers in booking and admin in managing the operations of the Batununggal Indah Club sports center.', 'https://bic-pengunjung.vercel.app/', [react, tailwind, reduxIcon, reactquery, midtrans]),
    new Project(weatherio, 'Weatherio', 'an API based web apps to track and search different weather in different city. Among the features are weather search by city and weather search based on device location.', 'https://weatherio.vercel.app/', [javascript, react, sass]),
    new Project(nexter, 'Nexter', 'Nexter is a website for realtors to promote the houses they sell. This is a course based project from Udemy with some UI improvements.', 'https://nexter01.netlify.app/', [html, css, javascript, sass]),
    new Project(tvmaze, 'Vue TV Maze API', 'an API based website to display tv programs using TVMaze API as an internship challenge assignment.', 'https://vue-tvmaze-api.vercel.app/', [vue, javascript, css]),
    new Project(gostorage, 'GoStorage', 'GoStorage is a warehouse rental platform created as an initial certification task by BNSP. Among the features are user & admin auth, warehouse rental CRUD, and rental returns.', 'https://github.com/UseinAkbar/LSP-GoStorage', [laravel, php]),
    new Project(pmbonline, 'PMB Online', 'PMB Online is a simple platform for new student registration created as a practical certification assignment by BNSP. Among the features are user & admin auth, registration CRUD, and registrant CRUD.', 'https://github.com/UseinAkbar/LSP-PMBOnline', [laravel, php]),
    new Project(sportgather, 'Sportgather', 'Sportgather is a sports enthusiast platform for recommendations of nearby venues and online venue booking. Among the features are user auth, CRUD user, CRUD sports field booking, booking payments, and tracking booking status.', '', [react, tailwind]),
    new Project(trading, 'Trading Watcher', 'Trading watcher is a private dashboard created to monitor and adjust crypto coins according to user needs. Among the features are user auth, CRUD of watcher and alert coins, logs, statistics, etc. ', '', [javascript, react, sass]),
    new Project(twonana, 'Twonana Portfolio', 'A portfolio website collection of nft assets. Among the features are admin auth, CRUD nfts, and auction schedule.', '', [javascript, react, sass])
]

const contacts = [
    new Contact(linkedin, 'Linkedin', 'https://www.linkedin.com/in/usein-akbar/'),
    new Contact(gh, 'Github', 'https://github.com/UseinAkbar'),
    new Contact(instagram, 'Instagram', 'https://www.instagram.com/useinakbarr/')
]

export {skills, mainProject, otherProject, contacts}