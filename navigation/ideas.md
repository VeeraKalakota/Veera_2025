---
layout: base
title: Ideas
permalink: /ideas/
---

## Things I Like About Coding
*What I enjoy in coding is the ability to be able to collaborate with peers. I have received so much help from my peers, and most of it is simple mistakes. Honestly, the debugging process is my favorite, because in the end, you get the satisfying result of success. I also enjoy my teacher, Mr. Mort. His teaching style is very effective, which is to learn through experience and trial&error. But, most importantly, I have to thank my teammates.*

<br>

## My Team In CSSE:
- __Aneesh: Master at coding, helps all of us in debugging our issues. He is a great leader, and also excellent at basketball. Overall, he has a positive attitude and never stops helping others in need.__
- __Santhosh: Really smart, knows lots of coding. Really good in using Linux and HTML. He loves creating new games and designs for his website.__
- __Akhil: Fun-loving, smart peer. He loves to ask questions, some that are really creative and helpful. He is also the team's comedian. He loves inflicting a happy and positive attitude into people.__

<br>

## The Anatomy Of Coding:
*In github, there are many files to explore. Here are some basic terms to help you get started:*
- **README.md: Contains project instructions and background, standard in GitHub projects.**
- **index.md: Source for the project's home page; converted from Markdown to HTML by Jekyll.**
- **_notebooks: Holds Jupyter Notebook (.ipynb) files, converted to Markdown and then HTML.**
- **_posts: Contains Markdown files with frontmatter and code, used in the website; includes Liquid code.**
- **_data: Stores data files supporting _posts and _notebooks.**
- **images: Stores image files (JPEG, PNG, etc.) for _posts and _notebooks.**
- **_config.yml: Contains YAML settings for building the Jekyll website.**
- **.gitignore: Lists files to be excluded from version control, visible as dimmed in VSCode Explorer.**
- **layouts: Contains HTML files for structuring the website; layouts are specified in frontmatter of posts/notebooks.**
- **scripts: Includes automation scripts like convert_notebooks.py for converting Jupyter Notebooks to Markdown.**
- **site.baseurl: Defines the path to files; must match GitHub Repo settings.**
- **Customization: Personalize your project by learning from the 'teacher' repository and adjusting to your interests.**
- **Home Page: Create or edit index.md; converted to index.html by GitHub Pages.**
- **Page Title: Add a title using frontmatter in _layouts/page.html.**
- **Layouts: Base layout is included in all pages; study layouts for automation in notebooks and posts.**
- **Submenus: Defined in _includes/nav; index.md and _includes/nav/home.html handle submenu code.**
- **Style: Managed in _sass; includes custom styles for themes. Modify _sass/minima/custom-styles.scss for theme     changes/custom styles.**

<br>

## Hacks: 
*In short, coding hacks are fast, often imperfect ways to fix or solve problems in programming, typically used when you need something done quickly. Here are some hacks regarding your github webpage.*

<br>

## Utterances:
*Utterances are comment pop-ups that allow you to comment on a webpage. This are really useful for providing corrections and questions. In order to access these popups, you must provided github authentication. Also, they are found at the bottom of the page.*


<!-- from https://github.com/utterance/utterances -->
<script src="https://utteranc.es/client.js"
        repo="{{ site.github_username }}/{{ site.github_repo | default: site.baseurl | remove: "/" }}"
        issue-term="title"
        label="blogpost-comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>



