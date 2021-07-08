---
title: export and require
subtitle: The syntax of export and require in nodejs
category: nodejs
slug: export-and-require
date: 2021-07-08T12:08:00+00:00
featuredImgUrl: https://logosvector.net/wp-content/uploads/2015/09/nodejs-logo.png
featuredImgAlt: export-and-require
imgSource: https://logosvector.net/ (by Hanson Chan)
---

#### Why export and require?

Since node.js uses "CommonJS", "module.exports" and "require" is the default.
<br>
(Have to use transcompiler like [Babel](https://babeljs.io/) to use "import from" and "export default" syntax.)

<br>

#### Basics

**- exporting separately** ⬇️

```javascript
// file 1-1
const variable = "some value"

module.exports = variable
```

<br>

```javascript
// file 1-2
const importedVariable = require("./file1-1")

console.log(importedVariable)
// output: 'some value'
```

<br>
<br>

**- exporting simultaneously** ⬇️

```javascript
// file 2-1
module.exports.variable2 = "some value2"
```

<br>

```javascript
// file 2-2
const importedVariable2 = require("./file2-1")

console.log(importedVariable2)
// output: { variable2: "some value2" }

// OR --------------------

const { variable2 } = require("./file2-1")

console.log(variable2)
// output: "some value2"
```

<br>

Exporting "function" and "object" has the same syntax.

<br>

Using export separately or not is a preference.
