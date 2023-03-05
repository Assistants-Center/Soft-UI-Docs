export default {
    title: "Soft UI Docs",
    description: ".",
    outDir: "../docs",
    base: "/soft-ui/",
    head: [
        ["link", { rel: "icon", href: "favicon.ico" }],
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
        ["meta", { name: "apple-mobile-web-app-title", content: "Soft UI Docs" }],
        ["meta", { name: "application-name", content: "Soft UI Docs" }],
        ["meta", { name: "msapplication-TileColor", content: "#000000" }],
        ["meta", { name: "msapplication-TileImage", content: "/mstile-144x144.png" }],
        ["meta", { name: "msapplication-config", content: "/browserconfig.xml" }],
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "viewport", content: "width=device-width, initial-scale=1" }],
        ["meta", { property: "og:title", content: "Soft UI Docs" }],
        ["meta", { property: "og:type", content: "website" }],
        ["meta", { property: "og:url", content: "https://softui.vitepress.com" }],
        ["meta", { property: "og:description", content: "." }],
        ["meta", { property: "og:image", content: "https://softui.vitepress.com/logo.png" }],
        ["meta", { property: "og:image:width", content: "1200" }],
        ["meta", { property: "og:image:height", content: "630" }],
        ["meta", { property: "og:image:alt", content: "Soft UI Docs" }],
        ["meta", { property: "og:image:type", content: "image/png" }]
    ],
    lastUpdated: true,
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        siteTitle: "Soft UI Docs",
        logo: "favicon.png",
        editLink: {
            pattern: "https://github.com/Assistants-Center/Soft-UI-Docs",
            text: "Suggest an edit."
        },
        lastUpdated: true,
        footer: {
            message: "Released under the MIT License.",
            copyright: `Copyright © 2019-${new Date().getFullYear()} Assistants Center`
        },
        algolia: {
            appId: "8J64VVRP8K",
            apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
            indexName: "vitepress"
        },
        nav: [
            {
                text: "Introduction",
                link: "/intro/"
            },
            {
                text: "FAQ",
                link: "/faq/"
            }
        ],
        sidebar: [
            {
                text: "Information",
                collapsible: true,
                items: [
                    { text: "Introduction", link: "/intro/" },
                    { text: "Frequently Asked Questions", link: "/faq/" }
                ]
            },
            {
                text: "Installation",
                collapsible: true,
                items: [
                    { text: "Installation", link: "/installation/" },
                    { text: "Setup", link: "/setup/" }
                ]
            },
            {
                text: "Config",
                collapsible: true,
                items: [
                    { text: "Theme Maintenance", link: "/theme-maintenance" },
                    { text: "Theme 404", link: "/theme404" },
                    { text: "Settings", link: "/settings/" }
                ]
            },
            {
                text: "Theme Config",
                collapsible: true,
                items: [
                    { text: "Custom Theme Options", link: "/docs/customThemeOptions/" },
                    { text: "Addons", link: "/docs/addons" },
                    { text: "Website Name", link: "/docs/websiteName" },
                    { text: "Color Scheme", link: "/docs/colorScheme" },
                    { text: "Support Email", link: "/docs/supporteMail" },
                    { text: "Locales", link: "/docs/locales" },
                    { text: "Admin", link: "/docs/admin/" },
                    { text: "Icons", link: "/docs/icons/" },
                    { text: "Index", link: "/docs/index/" },
                    { text: "Premium", link: "/docs/premium/" },
                    { text: "Preloader", link: "/docs/preloader/" },
                    { text: "Sidebar", link: "/docs/sidebar/" },
                    { text: "Sharding", link: "/docs/sharding/" },
                    { text: "Log Handler", link: "/docs/logs/" },
                    { text: "Database Driver", link: "/docs/database-driver/" },
                    { text: "Meta", link: "/docs/meta/" },
                    { text: "Error", link: "/docs/error/" },
                    { text: "Sweet Alert", link: "/docs/sweetalert/" },
                    { text: "Blacklisted", link: "/docs/blacklisted/" },
                    { text: "Commands", link: "/docs/commands/" }
                ]
            },
            {
                text: "Theme Formtypes",
                collapsible: true,
                items: [
                    { text: "Collapsable", link: "/formtypes/collapsable" },
                    { text: "Date", link: "/formtypes/date" },
                    { text: "Emoji Picker", link: "/formtypes/emojiPicker" },
                    { text: "Modal", link: "/formtypes/modal" },
                    { text: "Multi Row", link: "/formtypes/multiRow" },
                    { text: "Number Picker", link: "/formtypes/numberPicker" },
                    { text: "Slider", link: "/formtypes/slider" },
                    { text: "Tag Input", link: "/formtypes/tagInput" },
                    { text: "Upload", link: "/formtypes/upload" },
                    { text: "Visual Embed", link: "/formtypes/visualEmbed" }
                ]
            },
            // {
            //     text: "Hosting",
            //     collapsible: true,
            //     items: [
            //         { text: "Replit", link: "/hosting/repl/" },
            //         { text: "Pterodactyl", link: "/hosting/pterodactyl/" }
            //     ]
            // }
        ]
    }
}
