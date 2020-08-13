---
id: cash
title: App Protocol
sidebar_label: App Protocol
---

## MoneyStream Application Protocol
Send the following types of cash transactions to either the `progress` or `stop` methods of the API. Include the `payTo` paymail or Bitcoin address.

SIGHASH_FORKID is assumed.

:::important
These are cash transactions! Treat them as such with all due care. Anyone who intercepts the transaction can change the output and spend it to themselves. Always transmit cash transactions over a secure channel to a known party.
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