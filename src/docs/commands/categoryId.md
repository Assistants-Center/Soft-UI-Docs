# 
#[ThemeConfig].commands > Category - categoryId
#### **[Parent: category](/docs/commands/category)**
A [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) which is the category ID.

## Example Usage
```js
theme: SoftUI({
    commands: [
        {
            list: [
                {
                    categoryId: "startingUp",
                }
            ],
        }
    ]
})
```

::: warning
Warning: This must be unique.
:::

## Types
- [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)