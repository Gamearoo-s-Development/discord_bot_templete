````
# My Discord.js Template

This is a template for creating Discord bots using Discord.js.

## Installation

1. Download the latest release of the template from the [Releases](link-to-releases-page) page.
2. Extract the downloaded zip file to a directory of your choice.

## Dependencies

To install the required dependencies, navigate to the template's directory in your terminal or command prompt and run the following command:

```bash
npm install
````

This will install all the necessary dependencies listed in the `package.json` file.

## Configuration

1. Rename the `.env.example` file to `.env`.
2. Open the `.env` file in a text editor and fill in the required information. Replace `BOT_TOKEN` with your Discord bot token, and update any other variables as needed.

## Starting the Bot

You can start the bot using one of the following methods:

### 1. PM2

1. Install PM2 globally by running the following command if you haven't already:

```bash
npm install -g pm2
```

2. Start the bot using PM2:

```bash
pm2 start index.js
```

### 2. Nodemon

[Nodemon](https://nodemon.io/) is a development utility that automatically restarts the bot when file changes are detected.

1. Install Nodemon globally by running the following command if you haven't already:

```bash
npm install -g nodemon
```

2. Start the bot using Nodemon:

```bash
nodemon index.js
```

### 3. Node

To start the bot using the \`node\` command:

```bash
node index.js
```

### 4. npm start

If you have defined a \`start\` script in your `package.json` file, you can start the bot using the following command:

```bash
npm start
```

```

```
