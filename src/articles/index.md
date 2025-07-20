---
layout: general.njk
title: "Research Articles"
---

<ul>

{%- for article in collections.articles %}
{%- if not article.data.draft %}
<li>
  <div>
    <strong><a href="{{ article.url }}">{{ article.data.title }}</a> <small>({{ article.data.date }})</small></strong></div>
  {%- if article.data.description %}
  <div>{{ article.data.description }}</div>
  {%- endif %}
</li>
{%- endif %}
{%- endfor %}

</ul>