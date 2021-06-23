---
title: VSCode to Neovim
subtitle: Overcome the first big wall of Vim world
category: neovim
slug: vscode-to-neovim
date: 2021-06-24T00:06:00+00:00
thumb: ../images/thumbs/vscode-to-neovim.png
featuredImg: ../images/featured/vscode-to-neovim.png
---

#### The concept

NeoVim is a code editor that user(You) builds from the ground up. To config your custom Neovim, you need a vim plug(plugin installer) and init.vim(config file). That's it!

<br>

#### Before you jump in

I strongly recommend using a Vim extension on VSCode(vscodevim. vim). It will help you to get used to the commands step by step. Since Neovim is just another version of Vim, most of the commands are the same.

<br>

#### Install and config

Do the commands below ⬇️⬇️⬇️️

<br>

```shell
brew install --HEAD neovim
mkdir .config/nivm
cd .config/nvim
touch init.vim
touch coc-settings.json
```

<br>

I used Ben Awad's [init.vim](https://gist.github.com/benawad/b768f5a5bbd92c8baabd363b7e79786f) and [coc-settings.json](https://gist.github.com/benawad/e187dd887f256a6a002905ec7f22ad76) for basic setup(copy/paste them), if you want to jump into Neovim it will suffice.

<br>

#### Basic Vim/neoVim commands

**cursor keys** :
h, j, k, l / w, b / 0, $ / {, } / gg, G

**copy(yank) & paste** :
y / p(P)

**insert** :
i, a, o(O), u / I, A

**delete** :
d, dd, s

**save & exit** :
:q, :q!, :w, :wq

**Visual mode** :
v, V

---

**esc** :
??? mode -> command mode

**yyp** :
yank current line and paste at next line

**zz** :
cursor location to middle of the screen

**+** :
number + command (ex) "3 + }" == cursor to 3 chunks down)

---

For more commands, check out ThePrimeagen's video. The link is down below!

<br>

#### Useful links

- [Vim cheatsheet](https://vim.rtorr.com/)

- [Basic vim commands from ThePrimeagen](https://www.youtube.com/watch?v=H3o4l4GVLW0)

- [Check this blog for detailed Neovim installation steps](https://medium.com/life-at-moka/step-up-your-game-with-neovim-62ba814166d7)

- [Top 20 Neovim plugins](https://breuer.dev/blog/top-neovim-plugins)
