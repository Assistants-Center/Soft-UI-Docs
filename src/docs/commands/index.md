# Commands

An [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) which is contains all categories and commands for the commands page.

## Example Usage

```js
theme: SoftUI({
    commands: [
        {
            category: "category",
            subTitle: "subTitle",
            categoryId: "category-id", // No spaces or special characters
            image: "<img src='link to image'>",
            hideAlias: false, // Optional - Default: false - Hides the alias from all commands in the category
            hideDescription: false, // Optional - Default: false - Hides the description from all commands in the category
            hideSidebarItem: false, // Optional - Default: false - Hides the category from the sidebar
            list: [
                {
                    commandName: "cmdname",
                    commandUsage: "usage",
                    commandDescription: "Command description",
                    commandAlias: "alias"
                }
            ]
        }
    ]
})
```

## Properties

-   [subTitle](/docs/commands/subTitle)
-   [image](/docs/commands/image)
-   [hideDescription](/docs/commands/hideDescription)
-   [hideAlias](/docs/commands/hideAlias)
-   [categoryId](/docs/commands/categoryId)
-   [category](/docs/commands/category)
-   [list](/docs/commands/list/)
    -   [commandAlias](/docs/commands/list/commandAlias)
    -   [commandDescription](/docs/commands/list/commandDescription)
    -   [commandName](/docs/commands/list/commandName)
    -   [commandUsage](/docs/commands/list/commandUsage)

## Types

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
