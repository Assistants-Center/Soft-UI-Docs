# Error

#### **[Parent: errorHandler](/docs/error/errorHandler/)**

An [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) is returned when an error is thrown.

## Example

```js
{
  type: 500,
  path: '/home/container/dbd-soft-ui/views/commands.ejs',
  error: 'TypeError: /home/container/dbd-soft-ui/views/commands.ejs:48\n' +
    '    46|         <div class="row">\n' +
    '    47|             <div class="container-fluid">\n' +
    ' >> 48|                 <% themeConfig.commads.forEach(category => { %>\n' +
    '    49|                     <section id="<%= category.categoryId %>">\n' +
    '    50|                         <div class="col-12 item <%= category.categoryId %>" id="divtable">\n' +
    '    51|                             <div class="card mb-4">\n' +
    '\n' +
    "Cannot read properties of undefined ...",
}
```

## Types

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
