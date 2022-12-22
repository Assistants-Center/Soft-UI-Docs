# Border Radius
#### **[Parent: sidebar](/docs/icons/sidebar/)**

A [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) which is whether you'd like to set the border radius of the icon.

If you wish to set the border radius of the icon, you can do so by setting this to the size instead of a [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean).

## Example Usage 1
```js
theme: SoftUI({
    icons: {
        sidebar: {
            borderRadius: false
        }
    }
})
```

## Example Usage 2
```js
theme: SoftUI({
    icons: {
        sidebar: {
            borderRadius: "1rem"
        }
    }
})
```

## Types
- [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)