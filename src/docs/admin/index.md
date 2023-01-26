# Admin

An [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) which contains all the information for the admin page.

## Example Usage

```js
theme: SoftUI({
    admin: {
        pterodactyl: {
            enabled: false,
            apiKey: "myPterodactylApiKey",
            panelLink: "https://panel.example.com",
            serverUUIDs: ["server-uuid-1", "server-uuid-2"]
        },
        logs: {
            enabled: false,
            key: "place your key here!"
        }
    }
})
```

## Properties

-   [pterodactyl](/docs/admin/pterodactyl/)
    -   [enabled](/docs/admin/pterodactyl/enabled)
    -   [apiKey](/docs/admin/pterodactyl/apiKey)
    -   [panelLink](/docs/admin/pterodactyl/panelLink)
    -   [serverUUIDs](/docs/admin/pterodactyl/serverUUIDs)
    
-  [logs](/docs/admin/logs/)
    -   [enabled](/docs/admin/logs/enabled)
    -   [key](/docs/admin/logs/key)

## Types

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
