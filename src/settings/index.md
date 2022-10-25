# Settings

::: danger Reminder!
This **MUST** be placed into your DBD Config **NOT** your Theme Config!
:::

```js
settings: [
    {
        categoryId: 'input',
        categoryName: `New Category`,
        categoryImageURL: 'URL To image',
        categoryDescription: "Setup your bot with default settings!",
        categoryOptionsList: [
            {

            }
        ]
    }
],
```

## Toggleable Category

::: tip Toggleable Category?
Want to know how to add toggle-able categories?
Look no further!
:::

```js
    settings : [
        {
            categoryId: 'input',
            categoryName: 'New Category',
            categoryImageURL: 'URL To image',
            categoryDescription: "Setup your bot with default settings!",

            /* Heres the magical code! This is all you need to add to make it work */
            toggleable: true,
            getActualSet: async ({ guild }) => {
                return settings['toggleeco'];
            },
            setNew: async ({ guild, newData }) => {
                settings['toggleeco'] = newData;
            },
            /* End of magical code! */

            categoryOptionsList: [
                {

                }
            ]
        }
    ]
```