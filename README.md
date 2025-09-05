# 🌳 React Treeview Component  

<!-- Replace with your actual package name -->
[![npm version](https://img.shields.io/npm/v/@your-scope/treeview.svg)](https://www.npmjs.com/package/@your-scope/treeview)  
[![Bundle size](https://img.shields.io/bundlephobia/minzip/@your-scope/treeview)](https://bundlephobia.com/package/@your-scope/treeview)  
[![License](https://img.shields.io/npm/l/@your-scope/treeview)](./LICENSE)  
<!-- Replace `your-username` and `repo-name` with your actual GitHub repo -->
[![Build Status](https://img.shields.io/github/actions/workflow/status/your-username/repo-name/ci.yml?branch=main)](https://github.com/your-username/repo-name/actions)  

A lightweight, flexible, and accessible **Treeview component for React**.  
Supports nested nodes, checkboxes with indeterminate state, icons, and customizable rendering.  

---

## ✨ Features  
- Recursive rendering for unlimited nesting  
- Checkbox support with indeterminate state  
- Customizable icons and styling  
- ypeScript support out of the box  
- Small & dependency-free  

---

## 📦 Installation  

```bash
npm install @your-scope/treeview
# or
yarn add @your-scope/treeview
```

| Prop        | Type                        | Default      | Description                                                   |
|-------------|-----------------------------|--------------|---------------------------------------------------------------|
| `data`      | `Array<NodeData>`           | **required** | Tree data (see [Data Structure](#-data-structure)).          |
| `value`     | `string[]`                  | `[]`         | Selected node values.                                        |
| `onChange`  | `(value: string[]) => void` | - | Callback fired when selection changes.                       |
| `onlyRead`  | `boolean`                   | `false`      | Makes the tree read-only.                                     |
| `withIcons` | `boolean`                   | `false`      | Show icons next to nodes.                                     |


