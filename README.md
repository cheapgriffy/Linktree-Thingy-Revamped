# Linktree Thingy Revamped 🌈

A remastered version of my old project, [Linktree Thingy](https://github.com/cheapgriffy/Linktree-thingy), built in VueJS with javascript and vite.
as a pretext to learn VueJS and Vite, and to have fun with it.<br>
*especially the fun part*

## Features
- 🧱 Random Background
- 🍃 Background Parallax Effect
- ⌨️ Parallax Debug overlay
- 🔘 Dynamic button for links
- ⌨️ Typewritter effect
- 👤 Discord Profile Picture link

---

## Architecuture
```
/src
├── assets                          // Prefer .webp for media's
│   ├── backgrounds
│   ├── fonts
│   ├── icons
│   ├── images
│   └── js
│       ├── GlobalClasses.js        // Contain all often reused functions *ex sleep()*
│       └── settings.js             // Contain global settings, mostly refs and raw data for now
├── components
│   ├── Background.vue              // Paralax is locally implemented on backgorund
│   ├── LinkButton.vue              // Socials buttons
│   └── debugVar.vue                // Shown on K keypress, various variables and edit inputs
├── App.vue
├── main.js
└── vite.config.js                  // No changes, default port used for now
```

## Installation

1. Clone the repository
```bash
git clone https://github.com/cheapgriffy/Linktree-Thingy-Revamped.git
```

2. Navigate to the project directory
```bash
cd Linktree-Thingy-Revamped
```

3. Install dependencies
```bash
npm install
```

4. Launch vite server
```bash
npm run dev
```

> most of the variable are editable in ``./assets/js/settings.js`` <br>
> its a wip not everything is customisable yet

## API Used

- [PFP-API](https://github.com/AdvanceFTeam/PFP-API) from [AdvanceFallingTeam](https://github.com/AdvanceFTeam)
Used for Discord profile picture download.



> I should really change the name
> but the only skills that matter for now is learning
