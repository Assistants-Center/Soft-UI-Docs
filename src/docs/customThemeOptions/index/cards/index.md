# [ThemeConfig].customThemeOptions
An [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of addon IDs which will be imported into the theme. 
### Example Usage
```js
theme: SoftUI({
    customThemeOptions: {
        index: async ({ req, res, config }) => {
            let username = req.session?.user?.username || "Guest",

            const cards = [
                {
                    title: "Current User",
                    icon: "single-02",
                    getValue: username,
                    progressBar: {
                        enabled: false,
                        getProgress: client.guilds.cache.size
                    }
                },
                {
                    title: "CPU",
                    icon: "single-02",
                    getValue: os.cpus()[0].model.replace('(R) Core(TM) ', ' ').replace(' CPU ', '').split('@')[0],
                    progressBar: {
                        enabled: false,
                        getProgress: 50
                    }
                },
                {
                    title: "System Platform",
                    icon: "single-02",
                    getValue: os.platform(),
                    progressBar: {
                        enabled: false,
                        getProgress: 50
                    }
                },
                {
                    title: "Server count",
                    icon: "single-02",
                    getValue: `${client.guilds.cache.size} out of 75`,
                    progressBar: {
                        enabled: true,
                        getProgress: (client.guilds.cache.size / 75) * 100
                    }
                }
            ]

            return {
                cards
            }
        }
    }
})
```

### Tip!
?> **Maximum 4 cards**<br>
The maximum number of cards to be returned is 4.

### Types
- [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)