# Command

#### **[Parent: category](/docs/commands/list/)**

An [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) which is a command.

## Example Usage

```js
theme: SoftUI({
    commands: [
        {
            list: [
                {
                    commandName: "help",
                    commandUsage: `;help <command>`,
                    commandDescription: "View a list of commands.",
                    commandAlias: "No aliases"
                }
            ]
        }
    ]
})
```

## Properties

## Types

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
