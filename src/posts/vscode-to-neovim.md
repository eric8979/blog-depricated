---
title: VSCode to neoVim
subtitle: Overcome first big wall of Vim world
category: neovim
slug: vscode-to-neovim
date: 2021-06-22T15:31:00+00:00
thumb: ../images/thumbs/vscode-to-neovim.png
featuredImg: ../images/featured/vscode-to-neovim.png
---

#### Before you jump in

I strongly recommend to use vim extension on vscode(vscodevim.vim). Since most of the commands of vim and neoVim is similar, it will help you to get used to the commmands. I organized the basic commands down below. Check it out!

#### Install and config

```shell
brew install --HEAD neovim
mkdir .config/nivm
cd .config/nvim
touch init.vim
touch coc-settings.json
```

I used [Ben Awad's init.vim](https://gist.github.com/benawad/b768f5a5bbd92c8baabd363b7e79786f) and [coc-settings.json](https://gist.github.com/benawad/e187dd887f256a6a002905ec7f22ad76) for basic setup(copy past it), if you are beginner like me, this will suffice. 

#### Vim/neoVim commands

1. basic commands
  * <esc>
  * i, o, u
  * :q, :q!, :w, :wq
  * h, j, k, l / w, b
  * y, p(yyp), d(dd), a
  * {, }
  * gg, G
  * v, V
2. basic commands #2
  * shift + p
  * shift + o

+ Add number infront of commands (ex) "3 + }" == cursor to 3 chunks down)

#### useful links

- [vim cheatsheet](https://vim.rtorr.com/)
- [basic vim commands from ThePrimeagen](https://www.youtube.com/watch?v=H3o4l4GVLW0)
- [check this blog for different method](https://medium.com/life-at-moka/step-up-your-game-with-neovim-62ba814166d7)
- [top 20 neovim plugins](https://breuer.dev/blog/top-neovim-plugins)
  
  
