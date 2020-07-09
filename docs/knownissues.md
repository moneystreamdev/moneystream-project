---
id: knownissues
title: MoneyStream Known Issues
sidebar_label: Known Issues
---

:::important
MoneyStream is early Alpha stage development. While we believe it can be safe to use, please realize that there may be bugs in the software that put your funds at risk. Only fund your wallet in very small increments and make a backup of your private key. There will be service iterruptions while we improve the resiliency of our infrastructure.
:::

These are some of the current known issues with MoneyStream. Please report new issues on our Telegram support channel or on <a href="https://github.com/moneystreamdev/web-monetization-projects/issues">GitHub</a>.

* The Green monetization badge stays green even when there are errors monetizing
* Dust UTXOS are not spendable. Eventually the extension wallet will be able to spend dust.
* There is currently no way to export funds from the wallet
* The wallet reuses addresses
* The extension UI page continuously refreshes when monetization is active. To make it stop blinking switch to a non-monetized web page and then use the MoneyStream extension UI
* Monetization does not resume when switching back to a web page that was monetized. Just refresh the page to restart monetization.

Please use the Telegram support channel to let us know if any of these issues are a priority to fix.  

Thanks for your patience