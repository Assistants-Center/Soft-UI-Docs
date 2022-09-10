# Collapsable Formtype
A [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) which returns an object for your option
## Example Usage
```js
optionType: SoftUI.formtypes.collapsable.collapsable(
    {
        optionId: 'collapsableSwitch',
        disabled: false,
        getActualSet: async ({guild}) => {},
        setNew: async ({guild, newValue}) => {}
    }, 
    [
        {
            optionId: 'subOption',
            optionName: "Sub dropdown option",
            optionType: DBD.formTypes.input("hello :(", 1, 16, false, true),
            getActualSet: async ({guild}) => {},
            setNew: async ({guild, newData}) => {}
        },
    ]
),
```

## Params
| Name | Type | Description |
| :--- | :--- | :--- |
| `togglable` | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | An object for the switch formtype |
| `options.children` | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | The Array of objects for the child formtypes. |

## Types
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)