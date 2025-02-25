---
layout: layout.liquid
title: Positiotron
---

# AI Generated Webpage
This webpage was generated with the *help* of AI.
<br>
<br>
At first, I asked GPT 4o through Copilot where to start with the project specifications and it gave me an entire file without me having to prompt it. I tried what it gave me and it didn't work.
<br>
<br>
``` html
<div x-data="{ users: $fetch('https://jsonplaceholder.typicode.com/users') }">
  <template x-for="user in users" :key="user.id">
    <div class="p-4 border rounded shadow mb-4">
      <h2 class="text-xl font-semibold" x-text="user.name"></h2>
      <p x-text="user.email"></p>
      <p x-text="user.phone"></p>
      <p x-text="user.website"></p>
    </div>
  </template>
</div>
```
<br>
I wanted to better understand what the &lttemplate&gt was doing because I had not seen it before. The explination given by GPT 4o was certainly helpful and along with the documentation for this usecase on the Alpine website I was able to get a better idea for what it was doing. So, I went on to try and fix the issues with the code it provided. However, it became quickly very apparent it had no idea what it was talking about. After doing a little more digging on Alpine Fetch I noticed how it seems to be rather obscure, the only website about it is the Github Docs. So, it would make sense that the LLM would not be able to implement Alpine Fetch correctly. So though a lot of my own trial and error I was able to get the JSON to load with this line: 
<br>
<br>

    `<div x-data = "{ users: $fetchjson('https://dummyjson.com/users', jsonItem='users') }">`
<br>
<br>
In my attempts to get this line working I switched the Claude 3.5 to see if it would yeild different results, but it gave very similar code. Even after I supplied it with the documentation it was unable to help. But after correcting the code I was able to get the rest of GPT's template code to work perfectly. I next asked Claude 3.5 to expand on the Tailwind, and it created a fairly pleasing interface. Finally, I prompted Claude for a few tips on Tailwind so I could make some manual edits.
<br>
<br>
I would describe my experience with AI in this Lab as **infuriating**. Even though I have used LLMs a fair bit and I am familiar with their confident ignorance, especially when it comes to topics that have spare coverage on the internet, I still really struggle to take a step back from the LLM and do my own research. Though I had not used Copilot up until this point and that was cool to try out.