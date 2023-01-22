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
                    getValue: "Title",
                    progressBar: {
                        enabled: false,
                        getProgress: 50 // 0 - 100 (get a percentage of the progress)
                    }
                }
                // Include 3 more cards
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

-   [cards](/docs/customThemeOptions/index/cards/)
-   [graph](/docs/customThemeOptions/index/graph/)

### Types

-   [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
