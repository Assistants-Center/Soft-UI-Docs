# Setting up Discord-Dashboard

## Creating config.json

We will be creating a new file, `config.json`, which will house all our important (and secret) settings!
Paste the following code into the file and replace as necessary:

```json
{
    "discord": {
        "token": "discordToken",
        "client": {
            "id": "clientId",
            "secret": "clientSecret"
        }
    },
    "dbd": {
        "port": 80,
        "domain": "http://localhost",
        "redirectUri": "/discord/callback",
        "license": "dbdLicense",
        "ownerIDs": ["Dashboard Admin Discord User IDs"]
    }
}
```

The configuration above will not work unless you change the values of the properties.

## Creating index.js

Create a new file, `index.js` (or anything you'd like) and paste the discord-dashboard handler into it.

```js{21}
// Define Packages
const { Client, Intents } = require('discord.js');
const config = require('./config.json');
let DBD = require('discord-dashboard');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.login(config.discord.token);

(async ()=>{
    await DBD.useLicense(config.dbd.license);
    DBD.Dashboard = DBD.UpdatedClass();

    const Dashboard = new DBD.Dashboard({
        port: config.dbd.port,
        client: config.discord.client,
        redirectUri: `${config.dbd.domain}${config.dbd.redirectUri}`,
        domain: config.dbd.domain,
        ownerIDs: config.dbd.ownerIDs,
        useThemeMaintenance: true,
        useTheme404: true,
        bot: client,
        settings: []
    });
    Dashboard.init();
})();
```

::: warning ownerIDs
`ownerIDs` is an array of Discord User IDs. These IDs will be able to access the dashboard's admin and perform admin actions such as creating feeds.<br>
It must be an array, even if you only have one ID and also must be defined!
:::

## Generating a license

Before you can use discord-dashboard, you need to generate a [license](https://store.assistantscenter.com).<br>
Once you've generated a license, add it to the **configuration file**.

## Implementing Soft-UI

Now that we've setup the basic functionality of discord-dashboard, we can start implementing Soft-UI!

At the beginning of `index.js`, place this line of code:

```js
const SoftUI = require("dbd-soft-ui")
```

On line 21 of `index.js`, you'll see the following line of code:

```js{1}
bot: client,
```

Press return to create a new line and place the following code on said line:

```js
theme: SoftUI({
    customThemeOptions: {
        index: async ({ req, res, config }) => {
            return {
                values: [],
                graph: {}, // More info at https://dbd-docs.assistantscenter.com/soft-ui/docs/customThemeOptions/
                cards: [],
            }
        },
    },
    websiteName: "Assistants",
    colorScheme: "pink",
    supporteMail: "support@support.com",
    icons: {
        favicon: "https://assistantscenter.com/wp-content/uploads/2021/11/cropped-cropped-logov6.png",
        noGuildIcon: "https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Circle-1024x1024.png",
        sidebar: {
            darkUrl: "https://assistantscenter.com/api/user/avatar/63ad65e2d3f1b1b3acdff794",
            lightUrl: "https://assistantscenter.com/api/user/avatar/63ad65e2d3f1b1b3acdff794",
            hideName: true,
            borderRadius: false,
            alignCenter: true,
        },
    },er: {
        image: "/img/soft-ui.webp",
        spinner: false,
        text: "Page is loading",
    },
    index: {
        graph: {
            enabled: true,
            lineGraph: false,
            tag: 'Memory (MB)',
            max: 100
        },
    },
    sweetalert: {
        errors: {},
        success: {
            login: "Successfully logged in.",
        }
    },
    preloader: {
        image: "/img/soft-ui.webp",
        spinner: false,
        text: "Page is loading",
    },
    admin: {
        pterodactyl: {
            enabled: false,
            apiKey: "apiKey",
            panelLink: "https://panel.website.com",
            serverUUIDs: []
        }
    },
    commands: [],
}),
```

Majority of the code above is \***\*required\*\*** and the theme will **_break_** if it is removed; take caution when removing parts of the config.<br>

This config is minimalised and is actually very customisable! View the [documentation]() to view all possible customisation options.

## Complete Setup

You've successfully setup Soft-UI!

Your code should look something along the lines of:

```js{3,23-83}
// Define Packages
const { Client, Intents } = require('discord.js');
const SoftUI = require('dbd-soft-ui');
const config = require('./config.json');
let DBD = require('discord-dashboard');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.login(config.discord.token);

(async ()=>{
    await DBD.useLicense(config.dbd.license);
    DBD.Dashboard = DBD.UpdatedClass();

    const Dashboard = new DBD.Dashboard({
        port: config.dbd.port,
        client: config.discord.client,
        redirectUri: `${config.dbd.domain}${config.dbd.redirectUri}`,
        domain: config.dbd.domain,
        ownerIDs: config.dbd.ownerIDs,
        useThemeMaintenance: true,
        useTheme404: true,
        bot: client,
        theme: SoftUI({
            customThemeOptions: {
                index: async ({ req, res, config }) => {
                    return {
                        values: [],
                        graph: {},
                        cards: [],
                    }
                },
            },
            websiteName: "Assistants",
            colorScheme: "pink",
            supporteMail: "support@support.com",
            icons: {
                favicon: 'https://assistantscenter.com/wp-content/uploads/2021/11/cropped-cropped-logov6.png',
                noGuildIcon: "https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Circle-1024x1024.png",
                sidebar: {
                    darkUrl: 'https://assistantscenter.com/img/logo.png',
                    lightUrl: 'https://assistanscenter.com/img/logo.png',
                    hideName: true,
                    borderRadius: false,
                    alignCenter: true
                },
            },
            index: {
                card: {
                    category: "Soft UI",
                    title: "Assistants - The center of everything",
                    description: "Assistants Discord Bot management panel. <b><i>Feel free to use HTML</i></b>",
                    image: "/img/soft-ui.webp",
                    link: {
                        enabled: true,
                        url: "https://google.com"
                    }
                },
                graph: {
                    enabled: true,
                    lineGraph: false,
                    title: 'Memory Usage',
                    tag: 'Memory (MB)',
                    max: 100
                },
            },
            sweetalert: {
                errors: {},
                success: {
                    login: "Successfully logged in.",
                }
            },
            preloader: {
                image: "/img/soft-ui.webp",
                spinner: false,
                text: "Page is loading",
            },
            admin: {
                pterodactyl: {
                    enabled: false,
                    apiKey: "apiKey",
                    panelLink: "https://panel.website.com",
                    serverUUIDs: []
                }
            },
            commands: [],
        }),
        settings: []
    });
    Dashboard.init();
})();
```

## Having issues?

Join our [Discord server](https://discord.gg/QWQWQWQ) if you're encountering any issues!<br>
Make sure to give us **detailed information** on how to reproduce this error and any logs/errors you see in the console.
