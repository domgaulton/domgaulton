---
title: Why Biome is So Good
description: A look at why Biome is a great tool for frontend projects.
---

# What is Biome?

Biome is a modern, all-in-one toolchain for frontend projects that combines linting, formatting, and import organization into a single fast solution. Here are the main reasons to choose Biome:

- **Speed:** Written in Rust, Biome is significantly faster than JavaScript-based alternatives like ESLint and Prettier.
- **Simplicity:** Biome replaces multiple tools with a unified experience, reducing project complexity and configuration hassles.
- **Unified Workflow:** Teams can have consistent linting and formatting rules across the codebase, minimizing tooling conflicts.
- **Great for JavaScript/TypeScript:** Especially well-suited for projects that primarily use JavaScript and TypeScript.
- **Perfect for Monorepos:** Biome’s performance and simplicity shine in large-scale, monorepo setups managed by pnpm.

---

# How to Set Up Biome in a pnpm Application

![Setup](https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=c)

## 1. Install Biome Using pnpm

```bash
pnpm add -D @biomejs/biome
```

## 2. Initialize Biome

```bash
pnpm biome init
```

## 3. Configure VSCode (Optional)

Add this to `.vscode/settings.json` for best integration:

```json
{
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.biome": "explicit"
  },
  "prettier.enable": false
}
```

## 4. Add Format and Lint Scripts

Add these scripts to your `package.json`:

```json
"scripts": {
  "lint": "pnpm biome check .",
  "format": "pnpm biome format --write ."
}
```

---

## Example `biome.json` Configuration

```json
"formatter": {
  "enabled": true,
  "indentStyle": "space",
  "indentWidth": 2,
  "lineWidth": 100
},
"linter": {
  "enabled": true,
  "rules": {
  "recommended": true
}
},
"javascript": {
  "formatter": {
  "enabled": true,
  "quoteStyle": "single",
  "trailingCommas": "all"
}
},
"organizeImports": {
  "enabled": true
},
"files": {
  "ignore": ["dist", "node_modules"]
}
```

---

## Running Biome in Your Project

1. **Format all files:** `pnpm biome format --write .`

2. **Check for issues (lint):** `pnpm biome check .`

Biome will now handle formatting, linting, and import organization on your codebase, saving time and reducing configuration headaches.
