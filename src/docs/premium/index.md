# Premium
An [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) which contains all the premium information.

## Example Usage
```js
theme: SoftUI({
    premium: {
        enabled: true,
        card: {
            title: "Want more from Assistants?",
            description: "Check out premium features below!",
            bgImage: "https://assistantscenter.com/wp-content/uploads/2021/11/cropped-cropped-logov6.png",
            button: {
                text: "Become Premium",
                url: "https://patreon.com/sharkybot"
            }
        }
    }
})
```

## Properties
* [enabled](/docs/premium/enabled)
* [card](/docs/premium/card/)
  * [title](/docs/premium/card/title)
  * [description](/docs/premium/card/description)
  * [bgImage](/docs/premium/card/bgImage)
  * [button](/docs/premium/card/button/)
    * [text](/docs/premium/card/button/text)
    * [url](/docs/premium/card/button/url)

## Types
- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)