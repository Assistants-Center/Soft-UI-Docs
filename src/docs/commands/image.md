# 
#[ThemeConfig].commands > Category - image
#### **[Parent: category](/docs/commands/category)**
A [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) which is the category image.

## Example Usage
```js
theme: SoftUI({
    commands: [
        {
            list: [
                {
                    image: `<svg class="invert-img command-img" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,
                }
            ],
        }
    ]
})
```

> **TIP**<br>
> If you do not wish to use an image, simply do not define image.

## Types
- [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)