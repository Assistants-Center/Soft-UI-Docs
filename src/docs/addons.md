# Addons
An [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of addon IDs which will be imported into the theme. 
## Example Usage
```js
theme: SoftUI({
    addons: ['addon-id-1', 'addon-id-2']
})
```

## Possible Errors
::: danger Error
**Failed to initialise**<br>
The addon was generated using a different discord-dashboard license, you must delete the file in order to use it as the theme will generate a new working file.
:::
::: danger Error
**Could not fetch license information from discord-dashboard**<br>
The addon manager was unable to fetch the current discord-dashboard license.
:::

## Types
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)