# Sharding

Soft-UI has a shards page built-in so if you use sharding you can publicly display statistics!

You can enable it by following these steps

## Dashboard setup

Place this code into the theme config and change the key to your own \***\*SECURE\*\*** string.

```js
shardspage: {
    enabled: true,
    key: "place your key here!",
},
```

## Bot setup

Install the NPM package on your \***\*Sharding Manager\*\***

```bash
npm install @dbd-soft-ui/shards
```

Almost done! Place this code into your ready event on the Sharding Manager or if using discord-hybrid-sharding, after spawning the clusters.

```js
const DSU = require("@dbd-soft-ui/shards")

DSU.register(manager, {
    dashboard_url: "your domain",
    key: "your key",
    interval: 15
})
```

It should look like this, except with your details:

```js
const DSU = require("@dbd-soft-ui/shards")

DSU.register(manager, {
    dashboard_url: "https://softui.assistantscenter.com",
    key: "your key here!",
    interval: 15
})
```

::: tip `key`
The key is the same as the one you put in the dashboard options. Can be anything you want, just make sure it's secure and matches your dashboard.
:::

::: tip `manager` 
The manager is your sharding manager. Depending on your setup it might be called different. Please make sure to use the proper name for it! 
:::

If you want to adjust the interval of stats posting, just simply change the interval to as many seconds as you want.

And we are done! Now just restart your dashboard and bot then the stats collection will begin.
