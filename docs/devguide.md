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
