---
id: knownissues
title: MoneyStream Known Issues
sidebar_label: Known Issues
---

:::important
MoneyStream is early Alpha stage development. While we believe it can be safe to use, please realize that there may be bugs in the software that put your funds at risk. Only fund your wallet in very small increments and make a backup of your private key. There will be service iterruptions while we improve the resiliency of our infrastructure.
:::

These are some of the current known issues with MoneyStream. Please report new issues on our Telegram support channel or on <a href="https://github.com/moneystreamdev/web-monetization-projects/issues">GitHub</a>.

* Sender (Extension wallet) needs to add additional utxos before any output is created below dust limit. This will allow the session to be smoothly extended.
* The wallet does not spend dust in last UTXO.
* If user uninstalls the extension the private key will be lost. Make a backup of the WIF before uninstalling the extension.
* The wallet reuses addresses
* The extension UI page continuously refreshes when monetization is active. To make it stop blinking switch to a non-monetized web page and then use the MoneyStream extension UI
* Monetization does not resume when switching back to a web page that was monetized. Just refresh the page to restart monetization.

Please use the Telegram support channel to let us know if any of these issues are a priority to fix.  

Thank you for your patience in resolving these issues.