# 🚀 SPA Prerenderer

A lightning-fast, resource-efficient prerenderer for Single Page Applications built with Express and Puppeteer.

## 🌟 Features

- 🔥 Blazing fast prerendering of SPA pages
- 🧠 Smart caching for improved performance
- 🔄 Browser instance reuse to minimize resource consumption
- 🏊‍♂️ Page pooling for efficient page management
- 🎛️ Configurable viewport and user agent settings
- 🛡️ Robust error handling and timeout management

## 🛠️ Technologies Used

- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Puppeteer](https://pptr.dev/) - Headless Chrome Node.js API
- [dotenv](https://github.com/motdotla/dotenv) - Loads environment variables from .env file
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [node-cache](https://github.com/mpneuried/nodecache) - Simple and complete NodeJS cache library

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- pnpm

### Installation

1. Clone the repository:
   `https://github.com/iabdulkader/spa-prerenderer-puppeteer.git`

2. Install dependencies:

```
cd spa-prerenderer
pnpm install
```

3. Create a `.env` file in the project root and add your configuration:

```
PORT=5000
MAIN_SITE_URL=http://localhost:3000
# in seconds
CACHE_TTL=
# set to true to only render mobile viewports else false or ignore
ONLY_MOBILE=
```

4. Build the TypeScript code:
   `pnpm run build`
5. Start the server:
   `pnpm run start`

```

```
