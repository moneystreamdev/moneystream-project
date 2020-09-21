---
id: cloudwallet
title: Cloud Wallet
sidebar_label: Cloud Wallet
---

## Cloud wallet and MoneyStream

This document describes how cloud wallets can support the MoneyStream application.

:::important
MoneyStream uses a cash application protocol. That means transactions are to be signed using SIGHASH_SINGLE|ANYONECANPAY or SIGHASH_NONE. All communications must be exchanged over a secure channel (ssl/tls).
:::

The overall application architecture is shown below.
![MoneyStream communication with cloud wallet](https://moneystreamdev.github.io/moneystream-project/img/moneystream-cloudwallet.png)

1. The User must be authenticated to the cloud wallet with an authentication token. The user sends the following request to the cloud wallet api.
```
{
    id:"requestid_string",
    action:"sign",
    amount:satoshis_integer,
    max:satoshis_integer,
    timelock:timelock_integer
}
```
`id` is the requestid. It will be the same for multiple requests. `amount` is the requested amount in satoshis. `max` is the maximum satoshis to allow in this request. 

2. The cloud wallet returns a signed transaction.
```
{
    id:"requestid_string",
    txid:"transactionid_string",
    hex:"transaction_hex_string"
}
```
:::important
On subsequent requests, the transaction must use the same UTXOs as the first request!
:::

The user must send another request (sign or close) before the timelock. If none is received then the UTXO should be assumed to be spent.

3. The extension will forward the transaction to the web site wallet with additional inforation that the application needs.

4. (Not shown in diagram). User will send a request to close the request.
```
{
    id:"requestid_string",
    action:"close",
    txid:"txid_string"
}
```


## How to sign transactions
Transactions must be signed using the timelock value. Adjust funding with change amount as necessary.

If the `max` amount can be accomodated using one UTXO then the transaction will look like this.
|Index|SigHash                     |Output       |
|-----|----------------------------|-------------|
|0    |SIGHASH_SINGLE\|ANYONECANPAY|Change Amount|

If the `max` amount requires multiple UTXO then the transaction will look like this.
|Index|SigHash                     |Output       |
|-----|----------------------------|-------------|
|0    |SIGHASH_SINGLE\|ANYONECANPAY|Change Amount|
|1    |SIGHASH_NONE|(no output)|


If the `max` amount is too large then there will be no output. The sum of the input values will be less than or equal to `amount`.

|Index|SigHash                     |Output       |
|-----|----------------------------|-------------|
|0    |SIGHASH_NONE|(no output)|
|1    |SIGHASH_NONE|(no output)|
