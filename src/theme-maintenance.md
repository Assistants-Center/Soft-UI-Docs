# Theme Maintenance

::: danger Reminder!
This **MUST** be placed into your DBD Config **NOT** your Theme Config!
:::

```js
useThemeMaintenance: true,
underMaintenance: {
    title: "Under Maintenance",
    contentTitle: "This page is under maintenance",
    texts: [
        "We still want to change for the better for you.",
        "Therefore, we are introducing technical updates so that we can allow you to enjoy the quality of our services.",
        "Come back to us later or join our Discord Support Server"
    ],
    
    // "Must contain 3 cards. All fields are optional - If card not wanted on maintenance page, infoCards can be deleted",
    infoCards: [
        {
            title: "100+",
            subtitle: "Over 100 commands!",
            description: "Look at our commands during our downtime"
        },
        {
            title: "500",
            subtitle: "Text",
            description: "Description here!"
        },
        {
            title: "!",
            subtitle: "Warning",
            description: "Do you even have permission to be here?"
        }
    ],
}
```