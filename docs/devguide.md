---
id: devguide
title: MoneyStream Developer Guide
sidebar_label: Dev Guide
---

## Add meta tag to your web site
Monetizing your web site can be as easy as adding one meta tag with your paymail address. Add this to the ```head``` section of your web page.  

```
<meta name="monetization" content="<yourpaymailaddress>" />
```
Or you may use a fixed address.
```
<meta name="monetization" content="1KUrv2Ns8SwNkLgVKrVbSHJmdXLpsEvaDf">
```
You can also use a pub key.
```
<meta name="monetization" content="<yourpubkey>">
```
## More examples
A more extensive developer guide will be forthcoming.
Until then, look through some simple html examples to find out more about monetization events.  
https://github.com/moneystreamdev/moneystream-examples

## More documentation
MoneyStream is a BitcoinSV implementation of the proposed W3C Web Monetization Standard. See [webmonetization.org](https://webmonetization.org/) for more details, docs and examples.

## Changing the cash stream service provider  
A stream of cash must be managed. That is the job of a service provider. The default service provider is https://bitcoinofthings.com who is charging 10% of the stream profits during the testing period (charge is applied after paying for miner fees and dust output). That fee is subject to change at any time.   
Should you wish to change to an alternate service provider, it can be easily accomplished using an attribute in the meta tag.
```
<meta name="monetization" data-service-provider="<serviceproviderurl>" content="<yourpaymailaddress>" />
```

## Installing extension from GitHub
The GitHub repo may be more recent than the chrome store releases. To get the latest development version you may want to install the MoneyStream extension from GitHub.  

You can download the extension from Github. https://github.com/moneystreamdev/web-monetization-projects/blob/master/packages/moneystream-extension/moneystream_extension.zip

Next, extract the zip. Remember where you extracted it to. There will be a `manifest.json` file in the folder.

The following instructions are for google chrome browser. Other browsers should be similar.  
Open extensions using the ellipse then `More tools>Extensions` or enter "chrome://extensions" in a new tab.  
Make sure Dev Mode slider on the top right is turned on then click on the button to load a new extension.  

![Load](https://moneystreamdev.github.io/moneystream-project/img/moneystream-extension-load.png)

Select the folder where you extracted to, the one with the `manifest.json` file.
When loaded correctly, the extension will display.

![Installed](https://moneystreamdev.github.io/moneystream-project/img/moneystream-extension-installed.png)

Note the following:  
  * The extension can be enabled and disabled with the toggle button  
  * There is link called `inspect views` to display Devtools for debugging
  * Never remove the extension while there are funds in your wallet!
