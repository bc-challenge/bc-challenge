
运行 
ts-node bc-ch.ts

```
New Block Forged: {

  index: 2,
  timestamp: 1756347440984,
  transactions: [
    {
      sender: '0',
      recipient: '256d4beca49b437b8b6acc9fd83454c2',
      amount: 1
    }
  ],
  proof: 35293,
  previous_hash: 'c0876c8041629ced930039a29ca862560b8e058e1648e34956fc26a9cc5eca15',
  hashValue: ''
}
New Block Forged: {
  index: 3,
  timestamp: 1756347441015,
  transactions: [
    {
      sender: 'd4ee26eee15148ee92c6cd394edd974e',
      recipient: 'someone-other-address',
      amount: 50
    },
    {
      sender: '0',
      recipient: '256d4beca49b437b8b6acc9fd83454c2',
      amount: 1
    }
  ],
  proof: 35089,
  previous_hash: 'f7f435bf5d24a21035aaf977cd07928ed501395a182f2036511989986c9f554a',
  hashValue: ''
}
Full Blockchain: [
  {
    "index": 1,
    "timestamp": 1756347440957,
    "transactions": [],
    "proof": 100,
    "previous_hash": "1",
    "hashValue": ""
  },
  {
    "index": 2,
    "timestamp": 1756347440984,
    "transactions": [
      {
        "sender": "0",
        "recipient": "256d4beca49b437b8b6acc9fd83454c2",
        "amount": 1
      }
    ],
    "proof": 35293,
    "previous_hash": "c0876c8041629ced930039a29ca862560b8e058e1648e34956fc26a9cc5eca15",
    "hashValue": ""
  },
  {
    "index": 3,
    "timestamp": 1756347441015,
    "transactions": [
      {
        "sender": "d4ee26eee15148ee92c6cd394edd974e",
        "recipient": "someone-other-address",
        "amount": 50
      },
      {
        "sender": "0",
        "recipient": "256d4beca49b437b8b6acc9fd83454c2",
        "amount": 1
      }
    ],
    "proof": 35089,
    "previous_hash": "f7f435bf5d24a21035aaf977cd07928ed501395a182f2036511989986c9f554a",
    "hashValue": ""
  }
]
length : 3
mac@MacBook-Pro-4 03-code % ts-node bc-ch.ts
New Block Forged: {
  index: 2,
  timestamp: 1756347462761,
  transactions: [
    {
      sender: '0',
      recipient: '519faf3291f4420d8598ba80694b1f35',
      amount: 1
    }
  ],
  proof: 35293,
  previous_hash: '1579487b1391257df3855dbb92ac456996323f0ffbd12211d16759c3471b72a3'
}
New Block Forged: {
  index: 3,
  timestamp: 1756347462791,
  transactions: [
    {
      sender: 'd4ee26eee15148ee92c6cd394edd974e',
      recipient: 'someone-other-address',
      amount: 50
    },
    {
      sender: '0',
      recipient: '519faf3291f4420d8598ba80694b1f35',
      amount: 1
    }
  ],
  proof: 35089,
  previous_hash: '8176d2f09539e6136d4684cfbb846012a1b2dd5c5f8dadbff7b43f593675414f'
}
Full Blockchain: [
  {
    "index": 1,
    "timestamp": 1756347462737,
    "transactions": [],
    "proof": 100,
    "previous_hash": "1"
  },
  {
    "index": 2,
    "timestamp": 1756347462761,
    "transactions": [
      {
        "sender": "0",
        "recipient": "519faf3291f4420d8598ba80694b1f35",
        "amount": 1
      }
    ],
    "proof": 35293,
    "previous_hash": "1579487b1391257df3855dbb92ac456996323f0ffbd12211d16759c3471b72a3"
  },
  {
    "index": 3,
    "timestamp": 1756347462791,
    "transactions": [
      {
        "sender": "d4ee26eee15148ee92c6cd394edd974e",
        "recipient": "someone-other-address",
        "amount": 50
      },
      {
        "sender": "0",
        "recipient": "519faf3291f4420d8598ba80694b1f35",
        "amount": 1
      }
    ],
    "proof": 35089,
    "previous_hash": "8176d2f09539e6136d4684cfbb846012a1b2dd5c5f8dadbff7b43f593675414f"
  }
]
length : 3
```
