| Type                 | Hoisted?   | Usable Before Declaration? |
| -------------------- | ---------- | -------------------------- |
| Function Declaration |  Yes     |  Yes                    |
| Function Expression  |  Partial |  No                     |
| `var`                |  Yes     |  Yes (undefined)        |
| `let` / `const`      |  Yes     |  No (TDZ)               |
| Classes              |  Yes     |  No (TDZ)               |


“Functions are ready before code runs. Variables are not.”