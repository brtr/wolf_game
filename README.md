## 合约地址：
WOOL_ADDRESS = “0x67aBbF76D7A20A0F3A22504F11bA546eE567fD9F”  
TRAITS_ADDRESS = “0x38C5d6957B12f5db95Ab02e50677a303147D46fD”  
WOOLF_ADDRESS = “0x3210fFF05625aEF975e9CC20EC64EEC5359e900A”  
BARN_ADDRESS = “0xe343a17A2e7751E46f8bD4ff2B93961fA10221D2”  

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
如需指定wolf等级，请在score一栏输入5-8，否则输入0随机生成

### Claim

打开Barn合约，找到write contract里面的claimManyFromBarnAndPack，输入需要收割对象的tokenID，选择是否需要unstake，点击write获得相对应的Wool

### metamask增加WOOL币种

打开WOOL合约，找到write contract里面的approve, 输入当前登录的地址和amount(暂时没发现有什么用), 点击write获取相应授权即可显示

### 查看相对应的图片和属性

打开https://testnets.opensea.io/  输入Woolf合约地址或者登录帐号即可查看
