# Custom Theme Options
~~An [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of addon IDs which will be imported into the theme.~~
### Example Usage
```js
theme: SoftUI({
    customThemeOptions: {
        index: async ({ req, res, config }) => {
            const cards = [
                {
                    title: "CPU",
                    icon: "single-02",
                    getValue: os.cpus()[0].model.replace('(R) Core(TM) ', ' ').replace(' CPU ', '').split('@')[0],
                    progressBar: {
                        enabled: false,
                        getProgress: 50
                    }
                }
            ]

            const graph = {
                values: [690, 524, 345, 645, 478, 592, 468, 783, 459, 230, 621, 345],
                labels: ["1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", "10m"]
            }

            return {
                cards,
                graph
            }
        }
    }
})
```

### Tip!
?> **Maximum 4 cards**<br>
The maximum number of cards to be returned is 4.

### Properties
* [cards](/docs/soft-ui/customThemeOptions/index/cards/)
* [graph](/docs/soft-ui/customThemeOptions/index/graph/)

### Types
- [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)