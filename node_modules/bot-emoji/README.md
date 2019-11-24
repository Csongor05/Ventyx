# bot-emoji
支持在聊天机器人中，将中文和emoji进行转换。

Borrow not entire code from [node-emoji](https://github.com/omnidan/node-emoji).

## Usage
```
npm install bot-emoji

var emoji = require('bot-emoji')
let result = emoji.emojify('你叫什么呢?[思考]')
# '你叫什么呢?🤔'
```

## Search more
https://emojidictionary.emojifoundation.com/

## Test
```
npm test -- test/bot-emoji.test.js
```

## Contribution

Just add more emoji information in [bot-emoji.json](https://github.com/Samurais/bot-emoji/blob/master/lib/bot-emoji.json)

## [About me](http://blog.chatbot.io/webcv/)

## Support / Donations to original committer
If you want to support node-emoji development, please consider donating (it helps me keeping my projects active and alive!):

 * Paypal: [![daniel.bugl@gmail.com](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YBMS9EKTNPZHJ)
 * Gratipay: [![https://gratipay.com/omnidan/](https://img.shields.io/gratipay/omnidan.svg?style=flat-square)](https://gratipay.com/omnidan/)
 * Bitcoin: 114veSsYoyw2QrXkPTxHD51B5i39TinsBP

![http://i.imgur.com/RgzXqGD.png](http://i.imgur.com/RgzXqGD.png)
