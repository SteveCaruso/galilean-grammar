---
layout: general.njk
title: What is This?
---

About 10 years ago I set out to create a much needed grammar on the Galilean Aramaic language. 8 years ago I finished a draft -- and then, [a bit discouraged](http://aramaicnt.org/2022/03/22/state-of-the-site/), I put it aside and did nothing with it.

This year (2025) I have decided to finally publish it on this website for anyone to read, which required converting all of the lovely [LaTeX](https://www.latex-project.org/) files I had written -- a necessity before more recent font rendering solutions --  into something more archival in nature.

The current site is developed and deployed in [11ty](https://www.11ty.dev/), a static site generator that takes Markdown files (which are very future-proof and easy to read) and builds them into a flat-file HTML and CSS website.

As of the initial posting, this document is not edited. There are typos. There are mistakes. There be dragons left to be slain. Check the news below for progress. I may at some point build an RSS feed for it.

However, the code for the *entire thing* is now [available up on GitHub](https://github.com/SteveCaruso/galilean-grammar) and I will accept pull requests for updates and ammendations.

I hope that you, dear reader, are able to make good use of this.

**–Steve Caruso**  
April 2025

## Support the Project

If you would like to help support the project, you can [visit my KoFi page](https://ko-fi.com/stevecaruso/tiers). The more folk who subscribe there, the more time I will be able to dedicate to this project, and others like it. Supporters, past and present, will be listed in the [Dedication](/dedication#project-supporters).

## Copyright

This document is &copy; 2017-2025, but you may freely cite it with the following information, with the date of access (as I plan to make updates into the future):

> **APA:** Caruso, S. (2025, April). Elementary Galilean Aramaic: לישנה גלילייה מן ריש. Retrieved <span class="month">(Month)</span> <span class="day">(Day)</span>, <span class="year">(YEA)</span>, from http://galileanaramaic.com

> **MLA:** Caruso, Steve. Elementary Galilean Aramaic: לישנה גלילייה מן ריש. Apr. 2025, galileanaramaic.com. Accessed <span class="day">(Day)</span> <span class="month-short">(Short Month)</span>., <span class="year">(YEAR)</span>.

> **Chicago:** Caruso, Steve. 2025. “Elementary Galilean Aramaic: לישנה גלילייה מן ריש.” April 2025. Accessed <span class="month">(Month)</span> <span class="day">(Day)</span>, <span class="year">(YEAR)</span>. http://galileanaramaic.com.

<script>
    
    /* Vanilla JS -- because. :-) */

    let date = new Date();
    let year = date.getFullYear();
    let month = date.toLocaleString('default', { month: 'long' });
    let month_short = date.toLocaleString('default', { month: 'short' });
    let day = date.getDate();

    let years = document.querySelectorAll('.year');
    for (var i=0; i<years.length; i++) years[i].innerHTML = year;

    let days = document.querySelectorAll('.day');
    for (var i=0; i<days.length; i++) days[i].innerHTML = day;

    let months = document.querySelectorAll('.month');
    for (var i=0; i<months.length; i++) months[i].innerHTML = month;
    let months_short = document.querySelectorAll('.month-short');
    for (var i=0; i<months_short.length; i++) months_short[i].innerHTML = month_short;

</script>

## News

> **July 20 2025** -- Many thanks to [Janez Pavel for fixing the scrolling issue on the menubar](https://github.com/SteveCaruso/galilean-grammar/pull/1). It should be visible now.

> **July 11 2025** -- [The Origins of YHWH: An Aramaic Approach](https://www.youtube.com/watch?v=t1jxYv_dEWs) was posted to YouTube.

> **July 6 2025** -- Many more typos caught by Charles Faisant. [Lord's Prayer](/articles/lords-prayer-in-galilean-aramaic) article updated. [Abracadabra](/articles/abracadabra-is-not-aramaic) and [O Father-Mother](/articles/o-father-mother-birther-of-the-cosmos) articles added.

> **May 31 2025** -- A mess of typos corrected thanks to the keen eye of Charles Faisant. :-) Also add new [Research Articles](/articles) section for old AramaicNT.org articles.

> **May 6th 2025** -- First pass of the entire work is complete! There are still errors, missing pieces, and dragons to tend to.

> **May 1st 2025** -- First pass of Chapter 8 (Numbers) is complete.

> **April 29th 2025** -- First pass of Chapter 7 (Verbs) is complete.

> **April 28th 2025** -- The original book font has been fixed and now all Aramaic text should display properly.

> **April 24th 2025** -- The first pass of up to Chapter 6 is complete.

> **April 23rd 2025** -- The domain name **galileanaramaic.com** has been registered.

> **April 23rd 2025** -- The initial commits to the repository have been made. Translation from LaTeX syntax to Markdown is still underway.