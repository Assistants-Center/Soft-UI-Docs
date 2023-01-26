# Logs

Soft-UI has a shards page built-in so you can see your bots logs in the admin interface.

You can enable it by following these steps

## Dashboard setup

Modify the admin section to include this and change the key to your own ****SECURE**** string.

```js
admin: {
    logs: {
        enabled: true,
        key: "place your key here!"
    }
},
```

For more information on how to setup the dashboard part, please see the [Admin Category](/docs/admin/) page.

## Bot setup

Install the NPM package on your ****BOT****

```bash
npm install dbd-soft-ui-logs
```

Almost done! Place this code into your ready event on the Bot. ****Make sure to change the values to your own URL and Key****

```js
const DLU = require('dbd-soft-ui-logs')

DLU.register(client, {
    dashboard_url: 'YOURURLHERE',
    key: 'YOURKEYHERE'
})
```

It should look like this, except with your details:

```js
const DLU = require('dbd-soft-ui-logs')

DLU.register(client, {
    dashboard_url: 'https://assistantscenter.com',
    key: 'MyS€cretKey'
})
```

To send logs to the dashboard, you can use the send function. Place this code into your unhandledRejection event on the Bot. ****Make sure to change the values to your own URL and Key****

```js
process.on('unhandledRejection', (reason, p) => {
  DLU.send(client, {
    dashboard_url: 'YOURURLHERE',
    title: 'Unhandled Rejection',
    description: reason,
    key: 'MyS€cretKey'
  })
})
```

It should look like this, except with your details:

```js
process.on('unhandledRejection', (reason, p) => {
  DLU.send(client, {
    dashboard_url: 'https://assistantscenter.com',
    title: 'Unhandled Rejection',
    description: reason,
    key: 'MyS€cretKey'
  })
})
```

If you want to show custom logs on the dashboard, you can use the send function. Place this code into any event on the Bot. ****Make sure to change the values to your own URL and Key****

```js
DLU.send(client, {
    dashboard_url: 'YOURURLHERE',
    title: 'Unhandled Rejection',
    description: reason,
    key: 'MyS€cretKey'
  })
```

And we are done! Now just restart your dashboard and bot then the log collection will begin.
