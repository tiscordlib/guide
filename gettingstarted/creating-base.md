# Creating the base files
Now we will create the base files for our bot.

## Creating directories
First we need create the src folder, which will store all of our bots source code.

`mkdir src`

Then we will cd into it, and we'll create the index.ts file, which will be the entry point for our bot. Currently we'll leave it empty, but we'll come back to it later.

We will create directories for our bot's classes, commands, and events.

`mkdir classes commands events`


## Creating our Bot class
We'll create a file called Bot.ts in our classes directory, which will store our bot's main class where we will store all our commands, events and other stuff.
```ts
import { Client } from 'tiscord';

// we create a class and export it
export class Bot extends Client {
    constructor() {
        // we set the client options here
        super({
            token: process.env.DISCORD_TOKEN,
            intents: ['Guilds']
        });
        this.on('ready', () => {
            this.setup();
        })
    }
    // in this function we will have our command handler, event handler as well as connecting to the discord api
    async setup() {
        this.login()
    }
}
```
Now we can create our bot class in our index.ts file.
```ts
import { Bot } from './classes/Bot';
new Bot()
```


This will do for now, we'll come back to this class in the next page.


