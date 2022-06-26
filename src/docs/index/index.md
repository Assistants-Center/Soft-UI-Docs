# Index
An [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) which contains all the information for the index page.

## Example Usage
```js
theme: SoftUI({
    index: {
        card: {
            category: "Soft UI",
            title: "Assistants - The center of everything",
            description: "Assistants Discord Bot management panel. Assistants Bot was created to give others the ability to do what they want. Just.<br>That's an example text.<br><br><b><i>Feel free to use HTML</i></b>",
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
            max: 100,
        },
    },
})
```

## Properties
* [card](/docs/index/card/)
* [category](/docs/index/card/category)
* [title](/docs/index/card/title)
* [descripton](/docs/index/card/description)
* [image](/docs/index/card/image)
* [link](/docs/index/card/link/)
    * [enabled](/docs/index/card/link/enabled)
    * [url](/docs/index/card/link/url)
* [graph](/docs/index/graph/)
    * [enabled](/docs/index/graph/enabled)
    * [lineGraph](/docs/index/graph/lineGraph)
    * [title](/docs/index/graph/title)
    * [tag](/docs/index/graph/tag)
    * [max](/docs/index/graph/max)

## Types
- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)