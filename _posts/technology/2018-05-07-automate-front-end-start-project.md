---
title: "Automate the start of a frontend development workflow"
date:  2018-05-05 18:14:01 +0800
categories:
  - "Technology"
banner: "/blog/2018/05/coding-programming.jpg"
tags: [blogging, npm, website, frontend development, front-end, automation]
description: Reduce the time to start a frontend project by automating it through a bash script
---

__TL;DR__: Head over to [github](https://github.com/wing-puah/automate-start-frontend-proj) to view the shell script that automate the start of my frontend development workflow.

## Webpack inspired
Recently, I have been looking into webpack. I know, real laggard. While node.js and npm helps to make modern frontend development amazing, I can't help but feel that the setup of a project is real clunky with all the command-line inputs. I still haven't quite figure out how I could work with the config file but I am intrigued by the scripts of package.json. It eases the running of command like compiling of sass and javascript.  

## My frontend development workflow
To be honest, besides using SASS and bits of ES6, my frontend routine is probably ten years backwards. It also doesn't help that the academy that I'm currently learning web development from is not teaching us any of the modern techniques. But that's not the point. The point is, there are certain repetitive actions that could most likely by automated.

In general, this is what my frontend development workflow looks like:
1. Create index.html
2. Create vendor file and insert [Flexboxgrid](https://github.com/kristoferjoseph/flexboxgrid)
3. Create assets folders for css and js
4. Create scss folder
5. Run compile, compressed and watch scss files
6. Create any other folder, like image folder

Sometimes I add [Font Awesome](https://fontawesome.com/). Most of the time, I will also be using [jQuery](http://jquery.com/). While these steps don't generally take up a lot of time, it is repetitive and manual inputs do not add too much value. Npm creates more steps and there are simply too many commands to remember. Assuming I can't be faster than other people, I can at least learn to be more efficient.

<blockquote>
"Give me six hours to chop down a tree and I will spend the first four sharpening the axe."
</blockquote>
Always be inspired to make your tools better.

## Sharpening my tools
The answers to sharpening my tools is bash script. I also include my template SASS files in the folder with the bash script. With this, my usual workflow could be cut down dramatically to 3 simple steps.

1. Git clone my automation folder
2. Change the name of the cloned folder to my working directory
3. Run bash run.sh (the name of the shell script file)

Well, technically, there is an additional step to align the scripts of package.json as sed, a command built for command line processing of files, could not include tab accurately in the file.

### Shell scripts
The first thing to do is to write down the commands. Shell scripts don't allow cd, so the work around is to include functions which can do just that.  
<script src="https://gist.github.com/wing-puah/6b613de64b0d505e4f43fb7921ee4371.js?file=run.sh"></script>

#### Download dependency
<script src="https://gist.github.com/wing-puah/6b613de64b0d505e4f43fb7921ee4371.js?file=downloadDependency"></script>
This will replace my usual workflow step no 2. Unfortunately, this will include all the content in the git repository but it is easy to clone multiple repository and keep track of the original repository this way.

#### Input npm command
<script src="https://gist.github.com/wing-puah/6b613de64b0d505e4f43fb7921ee4371.js?file=createJSbuild"></script>
This utilises sed to include the multiple scripts file in package.json. Basically, the syntax will look for scripts via regex. I'm not sure if there is a way to make this a multi-line command but it only works this way when I add everything in one line. With sed, it provides a very flexible way of editing the files. I'm thinking in future this will be the way I will

#### Create index file
<script src="https://gist.github.com/wing-puah/6b613de64b0d505e4f43fb7921ee4371.js?file=createIndex"></script>
This will replace my usual workflow step no 1. Simple commands to make directory and create files.

That's it for now till I figure how to utilise and optimise a webpack workflow with the config file.
