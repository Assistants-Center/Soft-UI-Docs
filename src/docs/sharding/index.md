# Sharding

Soft-UI has a shards page built-in so if you use sharding you can publicly display statistics!

You can enable it by following these steps

## Dashboard setup

Place this code into the theme options and change the key to your own ****SECURE**** string.

```js
shardspage: {
    enabled: true,

    key: "place your key here!",
},
```

## Bot setup

Install the NPM package on your ****Sharding Manager****

```bash
npm install dbdsoftuishardstats
```

Almost done! Place this code into your ready event on the Sharding Manager or if using discord-hybrid-sharding, after spawning the clusters.

```js
const DSU = require("dbdsoftuishardstats")

DSU.register(manager, {
    dashboard_url: "your domain",
    key: "your key",
    interval: 15
})
```

It should look like this, except with your details:

```js
const DSU = require("dbdsoftuishardstats")

DSU.register(manager, {
    dashboard_url: "https://softui.assistantscenter.com",
    key: "your key here!",
    interval: 15
})
```

If you want to adjust the interval of stats posting, just simply change the interval to as many seconds as you want.

And we are done! Now just restart your dashboard and bot then the stats collection will begin.
