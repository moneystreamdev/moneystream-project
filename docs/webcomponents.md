---
id: webcomponents
title: Web Components
sidebar_label: Web Components
---

Web Components are an easy way to integrate custom visual elements into your web site. MoneyStream Web Components allow you to add pay-per-second streaming media players to your web site with just a couple lines of HTML code!

MoneyStream Web Components are built with Stencil and published to npm for easy distribution. https://github.com/moneystreamdev/moneystream-components

## MoneyStream Video Web Component
`moneystream-video` is a web component for streaming monetized videos.

```
...
<script type="module" src="https://unpkg.com/moneystream-components@0.0.7/dist/moneystream-components/moneystream-components.esm.js"></script>
...
<moneystream-video payTo="fullcycle@moneybutton.com" vid="qB6I9Zk-7zY"></moneystream-video>
...
```

Here is a working example of the video player. You need the MoneyStream browser extension installed to make the media play. https://glitch.com/edit/#!/billowy-moored-azimuth?path=index.html%3A12%3A0

## MoneyStream Audio Web Component
`moneystream-audio` is a web component for streaming monetized audio (mp3).

```
...
<script type="module" src="https://unpkg.com/moneystream-components@0.0.7/dist/moneystream-components/moneystream-components.esm.js"></script>
...
<moneystream-video payTo="fullcycle@moneybutton.com" vid="qB6I9Zk-7zY"></moneystream-video>
...
```

Here is a working example of the audio player. You need the MoneyStream browser extension installed to make the media play. https://glitch.com/edit/#!/billowy-moored-azimuth?path=index.html%3A12%3A0
