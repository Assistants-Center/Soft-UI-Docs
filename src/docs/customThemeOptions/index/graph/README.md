# [ThemeConfig].customThemeOptions.index.graph
An [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of addon IDs which will be imported into the theme. 
### Example Usage
```js
theme: SoftUI({
    customThemeOptions: {
        index: async ({ req, res, config }) => {
            const graph = {
                values: [690, 524, 345, 645, 478, 592, 468, 783, 459, 230, 621, 345],
                labels: ["1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", "10m"]
            }

            return {
                graph
            }
        }
    }
})
```

### Tip!
?> **Edit graph info at [theme.index.graph](/docs/index/graph/) **<br>

### Types
- [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)