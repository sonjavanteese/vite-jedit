export const appData = [
    {
      "id": 0,
      "slug": "start",
      "head": {
        "titel": "Nwp-Studio",
        "sub": "Pico-Css",
        "bg": "https://nwp-cgn.de/img/poser/imgA02.png"
      },
      "link": {
        "path": "/",
        "name": "Start",
        "icon": "home"
      }
    },
    {
      "id": 1,
      "slug": "elements",
      "head": {
        "titel": "Nwp-Pico",
        "sub": "Elements",
        "bg": "https://nwp-cgn.de/img/poser/imgA05.png"
      },
      "link": {
        "path": "/elements",
        "name": "Elem",
        "icon": "power"
      }
    },
    {
      "id": 2,
      "slug": "components",
      "head": {
        "titel": "Nwp-Pico",
        "sub": "Components",
        "bg": "https://nwp-cgn.de/img/poser/imgA06.png"
      },
      "link": {
        "path": "/components",
        "name": "Comp",
        "icon": "warn"
      }
    }
];

export const pages = appData.map(x => x.head);
export const navi = appData.map(x => x.link);
export default appData;