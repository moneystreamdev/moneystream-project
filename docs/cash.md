---
id: cash
title: App Protocol
sidebar_label: App Protocol
---

## MoneyStream Application Protocol
Post the following types of cash transactions to either the `progress` or `stop` methods of the API. Include the `payTo` paymail or Bitcoin address.  

The post data will look like this.  
```
{
    session:"your session id",
    hex: "transaction hex",
    payTo: "paymail or bitcoin address"
}
```
Post the request to `https://cash.bitcoinofthings.com/stream/progress` or `https://cash.bitcoinofthings.com/stream/stop`

:::danger  
These are cash transactions! Treat them as such with all due care. Anyone who intercepts the transaction can change the output and spend it to themselves. Always transmit cash transactions over a secure channel to a known party.  
:::

:::important  
All transactions should be use a nTimeLock 60 seconds in the future. A transaction that is not timelocked will close the session. A transaction that is too far in the future might get rejected. You must post to progress before locktime otherwise the session will automatically close.    
Signing with SIGHASH_FORKID is assumed.  
:::

## Initial Transaction
|Index|SigHash                     |Output       |
|-----|----------------------------|-------------|
|0    |SIGHASH_SINGLE\|ANYONECANPAY|Change Amount|

Adjust funding with change amount as necessary.

## Augment Funding with additional inputs
|Index|SigHash                     |Output       |
|-----|----------------------------|-------------|
|0    |SIGHASH_SINGLE\|ANYONECANPAY|Change Amount|
|1    |SIGHASH_NONE|(no output)|

Add additional inputs when necessary.

## Exhaust a UTXO or wallet completely
Example of exhausting two utxos.  

|Index|SigHash                     |Output       |
|-----|----------------------------|-------------|
|0    |SIGHASH_NONE|(no output)|
|1    |SIGHASH_NONE|(no output)|

## API return value
The API will return a json result with status and description as well as the txid.

Example:  
```
{
    token: "your session id",
    txid: "transaction id",
    status: {
        returnResult: "monetize/failure",
        resultDescription:" reason for error"
    }
}
```
