# 🌳 React Treeview Component  

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
npm install react-treeview-ui
# or
yarn add react-treeview-ui
```

| Prop        | Type                        | Default      | Description                                                   |
|-------------|-----------------------------|--------------|---------------------------------------------------------------|
| `data`      | `Array<NodeData>`           | **required** | Tree data (see [Data Structure](#-data-structure)).          |
| `value`     | `string[]`                  | `[]`         | Selected node values.                                        |
| `onChange`  | `(value: string[]) => void` | - | Callback fired when selection changes.                       |
| `onlyRead`  | `boolean`                   | `false`      | Makes the tree read-only.                                     |
| `withIcons` | `boolean`                   | `false`      | Show icons next to nodes.                                     |


