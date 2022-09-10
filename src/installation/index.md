# Installation
## Installing Node.js
To use [discord-dashboard](https://npmjs.com/packages/discord-dashboard), you'll need to install [Node.js](https://nodejs.org/).

> **TIP**<br>
> To check if you already have Node installed, run `node -v` in your terminal.

## Setting up your project
To use [discord-dashboard](https://npmjs.com/packages/discord-dashboard), you'll need to install it via `npm` (which comes pre-installed with Node).

Navigate to a suitable place on your machine and create a folder named whatever you wish!

## Opening the terminal
> **TIP**<br>
> If you use [Visual Studio Code](https://code.visualstudio.com/), you can press <code>Ctrl + `</code> (backtick) to open its integrated terminal.

On Microsoft Windows, either:
- `Shift + Right-click` inside your project directory and choose the "Open command window here" option
- Press `Win + R` and run `cmd.exe` then `cd` into your project directory

On Apple macOS, either:
- Open Launchpad or Spotlight and search for "Terminal"
- In your "Applications" folder, under "Utilities", open the Terminal app

On Linux, you can quickly open the terminal with `Ctrl + Alt + T`.

## Verifying Node is installed
With the terminal open, run `node -v` to ensure you've successfully installed Node.js.

## Initiating a project folder

<br>

::: details NPM
```bash
npm init
```
:::

::: details YARN
```bash
yarn init
```
:::

::: details PNPM
```bash
pnpm init
```
:::

This next command creates a `package.json` file for you, which keeps track of dependencies of your project as well as some other stuff!

It will ask you a sequence of questions, you should answer them as you see fit. If you're not sure on something or want to skip it; leave it blank and press enter.

Once you're done answering the questions, you're ready to install [discord-dashboard](https://npmjs.com/packages/discord-dashboard)!

## Installing modules
Now that you've installed Node.js and know how to open your console and run commands, you can finally install discord-dashboard and Soft-UI!<br>
Run the following command in your terminal:

::: details NPM
```bash
npm install discord-dashboard dbd-soft-ui discord.js
```
:::

::: details YARN
```bash
yarn add discord-dashboard dbd-soft-ui discord.js
```
:::

::: details PNPM
```bash
pnpm install discord-dashboard dbd-soft-ui discord.js
```
:::

And now that we've installed the necessities, we can start setting up the dashboard!