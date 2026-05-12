# emu

> **Execution & Module Utilities** — a powerful, professional JavaScript runtime toolkit and package ecosystem.

[![version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/your-username/emu)
[![license](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![packages](https://img.shields.io/badge/packages-105-orange)](https://github.com/your-username?tab=repositories&q=emu-)

---

## What is emu?

**emu** is a Node.js-based runtime toolkit — a package manager, runner, and ecosystem of 105+ packages designed for professional JavaScript development on Windows and Linux.

Think of it as Node.js, but yours.

---

## Install

```sh
git clone https://github.com/your-username/emu
cd emu
npm install
node bin/emu.js -help
```

Or link it globally:

```sh
npm link
emu -help
```

---

## Usage

```sh
# Install a package from GitHub
emu install owner/repo
emu install owner/repo@v1.0.0

# Run a JavaScript file
emu run app.js

# Run an installed package
emu run my-tool

# Uninstall a package
emu uninstall my-tool

# Show version and installed packages
emu -version

# Repair / reinstall all packages
emu -repair
```

---

## The emu Ecosystem

Over 105 packages across 3 categories — all installable via `emu install`.

> **npm users:** These packages also work with npm, but are optimized for the emu runtime.

### Foundation Layer

| Package | Description |
|---|---|
| [emu-color](https://github.com/your-username/emu-color) | Terminal colors — RGB, 256-color, chainable |
| [emu-log](https://github.com/your-username/emu-log) | Structured, leveled logger with child loggers |
| [emu-spinner-lib](https://github.com/your-username/emu-spinner-lib) | Spinners with 6 styles |
| [emu-progress](https://github.com/your-username/emu-progress) | Progress bars |
| [emu-std](https://github.com/your-username/emu-std) | Standard utility belt — arrays, objects, strings, functions |
| [emu-math](https://github.com/your-username/emu-math) | Extended math — stats, geometry, number theory |
| [emu-date](https://github.com/your-username/emu-date) | Date parsing, formatting, relative time |
| [emu-case](https://github.com/your-username/emu-case) | String case conversion — camel, snake, kebab, pascal |
| [emu-slug](https://github.com/your-username/emu-slug) | URL-safe slug generator |
| [emu-hash](https://github.com/your-username/emu-hash) | MD5, SHA256, HMAC, file hashing |
| [emu-base64](https://github.com/your-username/emu-base64) | Base64 encode/decode including JSON |
| [emu-random](https://github.com/your-username/emu-random) | Random numbers, strings, colors, weighted picks |
| [emu-id](https://github.com/your-username/emu-id) | UUID v4/v7, ULID, nano, short, objectId |
| [emu-deep](https://github.com/your-username/emu-deep) | Deep clone, merge, equal, diff, flatten |
| [emu-schema](https://github.com/your-username/emu-schema) | Schema validation |
| [emu-dotenv](https://github.com/your-username/emu-dotenv) | .env loader with expansion and smart loading |
| [emu-argv](https://github.com/your-username/emu-argv) | CLI argument parser |
| [emu-retry](https://github.com/your-username/emu-retry) | Retry async ops with backoff and jitter |
| [emu-debounce](https://github.com/your-username/emu-debounce) | Debounce, throttle, rate limiter |
| [emu-event](https://github.com/your-username/emu-event) | Event emitter with async, waitFor, priority |
| [emu-fs-lib](https://github.com/your-username/emu-fs-lib) | Extended file system helpers |

### Networking & Data

| Package | Description |
|---|---|
| [emu-http](https://github.com/your-username/emu-http) | HTTP client with redirect, gzip, instances |
| [emu-ws-lib](https://github.com/your-username/emu-ws-lib) | WebSocket client and server, zero dependencies |
| [emu-router](https://github.com/your-username/emu-router) | HTTP router with params, body parsing |
| [emu-middleware](https://github.com/your-username/emu-middleware) | CORS, rate limit, helmet, logger, timeout |
| [emu-cache](https://github.com/your-username/emu-cache) | In-memory TTL cache with LRU |
| [emu-queue](https://github.com/your-username/emu-queue) | Job queue with concurrency, priority, retries |
| [emu-db](https://github.com/your-username/emu-db) | Local JSON database with MongoDB-style queries |
| [emu-sql](https://github.com/your-username/emu-sql) | SQLite wrapper with migrations |
| [emu-kv](https://github.com/your-username/emu-kv) | Persistent key-value store with TTL |
| [emu-csv](https://github.com/your-username/emu-csv) | CSV parser, stringifier, and streamer |
| [emu-json](https://github.com/your-username/emu-json) | Enhanced JSON with comments, diff, streaming |
| [emu-yaml](https://github.com/your-username/emu-yaml) | Pure-JS YAML parser and stringifier |
| [emu-toml](https://github.com/your-username/emu-toml) | TOML parser and stringifier |
| [emu-xml](https://github.com/your-username/emu-xml) | XML parser and builder |
| [emu-zip-lib](https://github.com/your-username/emu-zip-lib) | ZIP writer/reader with deflate, zero dependencies |

### Terminal UI

| Package | Description |
|---|---|
| [emu-tui](https://github.com/your-username/emu-tui) | Boxes, tables, columns, cursor control |
| [emu-prompt](https://github.com/your-username/emu-prompt) | text, password, confirm, select, multiSelect |
| [emu-table](https://github.com/your-username/emu-table) | Rich terminal tables with borders and color |
| [emu-menu](https://github.com/your-username/emu-menu) | Arrow-key interactive menus |
| [emu-chart-cli](https://github.com/your-username/emu-chart-cli) | Bar, column, line, sparkline, pie charts |
| [emu-highlight](https://github.com/your-username/emu-highlight) | Syntax highlighting for JS, JSON, CSS, HTML |

### CLI Tools

| Package | Description |
|---|---|
| [emu-serve](https://github.com/your-username/emu-serve) | Static file server with SPA support |
| [emu-proxy](https://github.com/your-username/emu-proxy) | Local reverse proxy |
| [emu-env](https://github.com/your-username/emu-env) | Manage .env files from the CLI |
| [emu-gen](https://github.com/your-username/emu-gen) | Code and file generator from templates |
| [emu-test](https://github.com/your-username/emu-test) | Minimal test runner |
| [emu-bench](https://github.com/your-username/emu-bench) | Benchmark JavaScript functions |
| [emu-repl](https://github.com/your-username/emu-repl) | Enhanced JavaScript REPL |
| [emu-curl](https://github.com/your-username/emu-curl) | HTTP requests from the CLI |
| [emu-mock](https://github.com/your-username/emu-mock) | Instant mock REST API server |
| [emu-todo](https://github.com/your-username/emu-todo) | Terminal todo list |
| [emu-note](https://github.com/your-username/emu-note) | Quick notes from the CLI |
| [emu-timer](https://github.com/your-username/emu-timer) | Countdown and stopwatch |
| [emu-calc](https://github.com/your-username/emu-calc) | Terminal calculator with REPL |
| [emu-clip](https://github.com/your-username/emu-clip) | Read/write clipboard from CLI |
| [emu-qr](https://github.com/your-username/emu-qr) | Generate QR codes in terminal |
| [emu-pass](https://github.com/your-username/emu-pass) | Password generator |
| [emu-touch](https://github.com/your-username/emu-touch) | Create files and folders |
| [emu-tree](https://github.com/your-username/emu-tree) | Print directory trees |
| [emu-find](https://github.com/your-username/emu-find) | Search files by name or content |
| [emu-watch](https://github.com/your-username/emu-watch) | Watch files and run commands on change |
| [emu-diff](https://github.com/your-username/emu-diff) | Diff two files in the terminal |

---

## Why emu?

| Feature | emu | Node.js | npm |
|---|---|---|---|
| Install from GitHub | ✅ | ❌ | ❌ |
| Install from zip/archive | ✅ | ❌ | ❌ |
| Run `.js` files | ✅ | ✅ | ❌ |
| Repair installed packages | ✅ | ❌ | ✅ |
| 100+ ecosystem packages | ✅ | ❌ | ✅ |
| Windows first-class | ✅ | ⚠️ | ⚠️ |
| Zero setup | ✅ | ❌ | ❌ |

---

## Platforms

- **Windows** (primary)
- **Linux**

---

## License

MIT — © your-username
