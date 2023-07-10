# Locales

An [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) containing all of the locales to be used.

::: tip
This is used to edit any of the text in the theme. You can also add your own locales to the theme to support multiple languages.
:::

::: info
The **top** most locale will be the default locale will be used when no locale is detected from the browser. By not defining `themeConfig.locales` the themes premade locale will be used.
:::

## Example Usage

```js
theme: SoftUI({
    locales: {
        enUS: {
            name: "English",
            index: {
                feeds: ["Current Users", "CPU", "System Platform", "Server Count"],
                card: {
                    image: "link to image",
                    category: "Soft UI",
                    title: "Assistants - The center of everything",
                    description:
                        "Assistants Discord Bot management panel. Assistants Bot was created to give others the ability to do what they want. Just.<br>That's an example text. <br><br><b><i>Feel free to use HTML</i></b>",
                    footer: "Learn More"
                },
                feedsTitle: "Feeds",
                graphTitle: "Graphs"
            },
            manage: {
                settings: {
                    memberCount: "Members",
                    info: {
                        info: "Info",
                        server: "Server Information"
                    }
                },
                title: "Your Servers",
                description: "Manage your guilds",
            },
            admin: {
                feeds: {
                    feedBuilder: "Feed Builder 1",
                    feedIcon: "Feed Icon 1",
                    feedDescription: "Feed Description 1",
                    feedColour: "Feed Color 1",
                    colors: {
                        pink: "Pink 1",
                        red: "Red 1",
                        orange: "Orange 1",
                        green: "Green 1",
                        gray: "Gray 1",
                        blue: "Blue 1",
                        dark: "Dark 1",
                    },
                    feedSubmit: "Submit 1",
                    feedFeedPreview: "Feed Preview 1",
                    feedPreview: "Preview 1",
                    feedCurrent: "Current Feeds 1",
                    feedShowIcons: "Show Icons 1",
                },
                admin: {
                    title: "Admin Controls",
                    adminUpdates: "Check for Updates",
                },
            },
            guild: {
                home: "Home",
                settingsCategory: "Settings",
                updates: {
                    title: "Changes seen!",
                    reset: "Reset",
                    save: "Save",
                }
            },
            privacyPolicy: {
                title: "Privacy Policy",
                description: "Privacy Policy and Terms of Service",
                pp: "Complete Privacy Policy"
            },
            partials: {
                sidebar: {
                    dash: "Dashboard",
                    manage: "Manage Guilds",
                    commands: "Commands",
                    pp: "Privacy Policy",
                    admin: "Admin",
                    account: "Account Pages",
                    login: "Sign In",
                    logout: "Sign Out"
                },
                navbar: {
                    home: "Home",
                    pages: {
                        manage: "Manage Guilds",
                        settings: "Manage Guilds",
                        commands: "Commands",
                        pp: "Privacy Policy",
                        admin: "Admin Panel",
                        error: "Error",
                        credits: "Credits",
                        debug: "Debug",
                        leaderboard: "Leaderboard",
                        profile: "Profile",
                        maintenance: "Under Maintenance",
                        pages: "Pages",
                        dashboard: "Settings",
                    }
                },
                title: {
                    pages: {
                        manage: "Manage Guilds",
                        settings: "Manage Guilds",
                        commands: "Commands",
                        pp: "Privacy Policy",
                        admin: "Admin Panel",
                        error: "Error",
                        credits: "Credits",
                        debug: "Debug",
                        leaderboard: "Leaderboard",
                        profile: "Profile",
                        maintenance: "Under Maintenance"
                    }
                },
                preloader: {
                    text: "Page is loading..."
                },
                premium: {
                    title: "Want more from Assistants?",
                    description: "Check out premium features below!",
                    buttonText: "Become Premium"
                },
                settings: {
                    title: "Site Configuration",
                    description: "Configurable Viewing Options",
                    theme: {
                        title: "Site Theme",
                        description: "Make the site more appealing for your eyes!",
                        dark: "Dark",
                        light: "Light",
                        auto: "Auto"
                    },
                    language: {
                        title: "Site Language",
                        description: "Select your preffered language!"
                    }
                }
            }
        }
    }
})
```

## Types:

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
