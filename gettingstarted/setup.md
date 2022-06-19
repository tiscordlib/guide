# Setting up our bot
In this guide you're expected to:
- know TypeScript
- have a Discord account
- have a working text editor like Visual Studio Code or IntelliJ IDEA


## Create a bot account
We can create a bot account on [Discord Developer Portal](https://discord.com/developers/applications/).

Once you click the `New Application` button, a form will show up. Fill it with your bot's name.

After creating the application, you will be redirected to the application's page. 

On that page, you will see a sidebar. Find the `Bot` tab and click on it.

You'll see a page that looks like this:

![](/bot.png)

Here you can see information about your bot, and its token.

You should keep this page open, as we'll need it later.

:::warning
This section is very important, as it explains what your bot token is.
:::

### What is a bot token?
A bot token is a unique string that is used to identify your bot. You can think of it like a password for your discord account.

You shouldn't ever share this token with anyone, because they will be able to use your bot to do anything.

If you ever accidentally share your token, you should immediately come back to this page and reset it.

It looks something like this: `NzkyNzE1NDU0MTk2MDg4ODQy.X-hvzA.Ovy4MCQywSkoMRRclStW4xAYK7I`. If it looks different, you could've copied the client secret instead of the token.

### Add your bot to a server.
You can create a bot invite link by clicking on the OAuth2 tab, and then clicking on the URL Generator category. You will see a screen, where you will be able to set the scopes and permissions for your bot.

You should set the scopes to `bot` and `application.commands`, and set the permissions to what you need and generate the link.

Then, you can paste the link into your browser and add the bot to your server.

## Install node.js
You can install node.js from your package manager, or download it from [nodejs.org](https://nodejs.org/en/download/).

## Setting up our bot
We will need to create a new directory for our bot.

`mkdir tiscord-bot`

Then you cd into it, and initialize it with `npm init`.

### Installing all dependencies
We need to install our dependencies.

What we'll need is:
- [TypeScript](https://www.typescriptlang.org)
- [Tiscord](https://tiscord.me/)
- dotenv
We can install them using this command:

`npm i tiscord typescript dotenv`
### Create a tsconfig.json
You can either create a fresh one with `npx tsc --init`, or you can use the one that we use and modify it to your needs later.
```json
{
    "compilerOptions": {
        "target": "es2021",
        "module": "commonjs",
        "allowJs": true,
        "outDir": "dist",
        "moduleResolution": "node",
        "baseUrl": "src",
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "sourceMap": true
    }
}

```
### Create .env file
A .env file is used for storing secret stuff, like your bot's token or database credentials.

We'll need to come back to Discord Developer Portal and get our bot's token by clicking the Reset Token button, and then copying the token that shows up.

Once you have the token, we can create a .env file with the following contents:
```env
DISCORD_TOKEN=<your-token-here>
```
### Create a .gitignore file
A .gitignore file is used to ignore files that you don't want to commit to your git repository.

We'll create a .gitignore file with the following contents:

```gitignore
.env
node_modules
```

This will ignore the .env file and the node_modules folder, as we don't want to commit them.

Now, we are ready to start the coding part.
