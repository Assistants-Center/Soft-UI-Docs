# 
#[ThemeConfig].commands > Category > list - Command
#### **[Parent: category](/docs/commands/category/list/)**
An [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) which is a command.

## Example Usage
```js
theme: SoftUI({
    commands: [
        {
            list: [
                {
                    commandName: 'help',
                    commandUsage: `;help <command>`,
                    commandDescription: 'View a list of commands.',
                    commandAlias: 'No aliases'
                }
            ],
        }
    ]
})
```

## Properties
* [commandName](/docs/commands/category/list/command/commandName)
* [commandUsage](/docs/commands/category/list/command/commandUsage)
* [commandDescription](/docs/commands/category/list/command/commandDescription)
* [commandAlias](/docs/commands/category/list/command/commandAlias)

## Types
- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)