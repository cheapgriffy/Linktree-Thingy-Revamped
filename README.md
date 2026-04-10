# Linktree Thingy Revamped 🌈

A remastered version of my old project, [Linktree Thingy](https://github.com/cheapgriffy/Linktree-thingy), built in VueJS with javascript and vite.
as a pretext to learn VueJS and Vite, and to have fun with it.
*especially the fun part*

## Features
- Random Background
- Background Parallax Effect
- Parallax Debug overlay
- Dynamic button for links
- Typewritter effect

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

> I should really change the name
> but the only skills that matter for now is learning