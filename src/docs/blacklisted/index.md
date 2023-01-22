# Blacklisted

An [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) which contains all the information for the blacklisted page.

## Example Usage

```js
theme: SoftUI({
    blacklisted: {
        title: "Blacklisted",
        subtitle: "Access denied",
        description: "Unfortunately it seems that you have been blacklisted from the dashboard.",
        button: {
            enabled: false,
            text: "Return",
            link: "https://google.com"
        }
    }
})
```

## Properties

-   [title](/docs/blacklisted/title)
-   [subtitle](/docs/blacklisted/subtitle)
-   [description](/docs/blacklisted/description)
-   [button](/docs/blacklisted/button/)
    -   [enabled](/docs/blacklisted/button/enabled)
    -   [text](/docs/blacklisted/button/text)
    -   [link](/docs/blacklisted/button/link)

## Types

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
