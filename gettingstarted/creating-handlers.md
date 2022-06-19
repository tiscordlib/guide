# Creating handlers
Now we will create our handlers.

### What are handlers and why do i need them?
Handlers are one of the most important parts of your bot, as they are what will load all of your commands and events.

Without handlers, you would need to import your commands and events manually, which doesn't work well, especially when your bot grows.

## Event handler
We will create our handlers in the setup function in our Bot class.
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