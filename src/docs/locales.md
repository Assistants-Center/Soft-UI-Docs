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
                        maintenance: "Under Maintenance"
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
                        description: "Make the site more appealing for your eyes!"
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
