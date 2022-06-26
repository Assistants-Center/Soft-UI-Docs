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
* [commandName](/docs/commands/list/command/commandName)
* [commandUsage](/docs/commands/list/command/commandUsage)
* [commandDescription](/docs/commands/list/command/commandDescription)
* [commandAlias](/docs/commands/list/command/commandAlias)

## Types
- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)