# Sharding

Soft-UI has a shards page built-in so if you use sharding you can publicly display statistics!

You can enable it by following these steps

## Dashboard setup

Place this in your admin config which is located in the theme config and change the key to your own \***\*SECURE\*\*** string.

```js
admin: {
    pterodactyl: {
        enabled: false,
        apiKey: "apiKey",
        panelLink: "https://panel.website.com",
        serverUUIDs: [],
    },
    logs: {
        enabled: true,
        key: "YOURKEY",
    }
},
```

## setup

```bash
npm install dbd-soft-ui-logs
```

Almost done! Place this code into your ready event on the Sharding Manager or if using discord-hybrid-sharding, after spawning the clusters.

```js
const DLU = require("dbd-soft-ui-logs")

client.on("ready", () => {
    DLU.register(client, {
        dashboard_url: "YOURURLHERE",
        key: "YOURKEYHERE"
    })
})

process.on("unhandledRejection", (reason, p) => {
    DLU.send(client, {
        title: "Unhandled Rejection",
        description: reason
    })
})
```

It should look like this, except with your details:

```js
const DLU = require("dbd-soft-ui-logs")

client.on("ready", () => {
    DLU.register(client, {
        dashboard_url: "https://softui.assistantscenter.com",
        key: "YOURKEYHERE"
    })
})

process.on("unhandledRejection", (reason, p) => {
    DLU.send(client, {
        title: "Unhandled Rejection",
        description: reason
    })
})
```

::: tip `key`
The key is the same as the one you put in the dashboard options. Can be anything you want, just make sure it's secure and matches your dashboard.
:::

And we are done! Now just restart your dashboard and bot then the logs collection will begin.
