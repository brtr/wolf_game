## 合约地址：
WOOL_ADDRESS = “0x67aBbF76D7A20A0F3A22504F11bA546eE567fD9F”
TRAITS_ADDRESS = “0x38C5d6957B12f5db95Ab02e50677a303147D46fD”
WOOLF_ADDRESS = “0x61EC1a9e9d5f6D458D2F018340444bEd5D7A8148”
BARN_ADDRESS = “0xF59938F9b3dF0CAe6611215adaed50129Db155eF”

## 发布流程

建议使用remix操作，发布成功后马上去scan上面验证源码，期间不要改动代码，否则需要重新发布

1. 首先发布Traits和WOOL两个合约，不需要参数

2. 然后是Woolf，发布需要传WOOL_ADDRESS, TRAITS_ADDRESS, MAX_TOKENS(最多支持的token数量)

3. 最后是Barn，发布需要传WOOLF_ADDRESS和WOOL_ADDRESS

4. 使用脚本上传Traits数据到Traits合约，并更新Traits合约里面的WOOLF_ADDRESS

5. 更新Woolf合约里面的BARN_ADDRESS

## 操作流程

### Mint

打开Woolf合约，找到write contract里面的mint，输入需要mint的数量和总价，以及是否需要stake，点击write生成数据

### Claim

打开Barn合约，找到write contract里面的claimManyFromBarnAndPack，输入需要收割对象的tokenID，选择是否需要unstake，点击write获得相对应的Wool

### metamask增加WOOL币种

打开WOOL合约，找到write contract里面的approve, 输入当前登录的地址和amount(暂时没发现有什么用), 点击write获取相应授权即可显示

### 查看相对应的图片和属性

打开https://testnets.opensea.io/  输入Woolf合约地址或者登录帐号即可查看
