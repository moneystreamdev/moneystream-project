---
id: webcomponents
title: Web Components
sidebar_label: Web Components
---

Web Components are an easy way to integrate custom visual elements into your web site. MoneyStream Web Components allow you to add pay-per-second streaming media players to your web site with just a couple lines of HTML code!

MoneyStream Web Components are built with Stencil and published to npm for easy distribution.   
[MoneyStream Web Components Github](https://github.com/moneystreamdev/moneystream-components)

## MoneyStream Video Web Component
`moneystream-video` is a web component for streaming monetized videos.

```
...
<script type="module" src="https://unpkg.com/moneystream-components/dist/moneystream-components/moneystream-components.esm.js"></script>
...
<moneystream-video payto="fullcycle@moneybutton.com" vid="qB6I9Zk-7zY"></moneystream-video>
...
```

Here is a working example of the video player. You need the MoneyStream browser extension installed to make the media play.  
[Glitch Video Example](https://glitch.com/edit/#!/billowy-moored-azimuth?path=index.html%3A12%3A0)

## MoneyStream Audio Web Component
`moneystream-audio` is a web component for streaming monetized audio (mp3).

```
...
<script type="module" src="https://unpkg.com/moneystream-components/dist/moneystream-components/moneystream-components.esm.js"></script>
...
<moneystream-audio payto="145@moneybutton.com" src="/assets/audio.mp3"></moneystream-audio>
...
```

Here is a working example of the audio player. You need the MoneyStream browser extension installed to make the media play.  
[Glitch Audio Example](https://glitch.com/edit/#!/phantom-pinto-runner?path=views%2Findex.html%3A1%3A0)

