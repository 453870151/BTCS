/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7566
() {

// extracted by mini-css-extract-plugin

/***/ },

/***/ 6060
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(4976);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(7767);
// EXTERNAL MODULE: ./node_modules/react-helmet-async/lib/index.esm.js
var index_esm = __webpack_require__(5902);
// EXTERNAL MODULE: ./node_modules/@wagmi/core/dist/chunk-GISSYJN5.js + 5 modules
var chunk_GISSYJN5 = __webpack_require__(4683);
// EXTERNAL MODULE: ./node_modules/@wagmi/core/dist/providers/public.js + 1 modules
var providers_public = __webpack_require__(9998);
// EXTERNAL MODULE: ./node_modules/lodash/memoize.js
var memoize = __webpack_require__(104);
var memoize_default = /*#__PURE__*/__webpack_require__.n(memoize);
// EXTERNAL MODULE: ./node_modules/@wagmi/chains/dist/index.mjs
var chains_dist = __webpack_require__(706);
;// ./src/utils/wagmi.ts





const {
  provider,
  chains
} = (0,chunk_GISSYJN5/* configureChains */.te)([chains_dist/* bsc */.NB, chains_dist/* bscTestnet */.ck], [(0,providers_public/* publicProvider */.n)()]);
const CHAIN_IDS = chains.map(c => c.id);
const isChainSupported = memoize_default()(chainId => CHAIN_IDS.includes(chainId));
// EXTERNAL MODULE: ./node_modules/wagmi/dist/index.js + 22 modules
var wagmi_dist = __webpack_require__(3376);
// EXTERNAL MODULE: ./node_modules/@wagmi/connectors/dist/chunk-2VZS2JHJ.js + 1 modules
var chunk_2VZS2JHJ = __webpack_require__(7664);
// EXTERNAL MODULE: ./node_modules/@wagmi/connectors/dist/metaMask.js
var metaMask = __webpack_require__(8680);
// EXTERNAL MODULE: ./node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(2635);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(2389);
;// ./i18n.ts
/* unused harmony import specifier */ var i18n;



const resources = {
  en: {
    translation: __webpack_require__(2038),
  },
  zhCN: {
    translation: __webpack_require__(5372),
  },
  zhTW: {
    translation: __webpack_require__(8380),
  },
  malay: {
    translation: __webpack_require__(3232),
  },
  indonesian: {
    translation: __webpack_require__(7352),
  },
  vietnamese: {
    translation: __webpack_require__(7095),
  },
  thai: {
    translation: __webpack_require__(8150),
  },
  korean: {
    translation: __webpack_require__(6628),
  },
  japanese: {
    translation: __webpack_require__(4175),
  },
  filipino: {
    translation: __webpack_require__(8062),
  },
}

i18next/* default.use */.Ay.use(es/* initReactI18next */.r9).init({
  resources,
  lng: "en",
})

/* harmony default export */ const i18n_0 = ((/* unused pure expression or super */ null && (i18n)));

;// ./src/utils/common.js
// 设置带过期时间的 cookie
function setCookie(key, value, ttl) {
  const now = new Date();
  const expiryTime = now.getTime() + ttl;
  const expiryDate = new Date(expiryTime);

  // 将值转换为字符串（如果是对象，需要JSON序列化）
  const cookieValue = typeof value === 'object' ? JSON.stringify(value) : value;

  // 设置cookie，包含过期时间
  document.cookie = `${key}=${encodeURIComponent(cookieValue)}; expires=${expiryDate.toUTCString()}; path=/`;
}

// 获取 cookie 值
function getCookie(key) {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    const [cookieKey, cookieValue] = cookie.split('=');
    if (cookieKey === key) {
      if (!cookieValue) return null;
      try {
        // 尝试解析JSON
        const decodedValue = decodeURIComponent(cookieValue);
        return JSON.parse(decodedValue);
      } catch {
        // 如果不是JSON，直接返回解码后的值
        return decodeURIComponent(cookieValue);
      }
    }
  }
  return null;
}

// 验证以太坊地址格式
function isValidEthereumAddress(address) {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

// 格式化时间戳
function formatDate(ts) {
  if (!ts) return '';
  return new Date(Number(ts) * 1000).toLocaleString();
}

// 保留小数，不四舍五入
const toFixedFloor = function (num, decimal, withComma) {
  if (decimal === void 0) {
    decimal = 4;
  }
  if (withComma === void 0) {
    withComma = true;
  }
  const value = Number(num);
  if (isNaN(value)) return "0";

  // 向下截断，不四舍五入
  const factor = Math.pow(10, decimal);
  const floored = Math.floor(num * factor) / factor;

  // 转成字符串，拆分整数和小数部分
  let [intPart, decPart] = floored.toString().split(".");

  // 整数部分加千分位
  intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // 去掉小数部分多余的 0
  if (decPart) {
    decPart = decPart.replace(/0+$/, ""); // 去掉结尾的0
  }

  // 如果没有小数部分则不加点
  return decPart ? `${intPart}.${decPart}` : intPart;
};
const parseNumber = function (num, decimal) {
  if (decimal === void 0) {
    decimal = 2;
  }
  let newNum = "";
  let count = 0;
  let numStr = String(num); // 数字转为字符串;

  // 处理整数部分（添加千位分隔符）
  if (numStr.indexOf(".") == -1) {
    // 整数部分处理
    for (let i = numStr.length - 1; i >= 0; i--) {
      if (count % 3 == 0 && count != 0) {
        newNum = numStr.charAt(i) + "," + newNum;
      } else {
        newNum = numStr.charAt(i) + newNum;
      }
      count++;
    }
    return newNum;
  } else {
    // 分割整数和小数部分
    const parts = numStr.split('.');
    const integerPart = parts[0]; // 整数部分
    const decimalPart = parts[1]; // 小数部分

    // 处理整数部分（添加千位分隔符）
    for (let i = integerPart.length - 1; i >= 0; i--) {
      if (count % 3 == 0 && count != 0) {
        newNum = integerPart.charAt(i) + "," + newNum;
      } else {
        newNum = integerPart.charAt(i) + newNum;
      }
      count++;
    }

    // 直接截取指定长度的小数部分，不四舍五入
    let truncatedDecimal = decimalPart.slice(0, decimal);

    // 如果截取后的小数部分长度小于指定长度，用0补足
    while (truncatedDecimal.length < decimal) {
      truncatedDecimal += '0';
    }

    // 去除小数部分末尾的零
    truncatedDecimal = truncatedDecimal.replace(/0+$/, '');

    // 如果小数部分全部被去除了，就不显示小数点和后面的零
    if (truncatedDecimal.length === 0) {
      return newNum;
    } else {
      return newNum + "." + truncatedDecimal;
    }
  }
};

// 时间戳转换时间(毫秒)
const formatTimestamp = function (timestamp, format) {
  if (format === void 0) {
    format = 'YYYY-MM-DD HH:mm:ss';
  }
  if (!timestamp) return '';
  const date = new Date(timestamp);
  const pad = num => String(num).padStart(2, '0');
  const map = {
    YYYY: date.getFullYear(),
    MM: pad(date.getMonth() + 1),
    DD: pad(date.getDate()),
    HH: pad(date.getHours()),
    mm: pad(date.getMinutes()),
    ss: pad(date.getSeconds())
  };
  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, match => map[match]);
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.to-json.js
var web_url_to_json = __webpack_require__(7208);
// EXTERNAL MODULE: ./node_modules/jotai/esm/index.mjs + 1 modules
var esm = __webpack_require__(2837);
;// ./src/hook/useWallet.ts
/* unused harmony import specifier */ var useDisconnect;






// 连接钱包
function useConnectWallet() {
  const {
    connect
  } = (0,wagmi_dist/* useConnect */.eF)({
    connector: new chunk_2VZS2JHJ/* InjectedConnector */.s()
  });
  return connect;
}

// 断开连接
function useDisconnectWallet() {
  const {
    disconnect
  } = useDisconnect();
  return disconnect;
}

// 获取当前账号信息
function useGetOwnAddress() {
  const {
    address,
    isConnected
  } = (0,wagmi_dist/* useAccount */.F7)();
  return {
    address,
    isConnected
  };
}
const queryChainIdAtom = (0,esm/* atom */.eU)(-1);
queryChainIdAtom.onMount = set => {
  const params = new URL(window.location.href).searchParams;
  const c = params.get('chainId');
  if (isChainSupported(+c)) {
    set(+c);
  } else {
    set(0);
  }
};
;// ./src/config/const/address.ts
const Contracts_Address = {
  56: {
    USDT: "0x55d398326f99059fF775485246999027B3197955",
    // 体验币
    CoinTokenAddress: "0x67aa1a58bf1859d089ebaa72df78fde50acc402d",
    // 绑定邀请关系
    BindAddress: '0x0d419281759671AFdfA4B0610D64cff111F26942',
    // 查询蜂巢矿机数量
    MinerNFTAddress: '0x81c97a16E3666d6C05a0690Fda2784e6aE083d2B',
    // 领取bee分红
    MinerStakePoolAddress: '0xa754918b32805bbd44c4fed445519caf2cd496c0',
    // 领取蜂巢矿机
    MinterAddress: '0xD18aF129A2c1926786F0eA5F3626AC5f401AB596',
    // BTZK_MachineMall
    BTZKMachineMallAddress: '0x276cb04c17dd17a336ff3294c5e51841e05d971f',
    // BTZK_Machine
    BTZKMachineAddress: '0xbe79d545dee2a82e200ef6d8c13b1f9de228562f',
    // BTZK_LiquidityBank
    BTZKLiquidityBankAddress: '0x44bf4f3136af6e95d39e787f705cd32eac009607',
    // BTZK_TokenRewardPool(神马矿机分红合约)
    BTZKTokenRewardPoolAddress: '0xa85799e09ba3847e469346d00c597c9d70a10028'
  },
  97: {
    USDT: "0x44004827f2F72566E12884A38f63f72F2a5143ea",
    // 体验币
    CoinTokenAddress: "0x18f59de18606b81802573e012e06c8515f18f5b5",
    // 绑定邀请关系
    BindAddress: '0x99bc42f8d7bc32e436e0c4640dd73758c6340a91',
    // 查询蜂巢矿机数量
    MinerNFTAddress: '0xE79c0b74eeDbdD491C119FE3630e8E3A236aB2E2',
    // 领取bee分红
    MinerStakePoolAddress: '0xda68131F0292759F991c9fF463502273e71c798D',
    // 领取蜂巢矿机
    MinterAddress: '0xd46607c6169a0abd4f3D272421326Db513e48eE9',
    // BTZK_MachineMall
    BTZKMachineMallAddress: '0x374e01683748011dbcf93592b00f8ec0a129603b',
    // BTZK_Machine
    BTZKMachineAddress: '0x5fd59623c1c1b4cba0eac3b607759227af6e336f',
    // BTZK_LiquidityBank
    BTZKLiquidityBankAddress: '0xdb97088a3a44fc890e0688d3065ca9cb16b7bff7',
    // BTZK_TokenRewardPool(神马矿机分红合约)
    BTZKTokenRewardPoolAddress: '0x195856f12c6a8917b2b9cac9be8f69d64333ff4f'
  }
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(6910);
// EXTERNAL MODULE: ./node_modules/web3/dist/web3.min.js
var web3_min = __webpack_require__(6450);
var web3_min_default = /*#__PURE__*/__webpack_require__.n(web3_min);
// EXTERNAL MODULE: ./node_modules/.store/viem@2.46.3/node_modules/viem/_esm/constants/address.js
var constants_address = __webpack_require__(5750);
;// ./src/config/abi/BindUserAbi.json
const BindUserAbi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"referee","type":"address"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"UserBound","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_DEPTH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_referrers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referrer","type":"address"}],"name":"bind","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"directRefCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referee","type":"address"},{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"depth","type":"uint256"}],"name":"getAncestorsToTarget","outputs":[{"internalType":"address[]","name":"mentors","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getDirectReferees","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referee","type":"address"}],"name":"getReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"referees","type":"address[]"}],"name":"getReferrers","outputs":[{"internalType":"address[]","name":"referrers","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"root","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"referees","type":"address[]"},{"internalType":"address[]","name":"referrers","type":"address[]"}],"name":"setBindings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"teamPersonCounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');
;// ./src/config/abi/MinterNFTAbi.json
const MinterNFTAbi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"_capacity","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ERC721EnumerableForbiddenBatchMint","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721IncorrectOwner","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721InsufficientApproval","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC721InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"ERC721InvalidOperator","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721InvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC721InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC721InvalidSender","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721NonexistentToken","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"ERC721OutOfBoundsIndex","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"referer","type":"address"}],"name":"NFTMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"adminWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"capacity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"dataMapping","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCapacity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"key","type":"uint256"}],"name":"getDataMapping","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hashrate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxHoldPerAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"referer","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"isWhitelisted","type":"bool"}],"name":"setAdminWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_capacity","type":"uint256"}],"name":"setCapacity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"key","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setDataMapping","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setHashrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxHold","type":"uint256"}],"name":"setMaxHoldPerAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"enabled","type":"bool"}],"name":"setTransferEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"isWhitelisted","type":"bool"}],"name":"setWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"transferEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]');
;// ./src/utils/contractReferrerUtils.js





const ethereumHelper = window.ethereum || false;
const web3 = new (web3_min_default())(ethereumHelper);

/**
 * 邀请关系合约
 */
class ContractReferrer {
  // 初始化方法
  static init(i18nInstance, messageInstance) {
    ContractReferrer.i18n = i18nInstance;
    ContractReferrer.message = messageInstance;
  }

  // 查询当前钱包地址绑定邀请人地址
  static async getReferrer(address, contractsAddress) {
    try {
      const contract = new web3.eth.Contract(BindUserAbi_namespaceObject, contractsAddress);
      let referrer = await contract.methods.getReferrer(address).call();
      return referrer;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 绑定邀请人
  static async bindReferrer(address, referralAddress, contractsAddress) {
    try {
      const referral = referralAddress.trim();

      // 判断绑定的地址是否是root地址，是root地址的话，直接绑定，否则判断绑定地址是否有邀请人
      const isRoot = await ContractReferrer.checkIsRoot(referral, contractsAddress);
      if (isRoot) {
        // root地址，直接绑定
        return ContractReferrer.bindContractsReferrer(address, referral, contractsAddress);
      } else {
        // 不是root地址，判断是否有邀请人，才可以绑定
        const checkAddress = await ContractReferrer.getReferrer(referral, contractsAddress);
        if (checkAddress == constants_address/* zeroAddress */.X) {
          var _ContractReferrer$i;
          ContractReferrer.message.error((_ContractReferrer$i = ContractReferrer.i18n) == null ? void 0 : _ContractReferrer$i.t('Incorrect binding address'));
          return false;
        } else {
          return ContractReferrer.bindContractsReferrer(address, referral, contractsAddress);
        }
      }
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 判断绑定邀请人是否是root地址
  static async checkIsRoot(referral, contractsAddress) {
    try {
      const contract = new web3.eth.Contract(BindUserAbi_namespaceObject, contractsAddress);
      const root = await contract.methods.root().call();
      if (referral == root.trim()) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 绑定邀请人合约调用
  static async bindContractsReferrer(address, referral, contractsAddress) {
    try {
      var _ContractReferrer$i2;
      const contract = new web3.eth.Contract(BindUserAbi_namespaceObject, contractsAddress);
      const gas = await web3.eth.getGasPrice();
      await contract.methods.bind(referral).send({
        from: address,
        gasPrice: gas
      });
      ContractReferrer.message.success((_ContractReferrer$i2 = ContractReferrer.i18n) == null ? void 0 : _ContractReferrer$i2.t('Bind successful'));
      return true;
    } catch (error) {
      console.log("error===>", error);
      return false;
    }
  }

  // 直推数
  static async directRefCount(address, contractsAddress) {
    try {
      const contract = new web3.eth.Contract(BindUserAbi_namespaceObject, contractsAddress);
      const count = await contract.methods.directRefCount(address).call();
      return count;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 团队总数
  static async teamPersonCounts(address, contractsAddress) {
    try {
      const contract = new web3.eth.Contract(BindUserAbi_namespaceObject, contractsAddress);
      const count = await contract.methods.teamPersonCounts(address).call();
      return count;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 查询我的邀请人列表
  static async referrerList(address, BindContractsAddress, MineContractsAddress) {
    try {
      const BindContract = new web3.eth.Contract(BindUserAbi_namespaceObject, BindContractsAddress);
      const list = await BindContract.methods.getDirectReferees(address).call();
      // console.log('list===>', list)

      // 倒序排序，获取前20条数据
      const top20 = Array.from(list).sort().slice(0, 20);
      const MineContract = new web3.eth.Contract(MinterNFTAbi_namespaceObject, MineContractsAddress);
      // 使用 Promise.all 并行查询所有地址的余额
      const balancePromises = top20.map(address => MineContract.methods.balanceOf(address).call().then(balance => ({
        address: address,
        total_amount: balance.toString()
      })).catch(error => {
        console.error(`查询地址 ${address} 余额失败:`, error);
        return {
          address: address,
          total_amount: '0',
          error: error.message
        };
      }));

      // 并行执行所有查询
      const data = await Promise.all(balancePromises);
      // console.log("data===>", data)

      return data;
    } catch (error) {
      console.log("error===>", error);
    }
  }
}
ContractReferrer.i18n = null;
ContractReferrer.message = null;
;// ./src/context/InvitationContext.jsx





const InvitationContext = /*#__PURE__*/(0,react.createContext)();
const InvitationProvider = _ref => {
  var _chain$id;
  let {
    children
  } = _ref;
  const [referrerAddress, setReferrerAddress] = (0,react.useState)("");
  const {
    address
  } = useGetOwnAddress();
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const ContractsAddress = Contracts_Address[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56];

  // 查询我的邀请人
  const handleReferrer = async () => {
    // 我的邀请人
    const referrer = await ContractReferrer.getReferrer(address, ContractsAddress.BindAddress);
    setReferrerAddress(referrer);
  };
  (0,react.useEffect)(() => {
    if (address && chain) {
      // 查询我的邀请人
      handleReferrer();
    }
  }, [address, chain]);
  return /*#__PURE__*/react.createElement(InvitationContext.Provider, {
    value: {
      referrerAddress,
      handleReferrer
    }
  }, children);
};
const invitationLayout = () => (0,react.useContext)(InvitationContext);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 12 modules
var message = __webpack_require__(3532);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(2712);
// EXTERNAL MODULE: ./node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(346);
;// ./src/config/abi/erc20.json
const erc20_namespaceObject = /*#__PURE__*/JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');
;// ./src/utils/contractERC20Utils.js



const contractERC20Utils_ethereumHelper = window.ethereum || false;
const contractERC20Utils_web3 = new (web3_min_default())(contractERC20Utils_ethereumHelper);

/**
 * ERC20通用合约
 */
class ContractERC20 {
  // 查询主链币余额
  static async getBalance(address) {
    try {
      const balanceWei = await contractERC20Utils_web3.eth.getBalance(address);
      const balanceEth = contractERC20Utils_web3.utils.fromWei(balanceWei, 'ether');
      const balanceFormatted = new bignumber/* default */.A(balanceEth).toFixed(6);
      return balanceFormatted;
    } catch (error) {
      console.log("error===>", error);
      return "0";
    }
  }

  // 查询Token余额
  static async balanceOf(address, contractsAddress, decimals) {
    if (decimals === void 0) {
      decimals = 18;
    }
    try {
      const contract = new contractERC20Utils_web3.eth.Contract(erc20_namespaceObject, contractsAddress);
      const balanceOf = await contract.methods.balanceOf(address).call();
      const balanceOfBig = new bignumber/* default */.A(balanceOf.toString()).shiftedBy(-decimals).toFixed(2);
      return balanceOfBig;
    } catch (error) {
      console.log("error===>", error);
      return "0";
    }
  }

  // 查询授权
  static async allowance(address, tokenAddress, contractsAddress, decimals) {
    if (decimals === void 0) {
      decimals = 18;
    }
    try {
      const contract = new contractERC20Utils_web3.eth.Contract(erc20_namespaceObject, tokenAddress);
      const allowance = await contract.methods.allowance(address, contractsAddress).call();
      const allowanceBig = new bignumber/* default */.A(allowance.toString()).shiftedBy(-decimals).toFixed();
      return allowanceBig;
    } catch (error) {
      console.log("error===>", error);
      return "0";
    }
  }

  // 授权
  static async approve(address, tokenAddress, contractsAddress, amount) {
    if (amount === void 0) {
      amount = "1000000000000000000000000000";
    }
    try {
      const contract = new contractERC20Utils_web3.eth.Contract(erc20_namespaceObject, tokenAddress);
      const gas = await contractERC20Utils_web3.eth.getGasPrice();
      const approveAmount = contractERC20Utils_web3.utils.toWei(amount.toString(), 'ether');
      await contract.methods.approve(contractsAddress, approveAmount.toString()).send({
        from: address,
        gasPrice: gas
      });
      return true;
    } catch (error) {
      console.log("error===>", error);
      return false;
    }
  }

  // Token币种symbol、decimals
  static async tokenInfo(tokenAddress) {
    try {
      const contract = new contractERC20Utils_web3.eth.Contract(erc20_namespaceObject, tokenAddress);
      const symbol = await contract.methods.symbol().call();
      const decimals = await contract.methods.decimals().call();
      return {
        address: tokenAddress,
        symbol: symbol,
        decimals: decimals
      };
    } catch (error) {
      console.log("error===>", error);
      return false;
    }
  }
}
;// ./src/config/abi/BTZKMachineMallAbi.json
const BTZKMachineMallAbi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"periodCount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"chargeTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"validityPeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"electricityAmount","type":"uint256"}],"name":"Charge","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"machineType","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"electricityAmount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isInstallment","type":"bool"},{"indexed":false,"internalType":"uint256","name":"validityPeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mintTime","type":"uint256"}],"name":"MintMachine","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"periodCount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"renewalTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"validityPeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"electricityAmount","type":"uint256"}],"name":"Renewal","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nodeTotalSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nodeReward","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"inviterAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"RewardAmount","type":"event"},{"inputs":[],"name":"BLACK_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BTZK","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ExperienceToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Machine","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MintToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NodeNFT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROUTER","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bank","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"beeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"periodCount","type":"uint256"}],"name":"charge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"days_1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"electricityAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"periodCount","type":"uint256"}],"name":"getElectricityBill","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"machineType","type":"uint256"}],"name":"getMintCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"machineMintCount","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintExperienceMachine","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"machineType","type":"uint256"},{"internalType":"bool","name":"isInstallment","type":"bool"},{"internalType":"uint256","name":"periodCount","type":"uint256"}],"name":"mintMachine","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"mintParams","outputs":[{"internalType":"uint256","name":"openMintCount","type":"uint256"},{"internalType":"uint256","name":"maxMintCount","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"electricityPrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintSwitch","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"periodCount","type":"uint256"}],"name":"renewal","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenRewardPool","type":"address"},{"internalType":"address","name":"_bank","type":"address"}],"name":"setAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"machineType","type":"uint256"},{"internalType":"uint256","name":"openMintCount","type":"uint256"},{"internalType":"uint256","name":"maxMintCount","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"electricityPrice","type":"uint256"}],"name":"setMintParams","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_mintSwitch","type":"bool"}],"name":"setSwitch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"syncLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenRewardPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]');
;// ./src/config/abi/BTZKMachineAbi.json
const BTZKMachineAbi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AccessControlBadConfirmation","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes32","name":"neededRole","type":"bytes32"}],"name":"AccessControlUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ERC721EnumerableForbiddenBatchMint","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721IncorrectOwner","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721InsufficientApproval","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC721InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"ERC721InvalidOperator","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721InvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC721InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC721InvalidSender","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721NonexistentToken","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"ERC721OutOfBoundsIndex","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_toTokenId","type":"uint256"}],"name":"BatchMetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"MetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_nextTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"machineParams","outputs":[{"internalType":"uint256","name":"machineType","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"lpAmount","type":"uint256"},{"internalType":"uint256","name":"mintTime","type":"uint256"},{"internalType":"bool","name":"isInstallment","type":"bool"},{"internalType":"uint256","name":"installmentPeriod","type":"uint256"},{"internalType":"uint256","name":"validityPeriod","type":"uint256"},{"internalType":"uint256","name":"lastRechargeTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"callerConfirmation","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"safeMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"machineType","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"lpAmount","type":"uint256"},{"internalType":"uint256","name":"mintTime","type":"uint256"},{"internalType":"bool","name":"isInstallment","type":"bool"},{"internalType":"uint256","name":"installmentPeriod","type":"uint256"},{"internalType":"uint256","name":"validityPeriod","type":"uint256"},{"internalType":"uint256","name":"lastRechargeTime","type":"uint256"}],"name":"setParams","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// ./src/config/abi/BTZKLiquidityBankAbi.json
const BTZKLiquidityBankAbi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"burnTime","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"BLACK_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BTZK","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Machine","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROUTER","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"days_1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]');
;// ./src/config/abi/BTZKTokenRewardPoolAbi.json
const BTZKTokenRewardPoolAbi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"InvalidShortString","type":"error"},{"inputs":[{"internalType":"string","name":"str","type":"string"}],"name":"StringTooLong","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"orderId","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"signature","type":"bytes"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[],"name":"EIP712DomainChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"orderId","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"eip712Domain","outputs":[{"internalType":"bytes1","name":"fields","type":"bytes1"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"},{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"uint256[]","name":"extensions","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"","type":"bytes"}],"name":"hasUsed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"orderId","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"isSigner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]');
;// ./src/utils/contractShenmaUtil.js









const contractShenmaUtil_ethereumHelper = window.ethereum || false;
const contractShenmaUtil_web3 = new (web3_min_default())(contractShenmaUtil_ethereumHelper);

/**
 * 蜂巢矿机合约
 */
class ContractShenma {
  // 初始化方法
  static init(i18nInstance, messageInstance) {
    ContractShenma.i18n = i18nInstance;
    ContractShenma.message = messageInstance;
  }

  // 查询矿机列表、查询我的矿机
  static async mintParams(address, BTZKMachineMallAddress, BTZKMachineAddress) {
    try {
      // 检查 web3 是否已初始化
      if (!contractShenmaUtil_web3 || !contractShenmaUtil_web3.eth || !contractShenmaUtil_web3.eth.currentProvider) {
        console.error("Web3 not initialized or provider invalid");
        // 尝试重新初始化
        if (typeof initWeb3 === 'function') {
          contractShenmaUtil_web3 = initWeb3();
        }
        // 如果仍然无效，返回错误
        if (!contractShenmaUtil_web3 || !contractShenmaUtil_web3.eth || !contractShenmaUtil_web3.eth.currentProvider) {
          throw new Error("Provider not set or invalid");
        }
      }

      // 检查连接状态
      let isConnected = false;
      try {
        isConnected = await contractShenmaUtil_web3.eth.net.isListening();
        if (!isConnected) {
          throw new Error("Network not listening");
        }
      } catch (err) {
        console.error("Connection check failed:", err);
        throw new Error("Provider not connected");
      }
      const contract = new contractShenmaUtil_web3.eth.Contract(BTZKMachineMallAbi_namespaceObject, BTZKMachineMallAddress);
      const max = 5;
      const queryPromises = [];

      // 添加超时控制和重试
      const queryWithRetry = async function (index, retries) {
        if (retries === void 0) {
          retries = 2;
        }
        for (let i = 0; i <= retries; i++) {
          try {
            const data = await Promise.race([contract.methods.mintParams(index).call(), new Promise((_, reject) => setTimeout(() => reject(new Error(`Query timeout for index ${index}`)), 10000))]);
            return {
              type: index,
              success: true,
              openMintCount: data.openMintCount,
              maxMintCount: data.maxMintCount,
              price: data.price,
              priceBig: new bignumber/* default */.A(data.price.toString()).shiftedBy(-18).toFixed(),
              electricityPrice: data.electricityPrice,
              electricityPriceBig: new bignumber/* default */.A(data.electricityPrice.toString()).shiftedBy(-18).toFixed()
            };
          } catch (err) {
            console.error(`Query attempt ${i + 1} failed for index ${index}:`, err.message);
            if (i === retries) {
              return {
                type: index,
                success: false,
                error: err.message
              };
            }
            // 等待后重试
            await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
          }
        }
      };
      for (let i = 0; i <= max; i++) {
        queryPromises.push(queryWithRetry(i));
      }

      // for (let i = 0; i <= max; i++) {
      //     // 封装成 Promise
      //     // 查询矿机列表
      //     const queryPromise = contract.methods.mintParams(i).call()
      //         .then(data => ({
      //             type: i,
      //             success: true,
      //             openMintCount: data.openMintCount,
      //             maxMintCount: data.maxMintCount,
      //             price: data.price,
      //             priceBig: new BigNumberjs(data.price.toString()).shiftedBy(-18).toFixed(),
      //             electricityPrice: data.electricityPrice,
      //             electricityPriceBig: new BigNumberjs(data.electricityPrice.toString()).shiftedBy(-18).toFixed(),
      //         }))
      //         .catch(err => ({
      //             type: i,
      //             success: false,
      //             error: err.message,
      //         }))

      //     queryPromises.push(queryPromise)
      // }

      // 并行执行所有查询(所有矿机列表)
      const results = await Promise.all(queryPromises);
      console.log("results===>", results);

      // 检查是否有失败的查询
      const failedQueries = results.filter(r => !r.success);
      if (failedQueries.length > 0) {
        console.warn("Some queries failed:", failedQueries);
      }
      if (address) {
        // 添加重试机制
        const getMyListWithRetry = async function (retries) {
          if (retries === void 0) {
            retries = 2;
          }
          for (let i = 0; i <= retries; i++) {
            try {
              const myList = await ContractShenma.myMiningList(address, BTZKMachineAddress);
              return myList;
            } catch (err) {
              console.error(`Get myMiningList attempt ${i + 1} failed:`, err.message);
              if (i === retries) throw err;
              await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
            }
          }
        };

        // 查询我的矿机
        const myList = await getMyListWithRetry();
        console.log("myList===>", myList);
        const myMiningList = myList.map(result => {
          if (result.success) {
            var _mining$;
            const mining = results.filter(item => item.success && item.type.toString() === result.machineType.toString());
            return {
              ...result,
              electricityPriceBig: mining && mining[0] && ((_mining$ = mining[0]) == null ? void 0 : _mining$.electricityPriceBig)
            };
          }
          return result;
        });
        console.log("myMiningList===>", myMiningList);

        // 合并数据：在results数组中新增count字段，统计myMiningList中相同machineType的数量
        const mergedResults = results.map(result => {
          if (result.success) {
            // 统计myMiningList中machineType等于当前result.type的数量
            const count = myMiningList.filter(item => item.success && item.machineType.toString() === result.type.toString()).length;
            return {
              ...result,
              count: count
            };
          }
          return result;
        });

        // 对 myMiningList 进行排序
        const sortedMyMiningList = [...myMiningList].sort((a, b) => {
          // 第一优先级：isInstallment = true 的排在前面
          if (a.isInstallment && !b.isInstallment) return -1;
          if (!a.isInstallment && b.isInstallment) return 1;

          // 第二优先级：type=0 永远排在最后
          const aIsType0 = a.machineType === 0;
          const bIsType0 = b.machineType === 0;
          if (aIsType0 && !bIsType0) return 1;
          if (!aIsType0 && bIsType0) return -1;

          // 第三优先级：按 validityPeriod 从小到大排序
          return Number(a.validityPeriod) - Number(b.validityPeriod);
        });
        console.log("sortedMyMiningList===>", sortedMyMiningList);

        /**
         * 计算mergedResults数组里，openMintCount相加减去count相加
         * 还可以购买矿机总数
         */
        const remainingTotal = mergedResults.reduce((acc, item) => {
          if (item.success) {
            return acc + Number(item.openMintCount) - Number(item.count);
          }
          return acc;
        }, 0);
        console.log("remainingTotal===>", remainingTotal);

        // 先检查 myMiningList 是否存在且有长度
        const currentsTimes = Math.floor(Date.now() / 1000);
        let feesMiningList = [];
        let runningMiningList = [];
        if (!myMiningList || !Array.isArray(myMiningList) || myMiningList.length === 0) {
          feesMiningList = [];
          runningMiningList = [];
        } else {
          // 待续费矿机(不包含体验矿机、销毁矿机)
          feesMiningList = myMiningList && myMiningList.filter(item => Number(item == null ? void 0 : item.validityPeriod) < Number(currentsTimes) && Number(item == null ? void 0 : item.lpAmount) !== Number(0.000000) && (item == null ? void 0 : item.machineType) !== 0);

          // 运行中矿机(不包含销毁矿机)
          runningMiningList = myMiningList.filter(item => Number(item == null ? void 0 : item.validityPeriod) > Number(currentsTimes) && Number(item == null ? void 0 : item.lpAmount) !== Number(0.000000));
        }
        return {
          miningList: mergedResults,
          myList: sortedMyMiningList,
          remainingTotal: remainingTotal,
          feesMiningList: feesMiningList,
          runningMiningList: runningMiningList
        };
      } else {
        const mergedResults = results.map(result => {
          if (result.success) {
            return {
              ...result,
              count: 0
            };
          }
          return result;
        });
        return {
          miningList: mergedResults,
          myList: []
        };
      }
    } catch (error) {
      console.log("error===>", error);
      return {
        miningList: [],
        myList: [],
        remainingTotal: 0,
        feesMiningList: [],
        runningMiningList: [],
        error: error.message
      };
    }
  }

  // 激活体验矿机
  static async mintExperienceMachine(address, CoinTokenAddress, contractsAddress, price, priceBig) {
    try {
      var _ContractShenma$i18n3;
      // 查询主链币余额
      const nativeBalance = await ContractERC20.getBalance(address);

      // 查询体验币余额
      const coinBalance = await ContractERC20.balanceOf(address, CoinTokenAddress);
      if (Number(nativeBalance) < Number(priceBig)) {
        var _ContractShenma$i18n;
        ContractShenma.message.error((_ContractShenma$i18n = ContractShenma.i18n) == null ? void 0 : _ContractShenma$i18n.t('BNB Insufficient balance'));
        return;
      }
      if (Number(coinBalance) < 1) {
        var _ContractShenma$i18n2;
        ContractShenma.message.error((_ContractShenma$i18n2 = ContractShenma.i18n) == null ? void 0 : _ContractShenma$i18n2.t('insufficientBalance', {
          symbol: "BET"
        }));
        return;
      }
      const contract = new contractShenmaUtil_web3.eth.Contract(BTZKMachineMallAbi_namespaceObject, contractsAddress);
      const gas = await contractShenmaUtil_web3.eth.getGasPrice();
      await contract.methods.mintExperienceMachine().send({
        from: address,
        gasPrice: gas,
        value: price
      });
      ContractShenma.message.success((_ContractShenma$i18n3 = ContractShenma.i18n) == null ? void 0 : _ContractShenma$i18n3.t('Experience miner activation successful'));
      return true;
    } catch (error) {
      console.log("error===>", error);
      return false;
    }
  }

  // 激活神马矿机
  static async mintMachine(address, tokenContract, contractsAddress, price, priceBig, electricityPriceBig, type, installmentValue, billFeeValue, isMintSwitch, mintToken) {
    try {
      var _ContractShenma$i18n7;
      // 查询主链币余额
      const nativeBalance = await ContractERC20.getBalance(address);

      // 查询Token余额
      const balanceOf = await ContractERC20.balanceOf(address, tokenContract);
      if (Number(nativeBalance) < Number(priceBig)) {
        var _ContractShenma$i18n4;
        ContractShenma.message.error((_ContractShenma$i18n4 = ContractShenma.i18n) == null ? void 0 : _ContractShenma$i18n4.t('BNB Insufficient balance'));
        return;
      }
      if (Number(balanceOf) < Number(electricityPriceBig * billFeeValue)) {
        var _ContractShenma$i18n5;
        ContractShenma.message.error((_ContractShenma$i18n5 = ContractShenma.i18n) == null ? void 0 : _ContractShenma$i18n5.t('Insufficient balance'));
        return;
      }
      if (isMintSwitch && mintToken != null && mintToken.address) {
        // 查询另一个币种Token余额
        const mintBalanceOf = await ContractERC20.balanceOf(address, mintToken == null ? void 0 : mintToken.address);
        if (Number(mintBalanceOf) < 1) {
          var _ContractShenma$i18n6;
          ContractShenma.message.error((_ContractShenma$i18n6 = ContractShenma.i18n) == null ? void 0 : _ContractShenma$i18n6.t('Please contact the club to queue for a number'));
          return;
        }
      }
      const bnbPrice = installmentValue === 0 ? price : price / 10;
      const isInstallment = installmentValue === 0 ? false : true;
      const contract = new contractShenmaUtil_web3.eth.Contract(BTZKMachineMallAbi_namespaceObject, contractsAddress);
      const gas = await contractShenmaUtil_web3.eth.getGasPrice();
      await contract.methods.mintMachine(type, isInstallment, billFeeValue).send({
        from: address,
        gasPrice: gas,
        value: bnbPrice
      });
      ContractShenma.message.success((_ContractShenma$i18n7 = ContractShenma.i18n) == null ? void 0 : _ContractShenma$i18n7.t('Activation successful'));
      return true;
    } catch (error) {
      console.log("error===>", error);
      return false;
    }
  }

  // 查询我的矿机
  static async myMiningList(address, contractsAddress) {
    try {
      const contract = new contractShenmaUtil_web3.eth.Contract(BTZKMachineAbi_namespaceObject, contractsAddress);
      const balanceOf = await contract.methods.balanceOf(address).call();
      const queryPromises = [];
      if (balanceOf > 0) {
        for (let i = 0; i < balanceOf; i++) {
          const tokenId = await contract.methods.tokenOfOwnerByIndex(address, i).call();
          const queryPromise = contract.methods.machineParams(tokenId).call().then(data => ({
            success: true,
            index: i + 1,
            tokenId: tokenId,
            machineType: Number(data.machineType),
            // 矿机类型
            price: data.price,
            // 价格(BNB)
            priceBig: new bignumber/* default */.A(data.price.toString()).shiftedBy(-18).toFixed(),
            lpAmount: new bignumber/* default */.A(data.lpAmount.toString()).shiftedBy(-18).toFixed(6),
            // LP数量
            mintTime: data.mintTime,
            // mint时间
            isInstallment: data.isInstallment,
            // 是否分期(true or false)
            installmentPeriod: data.installmentPeriod,
            // 分几期
            validityPeriod: data.validityPeriod,
            // 结束时间
            lastRechargeTime: data.lastRechargeTime // 续费开始时间
          })).catch(err => ({
            type: i,
            success: false,
            error: err.message
          }));
          queryPromises.push(queryPromise);
        }
      }

      // 并行执行所有查询
      const results = await Promise.all(queryPromises);
      // console.log("my results===>", results)

      return results;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 续费神马矿机
  static async charge(address, tokenContract, contractsAddress, item, monthValue) {
    try {
      var _ContractShenma$i18n9;
      // 查询Token余额
      const balanceOf = await ContractERC20.balanceOf(address, tokenContract);

      // 根据续费周期，计算出续费金额
      const amount = Number(item == null ? void 0 : item.electricityPriceBig) * Number(monthValue);
      if (Number(balanceOf) < Number(amount)) {
        var _ContractShenma$i18n8;
        ContractShenma.message.error((_ContractShenma$i18n8 = ContractShenma.i18n) == null ? void 0 : _ContractShenma$i18n8.t('Insufficient balance'));
        return;
      }
      const contract = new contractShenmaUtil_web3.eth.Contract(BTZKMachineMallAbi_namespaceObject, contractsAddress);
      const gas = await contractShenmaUtil_web3.eth.getGasPrice();
      await contract.methods.charge(item == null ? void 0 : item.tokenId, monthValue).send({
        from: address,
        gasPrice: gas
      });
      ContractShenma.message.success((_ContractShenma$i18n9 = ContractShenma.i18n) == null ? void 0 : _ContractShenma$i18n9.t('Renewal successful'));
      return true;
    } catch (error) {
      console.log("error===>", error);
      return false;
    }
  }

  // 查询分期还款需要金额
  static async getElectricityBill(tokenId, monthValue, contractsAddress) {
    try {
      const contract = new contractShenmaUtil_web3.eth.Contract(BTZKMachineMallAbi_namespaceObject, contractsAddress);
      const amount = await contract.methods.getElectricityBill(tokenId, monthValue).call();
      const amountBig = new bignumber/* default */.A(amount.toString()).shiftedBy(-18).toFixed(4);
      return amountBig;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 分期还款
  static async renewal(address, tokenContract, contractsAddress, item, monthValue, amount) {
    try {
      var _ContractShenma$i18n10;
      // 查询主链币余额
      const nativeBalance = await ContractERC20.getBalance(address);

      // 查询Token余额
      const balanceOf = await ContractERC20.balanceOf(address, tokenContract);
      const bnbPriceBig = (item == null ? void 0 : item.priceBig) / 10 * monthValue;
      const bnbPrice = (item == null ? void 0 : item.price) / 10 * monthValue;
      if (Number(nativeBalance) < Number(bnbPriceBig)) {
        var _ContractShenma$i18n0;
        ContractShenma.message.error((_ContractShenma$i18n0 = ContractShenma.i18n) == null ? void 0 : _ContractShenma$i18n0.t('BNB Insufficient balance'));
        return;
      }
      if (Number(balanceOf) < Number(amount)) {
        var _ContractShenma$i18n1;
        ContractShenma.message.error((_ContractShenma$i18n1 = ContractShenma.i18n) == null ? void 0 : _ContractShenma$i18n1.t('Insufficient balance'));
        return;
      }
      const contract = new contractShenmaUtil_web3.eth.Contract(BTZKMachineMallAbi_namespaceObject, contractsAddress);
      const gas = await contractShenmaUtil_web3.eth.getGasPrice();
      await contract.methods.renewal(item == null ? void 0 : item.tokenId, monthValue).send({
        from: address,
        gasPrice: gas,
        value: bnbPrice
      });
      ContractShenma.message.success((_ContractShenma$i18n10 = ContractShenma.i18n) == null ? void 0 : _ContractShenma$i18n10.t('Repayment successful'));
      return true;
    } catch (error) {
      console.log("error===>", error);
      return false;
    }
  }

  // 查询销毁矿机时间(矿机购买后多久可以销毁)
  static async days_1(contractsAddress) {
    try {
      const contract = new contractShenmaUtil_web3.eth.Contract(BTZKLiquidityBankAbi_namespaceObject, contractsAddress);
      const days = await contract.methods.days_1().call();
      return days;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 销毁矿机
  static async burn(address, tokenId, contractsAddress) {
    try {
      var _ContractShenma$i18n11;
      const contract = new contractShenmaUtil_web3.eth.Contract(BTZKLiquidityBankAbi_namespaceObject, contractsAddress);
      const gas = await contractShenmaUtil_web3.eth.getGasPrice();
      await contract.methods.burn(tokenId).send({
        from: address,
        gasPrice: gas
      });
      ContractShenma.message.success((_ContractShenma$i18n11 = ContractShenma.i18n) == null ? void 0 : _ContractShenma$i18n11.t('Miner destroyed successfully'));
      return true;
    } catch (error) {
      console.log("error===>", error);
      return false;
    }
  }

  // 查询是否需要另一个币种，才可以激活矿机
  static async mintSwitch(contractsAddress) {
    try {
      const contract = new contractShenmaUtil_web3.eth.Contract(BTZKMachineMallAbi_namespaceObject, contractsAddress);
      const status = await contract.methods.mintSwitch().call();
      return status;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 查询需要授权币种的Token Address
  static async MintToken(contractsAddress) {
    try {
      const contract = new contractShenmaUtil_web3.eth.Contract(BTZKMachineMallAbi_namespaceObject, contractsAddress);
      const tokenAddress = await contract.methods.MintToken().call();
      return tokenAddress;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 提取收益
  static async claim(address, contractAddress, sender, token, amount, orderId, signature) {
    try {
      var _ContractShenma$i18n12;
      const contract = new contractShenmaUtil_web3.eth.Contract(BTZKTokenRewardPoolAbi_namespaceObject, contractAddress);
      const gas = await contractShenmaUtil_web3.eth.getGasPrice();
      await contract.methods.claim(sender, token, amount, orderId, signature).send({
        from: address,
        gasPrice: gas
      });
      ContractShenma.message.success((_ContractShenma$i18n12 = ContractShenma.i18n) == null ? void 0 : _ContractShenma$i18n12.t('Withdraws successful'));
      return true;
    } catch (error) {
      console.log("error===>", error);
      return false;
    }
  }
}
ContractShenma.i18n = null;
ContractShenma.message = null;
;// ./src/context/MiningContext.jsx








const MiningContext = /*#__PURE__*/(0,react.createContext)();
const MiningProvider = _ref => {
  var _chain$id;
  let {
    children
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  (0,react.useEffect)(() => {
    ContractShenma.init(i18n, message/* default */.Ay);
  }, [i18n]);
  const connectWallet = useConnectWallet();
  const {
    address
  } = useGetOwnAddress();
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const ContractsAddress = Contracts_Address[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56];
  const [loading, setLoading] = (0,react.useState)(true);
  const [miningList, setMiningList] = (0,react.useState)([]); // 矿机列表
  const [myMiningList, setMyMiningList] = (0,react.useState)([]); // 我的矿机
  const [miningRemainingTotal, setMiningRemainingTotal] = (0,react.useState)(0); // 剩余可购买矿机数
  const [miningFeeTotal, setMiningFeeTotal] = (0,react.useState)(0); // 待续费矿机数
  const [miningRunningTotal, setMiningRunningTotal] = (0,react.useState)(0); // 运行中矿机数
  const [allCoinApprove, setAllCoinApprove] = (0,react.useState)("1000"); // 体验币授权
  const [allTokenApprove, setAllTokenApprove] = (0,react.useState)("1000"); // Token授权
  const [isApproveLoading, setIsApproveLoading] = (0,react.useState)(false);
  const [isMintExperienceLoading, setIsMintExperienceLoading] = (0,react.useState)(false);
  const [isMintShenmaLoading, setIsMintShenmaLoading] = (0,react.useState)(false);
  const [installmentModal, setisInstallmentModal] = (0,react.useState)(false); // 是否显示激活弹窗
  const [isChargeModal, setIsChargeModal] = (0,react.useState)(false); // 是否显示续费弹窗
  const [isChargeShenmaLoading, setIsChargeShenmaLoading] = (0,react.useState)(false);
  const [isRepaymentModal, setIsRepaymentModal] = (0,react.useState)(false); // 是否显示还款弹窗
  const [isRepaymentShenmaLoading, setIsRepaymentShenmaLoading] = (0,react.useState)(false);
  const [miningTimes, setMiningTimes] = (0,react.useState)(); // 查询销毁矿机时间
  const [isDestroyLoading, setIsDestroyLoading] = (0,react.useState)(false);
  const [isMintSwitch, setIsMintSwitch] = (0,react.useState)(false); // 查询是否需要另一个币种，才可以激活矿机
  const [mintToken, setMintToken] = (0,react.useState)({}); // 另一个Token币种symbol、decimals
  const [allMintTokenApprove, setAllMintTokenApprove] = (0,react.useState)("1000"); // 另一个Token币种授权

  // 查询是否需要另一个币种，才可以激活矿机
  const handleMintSwitch = async () => {
    const status = await ContractShenma.mintSwitch(ContractsAddress.BTZKMachineMallAddress);
    setIsMintSwitch(status);
  };

  // 查询矿机列表、查询我的矿机
  const handleMiningList = async () => {
    const list = await ContractShenma.mintParams(address, ContractsAddress.BTZKMachineMallAddress, ContractsAddress.BTZKMachineAddress);
    setLoading(false);
    // 矿机列表
    setMiningList(list == null ? void 0 : list.miningList);
    // 我的矿机
    setMyMiningList(list == null ? void 0 : list.myList);
    // 剩余可购买矿机数
    setMiningRemainingTotal(list == null ? void 0 : list.remainingTotal);
    // 待续费矿机数
    setMiningFeeTotal(list == null ? void 0 : list.feesMiningList.length);
    // 运行中矿机数
    setMiningRunningTotal(list == null ? void 0 : list.runningMiningList.length);

    // console.log("矿机列表context===>", list?.miningList)
    // console.log("我的矿机context===>", list?.myList)
    // console.log("剩余可购买矿机数context===>", list?.remainingTotal)
    // console.log("待续费矿机数context===>", list?.feesMiningList.length)
    // console.log("运行中矿机数context===>", list?.runningMiningList.length)
  };

  // 查询体验币授权
  const handleCoinAllowance = async () => {
    const allowanceCoin = await ContractERC20.allowance(address, ContractsAddress.CoinTokenAddress, ContractsAddress.BTZKMachineMallAddress);
    setAllCoinApprove(allowanceCoin);
  };

  // 查询Token授权
  const handleTokenAllowance = async () => {
    const allowanceToken = await ContractERC20.allowance(address, ContractsAddress.USDT, ContractsAddress.BTZKMachineMallAddress);
    // console.log("allowanceToken===>", allowanceToken)
    setAllTokenApprove(allowanceToken);
  };

  // 查询需要授权币种的Token 
  const handleMintTokenAllowance = async () => {
    const tokenAddress = await ContractShenma.MintToken(ContractsAddress.BTZKMachineMallAddress);
    if (tokenAddress) {
      const tokenInfo = await ContractERC20.tokenInfo(tokenAddress);
      // console.log("tokenInfo===>", tokenInfo)
      setMintToken(tokenInfo);
      const allowance = await ContractERC20.allowance(address, tokenAddress, ContractsAddress.BTZKMachineMallAddress);
      // console.log("allowance===>", allowance)
      setAllMintTokenApprove(allowance);
    }
  };

  // 查询销毁矿机时间(矿机购买后多久可以销毁)
  const handleDestroyTime = async () => {
    const time = await ContractShenma.days_1(ContractsAddress.BTZKLiquidityBankAddress);
    setMiningTimes(time);
  };
  (0,react.useEffect)(() => {
    setLoading(true);
  }, []);
  (0,react.useEffect)(() => {
    // 查询是否需要另一个币种，才可以激活矿机
    handleMintSwitch();
    // 查询矿机列表、查询我的矿机
    handleMiningList();
    if (address && chain) {
      // 查询体验币授权
      handleCoinAllowance();
      // 查询Token授权
      handleTokenAllowance();
      // 查询销毁矿机时间(矿机购买后多久可以销毁)
      handleDestroyTime();
    } else {
      setLoading(false);
    }
  }, [address, chain]);
  (0,react.useEffect)(() => {
    if (isMintSwitch) {
      // 查询需要授权币种的Token
      handleMintTokenAllowance();
    }
  }, [isMintSwitch]);

  // 授权
  const handleApprove = async (tokenAddress, index) => {
    if (index) {
      setIsApproveLoading(prev => ({
        ...prev,
        [index]: true
      }));
    } else {
      setIsApproveLoading(true);
    }
    try {
      const approve = await ContractERC20.approve(address, tokenAddress, ContractsAddress.BTZKMachineMallAddress);

      // 授权成功
      if (approve) {
        // 查询体验币授权
        handleCoinAllowance();
        // 查询Token授权
        handleTokenAllowance();
        if (isMintSwitch) {
          handleMintTokenAllowance();
        }
      }
    } catch (error) {
      console.error("Approve error:", error);
    } finally {
      // 无论成功或失败，都取消加载状态
      if (index) {
        setIsApproveLoading(prev => ({
          ...prev,
          [index]: false
        }));
      } else {
        setIsApproveLoading(false);
      }
    }
  };

  // 激活体验矿机
  const handleMintExperienceClick = async item => {
    if (!address) {
      connectWallet();
      return;
    }
    setIsMintExperienceLoading(true);
    try {
      const res = await ContractShenma.mintExperienceMachine(address, ContractsAddress.CoinTokenAddress, ContractsAddress.BTZKMachineMallAddress, item == null ? void 0 : item.price, item == null ? void 0 : item.priceBig);
      if (res) {
        // 查询矿机列表、查询我的矿机
        handleMiningList();
      }
    } catch (error) {
      console.error("Mint error:", error);
    } finally {
      // 无论成功或失败，都取消加载状态
      setIsMintExperienceLoading(false);
    }
  };

  // 激活神马矿机
  const handleMintShenmaClick = async (item, installmentValue, billFeeValue, isMintSwitch, mintToken) => {
    if (!address) {
      connectWallet();
      return;
    }
    setIsMintShenmaLoading(true);
    try {
      const res = await ContractShenma.mintMachine(address, ContractsAddress.USDT, ContractsAddress.BTZKMachineMallAddress, item == null ? void 0 : item.price, item == null ? void 0 : item.priceBig, item == null ? void 0 : item.electricityPriceBig, item == null ? void 0 : item.type, installmentValue, billFeeValue, isMintSwitch, mintToken);
      if (res) {
        // 关闭神马矿机激活弹窗
        setisInstallmentModal(false);
        // 查询矿机列表、查询我的矿机
        handleMiningList();
        // 查询Token授权
        handleTokenAllowance();
      }
    } catch (error) {
      console.error("Mint error:", error);
    } finally {
      // 无论成功或失败，都取消加载状态
      setIsMintShenmaLoading(false);
    }
  };

  // 续费神马矿机
  const handleChargeShenmaClick = async (item, monthValue) => {
    if (!address) {
      connectWallet();
      return;
    }
    setIsChargeShenmaLoading(true);
    try {
      const res = await ContractShenma.charge(address, ContractsAddress.USDT, ContractsAddress.BTZKMachineMallAddress, item, monthValue);
      if (res) {
        // 关闭神马矿机续费弹窗
        setIsChargeModal(false);
        // 查询矿机列表、查询我的矿机
        handleMiningList();
        // 查询Token授权
        handleTokenAllowance();
      }
    } catch (error) {
      console.error("charge error:", error);
    } finally {
      // 无论成功或失败，都取消加载状态
      setIsChargeShenmaLoading(false);
    }
  };

  // 查询分期还款需要金额
  const handleRepaymentAmount = async (tokenId, monthValue) => {
    const amount = await ContractShenma.getElectricityBill(tokenId, monthValue, ContractsAddress.BTZKMachineMallAddress);
    return amount;
  };

  // 分期还款
  const handleRepaymentShenmaClick = async (item, monthValue, amount) => {
    if (!address) {
      connectWallet();
      return;
    }
    setIsRepaymentShenmaLoading(true);
    try {
      const res = await ContractShenma.renewal(address, ContractsAddress.USDT, ContractsAddress.BTZKMachineMallAddress, item, monthValue, amount);
      if (res) {
        // 关闭神马矿机还款弹窗
        setIsRepaymentModal(false);
        // 查询矿机列表、查询我的矿机
        handleMiningList();
        // 查询Token授权
        handleTokenAllowance();
      }
    } catch (error) {
      console.error("error:", error);
    } finally {
      // 无论成功或失败，都取消加载状态
      setIsRepaymentShenmaLoading(false);
    }
  };

  // 销毁矿机
  const handleBurnClick = async (tokenId, index) => {
    if (!address) {
      connectWallet();
      return;
    }
    setIsDestroyLoading(prev => ({
      ...prev,
      [index]: true
    }));
    try {
      const res = await ContractShenma.burn(address, tokenId, ContractsAddress.BTZKLiquidityBankAddress);
      if (res) {
        // 查询矿机列表、查询我的矿机
        handleMiningList();
      }
    } catch (error) {
      console.error("error:", error);
    } finally {
      // 无论成功或失败，都取消加载状态
      setIsDestroyLoading(prev => ({
        ...prev,
        [index]: false
      }));
    }
  };
  return /*#__PURE__*/react.createElement(MiningContext.Provider, {
    value: {
      loading,
      miningList,
      myMiningList,
      miningRemainingTotal,
      miningFeeTotal,
      miningRunningTotal,
      handleMiningList,
      allCoinApprove,
      allTokenApprove,
      handleApprove,
      isApproveLoading,
      handleMintExperienceClick,
      isMintExperienceLoading,
      handleMintShenmaClick,
      isMintShenmaLoading,
      installmentModal,
      setisInstallmentModal,
      handleChargeShenmaClick,
      isChargeShenmaLoading,
      isChargeModal,
      setIsChargeModal,
      isRepaymentModal,
      setIsRepaymentModal,
      isRepaymentShenmaLoading,
      handleRepaymentShenmaClick,
      handleRepaymentAmount,
      miningTimes,
      handleBurnClick,
      isDestroyLoading,
      isMintSwitch,
      mintToken,
      allMintTokenApprove
    }
  }, children);
};
const useMiningLayout = () => (0,react.useContext)(MiningContext);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(2505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./src/http/index.js


const instance = axios_default().create({
  timeout: 30000,
  baseURL: "",
  headers: {
    Accept: "application/json;version=3.0;compress=false",
    "content-type": "application/json"
  }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// 添加响应拦截器
instance.interceptors.response.use(async response => {
  // console.log(response);

  if (response.data.errors) {
    message/* default */.Ay.error(res);
  }

  // 对响应数据做点什么
  if (response.request.responseType === "blob") return response; // 对下载做兼容
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  console.log("error------>", error);
  message/* default */.Ay.error(error.message || error);
  return Promise.reject(error);
});
/* harmony default export */ const http = (instance);
;// ./src/http/http2.js



const instance2 = axios_default().create({
  timeout: 30000,
  baseURL: "",
  headers: {
    Accept: "application/json;version=3.0;compress=false",
    "content-type": "application/json"
  }
});

// 添加请求拦截器
instance2.interceptors.request.use(function (config) {
  // 添加认证token
  const accessToken = getCookie('BTCSAccessToken');
  if (accessToken && accessToken != undefined) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// 添加响应拦截器
instance2.interceptors.response.use(async response => {
  // console.log(response);

  if (response.data.errors) {
    message/* default */.Ay.error(res);
  }

  // 对响应数据做点什么
  if (response.request.responseType === "blob") return response; // 对下载做兼容
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  console.log("error------>", error);
  message/* default */.Ay.error(error.message || error);
  return Promise.reject(error);
});
/* harmony default export */ const http2 = (instance2);
// EXTERNAL MODULE: ./node_modules/@ethersproject/address/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(8908);
;// ./src/utils/index.js
/* unused harmony import specifier */ var ethers;
/* unused harmony import specifier */ var Contract;




const AddressZero = "0x0000000000000000000000000000000000000000";
const interfaceUrl = () => {
  const hostname = window.location.hostname;
  if (!hostname.includes("192.168")) {
    return true;
  } else {
    return false;
  }
};
const axiosUrl = interfaceUrl() ? "https://openbtc.app/app-api" : "http://192.168.90.68:48080/app-api";
const isAddress = memoize_default()(value => {
  try {
    return (0,lib_esm.getAddress)(value);
  } catch {
    return false;
  }
});
function getContractObj(address, ABI) {
  var _window, _window2;
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  if (!((_window = window) != null && _window.ethereum)) {
    return;
  }
  // @ts-ignore
  const provider = new ethers.providers.Web3Provider((_window2 = window) == null ? void 0 : _window2.ethereum);
  return new Contract(address, ABI, provider.getSigner());
}
;// ./src/context/UserContext.jsx










const UserContext = /*#__PURE__*/(0,react.createContext)();
const UserProvider = _ref => {
  let {
    children
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  (0,react.useEffect)(() => {
    ContractShenma.init(i18n, message/* default */.Ay);
  }, [i18n]);
  const {
    address
  } = useGetOwnAddress();
  const [assets3List, setAssets3List] = (0,react.useState)({});
  const [assets2List, setAssets2List] = (0,react.useState)({});
  const [assets0List, setAssets0List] = (0,react.useState)({});
  const [assets1List, setAssets1List] = (0,react.useState)({});
  const [assetsLoading, setAssetsLoading] = (0,react.useState)(true);
  const [assetsDetailsList, setAssetsDetailsList] = (0,react.useState)([]);
  const [pageSize, setPageSize] = (0,react.useState)(10); // 每页条数
  const [isWithdrawsLoading, setIsWithdrawsLoading] = (0,react.useState)(false);
  const [withdrawsLoading, setWithdrawsLoading] = (0,react.useState)(true);
  const [withdrawsDetailsList, setWithdrawsDetailsList] = (0,react.useState)([]);
  const [withdrawsOpen, setWithdrawsOpen] = (0,react.useState)(true);

  // 获取用户资产
  const handleUserInfo = async () => {
    http.get(`${axiosUrl}/assets/info/owner?address=${address}`).then(function (res) {
      if (res.code === 0) {
        const data = res.data;

        // 通缩奖励-每日分币(BTZK))
        const type3Data = data.find(item => item.type === 3);
        // 购买矿机邀请分红-团队奖励(BNB)
        const type2Data = data.find(item => item.type === 2);
        // NFT分红-NFT收益(BNB)
        const type0Data = data.find(item => item.type === 0);
        // 电费分红-电费收益(USDT)
        const type1Data = data.find(item => item.type === 1);
        setAssets3List(type3Data);
        setAssets2List(type2Data);
        setAssets0List(type0Data);
        setAssets1List(type1Data);
      }
    }).catch(function (error) {
      console.log("error===>", error);
    });
  };

  // 获取用户资产变化记录
  const handleAssetsInfo = async (assetsType, id, date) => {
    /**
     * changeType 资产变化类型(0:支出、1:收入)
     * businessType 业务类型
     * (1:空投、2:转账、3:购买矿机邀请分红、4:NFT分红、5:通缩奖励、6:电费分红、7:提现)
     * assetsType 资产类型
     * (0:NFT分红-NFT收益(BNB)、1:电费分红-电费收益(USDT)、2:购买矿机邀请分红-团队奖励(BNB)、3:通缩奖励-每日分币(BTZK))
     * lastId 上次查询的最后一条记录的 id
     * date 日期 yyyyMMdd
     */
    setAssetsLoading(true);
    // &lastId=${id}&date=${date}
    http.get(`${axiosUrl}/assets/info/change-record?address=${address}&pageSize=${pageSize}&assetsType=${assetsType}&lastId=${id}&date=${date}`).then(function (res) {
      if (res.code === 0) {
        const data = res.data;
        setAssetsLoading(false);
        if (!id) {
          // 第一次加载或重置：替换数据
          setAssetsDetailsList(data);
        } else {
          // 加载更多：追加数据
          setAssetsDetailsList(prevList => {
            // 防止重复数据
            const existingIds = new Set(prevList.map(item => item.id));
            const uniqueNewData = data.filter(item => !existingIds.has(item.id));
            return [...prevList, ...uniqueNewData];
          });
        }
      }
    }).catch(function (error) {
      console.log("error===>", error);
    });
  };

  // 获取自己提现记录列表
  const handleAssetsWithdraw = async assetsType => {
    setWithdrawsLoading(true);
    http.get(`${axiosUrl}/assets/withdraw/get-owner?address=${address}&assetsType=${assetsType}`).then(function (res) {
      if (res.code === 0) {
        const data = res.data;
        setWithdrawsLoading(false);
        setWithdrawsDetailsList(data);
      }
    }).catch(function (error) {
      console.log("error===>", error);
    });
  };
  (0,react.useEffect)(() => {
    if (address) {
      // 获取用户资产
      handleUserInfo();
    }
  }, [address]);

  // 签名
  const signDataLogin = async assetsType => {
    setIsWithdrawsLoading(prev => ({
      ...prev,
      [assetsType]: true
    }));
    const time = new Date().getTime();
    let loginForm = {
      address,
      randomHex: web3_min_default().utils.randomHex(32),
      time,
      r: '',
      s: '',
      v: ''
    };
    const ethereumHelper = window.ethereum || false;
    if (ethereumHelper && address) {
      const web3 = new (web3_min_default())(ethereumHelper);
      const randomHex = web3.utils.randomHex(32);
      const loginInfoStr = address + randomHex + time;
      const hash = web3.utils.keccak256(loginInfoStr);
      try {
        const signature = await web3.eth.personal.sign(hash, address, "");
        const signature1 = signature.substring(2);
        const r = `0x${signature1.substring(0, 64)}`;
        const s = `0x${signature1.substring(64, 128)}`;
        const v = `0x${signature1.substring(128, 130)}`;
        loginForm = {
          ...loginForm,
          randomHex,
          r,
          s,
          v
        };

        // 签名成功后，进行登录
        handleLogin(loginForm, assetsType);
      } catch (err) {
        message/* default */.Ay.error(t("The user declined to sign"));
      } finally {
        setIsWithdrawsLoading(prev => ({
          ...prev,
          [assetsType]: false
        }));
      }
    }
  };

  // 登录
  const handleLogin = async (loginForm, assetsType) => {
    http.post(`${axiosUrl}/user/auth/login`, loginForm).then(function (res) {
      if (res.code === 0) {
        const data = res.data;
        const currentsTimes = Math.floor(Date.now());
        const expiresTime = data.expiresTime - currentsTimes;
        setCookie('BTCSAccessToken', data.accessToken, expiresTime);
        signPostWithdraw(assetsType);
      } else {
        message/* default */.Ay.error(t("Signature login failed, please refresh the page and try again"));
      }
    }).catch(function (error) {
      console.log("web3 sign login error===>", error);
    });
  };

  // 提现
  const signWithdraw = async assetsType => {
    const accessToken = getCookie('BTCSAccessToken');
    if (accessToken) {
      signPostWithdraw(assetsType);
    } else {
      signDataLogin(assetsType);
    }
  };

  // 提现方法
  const signPostWithdraw = async assetsType => {
    http2.post(`${axiosUrl}/assets/withdraw/sign`, {
      address: address,
      assetsType: assetsType
    }).then(async function (res) {
      if (res.code === 0) {
        const data = res.data;

        // 更新用户资产
        handleUserInfo();
        setIsWithdrawsLoading(prev => ({
          ...prev,
          [assetsType]: true
        }));
        try {
          const res = await ContractShenma.claim(address, data.contractAddress, data.sender, data.token, data.amount, data.orderId, data.signature);
          if (res) {
            setWithdrawsOpen(false);
          }
        } catch (error) {
          console.error("claim error:", error);
        } finally {
          // 无论成功或失败，都取消加载状态
          setIsWithdrawsLoading(prev => ({
            ...prev,
            [assetsType]: false
          }));
        }
      } else {
        if (res.code === 1005000003) {
          message/* default */.Ay.error(t("Insufficient balance"));
        } else {
          message/* default */.Ay.error(res.msg);
        }
      }
    }).catch(function (error) {
      console.log("error===>", error);
    });
  };
  return /*#__PURE__*/react.createElement(UserContext.Provider, {
    value: {
      assets3List,
      assets2List,
      assets0List,
      assets1List,
      assetsLoading,
      assetsDetailsList,
      handleAssetsInfo,
      handleAssetsWithdraw,
      withdrawsLoading,
      withdrawsDetailsList,
      withdrawsOpen,
      setWithdrawsOpen,
      signWithdraw,
      isWithdrawsLoading
    }
  }, children);
};
const userLayout = () => (0,react.useContext)(UserContext);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(7618);
;// ./src/assets/images/LaunchVideo.mp4
const LaunchVideo_namespaceObject = __webpack_require__.p + "726f490b01e75e5ed0e9.mp4";
;// ./src/components/Launch/launch.jsx



const CustomStyle = styled_components_browser_esm/* default */.Ay.div`
  video {
    width: 100%;
    height: 100%;
 }
`;
function Launch() {
  const videoRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    // 自动播放视频
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("自动播放失败:", error);
      });
    }
  }, []);
  return /*#__PURE__*/react.createElement(CustomStyle, null, /*#__PURE__*/react.createElement("video", {
    ref: videoRef,
    src: LaunchVideo_namespaceObject
    // 隐藏浏览器默认控件
    ,
    controls: false
    // 不循环播放
    ,
    loop: false
    // 自动播放
    ,
    autoPlay: true
    // 静音（某些浏览器需要静音才能自动播放）
    ,
    muted: true
    // 预加载
    ,
    preload: "auto"
    // 禁用画中画
    ,
    disablePictureInPicture: true
    // 禁用远程播放
    ,
    disableRemotePlayback: true
    // 控制列表：禁用下载、全屏、远程播放
    ,
    controlsList: "nodownload nofullscreen noremoteplayback"
    // 内联播放（移动端）
    ,
    playsInline: true
    // 视频播放结束时不显示任何东西
    ,
    onEnded: () => {
      console.log("视频播放结束");
    }
  }, "\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 video \u6807\u7B7E\u3002"));
}
/* harmony default export */ const Launch_launch = (Launch);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 44 modules
var modal = __webpack_require__(6646);
;// ./src/components/language/language.jsx
/* eslint-disable react-hooks/exhaustive-deps */



function Language(_ref) {
  let {
    visible,
    modalCancel,
    modalConfirm,
    language
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(modal/* default */.A, {
    centered: true,
    open: visible,
    onCancel: () => modalCancel(false)
  }, /*#__PURE__*/react.createElement("div", {
    className: "lan_title"
  }, t("Select Language")), /*#__PURE__*/react.createElement("div", {
    className: "lan_pass"
  }, /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("en");
    }
  }, /*#__PURE__*/react.createElement("em", null, "English"), language === "en" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("zhCN");
    }
  }, /*#__PURE__*/react.createElement("em", null, "\u7B80\u4F53\u4E2D\u6587"), language === "zhCN" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("zhTW");
    }
  }, /*#__PURE__*/react.createElement("em", null, "\u7E41\u4F53\u4E2D\u6587"), language === "zhTW" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("malay");
    }
  }, /*#__PURE__*/react.createElement("em", null, "Bahasa Melayu"), language === "malay" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("indonesian");
    }
  }, /*#__PURE__*/react.createElement("em", null, "Bahasa Indonesia"), language === "indonesian" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("vietnamese");
    }
  }, /*#__PURE__*/react.createElement("em", null, "Ti\u1EBFng Vi\u1EC7t"), language === "vietnamese" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("thai");
    }
  }, /*#__PURE__*/react.createElement("em", null, "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22"), language === "thai" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("korean");
    }
  }, /*#__PURE__*/react.createElement("em", null, "\uD55C\uAD6D\uC5B4"), language === "korean" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("japanese");
    }
  }, /*#__PURE__*/react.createElement("em", null, "\u65E5\u672C\u8A9E"), language === "japanese" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("filipino");
    }
  }, /*#__PURE__*/react.createElement("em", null, "Filipino"), language === "filipino" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  })))));
}
/* harmony default export */ const language = (Language);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 25 modules
var input = __webpack_require__(7229);
;// ./src/components/Loader/Dots.tsx

const Dots = styled_components_browser_esm/* default */.Ay.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`;
/* harmony default export */ const Loader_Dots = (Dots);
;// ./src/components/modal/bindReferrerModal.jsx












const bindReferrerModal_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.b_addtit {
	    font-size: 13px;
    	padding-bottom: 5px;
	}
`;
function BindReferrerModal(_ref) {
  var _chain$id;
  let {
    modalOpen,
    modalCancel
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  (0,react.useEffect)(() => {
    ContractReferrer.init(i18n, message/* default */.Ay);
  }, [i18n]);
  const location = (0,react_router_dist/* useLocation */.zy)();
  const {
    address
  } = useGetOwnAddress();
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const ContractsAddress = Contracts_Address[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56];
  const {
    handleReferrer
  } = invitationLayout();
  const [inputBindAddress, setInputBindAddress] = (0,react.useState)("");
  const [isBindLoading, setIsBindLoading] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    const searchParams = new URLSearchParams(location.search);
    const invitation = searchParams.get('invitation');
    if (invitation) {
      setInputBindAddress(invitation);
    }
  }, [location]);
  const inputChange = e => {
    let value = e.target.value;
    setInputBindAddress(value);
  };
  const handleBindClick = async () => {
    const referral = inputBindAddress.trim();
    if (!referral) {
      message/* default */.Ay.error(t("Referral wallet address"));
      return;
    }
    if (!isValidEthereumAddress(referral)) {
      message/* default */.Ay.error(t("Invalid referrer wallet address format"));
      return;
    }
    setIsBindLoading(true);
    const referrer = await ContractReferrer.bindReferrer(address, inputBindAddress, ContractsAddress.BindAddress);

    // 绑定失败
    if (!referrer) {
      setIsBindLoading(false);
    }

    // 绑定成功
    if (referrer) {
      setIsBindLoading(false);
      modalCancel(false);
      handleReferrer();
    }
  };
  return /*#__PURE__*/react.createElement(modal/* default */.A, {
    centered: true,
    open: modalOpen,
    closable: false,
    width: 488
  }, /*#__PURE__*/react.createElement(bindReferrerModal_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "modal_title"
  }, t('Bind')), /*#__PURE__*/react.createElement("div", {
    className: "b_addtit"
  }, t('Recommended address')), /*#__PURE__*/react.createElement(input/* default */.A, {
    type: "text",
    placeholder: t('Referral wallet address'),
    allowClear: true,
    value: inputBindAddress,
    onChange: inputChange
  }), /*#__PURE__*/react.createElement("div", {
    className: "modal_buttom",
    onClick: handleBindClick
  }, !isBindLoading && /*#__PURE__*/react.createElement("span", null, t('Confirm')), isBindLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Confirm'))))));
}
/* harmony default export */ const bindReferrerModal = (BindReferrerModal);
;// ./src/assets/images/logo.png
const logo_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAIAAAAP3aGbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZTg0YjhkNi01ODgyLTI5NDUtYTA3ZC03MjJjZTIzYzkyNjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjA3MjE3NDVDNDNBMTFGMDk4M0VERDREOUZERDEwMEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjA3MjE3NDRDNDNBMTFGMDk4M0VERDREOUZERDEwMEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZDYxYzA2ODctN2EyMi0wOTRlLWE0MWQtZjI0MjVkOTZhNWVlIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmRlODRiOGQ2LTU4ODItMjk0NS1hMDdkLTcyMmNlMjNjOTI2MCIv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";
;// ./src/assets/images/lan.png
const lan_namespaceObject = "data:image/png;base64,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";
;// ./src/assets/images/xiaoxi.png
const xiaoxi_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAABCCAYAAADt/X6HAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAnxJREFUeAHtm4FVwjAQhq9OgBMYJwAnsE6gTqAb4AbIBOIEyASOAE4gG5QNYIPzjqZYSpoWWtrkyvfevWoolJ//mlzaNIAzgYghbQYUfb3tUajULhuKlY4fimUQBAtwHRZG8UGxxtOIKKYUClxDi5tjvcwpBtA2/CWwfnFZptiWs3TgITZHRPEETUEH61F8YzuM4NzQQRTFL7bL+YRi7GCEbnAeodi+g1neoE7oA0foHjwWlxpighICQ9rMwU1WFHdUKW1sO11BMVNwF0VRmLZWkRif4Archsfrnm2HXJH6ja/gPvw9rW7anOQKQ4EfWN20iRyCP1jdNIrEuCBufwZwHPd5L+Q52VwxXB883bsxvZAnMvdXcZxnU2OeyBD8pG9qPBCpeynruOMwoanR5KQCf1GmRpNIX13cYup8ytSuvnGdbZAo8iATJYo8oLMiFQijsyK9HkJMmET2QRidddK3eWQWlW3YE6kvP/pOYTHgu4uMyjZkRfo6WU5z0HFKdHKQvXK3E6nvKyjwHxa4Z1bayRDksHchLi3yEeTwkk7ZrUjdEIIc9vQkTvp4nbWI3R2ARKSkVE0Ik+Im0Km6Bpks6AbtAzspMVUTtm6ySImpmmbE6cqpKm56lWLDIhGEw+m6ANksWeQMZPN5RV3sF/0xBpmMWd9usZKehfB9d56P+d4RLShmXiz3vnChgxSukjwWXfBXqYe5qF6Bq2C8fPvUZ0ISIqz56YG670/yEFR1+FFQYnnnMdQtcgMOUus5qdMsgurcun5eTrAaLq+UjsFqj1ZEWLAK2Rkw7mUjPI4IXXzazoZ2tGzqTrxx0IR2lUXM8X8MXev/35tw7w978QfYxl9qJwAAAABJRU5ErkJggg==";
;// ./src/components/header/index.jsx












const header_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.header_container {
		display: flex;
		justify-content: space-between;
		position: fixed;
		max-width: 600px;
		margin: auto;
		height: 57px;
		background: #06406A;
		align-items: center;
		left: 0;
		right: 0;
		top: 0;
		transform: translateY(0);
		transition: transform .1s ease-in-out;
		-webkit-user-select: none;
		-moz-user-select: none;
		user-select: none;
		width: 100%;
		z-index: 999;
	}
	.header_left {
		span {
    		display: block;
			height: 57px;
			cursor: pointer;
		}
		img {
		    height: 100%;
		}
	}
	.header_right {
		display: flex;
		align-items: center;
		margin-right: 3%;
	}
	.header_lan {
		height: 20px;
		margin-left: 15px;
		img {
			height: 100%;
		}
	}
	.header_login {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100px;
		height: 30px;
		border: 1px solid #fff;
    	border-radius: 33px;
		margin-left: 15px;
		color: #fff;
		font-size: 14px;
		cursor: pointer;
	}
`;
function Header() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    address,
    isConnected
  } = useGetOwnAddress();
  const connectWallet = useConnectWallet();
  const navigate = (0,react_router_dist/* useNavigate */.Zp)();
  const {
    referrerAddress
  } = invitationLayout();
  const [visible, setVisible] = (0,react.useState)(false);
  const [bindOpenModal, setBindOpenModal] = (0,react.useState)(true);
  (0,react.useEffect)(() => {
    if (!address) {
      // 自动打开连接钱包
      connectWallet();
    }
  }, [address]);
  const handleNavigateClick = name => {
    navigate(name);
    window.scrollTo(0, 0);
  };
  const modalConfirm = lanu => {
    i18n.changeLanguage(lanu);
    localStorage.setItem('language', lanu);
    setVisible(false);
  };
  return /*#__PURE__*/react.createElement(header_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "header_container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_left"
  }, /*#__PURE__*/react.createElement("span", {
    onClick: () => {
      handleNavigateClick("/");
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: logo_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "header_right"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_lan",
    onClick: () => {
      handleNavigateClick("/news");
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: xiaoxi_namespaceObject,
    alt: "",
    style: {
      cursor: "pointer"
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "header_lan",
    onClick: () => setVisible(true)
  }, /*#__PURE__*/react.createElement("img", {
    src: lan_namespaceObject,
    alt: "",
    style: {
      cursor: "pointer"
    }
  })), isConnected ? /*#__PURE__*/react.createElement("div", {
    className: "header_login"
  }, address ? `${address.substring(0, 4)}...${address.substr(-2)}` : '') : /*#__PURE__*/react.createElement("div", {
    className: "header_login",
    onClick: () => connectWallet()
  }, t('Connect')))), visible && /*#__PURE__*/react.createElement(language, {
    visible: visible,
    modalCancel: () => setVisible(false),
    modalConfirm: modalConfirm,
    language: i18n.language
  }), referrerAddress === constants_address/* zeroAddress */.X && /*#__PURE__*/react.createElement(bindReferrerModal, {
    modalOpen: bindOpenModal,
    modalCancel: () => setBindOpenModal(false)
  }));
}
/* harmony default export */ const header = (Header);
;// ./src/assets/images/footer/footer_1.png
const footer_1_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAR1JREFUeAHtlMFtg0AQRf8sKPhIB6EESgiXSMgnKohTQdyB4wrsDpIOOMFaSA4lxCWQDnyLiJydgE+JgF1AimxLftf5M28EuwtcOTXUN7jZ5E8K/HxsYlqHYbDs02cUxHHsTibuisGzv528Lj/FMoqC/WiBlNJT7MRE8DsiRYkyiMKw6JohugpJlvkMJ9cMr/GcKpMkmT9IIGX+QMrO6wEw45Gw39N0O+8lqIYvqu/9CoaLIRCt2iQNARPPMRZBC6Ng8OaGXoF/5vIFtqFesDpEX+K79bbeWJZ7PM6a/6YXEPbT6f1OF0nlW12/Gydg+FJuX5TCR1tZCNyyZnirgBm7388Dg2YkuvwNisYSjYh9eGwLmqgXY4siXDk7fgCyul/7EvNCJwAAAABJRU5ErkJggg==";
;// ./src/assets/images/footer/footer_2.png
const footer_2_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAiBJREFUeAHtVd1x00AQ3jsdNm8oHYgKUCrAigcGWcMQVZCkAkgFdiowqYBQgXAyljKALaggpgJEBdYbKOPcsStbjiT/SMlLXrIPur27vW/32907ATzKQwurY+T73/eB8T6qBmfqy191fezadlTnrKgyCILAUMC9bC4V229CU0fVghqylcHFxbeWJrQuqq3ynlIwwc+p47TP4D4OgiDsKlC9DadiUKDPVdazbetkEw6vAI9u4MbCSI9T0EXkiWK7MyVd2ic7soe6DIbDrybj4ooOJ8As17aibM/DeuSLi8BYHxWialAgb+1XPyoZIHg/jVSqkwzc8zzd90cfGrJxeH6OHbUQTA0xPCJdA61bycDzQr35VE0p+o6993zJyh9fMQbm0hBT1um0P2ZT/3I8pZok/9iO61rxRgZCzMyF11/ZGnVSATw1YO8LcwkDGhoNMKAka4uMCNOlAVcx1BTJZ/pWB0KIKDVUysxy7TivJ2nP5wQL+znTiaECeJGCSRFvdYCpeLcYTfGEe8Ng9Inm1wmzEPQIC39K3eLY7R6t+5dhHy9imKWQMdkqOygU2Q/Gv3EwCtFKtus41qR8MNfOebS482ZvZyMDNFjJ4bq83kV4Mdrb3GYigB9QtPm1tLO01b5fd371JgejQ/T6UgL8wXfmALKUzd+fOGWplkwjBB1wDs+khJ/rHr7K/wE5TB1RIQl47ohe0kGS8LPyxXqUO8t/nhboP/6E2iwAAAAASUVORK5CYII=";
;// ./src/assets/images/footer/footer_3.png
const footer_3_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAdxJREFUeAHtVE1O20AUfm/GSbxqJyfAvUG4QR2JqCaKVJ+g4QS0J2h7gtITIE4wsDCWIkG8YU24gY/gHXFiz2PGCCVxbGLYwIJPsj2en+97b+Z7A/CBtwbumiClFLYtjglorH8d00cEM/36v1iwc993k1cLBJNJD3NLPhFXIE4hdX3Pi+GlAmEYOgSd6TPkK5E57tdlwurXtX83IDdw2m31s26wVoAAxxsdCEkOuUs82zftjSGOxy8SCIJJb0uQoTvyDqLhYDAjlrmlaEQQ3Ow1FmCstb2fyyW8BpWHLOVUdGy61c0YHs/BMdtCeeYqhYK3uDRRr7Ekh9/63SquygyMIw69/pd0nh6Zb7H3OZ0BWqfc4tMNcsNPeA5NM5AydGzb/rFWWDECRVmmzkajgygMp9q+tG7fKAU88j033ilwGV6bhV+hHloM/yi+vIOcf1/M2QloQ3U6n8ZEeTQcDmblBVZJrqfT3wIp+ruaQ13jJN2aBeHVGOFzUS/ILGOM7vMCVPhblEQT1E+WUYxIhbuCQBMzXBWiqYv1IOoE9CVmyErha0HEf1arwnDGWebSu2cnvt9Pdgrow4z1uwe70IC4WgDZLwXqAlSRukAOe0AodGYC2dNV3Yz4A+8HDx7Dx52iQiMLAAAAAElFTkSuQmCC";
;// ./src/assets/images/footer/footer_4.png
const footer_4_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAa9JREFUeAHtVFFOwkAQndk2FH/UI/QG4g3akJiUfmhPYDmBcgLCCYQTwA1KQrQfROEI3MAeoZ9A2h1ngQJWqNYvY3hJk9fZ3fdmd2YX4IR/DywaHI3GlhDCXC7F0PPsOAwnbQLyecjkL0LAgePYndIGQRBcGtWLgKmlhBZzvDbOoA1Ej/m5bDhwnXoTjkAcClar508bcVagnmak1iHxdYboj8KxBWUMiBdlPEU50wAtKICQ4q6UQR6c5SX8EscMphnRSNR4TzMoxqyUAWlJi9OOVz+It41GvUt0WETFXbc+gCP40kVhGJpSVnwp5FSdLQq8Qkg7UtNjTLjQCPe71Thc0LylqOc40bcGSpzAmMCmz1NIm0KjGFM9WGUrqaPuBFTnq5roiW5qutZfjyWe697MCg1ewrf3jThvnXqgpwOU+oTbKl/kKJu3pxRTmth5k63Bc/jqc7f0M4EFLGxjt5ufYnUp1a3PArsiEz5sKR9FBSpWSXEF0zCkvx/YGiBCLeNLIab7hqXAXXfQgLPuIb8rgNT1HDvaNyxn8HmdnhHu5fxbE0H5I1LvTAwn/Cl8ABWJoE5FUhB1AAAAAElFTkSuQmCC";
;// ./src/assets/images/footer/footer_5.png
const footer_5_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAXtJREFUeAHtlF9OwkAQxmfaJtUn4w3qDeAEUogJLSHaEwAnQE9QegRuACfAhISaGKWewCPQI+iTraE7zhJqaiXpwqPyJU3b2c73m9k/BTjqzwtVP5zPHxu6ofv82ECgSQKfgec4cVVeJaBovGM4ytZZ0O1eRbAvoMK4rJgEBZ1Oa6IEWDw8zYDwBvZX5DpNuxjQdn+HDThMVjmwE5BR5slqYD9FGWQDJYAmNEu2ygk2EEyh2thOk3dPJ62mBEAN/UX4vNqA3GYfAS/KII5NcmMDjEvz9GwFiEM1AKCs/CUHcaiXYjqSIAIapHxPkre73JiQbolonCZYVwIQieHW0GbDKV99E0wGCV+sRXzCwB/GH9yhyO5NU/hKAG61VjCUW29TOfHu4rOxLBrLcfOEZqgZr+xmKQHkAhcNeZqWsvINSF/X3XbzPDeW4zJHrofbbnm/aoUKzUM+0fB9omOevzF3eL19lzso6DoH/CrKCsOlxdMy4oyeivFR/0hfbd7IVop8WSIAAAAASUVORK5CYII=";
;// ./src/assets/images/footer/footer_on1.png
const footer_on1_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAASBJREFUeAHtlM1NhEAYhj9eOHqgAymBBkwAK7ACtQLXgyaedvdkVMxuB9qBHThk17uUgB1sAc58zuzJsDMMkBg12edGeH9gfj6iPb9N0FeYlesLkJptHxjL16ujeR+ftyCbiRgH4YKYz1rWpYrkvLrMN6MLsluRhBFemCh1SBr1qfLqJm9cGXCG34sUEURHuCExGqMdVJCVb6cAhAkgPwkCvBd3YtKroHhcT8HymZhiGgKwsJXs/oFSExoLMPUX0MAv93hBP8z/L4i6Xuo70DCrE5Jkv60hxfqImuMcjyrQbKrrvO4SHD+saibORhXoOZIW5eqJpPywCsLwkNkdbi3Qy1IH38eDGXJwbBVz29u0Jdj1qHOb0EdAXG/3a8+f4wuUBF2b5MJCKAAAAABJRU5ErkJggg==";
;// ./src/assets/images/footer/footer_on2.png
const footer_on2_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAhZJREFUeAHtVc1100AQnh0rZ5QOTAU4BfCsVQogVOBQAfjg8Hgcohx4PCJ4hgoIFUAa8MqhAEQFhAqsCxzAmWF2nbUtWUIGDlwyF+3PzDd/36wAbuR/i9pGaf+FOWDEsSy7wOoDXV0Nsyf6chvboE0hem66Av5+FRIfqKATykrDFqJawCMBO1bAUY1hzkxvJkf67K8cxK8+HgNR0mBVAEO42GAyGd09acLB34EzwCUBSSlo6EAdNuf0k/ZI0X17L3dJnIr+thlEp6aHCj9ZY56TXm+m7Ud1rwI0AtKlhW7WmkFHdSxbQOp74sGixIRxah4hwqFllNe19wz0wEUqvYK2DKKxCXGOMxu9GfVv+/P9dGoz6i0ViYaTx/q138bpdCafkALazYa6aM5gfg3C9HnpNDVRCdxZ4cP1LROdu8V3mZOKYH1aarayhqJ6z9Ag6Jm1frQuc8sKcaBUz9c6O9K5AOalAIje+bWdFcnojtvQZjBlBzvBvesIe3Z645cXb90+EKqyNFMGy9JW6p/Y8zi9GOOCRa6EGEBUdVBqsjTrC0C5jvSD9rKnOq8aejpXjovJqL/bnAFs1rCurn8iZQdqVdulwk5nED0zJRbZuiPW8J437TcmOT41h4CqL5P2lQEHypds8f4U8g39O2TnRbFQFNUtIp5mNQ9f6//AOhRWDViY5YDFETMLs/gcvsFZlugCbuRf5BdOo+XbmF33iAAAAABJRU5ErkJggg==";
;// ./src/assets/images/footer/footer_on3.png
const footer_on3_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAcJJREFUeAHtVEtO40AQfVU4s2HjnADPDeAEuDnB3GAyJ2BYBGk0C8IKCZCAEyBOAFwAt5BYE27gI3gBG4irKNtBxMEOCRtY8DZ2t7veq89rA9/4bNB7B+JBEvJysAlIz5bROGioKifSwYXfctmHBeL9ZJWJz1+IG5DKSJz/51IsKhDvJREHnMwgfxUJZK2tEm6L4s7SzhzkBSJ+xN9WntYw1V5tTcgE4kRlzVb1bJk3FxIoej+9J2K97jvvt93QRNzU53Dj8GZlbgHkmOmMRdA45PgoCWnEtwxNBRRRNYuszDxHyB1zliKcCMmu+uvdJq7GCgpHJP31n/lI/xTPovdQOSOi09JZdXJLUy8wbwWVPYPfExcrBZGXp/zM/O6L72Qi46pMS71aIm13oSbgDq4tUGO0IxXCwCZ+x4Rf8oDjYpOX0ZNHeP/fDacDgrqarjbSiuy+vDKje7VdEg039pMeiMv7wj9KY3RnCqDyd/hmj5GRIM3F3gWYJB5nltmMdtGAqQqQ6dszJshHymX2dVTEJ3KPYz9o/lXUBFTJBtrSpgWJGwUkz7d4CZdmjchIQjCtkFnSuhKaRaMqi/mIv/F18AznOsOGLX6gYgAAAABJRU5ErkJggg==";
;// ./src/assets/images/footer/footer_on4.png
const footer_on4_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAaFJREFUeAHtVMFNw1AMfXaKOMCBEboBMAAo6QLABIQJAAmQOEFPSHAAJiAb0AnaIBboBnSEXOAArY1daGhpUggnhHhSFMv/+z1/2/8D//jzoFmL4Vkn5AB1mUMr3Y+yxsX9CSCxLdXt6wGctA/XmpUFwtPOEi0EtwQN1Yj0UVZ5ITBy3ZtmoKR9sL5TJsCFzsXg0smH8SLXwSLCQnKHauwnRRUBDxqZIuiqoJRgSBJgs5rAlB6W8EMUChAozTcwVpTRxQwIytcLBQY62Ldf5rZysJEeRldaQuL+9ChKUIKpKbKG1S3rWBgpKzaJaHnQ1yYCZETYI/D2R7S25EU9GaTHUe9LgSF5jTt4n3Ppy44TM/HtW7rSlCe0MJ/3xPffuCEqW3aS7kyBxsXdwzu5k11bbRNmE5xuci/f94HMRKLPIrlA47wTg96yGV6uvkRjp/kuelKTVb/1I0feZCLeHdlqpbDZDiuSO+r8jHjckQtY1iu5d4B0XLAKfOoKBbzmNhWJWVc+EROCFWBPzERcbWS0j6KJt8b7QNVL5HEZ/vGr8Ap55Z4AH8GQ8AAAAABJRU5ErkJggg==";
;// ./src/assets/images/footer/footer_on5.png
const footer_on5_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAXxJREFUeAHtlM1xwjAQhVeyciKXdOB0AA0EiQYSKgAqIJmJmcnJcOJALukAKiANgAwNpAQoAk4x2uw6E8KPB0SOgXfxzHr1vrX0ZICL/r2Eb6PuWi1UEAtADUL03eeqk7yY+bF1RwFbxjtCEAmmGSg5GXDIOEdzQNcZt0zfC1B5nQ4B8QFOFH+Rje7MZk3md3pNnbcw3K3kAhy4Km1NAqdYUz+Ca3gBJEI4irQhkKFFAzhinPUtsUpmRS8AChlXepMZg2xk6i51t3sggf1fY1WW13KGIJt+gDSbfLIGKVXDFNoMorQ0+OkW+PRjDMI9Uv0Nl67kBZAqaLIhg+hEBgSrSyVn8iqI3QrmDNw0dgsCIrzLQhB7ASi7xbVhChS9cjY5UrqobreM6b0oBEMp5AfVQi/AiLO8YWh6U8uTM8ihK42fyzdrYwZy7ug8xi1dzRn2sHTP6gBETJdIA99YoL2G4J5v+Hc0sZNEf/hV7IG6NhQK2gJkzcf4ojPSF8lR5MdarHHpAAAAAElFTkSuQmCC";
;// ./src/components/footer/index.jsx














const footer_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	position: fixed;
    width: 100%;
	max-width: 600px;
    bottom: 0px;
	z-index: 99;
	.footer_container {
		background: #fff;
		border-top: 1px solid #E5E5E5;
		span {
			display: inline-block;
			width: 20%;
			text-align: center;
			padding: 5px 0;
			cursor: pointer;
		}
		em {
			display: block;
			font-size: 12px;
    		color: #000;
		}
		.on {
			em {
			    color: #428BC1;
			}
		}
	}
`;
function Footer() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const navigate = (0,react_router_dist/* useNavigate */.Zp)();
  const [tabOn1, setTabOn1] = (0,react.useState)(false);
  const [tabOn2, setTabOn2] = (0,react.useState)(false);
  const [tabOn3, setTabOn3] = (0,react.useState)(false);
  const [tabOn4, setTabOn4] = (0,react.useState)(false);
  const [tabOn5, setTabOn5] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    setTabOn1(false);
    setTabOn2(false);
    setTabOn3(false);
    setTabOn4(false);
    setTabOn5(false);
    const hash = location.hash;
    if (hash === '' || hash === '#/') {
      setTabOn1(true);
    } else if (hash.includes('mining')) {
      setTabOn2(true);
    } else if (hash.includes('finance')) {
      setTabOn3(true);
    } else if (hash.includes('team')) {
      setTabOn4(true);
    } else if (hash.includes('ecology')) {
      setTabOn5(true);
    }
  }, [location.hash]);
  const handleLink = link => {
    navigate(link);
    window.scrollTo(0, 0);
  };
  return /*#__PURE__*/react.createElement(footer_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "footer_container"
  }, /*#__PURE__*/react.createElement("span", {
    className: tabOn1 ? "on" : "",
    onClick: () => {
      handleLink("/");
    }
  }, tabOn1 ? /*#__PURE__*/react.createElement("img", {
    src: footer_on1_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: footer_1_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t("Home"))), /*#__PURE__*/react.createElement("span", {
    className: tabOn2 ? "on" : "",
    onClick: () => {
      handleLink("/mining");
    }
  }, tabOn2 ? /*#__PURE__*/react.createElement("img", {
    src: footer_on2_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: footer_2_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t("Mining"))), /*#__PURE__*/react.createElement("span", {
    className: tabOn3 ? "on" : "",
    onClick: () => {
      handleLink("/finance");
    }
  }, tabOn3 ? /*#__PURE__*/react.createElement("img", {
    src: footer_on3_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: footer_3_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t("Finance"))), /*#__PURE__*/react.createElement("span", {
    className: tabOn4 ? "on" : "",
    onClick: () => {
      handleLink("/team");
    }
  }, tabOn4 ? /*#__PURE__*/react.createElement("img", {
    src: footer_on4_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: footer_4_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t("Team"))), /*#__PURE__*/react.createElement("span", {
    className: tabOn5 ? "on" : "",
    onClick: () => {
      handleLink("/ecology");
    }
  }, tabOn5 ? /*#__PURE__*/react.createElement("img", {
    src: footer_on5_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: footer_5_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t("Ecology")))));
}
/* harmony default export */ const footer = (Footer);
// EXTERNAL MODULE: ./node_modules/antd-mobile/es/components/infinite-scroll/index.js + 3 modules
var infinite_scroll = __webpack_require__(8968);
// EXTERNAL MODULE: ./node_modules/antd-mobile/es/components/list/index.js + 4 modules
var list = __webpack_require__(6009);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 6 modules
var spin = __webpack_require__(4716);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 3 modules
var empty = __webpack_require__(7308);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(3567);
;// ./src/components/modal/assetDetailsModal.jsx










const assetDetailsModal_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.modal_mc_title {
		font-size: 16px;
	}
	.det_conter {
		display: flex;
		align-items: center;
		padding: 0 10px;
		height: 60px;
		border-top: 1px solid #E5E5E5;
		span {
			display: inline-block;
			font-size: 13px;
		}
	}
	.det_scroll {
	    max-height: 400px;
    	overflow-y: scroll;
	}
	.det_wid1 {
		width: 30%;
	}
	.det_wid2 {
		width: 40%;
	}
	.det_wid3 {
	    width: 30%;
		text-align: right;
	}
	.det_cbg {
		height: 40px;
		background: #E9F6FF;
		border-top: 0px;
	}
	.status_1 {
	    color: rgb(55, 178, 112);
	}
	.status_2 {
		color: rgb(235, 43, 75);
	}
	.loadc {
		padding: 16px;
		text-align: center; 
		color: #999;
	}
`;
function AssetDetailsModal(_ref) {
  let {
    modalOpen,
    modalCancel,
    assetsType,
    assetsName,
    assetsSymbol
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    handleAssetsInfo,
    assetsLoading,
    assetsDetailsList
  } = userLayout();
  const [lastId, setLastId] = (0,react.useState)("");
  const [date, setDate] = (0,react.useState)("");
  const [hasMore, setHasMore] = (0,react.useState)(true);
  const [isLoadingMore, setIsLoadingMore] = (0,react.useState)(false);

  // 使用 ref 来跟踪是否已经加载过第一页
  const isInitialized = (0,react.useRef)(false);
  const requestInProgress = (0,react.useRef)(false);

  // 当 modal 打开且资产类型变化时，重置状态并加载第一页
  (0,react.useEffect)(() => {
    if (modalOpen && assetsType !== undefined && assetsType !== null && !isInitialized.current) {
      isInitialized.current = true;
      requestInProgress.current = true;

      // 重置状态
      setLastId("");
      setDate("");
      setHasMore(true);

      // 加载第一页数据
      handleAssetsInfo(assetsType, "", "").finally(() => {
        requestInProgress.current = false;
      });
    }

    // 当 modal 关闭时重置初始化状态
    if (!modalOpen) {
      isInitialized.current = false;
    }
  }, [modalOpen, assetsType]);
  (0,react.useEffect)(() => {
    // 如果没有数据或者正在加载第一页，不处理
    if (!assetsDetailsList || requestInProgress.current) return;

    // 处理数据更新
    if (assetsDetailsList.length > 0) {
      // 获取最后一条数据
      const lastItem = assetsDetailsList[assetsDetailsList.length - 1];

      // 更新 lastId 和 date 供下次加载使用
      setLastId((lastItem == null ? void 0 : lastItem.id) || "");
      setDate((lastItem == null ? void 0 : lastItem.date) || "");

      // 判断是否还有更多数据
      setHasMore(assetsDetailsList.length % 10 === 0);
      setIsLoadingMore(false);
    } else if (assetsDetailsList.length === 0) {
      // 如果加载后数据为空，说明没有更多
      setHasMore(false);
      setIsLoadingMore(false);
    }
  }, [assetsDetailsList]);
  const loadMore = async () => {
    // 防止重复加载
    if (!hasMore || assetsLoading || isLoadingMore || requestInProgress.current) return;
    setIsLoadingMore(true);
    requestInProgress.current = true;
    try {
      // 使用当前的 lastId 和 date 加载下一页
      await handleAssetsInfo(assetsType, lastId, date);
    } catch (error) {
      console.log("error===>", error);
      setHasMore(false);
    } finally {
      requestInProgress.current = false;
    }
  };

  // 自定义加载中提示
  // const renderLoading = () => (
  // 	<div className='loadc'>
  // 		<span>{t("Loading...")}</span>
  // 	</div>
  // );

  // // 自定义无更多数据提示
  // const renderNoMore = () => (
  // 	<div className='loadc'>
  // 		<span>—— 已经到底了 ——</span>
  // 	</div>
  // );

  // 判断是否显示空状态
  const showEmpty = !assetsLoading && (!assetsDetailsList || assetsDetailsList.length === 0) && isInitialized.current;

  // console.log("assetsDetailsList===>", assetsDetailsList)

  return /*#__PURE__*/react.createElement(modal/* default */.A, {
    centered: true,
    open: modalOpen,
    onCancel: () => modalCancel(false)
  }, /*#__PURE__*/react.createElement(assetDetailsModal_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "modal_title modal_mc_title"
  }, t(assetsName), t('Asset Details')), /*#__PURE__*/react.createElement("div", {
    className: "det_conter det_cbg"
  }, /*#__PURE__*/react.createElement("span", {
    className: "det_wid1"
  }, t("Type")), /*#__PURE__*/react.createElement("span", {
    className: "det_wid2"
  }, t("Time")), /*#__PURE__*/react.createElement("span", {
    className: "det_wid3"
  }, t("Quantity"), "(", assetsSymbol, ")")), assetsLoading && !(assetsDetailsList != null && assetsDetailsList.length) && /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(spin/* default */.A, {
    indicator: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.A, {
      style: {
        fontSize: 48,
        color: "#FBBD15"
      },
      spin: true
    })
  })), assetsDetailsList && assetsDetailsList.length > 0 && /*#__PURE__*/react.createElement("div", {
    className: "det_scroll"
  }, /*#__PURE__*/react.createElement(list/* default */.A, null, assetsDetailsList.map((item, index) => /*#__PURE__*/react.createElement("div", {
    key: index,
    className: "det_conter"
  }, (item == null ? void 0 : item.businessType) === 1 ? /*#__PURE__*/react.createElement("span", {
    className: "det_wid1"
  }, t("Airdrop")) : (item == null ? void 0 : item.businessType) === 2 ? /*#__PURE__*/react.createElement("span", {
    className: "det_wid1"
  }, t("Transfer")) : (item == null ? void 0 : item.businessType) === 3 ? /*#__PURE__*/react.createElement("span", {
    className: "det_wid1"
  }, t("Team Incentives")) : (item == null ? void 0 : item.businessType) === 4 ? /*#__PURE__*/react.createElement("span", {
    className: "det_wid1"
  }, t("NFT Rewards")) : (item == null ? void 0 : item.businessType) === 5 ? /*#__PURE__*/react.createElement("span", {
    className: "det_wid1"
  }, t("Daily Rewards")) : (item == null ? void 0 : item.businessType) === 6 ? /*#__PURE__*/react.createElement("span", {
    className: "det_wid1"
  }, t("Electricity Profit")) : (item == null ? void 0 : item.businessType) === 7 ? /*#__PURE__*/react.createElement("span", {
    className: "det_wid1"
  }, t("Withdraws")) : (item == null ? void 0 : item.businessType) === 8 ? /*#__PURE__*/react.createElement("span", {
    className: "det_wid1"
  }, t("Dividend")) : /*#__PURE__*/react.createElement("span", {
    className: "det_wid1"
  }, t("Unknown")), /*#__PURE__*/react.createElement("span", {
    className: "det_wid2"
  }, formatTimestamp(item == null ? void 0 : item.createTime, "YYYY-MM-DD")), (item == null ? void 0 : item.changeType) === 1 ? /*#__PURE__*/react.createElement("span", {
    className: "det_wid3 status_1"
  }, "+", item != null && item.value ? parseNumber(item == null ? void 0 : item.value, 6) : '0') : /*#__PURE__*/react.createElement("span", {
    className: "det_wid3 status_2"
  }, item != null && item.value ? parseNumber(item == null ? void 0 : item.value, 6) : '0.000')))), /*#__PURE__*/react.createElement(infinite_scroll/* default */.A, {
    loadMore: loadMore,
    hasMore: hasMore,
    threshold: 100
    // renderLoading={renderLoading}
    // renderNoMore={renderNoMore}
  })), showEmpty && /*#__PURE__*/react.createElement("div", {
    style: {
      padding: '40px 0'
    }
  }, /*#__PURE__*/react.createElement(empty/* default */.A, {
    description: t("No Data")
  }))));
}
/* harmony default export */ const assetDetailsModal = (AssetDetailsModal);
;// ./src/components/modal/withdrawsDetailsModal.jsx







const withdrawsDetailsModal_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.modal_mc_title {
		font-size: 16px;
	}
	.det_conter {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 10px;
		height: 60px;
		border-top: 1px solid #E5E5E5;
		span {
			display: inline-block;
			font-size: 13px;
		}
	}
	.det_scroll {
	    max-height: 400px;
    	overflow-y: scroll;
	}
	.det_cbg {
		height: 40px;
		background: #E9F6FF;
		border-top: 0px;
	}
	.number_1 {
	    color: rgb(55, 178, 112);
	}
	.number_2 {
		color: rgb(235, 43, 75);
	}
	.status_0 {
		background: #428BC1;
		border-radius: 6px;
		color: #fff;
		padding: 0 5px;
		cursor: pointer;
	}
	.status_1 {
		padding: 0 5px;
	}
`;
function WithdrawsDetailsModal(_ref) {
  let {
    modalOpen,
    modalCancel,
    assetsType,
    assetsName,
    assetsSymbol
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    handleAssetsWithdraw,
    withdrawsLoading,
    withdrawsDetailsList,
    signWithdraw
  } = userLayout();
  (0,react.useEffect)(() => {
    handleAssetsWithdraw(assetsType);
  }, [assetsType]);
  return /*#__PURE__*/react.createElement(modal/* default */.A, {
    centered: true,
    open: modalOpen,
    onCancel: () => modalCancel(false)
  }, /*#__PURE__*/react.createElement(withdrawsDetailsModal_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "modal_title modal_mc_title"
  }, t(assetsName), t('Withdraws Details')), /*#__PURE__*/react.createElement("div", {
    className: "det_conter det_cbg"
  }, /*#__PURE__*/react.createElement("span", null, t("Quantity"), "(", assetsSymbol, ")"), /*#__PURE__*/react.createElement("span", null, t("Status"))), /*#__PURE__*/react.createElement("div", {
    className: "det_scroll"
  }, !withdrawsLoading ? /*#__PURE__*/react.createElement("div", null, withdrawsDetailsList.length > 0 ? withdrawsDetailsList.map((item, index) => /*#__PURE__*/react.createElement("div", {
    key: index,
    className: "det_conter"
  }, (item == null ? void 0 : item.status) === 0 ? /*#__PURE__*/react.createElement("span", {
    className: "number_2"
  }, item != null && item.amount ? parseNumber(item == null ? void 0 : item.amount, 6) : '0') : /*#__PURE__*/react.createElement("span", {
    className: "number_1"
  }, item != null && item.amount ? parseNumber(item == null ? void 0 : item.amount, 6) : '0'),
  // 0:待提现；1:已完成；2:已完成
  (item == null ? void 0 : item.status) === 0 ? /*#__PURE__*/react.createElement("span", {
    className: "status_0",
    onClick: () => {
      signWithdraw(assetsType);
    }
  }, t("Pending Withdrawal")) : /*#__PURE__*/react.createElement("span", {
    className: "status_1"
  }, t("Withdrawn")))) : /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(empty/* default */.A, {
    description: t("No Data")
  }))) : /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(spin/* default */.A, {
    indicator: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.A, {
      style: {
        fontSize: 48,
        color: "#FBBD15"
      },
      spin: true
    })
  })))));
}
/* harmony default export */ const withdrawsDetailsModal = (WithdrawsDetailsModal);
;// ./src/components/index/assets.jsx








const assets_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
    width: 90%;
    margin: auto;
	padding-top: 30px;
	padding-bottom: 20px;
	.ass_conter {
		background: #F2F3F5;
		border-radius: 15px;
		margin-bottom: 15px;
		padding: 20px;
	}
	.ass_title {
	    display: flex;
    	justify-content: space-between;
		border-bottom: 1px solid #DDDDDD;
		padding-bottom: 10px;
		span {
			font-size: 13px;
			color: #333333;
			font-weight: bold;
		}
		em {
			font-size: 12px;
			color: #428BC1;
			margin-left: 10px;
			cursor: pointer;
		}
	}
	.ass_income {
		display: flex;
		justify-content: space-between;
		margin: 20px 0;
		span {
			display: block;
			width: 40%;
    		text-align: center;
		}
		i {
		    display: block;
			font-size: 18px;
			font-weight: bold;
			padding-bottom: 5px;
		}
		em {
			display: block;
			font-size: 12px;
    		color: #333333;
		}
	}
	.ass_withdraws {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		background: #428BC1;
		border-radius: 6px;
		color: #fff;
		cursor: pointer;
	}
`;
function Assets() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    assets3List,
    assets2List,
    assets0List,
    assets1List,
    signWithdraw,
    isWithdrawsLoading,
    withdrawsOpen,
    setWithdrawsOpen
  } = userLayout();
  const [withdrawsDetailsOpenModal, setWithdrawsDetailsOpenModal] = (0,react.useState)(false);
  const [assetDetailsOpenModal, setAssetDetailsOpenModal] = (0,react.useState)(false);
  const [assetsType, setAssetsType] = (0,react.useState)();
  const [assetsName, setAssetsName] = (0,react.useState)();
  const [assetsSymbol, setAssetsSymbol] = (0,react.useState)();

  // 提取明细
  const handleWithdrawsDetails = async (type, name, symbol) => {
    setWithdrawsOpen(true);
    setWithdrawsDetailsOpenModal(true);
    setAssetsType(type);
    setAssetsName(name);
    setAssetsSymbol(symbol);
  };

  // 资产明细
  const handleAssetsDetails = async (type, name, symbol) => {
    setAssetDetailsOpenModal(true);
    setAssetsType(type);
    setAssetsName(name);
    setAssetsSymbol(symbol);
  };
  return /*#__PURE__*/react.createElement(assets_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "ass_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "ass_title"
  }, /*#__PURE__*/react.createElement("span", null, t("Daily Rewards"), "(BTZK)"), /*#__PURE__*/react.createElement("i", null, /*#__PURE__*/react.createElement("em", {
    onClick: () => {
      handleWithdrawsDetails(3, "Daily Rewards", "BTZK");
    }
  }, t("Withdraws Details")), /*#__PURE__*/react.createElement("em", {
    onClick: () => {
      handleAssetsDetails(3, "Daily Rewards", "BTZK");
    }
  }, t("Asset Details")))), /*#__PURE__*/react.createElement("div", {
    className: "ass_income"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("i", null, assets3List != null && assets3List.value ? parseNumber(assets3List.value, 6) : '0'), /*#__PURE__*/react.createElement("em", null, t("Pending income"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("i", null, assets3List != null && assets3List.total ? parseNumber(assets3List.total, 6) : '0'), /*#__PURE__*/react.createElement("em", null, t("Cumulative Return")))), /*#__PURE__*/react.createElement("div", {
    className: "ass_withdraws",
    onClick: () => {
      signWithdraw(3);
    }
  }, !isWithdrawsLoading[3] && /*#__PURE__*/react.createElement("span", null, t("Withdraws")), isWithdrawsLoading[3] && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t("Withdraws"))))), /*#__PURE__*/react.createElement("div", {
    className: "ass_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "ass_title"
  }, /*#__PURE__*/react.createElement("span", null, t("Team Rewards"), "(BNB)"), /*#__PURE__*/react.createElement("i", null, /*#__PURE__*/react.createElement("em", {
    onClick: () => {
      handleWithdrawsDetails(2, "Team Rewards", "BNB");
    }
  }, t("Withdraws Details")), /*#__PURE__*/react.createElement("em", {
    onClick: () => {
      handleAssetsDetails(2, "Team Rewards", "BNB");
    }
  }, t("Asset Details")))), /*#__PURE__*/react.createElement("div", {
    className: "ass_income"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("i", null, assets2List != null && assets2List.value ? parseNumber(assets2List.value, 6) : '0'), /*#__PURE__*/react.createElement("em", null, t("Pending income"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("i", null, assets2List != null && assets2List.total ? parseNumber(assets2List.total, 6) : '0'), /*#__PURE__*/react.createElement("em", null, t("Cumulative Return")))), /*#__PURE__*/react.createElement("div", {
    className: "ass_withdraws",
    onClick: () => {
      signWithdraw(2);
    }
  }, !isWithdrawsLoading[2] && /*#__PURE__*/react.createElement("span", null, t("Withdraws")), isWithdrawsLoading[2] && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t("Withdraws"))))), assets0List && /*#__PURE__*/react.createElement("div", {
    className: "ass_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "ass_title"
  }, /*#__PURE__*/react.createElement("span", null, t("NFT Rewards"), "(BNB)"), /*#__PURE__*/react.createElement("i", null, /*#__PURE__*/react.createElement("em", {
    onClick: () => {
      handleWithdrawsDetails(0, "NFT Rewards", "BNB");
    }
  }, t("Withdraws Details")), /*#__PURE__*/react.createElement("em", {
    onClick: () => {
      handleAssetsDetails(0, "NFT Rewards", "BNB");
    }
  }, t("Asset Details")))), /*#__PURE__*/react.createElement("div", {
    className: "ass_income"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("i", null, assets0List != null && assets0List.value ? parseNumber(assets0List.value, 6) : '0'), /*#__PURE__*/react.createElement("em", null, t("Pending income"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("i", null, assets0List != null && assets0List.total ? parseNumber(assets0List.total, 6) : '0'), /*#__PURE__*/react.createElement("em", null, t("Cumulative Return")))), /*#__PURE__*/react.createElement("div", {
    className: "ass_withdraws",
    onClick: () => {
      signWithdraw(0);
    }
  }, !isWithdrawsLoading[0] && /*#__PURE__*/react.createElement("span", null, t("Withdraws")), isWithdrawsLoading[0] && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t("Withdraws"))))), assets1List && /*#__PURE__*/react.createElement("div", {
    className: "ass_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "ass_title"
  }, /*#__PURE__*/react.createElement("span", null, t("Electricity Profit"), "(USDT)"), /*#__PURE__*/react.createElement("i", null, /*#__PURE__*/react.createElement("em", {
    onClick: () => {
      handleWithdrawsDetails(1, "Electricity Profit", "USDT");
    }
  }, t("Withdraws Details")), /*#__PURE__*/react.createElement("em", {
    onClick: () => {
      handleAssetsDetails(1, "Electricity Profit", "USDT");
    }
  }, t("Asset Details")))), /*#__PURE__*/react.createElement("div", {
    className: "ass_income"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("i", null, assets1List != null && assets1List.value ? parseNumber(assets1List.value, 6) : '0'), /*#__PURE__*/react.createElement("em", null, t("Pending income"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("i", null, assets1List != null && assets1List.total ? parseNumber(assets1List.total, 6) : '0'), /*#__PURE__*/react.createElement("em", null, t("Cumulative Return")))), /*#__PURE__*/react.createElement("div", {
    className: "ass_withdraws",
    onClick: () => {
      signWithdraw(1);
    }
  }, !isWithdrawsLoading[1] && /*#__PURE__*/react.createElement("span", null, t("Withdraws")), isWithdrawsLoading[1] && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t("Withdraws"))))), withdrawsOpen && withdrawsDetailsOpenModal && /*#__PURE__*/react.createElement(withdrawsDetailsModal, {
    modalOpen: withdrawsDetailsOpenModal,
    modalCancel: () => setWithdrawsDetailsOpenModal(false),
    assetsType: assetsType,
    assetsName: assetsName,
    assetsSymbol: assetsSymbol
  }), assetDetailsOpenModal && /*#__PURE__*/react.createElement(assetDetailsModal, {
    modalOpen: assetDetailsOpenModal,
    modalCancel: () => setAssetDetailsOpenModal(false),
    assetsType: assetsType,
    assetsName: assetsName,
    assetsSymbol: assetsSymbol
  }));
}
/* harmony default export */ const assets = (Assets);
;// ./src/assets/images/home1_bg.jpg
const home1_bg_namespaceObject = __webpack_require__.p + "acc97c1520652446e3c3.jpg";
;// ./src/components/index/comm1.jsx






const comm1_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	background: url(${home1_bg_namespaceObject}) no-repeat center bottom;
	padding-top: 60px;
    padding-bottom: 30px;
	.comm1_conts {
		width: 70%;
		margin: auto;
		text-align: center;
		span {
			display: block;
			color: #fff;
			font-size: 28px;
    		font-weight: bold;
			line-height: 25px;
		}
		em {
			display: block;
			width: 90%;
			margin: auto;
			padding-top: 20px;
			color: #fff;
			font-size: 12px;
			line-height: 18px;
		}
	}
	.comm1_assets_conter {
		width: 92%;
		margin: auto;
		max-width: 460px;
		border-radius: 13px;
		color: #333;
		padding: 30px 15px 18px;
		margin-top: 30px;
		text-align: center;
	}
	.comm1_assets_title {
		font-size: 14px;
	}
	.comm1_assets_number {
	    font-size: 40px;
    	font-weight: bold;
		padding: 5px 0;
	}
	.comm1_miners_conter {
		display: flex;
    	gap: 10px;
		span {
			display: block;
			width: 50%;
			border-radius: 4px;
			padding: 12px 0;
			color: #fff;
			font-size: 14px;
			font-weight: bold;
			cursor: pointer;
		}
	}
	.comm1_miners_buy {
		background: #F09700;
	}
	.comm1_miners_renew {
		background: #fff !important;
    	color: #06406A !important;
	}
`;
function Comm1() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    miningRemainingTotal,
    miningFeeTotal
  } = useMiningLayout();
  const navigate = (0,react_router_dist/* useNavigate */.Zp)();
  const handleLink = link => {
    // 获取当前 URL 中的查询参数（如 utm_source）
    const currentParams = new URLSearchParams(window.location.search);
    const utmSource = currentParams.get('utm_source');

    // 构建新的路由
    let newPath = link;

    // 如果 link 中包含查询参数，需要正确处理
    if (link.includes('?')) {
      // 分离路径和参数
      const [path, params] = link.split('?');
      const linkParams = new URLSearchParams(params);

      // 如果存在 utm_source，保留它
      if (utmSource) {
        linkParams.set('utm_source', utmSource);
      }

      // 重新构建 URL
      newPath = `${path}?${linkParams.toString()}`;
    } else {
      // 如果没有参数，直接添加 utm_source
      newPath = utmSource ? `${link}?utm_source=${utmSource}` : link;
    }
    navigate(newPath);
    window.scrollTo(0, 0);
  };
  return /*#__PURE__*/react.createElement(comm1_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm1_conts"
  }, /*#__PURE__*/react.createElement("span", null, t("From Bitcoin to Layer 2 revolution!")), /*#__PURE__*/react.createElement("em", null, t("BTC Rollup Network BTCS carries Bitcoin's original vision — not just a store of value, but the foundational operating system for the global economy."))), /*#__PURE__*/react.createElement("div", {
    className: "comm1_assets_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm1_miners_conter"
  }, /*#__PURE__*/react.createElement("span", {
    className: "comm1_miners_buy",
    onClick: () => {
      handleLink("/mining?id=3");
    }
  }, t("Buy Miners"), /*#__PURE__*/react.createElement("i", null, "(", miningRemainingTotal, ")")), /*#__PURE__*/react.createElement("span", {
    className: "comm1_miners_renew",
    onClick: () => {
      handleLink("/mining?id=2");
    }
  }, t("Renew Miners"), /*#__PURE__*/react.createElement("i", null, "(", miningFeeTotal, ")")))));
}
/* harmony default export */ const comm1 = (Comm1);
;// ./src/assets/images/home2_ico.jpg
const home2_ico_namespaceObject = __webpack_require__.p + "89e01e8bca26e1cc950d.jpg";
;// ./src/components/index/comm2.jsx




const comm2_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	background: #F8F8F8;
	color: #333;
	.comm2_conter {
		width: 90%;
		margin: auto;
	}
	.comm2_ico {
		img {
		    width: 100%;
    		border-radius: 12px;
			padding: 50px 0px 30px;
		}
	}
	.comm2_descont {
		padding-bottom: 60px;
		span {
			display: block;
			font-size: 30px;
			font-weight: bold;
			line-height: 35px;
			margin-bottom: 20px;
		}
		em {
			display: block;
			font-size: 13px;
    		line-height: 18px;
		}
	}
`;
function Comm2() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(comm2_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm2_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm2_ico"
  }, /*#__PURE__*/react.createElement("img", {
    src: home2_ico_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm2_descont"
  }, /*#__PURE__*/react.createElement("span", null, t("BTC Rollup Network"), " ", /*#__PURE__*/react.createElement("br", null), t("BTCS and Satoshi Nakamoto's block born synchronously")), /*#__PURE__*/react.createElement("em", null, t("On January 3, 2009 at 18:15:05 UTC, Satoshi Nakamoto mined the Bitcoin genesis block, ushering in a new era of decentralization and free circulation.")), /*#__PURE__*/react.createElement("em", null, t("BTCS was also born at this historical moment, sharing the same block and starting point as Bitcoin, inheriting its decentralized spirit. Since then, BTCS has rooted itself in the legendary origin, paying tribute to its original intention and moving towards the future of blockchain.")))));
}
/* harmony default export */ const comm2 = (Comm2);
;// ./src/assets/images/home3_ico1.png
const home3_ico1_namespaceObject = "data:image/png;base64,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";
;// ./src/assets/images/home3_ico2.png
const home3_ico2_namespaceObject = "data:image/png;base64,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";
;// ./src/assets/images/home3_ico3.png
const home3_ico3_namespaceObject = "data:image/png;base64,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";
;// ./src/assets/images/home3_ico4.png
const home3_ico4_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACuCAYAAACvDDbuAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAFV5JREFUeAHtnVuMFFd6x/+nucwMw2VmGDAQE5rr+oIx4zVgR1HosTeOtVa09kO0G2klD7k+5GEhz5EMD/tsrCRSklWy4ChKlCgxipRkN5uF8Ua7gO21Bwbw7hozzRqDPTDMDMzAAIbe8506p+pUdfW9urvq1PlJZ6qru6a7quvfX/3Pdy7FYKmKQqGQ5Qu9rJMvqXWiR5YwpkJKnpdpuRSFMZaHpSIMFh9coCS87bI8KZdZlBZk1JCgR+Tybfl4hAt6ChaX1AtXCjXHy2653I54QgIehiPm4bQLOZXC5WLNwRNqDslkGI6Ij3ARjyBlpEa4Uqxf42UIrbvst4o8HCEf5iIeRgowWrjSBnyLl70wT6ylyPNyCI6I8zAUI4Uro+trSK4NiIphOAI+BMMwRrgpja7VkuflAJxKXR4GkHjhWsHWRJ6XI7y8kXQBJ1a4VrANcxAJFnDihGsFGyl5Xg5x8R5AwkiUcLloh+BUurKwREmelwNJqsQlQrhcsNSa9TpslqDZUEPGK0mwDxnEGLIFvJBgP4AVbSugADHGv/PXEHNiG3FlLva7sLagXeR52RPXlrjYRVwtyh6DFW07yfJyLK7RN1YRV/Z5fQvx7aGVVvK8DMbJ+8Ym4nLRUoqLvKwVbfzI8vIBP0d7ERPaHnFlXpYuR7H5UixlOcgj7z60mbYK11qDxJJHm61D24Qrc7Mk2iwsSSSPNoq3LR6Xi/ZV2KxB0snC8b0vow20XLiyEnYItp+BCdA5fKsdKbOWClce4EFYTGN/q8XbMo8rD2w/LCazv1U9zVoiXCvaVNES8TZduFa0qaTp4m2qcK1oU01Txds04VrRWjj7uHibUhlvinBlbu8tWCzAEBfvYURM5MKVzbjUWcbmaS0EzXE2GPU0UZHmcaVoqUXMitaiUI0UWURIpBGX79wYbDOuJRyKuINRzTIZWcSVoxaysFjCoU5VkbWuRSJc2f/A9qe1VGJvVJ3RG7YKtjJmqRGyCgONdoeMIuLaypilFlRlrSHNNCRc2ciQhcVSGw373bqtgpz34BgslvoZrHfehkaEa1NflkbJw/G7NafI6rIK1iJYIiKLOi1DzRFXZhHGYLFEx0CtTcL1RFzbecYSNa/XuH1twpXz09o5ECxRk5PaqpqarIKtkFmaSB41VNSqjri2QmZpMlnU0G2gqoirdVfMwlIVs7e/wPHT4xifuI2VfV3YtqVXLC1loWi7vpqoOx/VQZ1osrCUZXxiDj848SlGP5rk5XrR609s7sOzT67ky15seHgJLEVQMzBF3f2VNqwYcW36qzwk0uOnPseJ01fxOY+u1fLQ8i48u20lnpFCtrhUFXWrES6lKmyXRQlZgAuXbgqx/vDkFczculd2e34C3Mf8uxTrtNQhEZN4lZAt4g5A+8ttUFa41ts6CL96alyU0fOTmK0g1kboXrQAT2zqFZZi25Y+7os7kUIqRt1Kwh2CcwOR1EF+lSpXJ3g5zf2q80U5fwsoyDXmexyEXmPa/wQfq/9VhG1Lkfj5XWvSKOKyUbeScFOVt6VoSpUqp3I1KZ5zrvTO5Z3JJ/RLvbACBUeCvi9TbqdbA3q9EPhM/Tn5Vv7/kRvQGlXoKBo//8wabPg14yt3U/x7KGn+Swo3LdH2DBcrVaz+753L3AJ84YiHXihSYgBXbdo6C1kG/4dV+d5h22nrFH2f2NSHr+xaja2bjK3clez2WE645G1zMAzyqydHr/LoOoUTo+NivS4qia9ZhHxud9d87HpiBZ7lhURM64YwzIU7GPZC6FdvWgqMxPnDd67g5JmrGLs8IyKrUIC6NheFNTjPMf8qfNmAohcDn8qEgFb2dvLPvFniMwBfyHbDvdqmRLgNXffel8T73I7VeH7nahhAb1glrZRw9yPCocTtZHxyDn/x1++LpUfgmi49JGN+MToetfg9ldaZ/P9CwfPC3Z3zRPTbuqFHLEm89MM5wyM8/XBOnrnG1+955lV7T/2zxLraS/m8a2HUHjL9f733U78vshPf/rOnxI8nwYRW0koJ15hK2Z9++zg+10QbZkP1pbONFCTgBkJFUdwr0KV6AY9wD2HXVi7YjZXHAJ75eApH372Cs3xJ+1YqjhbK2BEWtj2KrXF2zWK8/uc7kGBCK2lFZkiOJcvCAN7h0W18+o6vEQAy1cQC64S+FVOXbZ9wCq6ot27sxeM8qpJQqxGrjv4/ZF0oCtO+jl2Z8e+Xu1LaTLOQx/p75K/M4uyFKbGvCYVukZsLVtLCXPyrMISxz2adk++7pmbca64r16JrtHyFOdtBbvf4+h7sfLyfR9b+yC6/63lEpPKNF7LCzlA0PvbeZzg7Nl20P+5jfentqLeNek4+pPdMsHAJmv1zWH8iTLg5GENBRlt5AVUnmLl/9E2dp9xIS351Pr/UdmPwyw8JwdJ6M6Efw3NPrxKFREyR8uSZCZwbm8Ls3H3PF7vHwTQTHKhUFr2eaCiY+rod+M6EvGleFoYgRMtYoNUrsI32gF4jcQqhPrZc+MNmi7UUJOKVX17F92WVWH/nHLcT5yaEmK9O3vGOw/0tyuNjwYaQckYjMRTZheBZacvN1poGiTYQbTIMRS1fK3o6hFB3PNrPL6nLEEd2PtYvCnH2wjTe/fAaTnIhk4j1Q/Qqds4lxL3gJJ8cNLsQFO5uGAbLeCkvZRE8p8Dw0m+swdBXNyBJ0I+LytBLG/GvR3+Jfzt60X3N6QOhXI/sD5F8q0D4tOkKV87llINBMOblVz21+k9ku6xAVCiBQkvoMXW8tCgwQ3QrBlT2qMYIfcxZDsbBRMRVxUkgFD+XZJi0Q4xpjzPOlYa5VskM5ULTqNHC9SrfzoOMEqu3RZEHThwM3g9Q/SiVYJkSMEwhpx7o10nj/C2RycjfppY+YLrXTToMrkjVE6rdz5Aj1HE1KoQr/a1xE33oJ5SFtjEh+RGXYJQtycg6qOZz1cvmhNztyucqq2Dm7DTqUhlWmEEeVx1HJuDhDTnGAEKr5guXscASXgXGkGgLX8WMFT02DKFV5XGN9LdeJkxWzgJda8TLCT+xKh3mHGvxCGIvXWYMT9IfJVwz7+GgLpWBvii0Speact0GE4OWQUAhUFFzWyJgEr6Ia6RV0NNCvufd15H4VBFT6TCxEnwRJpKlP/PlMB1j75rDgg35RUNjEh9y/a2DPqegRgobpWDqcLOOIm4WpqIiqjqxUPlNbz35WQX47BB5IG/Yj1GdbHTWGy1ccb60lrJgRaUAM6KRboeEfw9cZAzMLGQNj7jMrXGHjc81o+WMyV5gDk63TfkSjEUI19y7QrqX0UKgczXTW0gTDdPyuEqxrnVg2jZmITzuOhiK6jVV7swZYRVcoTJ/ykT1QzYQoyNud8c8flIzQKH47KmANHHzLpLMrbsPQlN+Ds7zSe9zHILZVqGLC1fUrTPeBHQE6Vj3gknm9t378vjgGwCss6hzHgzDbOEu6pjvDZiUKTEtMyaem7jZvLluW8HEzD2t5awQ6G9MFLB8yUKYhtHC7V+6QDuR3gnNaG36dOKTzK07D+CNTArzC0bmFnqMFi5FmiL/5/ZbcJ68nnDhfkpTOOkNEArtmNf2G3e3n566bkKdFBZxjyv8XbDbX6Ak1S58cm0u/Li0Phrd3C4t6jDO48Jo4RL9SxdqAwqZT8Sqq8IvrswiiUzM3HX7F3vjyzzx0qiItf1mTr9vvHDpMukNJoQ32leLTp9cn0MS+eizW27u1s1HM63ws7t8qXkVM8J84S7vFLmEosso4Ean8wmNuB/x/S41JEk9XrvczLtZGpeZDrJ5zWJ+Esf9TwYq2pcm7/J86AN0LUzO75iyIbTfRS1/zN8LY8uabpgInamq7ladVNb2dYjKieo0rrft6173+PlkfQ1kE/Rj8iY48Y6JKqYP8+M3kCnjhUtsWd0tmn6LZrXJOIUmChn95QySxGnaXyVUatZ2RczcY9qyysxoCylc49m8uqsoyqropMpH47eFXUgClHs+fWlGNKSomWoyqoVQO65tv74YhiKEm4fhPLOxx+slpgk4k/Hm3KLHx342iSRAPzJfU7b2mGnHtGXVIhiKEO5FGA5Vujbzk6hfSpmWHlP1m9FLybAL/3P6WsDbKtvjXU3oePsWL4ChTKfCKhDb1i7W0kQZLTXmed/LU3dxnkezOHPywg1M3nrgPxbdAskIvGvjUhhMPhVWgdi1YZnT9BlsZdIe08r3Rq8jzrybv1nU+ufahoz3g9z8kLE2gUiHxyXILmziJ9OXNsqIWo1z4qVlOH9tLrZRd/TTWZy/OqdVwKAdg9c5bNeGpejrNjpFn56IS+zesiwknws396n87vfPxrOSdmRkQvO28GUU9KbsneuNv7N6uoS7aWWXuIQWTw6n5UB5+ZhH3R/9YhpxgizCpLi7OysqunWg46PjNJwx/mNleaSgEULxO4/1uuHWJ17mb/P/3w+nhFDiAO0H7U/Zfgmy7Mgam7tV0C1SL6qsQh4pYeOKTh6VukTeVl5nA5U1p9y+X8C/vHcNceD79CO6fb842gb63vZ1L8COdcbbhBH6o4R7CinihUd7tCZSQO+bC837XpiYw/9/fAPthD7/PWre1fLOwX1VVuEbT/cjBQgPp4Q7ghSxsb8Tm1Z0hUcwPYrxxz/4+TQuT7dnCDtZhP8cnfTtFxE2imPHusXiuFLAMP1JpXCJrz+1XKTIwoa86I/nvijg8LvXWu536fP+5ifjxfuVYaEVtBceMXdCogA+q5A64fYumi9ONtMutV7LE9z7KdDjKe4v3+R+l0TcCuhz3uQ/lqm5+wgOM/KyH94+//aXlonjSQmecJlzt77Uifc3Nyzhl1dVUYMsTNxiyrEKTvdAWl65eQ9/e3wcreDv+OfQ56l8rb+lTP24nDQeNTSQcFPCCAu5s+TbSCG/t70XnQvmiUtwxtdXN3g5zggx/eNPJ5oWeUWk5e9/mUYda90Tg+kv1drXxff7T55dgRThalQX7jBSSG/XfPzu4z2+aOZP7jM3ItP6ufE5fOfEVWEfooRES+/7IX//TMbfaSbMe9Nj2m/a/xQxrB4w9UDepC8ZHVKbwH/9bBo/vjjrTGPE1HyzNNuh+orUpFzOmK7ezgz+eOcK9HQ1PmcB5Wi/Q57WVwFkvoU7S5+cHOy5jUvwlU3G52yD9BZZBfnEMFLKS48sw4a+Dq8DCyDsgRriA7ffrrOcuvMAf3n8Kt6/fAuNQBH2r/j7TM/dDx9apPdNkBaG9jOFoh1WoiWC/XFT6XMV3xzoFZdepiX6Q5uFZRdCmrbrP85O479/fqNm30vb0//906lJ3Llf0FtD4I3OYIFKGRP7982BPqQQnzaZvsLtQo4vjiHFUArq7396HZNzmocNzMOvX73VzdJ6uWV4bsNiDKyu3MFlbPIu/v3cFPfJzhg30qUzB5+aK9T7LH3e0J6ODP7o6eXoMW/a0GoY4D9cN/PFgq9y8ZLPTU02Owwh3vevi6VAzfbtriiCzzE82t+Br25ZEiqu/NRdHL0wi7Ep2RLnu1mDfiqkoVW3z+HQ+/3hU31pFW2ei3a9/kSYcA/yxbeQcki0//DBpCfeGhlY1cWjbyeyPQu5YO/h6NiMEG49kFj/gNuYlIqWOMSFu0d/Iky4OaTcLihItP98ZhpXZr5wL+cqr6DwVfrlij47eNeCDObuPfD9Q0FLULjzzngJC/cNaXX14vn4/a3L0ixaYpALd1h/goVtZe2Cn+99PIsTnzrZg4JUnaMzT3ks8FXqU/eHEfa6ek4Je/vKDrzIswed80u/TwoosglEqVG+b8Di8uLGbuTWdWtZBQixZmTzcEbLW6kGA7fZmIV1m3ReD3ZNVP9Db/fipsV4+ZGlaRctcTjsyVIRN9WNEaWg3O3h0em6fa8P3Rpo3oMswdcfXYJVZg92rIX1cpSOj5I/Zy5e8rk5WIp4+5NbvMiRwHrqSqeOW1fu4pW53WsX2SjrQY0Og2EvlBNuDraSVhKKvm+evRFJ9M0uWyAEu26pjbIB9nDhHgp7oexP21bSKjMyfkdE3+k7tQu4p2MeXsguwiPLzZw1vEFCK2WKSsLdzxevwVIREvCPLt2uKgJnly7ANp4xoKyBpSQloy1RSbgUbcdgo27VXLxxT4j4FC9ByBL81sNdYmkpSx5O7jZfaoOKtQAbdeuDPPDF6XtiSX0MvtS30Fa6qucgF+2+chtUI1wbdS2tZn25aEtUnGZU9oG0DRKWVvFGJdESVV27bNS1tIg8KnhbRVUTO9uoa2kRh6sRLVF1bUFG3Q94ycJiiZ6yedsgVU+lL6PuAVgszaEmbdWcn7F9GCxNgCb6GKjlH+oR7nY4lsFiiYr11XpbRc133ZED1mxFzRIVB2oVLVFXU46tqFkioqYKmU5d9zmTFbU9sFgao24N1X2DPjl4zVoGS70cCA6ArIWGen1Iy0BZhu2wWKqnbougaOiWqNIyvIIU3bXH0jCklUE0SMP38pU1QtswYamWurIIQSLrIGpnwLFUAfX82osIiFK41u9aytGwr9Vp2CooNL+bh8XiJ48IfK1O5GNJZJMwRV7bd9dCUEAbiMLX6kQWcRWySXgfLBaHPVGLlohcuIQcVmzFa6EMwhE0gaYIl+A7TFkGmyZLLyTa/WgSTR8vbYe3p5KmipZoyUB/K95U0XTREi2bocKKNxW0RLRES6dWseI1mpaJlmj5nEBWvEayT1bGW0ZbJrPi4n2ZL74L20iRdKhxYV+5WRWbRdtmYePizcJpYcvCkkTyvLzCtJvmtZK2Th9oxZtYSKyvNKNFrFqa1gBRDXTgsseQHQKUHOhcDbZTtERbhauQfTSpidiOpIgvys/uZdpdzNtFrGYattYhtrTdGgSJRcRVaNbB9nGID7GwBkFiO7e7vF0VpcyysLSDPJwuicOIIbGKuDr0hdno2zYoyg7EVbREIu6mIb3vW7Dj2ZrNMJwKWFtys7UQ24irI70vTUNJU/bkYYmaPBxbMJgE0RKJiLhBZH+HV2H9b6OoWyQcjEOKqxYSKVxC2gfK/9q5HGonsYJVJFa4Ck3AX4ONwJVIvGAViReuQgo4B6fLZBYWHWMEqzBGuDpcxENwPHAO6WYYDU7nGVeMFK5CRuEhpKsiZ1x0DcNo4erIlrghXnbDPBGTQA/zcsTE6BpGaoSrI6eJolEYJOIckskwL2/TMi1i1UmlcHXkLJM5WUjIcW2do4YBIVQ4Yk11F9DUCzeIFPJ2WUjIar1V4+NIkHk4Qj0llyNpF2oQK9wqkRU9vZCQ18llsIQxBa+jfB5e0/VFbT0ft+6DceVXT1z8Q16jLAAAAAAASUVORK5CYII=";
;// ./src/components/index/comm3.jsx








const comm3_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	width: 90%;
    margin: auto;
    padding: 40px 0;
	.comm3_conter {
	    display: flex;
		align-items: center;
    	gap: 20px;
    	padding: 20px;
		background: #E9F6FF;
		border-radius: 10px;
		margin-bottom: 15px;
	}
	.comm3_ico {
		img {
			width: 60px;
		}
	}
	.comm3_desc {
		span {
			display: block;
			font-size: 15px;
			font-weight: bold;
			color: #353535;
			padding-bottom: 5px;
		}
		em {
			display: block;
			font-size: 12px;
    		color: #454545;
		}
	}
	.comm3_blockchain {
		width: 220px;
		height: 48px;
		line-height: 48px;
		margin: auto;
		background: #428BC1;
		color: #fff;
		font-size: 14px;
		border-radius: 6px;
		text-align: center;
		margin-top: 40px;
		cursor: pointer;
		a {
			display: block;
			color: #fff;
			text-decoration: none;
		}
	}
`;
function Comm3() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(comm3_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm3_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm3_ico"
  }, /*#__PURE__*/react.createElement("img", {
    src: home3_ico1_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm3_desc"
  }, /*#__PURE__*/react.createElement("span", null, t("Solve BTC scalability bottleneck")), /*#__PURE__*/react.createElement("em", null, t("Layer 2 networks (Rollup / Cross-chain / Sidechain)")))), /*#__PURE__*/react.createElement("div", {
    className: "comm3_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm3_ico"
  }, /*#__PURE__*/react.createElement("img", {
    src: home3_ico2_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm3_desc"
  }, /*#__PURE__*/react.createElement("span", null, t("Instant confirmation")), /*#__PURE__*/react.createElement("em", null, t("DeFi、NFT、RWA、SocialFi")))), /*#__PURE__*/react.createElement("div", {
    className: "comm3_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm3_ico"
  }, /*#__PURE__*/react.createElement("img", {
    src: home3_ico3_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm3_desc"
  }, /*#__PURE__*/react.createElement("span", null, t("Low fees & high throughput")), /*#__PURE__*/react.createElement("em", null, t("Move BTC from 'store of value' to 'circulation'")))), /*#__PURE__*/react.createElement("div", {
    className: "comm3_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm3_ico"
  }, /*#__PURE__*/react.createElement("img", {
    src: home3_ico4_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm3_desc"
  }, /*#__PURE__*/react.createElement("span", null, t("Security")), /*#__PURE__*/react.createElement("em", null, t("Anchored to BTC mainnet, inheriting security")))), /*#__PURE__*/react.createElement("div", {
    className: "comm3_blockchain"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://btcscan.btcscoin.org/",
    target: "_blank"
  }, t("Blockchain Browser"))));
}
/* harmony default export */ const comm3 = (Comm3);
;// ./src/assets/images/partner/p1.png
const p1_namespaceObject = __webpack_require__.p + "1ee74325e6a43d81501b.png";
;// ./src/assets/images/partner/p2.png
const p2_namespaceObject = __webpack_require__.p + "2efefeaebfbaac677d9a.png";
;// ./src/assets/images/partner/p3.png
const p3_namespaceObject = __webpack_require__.p + "97eb751d6d489843a9f0.png";
;// ./src/assets/images/partner/p4.png
const p4_namespaceObject = __webpack_require__.p + "0bfe92933a8b8246beae.png";
;// ./src/assets/images/partner/p5.png
const p5_namespaceObject = __webpack_require__.p + "97ec8af146423c3e7adf.png";
;// ./src/assets/images/partner/p6.png
const p6_namespaceObject = __webpack_require__.p + "a92c7b3374b3e3bde580.png";
;// ./src/assets/images/partner/p7.png
const p7_namespaceObject = __webpack_require__.p + "18e91896cc55f1c93bbf.png";
;// ./src/assets/images/partner/p8.png
const p8_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAekAAADPCAYAAADRTCkIAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAE6BJREFUeAHt3U2onNUdx/EzwYJFI1FofFv0hkTowtpkUcSiMVcaqkLRLrSCLppsusptd20EKa0Y7arErNzkIij4sjDQoi4Kub6ghIIJpYuCSXPdVOOiDd6ELircPr+5c9LJ3JnnnOd5znnmP898P/B4rzcz9848M3N+55znvPRcTevr69uKL7uL45HiWBh8v21wAAAwjy4Wx+rg63vFsdLr9VZcTT1XURHO+9xGMP/MEcgAAIQosE8Ux9EisM9UuWN0SA/C+TfFsc8BAIA6VorjQBHWqzE33hK6gbq1i+MPxbcnHQENAEAT+4rjvHJ1cNm4VGlLuvgFC24jnBccAABIabU4Fsta1RNb0kVAayDYaUdAAwCQw0JxnBzk7VhjW9KDO6gFzcAwAADy0sCyxXGDyjaFNF3cAAC0TkG9Z7Tr+6qQHlzEposbAID2rbqNoL7ofzB6TVpTrBYcAABo24LbyOErrrSkB93c5x0AAJimRb9K2XBLetkBAIBpu9Ka7rekh6ZbAQCA6eu3pn1L+hcOAABY8aj+41vS/3bMiQYAwAqN8N6xZbBxBgENAIAd/e2g1d29zwEAAGseVUjf7wAAgDULCmm6ugEAsOd7CukFBwAArNnWWy84AABgzhYHAABMIqQBADCKkAYAwChCGgAAowhpAACMIqQBADCKkAYAwChCGgAAowhpAACMIqQBADCKkAYAwChCGgAAowhpAACMIqQBADCKkAYAwChCGgAAowhpAACMIqQBADCKkAYAwChCGgAAowhpAACMIqQBADCKkAYAwChCGgAAowhpAACMIqQBADCKkAYAwChCGgAAowhpAACMIqQBADCKkAYAwChCGgAAowhpAACMIqQBADCKkAYAwChCGgAAowhpAACMIqQBADCKkAYAwChCGgAAowhpAACMIqQBADCKkAYAwChCGgAAowhpAACMIqQBADCKkAYAwChCGgAAowhpAACMIqQBADCKkAYAwChCGgAAowhpAACMIqQBADCKkAYAwChCGgAAowhpAACMusahNZcuXXKffvqp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";
;// ./src/components/index/comm4.jsx











const comm4_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	background: #F8F8F8;
	padding-bottom: 40px;
	.comm4_title {
		font-size: 24px;
		font-weight: bold;
		text-align: center;
		padding-top: 40px;
		padding-bottom: 30px;
	}
	.comm4_img {
	    width: 90%;
    	margin: auto;
		span {
			display: flex;
			gap: 4%;
			margin-bottom: 15px;
		}
		img {
			width: 48%;
		}
	}
`;
function Comm4() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(comm4_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm4_title"
  }, t("Partner")), /*#__PURE__*/react.createElement("div", {
    className: "comm4_img"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: p1_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("img", {
    src: p2_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: p3_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("img", {
    src: p4_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: p5_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("img", {
    src: p6_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: p7_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("img", {
    src: p8_namespaceObject,
    alt: ""
  }))));
}
/* harmony default export */ const comm4 = (Comm4);
;// ./src/assets/images/us_1.svg
const us_1_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAyMSAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuODk2NDYgMTUuOTcxMkw4LjIyNDA4IDExLjIxMzRMMTcuMTc5MiAzLjQzNzQzQzE3LjU3NCAzLjA4OTQ5IDE3LjA5NTIgMi45MTk1NyAxNi41NjU5IDMuMjI3MDVMNS41MTkwNyA5Ljk1OTJMMC43NDc1MDUgOC40OTQ2M0MtMC4yNzczNzUgOC4yMTk1MiAtMC4yOTQxNzYgNy41MzE3NCAwLjk4MjcyMyA3LjAzODE2TDE5LjU5MDIgMC4xMTE4MDVDMjAuNDM4NiAtMC4yNjA0MDUgMjEuMjUzNSAwLjMxNDA5NCAyMC45MjU5IDEuNTc2MzdMMTcuNzU4OCAxNS45NzEyQzE3LjU0MDQgMTYuOTkwNyAxNi44OTM2IDE3LjI0MTYgMTYuMDExNSAxNi43NzIzTDExLjE4OTUgMTMuMzMzNEw4Ljg3MDk0IDE1LjUwMTlDOC43NTYxMSAxNS42NDYyIDguNjA4NyAxNS43NjM1IDguNDM5ODcgMTUuODQ0OEM4LjI3MTA0IDE1LjkyNjEgOC4wODUyMSAxNS45NjkzIDcuODk2NDYgMTUuOTcxMloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";
;// ./src/assets/images/us_2.svg
const us_2_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxOSAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0Ljk2MzYgMEgxNy44NzcxTDExLjUxMiA3LjIwMTAzTDE5IDE3SDEzLjEzN0w4LjU0NDg1IDExLjA1N0wzLjI5MDQgMTdIMC4zNzUxOTFMNy4xODMyMyA5LjI5NzY5TDAgMEg2LjAxMTg3TDEwLjE2MjggNS40MzIxNUwxNC45NjM2IDBaTTEzLjk0MTEgMTUuMjczOEgxNS41NTU1TDUuMTM0NjQgMS42MzU0OUgzLjQwMjIzTDEzLjk0MTEgMTUuMjczOFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";
;// ./src/components/index/comm5.jsx






const comm5_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	background: #0F152B;
    color: #fff;
    text-align: center;
	.comm5_us {
		padding-top: 30px;
		padding-bottom: 15px;
	}
	.comm5_ico {
		img {
			height: 16px;
    		padding: 0 10px;
		}
	}
	.comm5_all {
		border-top: 1px solid rgb(255, 255, 255, .57);
		margin-top: 30px;
		padding: 15px 0;
		font-size: 14px;
	}
`;
function Comm5() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(comm5_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm5_us"
  }, t("Follow us")), /*#__PURE__*/react.createElement("div", {
    className: "comm5_ico"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://t.me/BTCSOfficialGroup",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: us_1_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://x.com/hunegdbce",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: us_2_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "comm5_all"
  }, "\xA9 2026 BTCS. All rights reserved."));
}
/* harmony default export */ const comm5 = (Comm5);
;// ./src/pages/index/index.jsx







function Index() {
  return /*#__PURE__*/react.createElement("div", {
    className: "conter_top"
  }, /*#__PURE__*/react.createElement(comm1, null), /*#__PURE__*/react.createElement(assets, null), /*#__PURE__*/react.createElement(comm2, null), /*#__PURE__*/react.createElement(comm3, null), /*#__PURE__*/react.createElement(comm4, null), /*#__PURE__*/react.createElement(comm5, null));
}
/* harmony default export */ const index = (Index);
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 87 modules
var es_select = __webpack_require__(6049);
;// ./src/assets/images/mining/jihuo.png
const jihuo_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAOBJREFUeAGNU9ERgjAMLZ7/dgQ2sCN0AxmBEdwANnAE3UCdAJ0AN5ANZIP63hHuSqTIu3t3NHkvCaEYk0AIoQZvZgGbSGzBCvQSysGd5Dx4AvMfswQb8AjamSaMFdToAjQz+I4TeL4wHp1z0bSxsQwDClVwYo7GJ8q4a6PnnDNrPd/ZgU+zHnfQj2Yuo1vvNb1MYLdycFqRZVmZMFvJ9+z8APdmPQ7imWyw+OeiZrJtCV7BD+gWjE6+c6MTvJqtVD1HV3ScrJIcNTZVvZbqGpyq1vosUcSb4ccgOvDF7WrdF2qy8VVNFWdyAAAAAElFTkSuQmCC";
;// ./src/components/modal/shenmaActivatedModal.jsx









const shenmaActivatedModal_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.modal_del_flex {
		display: flex;
		align-items: center;
	}
	.modal_del_left {
		display: flex;
		align-items: center;
		span {
			display: inline-block;
			width: 116px;
			height: 116px;
			background: #F2F3F5;
			border-radius: 15px;
		}
	}
	.modal_del_right {
		margin-left: 10px;
		span {
			display: block;
			font-size: 15px;
			font-weight: bold;
			padding-bottom: 3px;
		}
		em {
			display: block;
			font-size: 13px;
			color: #666;
		}
	}
	.modal_del_fee {
		line-height: 18px;
		i {
			font-size: 13px;
			color: #666;
		}
	}
	.modal_del_fenqitit {
		font-size: 13px;
		padding-bottom: 5px;
		padding-top: 10px;
		span {
			margin-left: 5px;
		}
	}
	.ant-select-selection-item {
		font-size: 13px;
	}
	.modal_btom_activate {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		line-height: 40px;
		background: #428BC1;
		border-radius: 10px;
		text-align: center;
		font-size: 13px;
		color: #fff;
		margin-top: 15px;
		cursor: pointer;
		img {
			margin-right: 5px;
		}
	}
`;
function ShenmaActivatedModal(_ref) {
  var _chain$id;
  let {
    modalOpen,
    modalCancel,
    machineImages,
    machineDetails,
    handleMintShenmaClick,
    isMintShenmaLoading,
    allTokenApprove,
    isApproveLoading,
    handleApprove,
    isMintSwitch,
    mintToken
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const ContractsAddress = Contracts_Address[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56];
  const [installmentValue, setInstallmentValue] = (0,react.useState)(0);
  const [billFeeValue, setBillFeeValue] = (0,react.useState)(10);

  // 选择是否分期
  const selectChange = value => {
    setInstallmentValue(value);
    if (value === 0) {
      setBillFeeValue(10);
    } else {
      setBillFeeValue(1);
    }
  };

  // 选择充值电费
  const selectBillChange = value => {
    setBillFeeValue(value);
  };
  (0,react.useEffect)(() => {
    if (modalOpen) {
      setInstallmentValue(0);
      setBillFeeValue(10);
    }
  }, [modalOpen]);
  return /*#__PURE__*/react.createElement(modal/* default */.A, {
    centered: true,
    open: modalOpen,
    onCancel: modalCancel
  }, /*#__PURE__*/react.createElement(shenmaActivatedModal_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "modal_title"
  }, t('Activate')), /*#__PURE__*/react.createElement("div", {
    className: "modal_del_flex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "modal_del_left"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: machineImages[machineDetails == null ? void 0 : machineDetails.type],
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "modal_del_right"
  }, /*#__PURE__*/react.createElement("span", null, t("Shenma Mining"), " M", machineDetails == null ? void 0 : machineDetails.type), /*#__PURE__*/react.createElement("em", null, t("Activation fee")), /*#__PURE__*/react.createElement("div", {
    className: "modal_del_fee"
  }, installmentValue === 0 ?
  /*#__PURE__*/
  // 不分期
  react.createElement("i", null, machineDetails == null ? void 0 : machineDetails.priceBig, "BNB") :
  /*#__PURE__*/
  // 分期
  react.createElement("i", null, new bignumber/* default */.A(machineDetails == null ? void 0 : machineDetails.priceBig).dividedBy(10).toNumber(), "BNB")), installmentValue === 0 ? /*#__PURE__*/react.createElement("em", null, t("month electricity bill", {
    month: billFeeValue
  })) : /*#__PURE__*/react.createElement("em", null, t("month electricity bill", {
    month: 1
  })), /*#__PURE__*/react.createElement("div", {
    className: "modal_del_fee"
  }, installmentValue === 0 ?
  /*#__PURE__*/
  // 不分期
  react.createElement("i", null, (machineDetails == null ? void 0 : machineDetails.electricityPriceBig) * billFeeValue, "USDT") :
  /*#__PURE__*/
  // 分期
  react.createElement("i", null, new bignumber/* default */.A(machineDetails == null ? void 0 : machineDetails.electricityPriceBig).dividedBy(10).toNumber(), "USDT")))), /*#__PURE__*/react.createElement("div", {
    className: "modal_del_fenqitit"
  }, t("Installment or not")), /*#__PURE__*/react.createElement(es_select/* default */.A, {
    defaultValue: installmentValue,
    options: [{
      value: 0,
      label: t("Installment-free")
    }, {
      value: 10,
      label: t("Installment: 10 installments")
    }],
    style: {
      width: "100%"
    },
    onChange: selectChange
  }), installmentValue === 0 ? /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "modal_del_fenqitit"
  }, t("Electricity fee recharge")), /*#__PURE__*/react.createElement(es_select/* default */.A, {
    defaultValue: billFeeValue,
    options: [{
      value: 1,
      label: `1 ${t("Month")}`
    }, {
      value: 10,
      label: `10 ${t("Month")}`
    }],
    style: {
      width: "100%"
    },
    onChange: selectBillChange
  })) : /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "modal_del_fenqitit"
  }, t("Electricity fee recharge"), ":", /*#__PURE__*/react.createElement("span", null, t("1 Month")))), Number(allTokenApprove) < Number((machineDetails == null ? void 0 : machineDetails.electricityPriceBig) * billFeeValue) ? /*#__PURE__*/react.createElement("div", {
    className: "modal_btom_activate",
    onClick: () => {
      handleApprove(ContractsAddress.USDT);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: jihuo_namespaceObject,
    alt: ""
  }), !isApproveLoading && /*#__PURE__*/react.createElement("span", null, t('Approve')), isApproveLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Approve')))) : /*#__PURE__*/react.createElement("div", {
    className: "modal_btom_activate",
    onClick: () => {
      handleMintShenmaClick(machineDetails, installmentValue, billFeeValue, isMintSwitch, mintToken);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: jihuo_namespaceObject,
    alt: ""
  }), !isMintShenmaLoading && /*#__PURE__*/react.createElement("span", null, t('Activate')), isMintShenmaLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Activate'))))));
}
/* harmony default export */ const shenmaActivatedModal = (ShenmaActivatedModal);
;// ./src/components/mining/inactive.jsx









function Inactive(_ref) {
  var _chain$id;
  let {
    machineImages,
    loading,
    miningList,
    allCoinApprove,
    allTokenApprove,
    handleApprove,
    isApproveLoading,
    handleMintExperienceClick,
    isMintExperienceLoading,
    handleMintShenmaClick,
    isMintShenmaLoading,
    installmentModal,
    setisInstallmentModal,
    isMintSwitch,
    mintToken,
    allMintTokenApprove
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const ContractsAddress = Contracts_Address[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56];
  const [machineDetails, setMachineDetails] = (0,react.useState)({});

  // 打开神马矿机激活弹窗
  const handleActivateOpen = async item => {
    setMachineDetails(item);
    setisInstallmentModal(true);
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, !loading ? /*#__PURE__*/react.createElement("div", null, miningList.length > 0 ? miningList.filter(item => (item == null ? void 0 : item.openMintCount) > (item == null ? void 0 : item.count)).map((item, index) => /*#__PURE__*/react.createElement("div", {
    key: index,
    className: "min_list_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "min_list_flex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "min_list_left"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: machineImages[item == null ? void 0 : item.type],
    alt: ""
  })), (item == null ? void 0 : item.type) === 0 ? /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("i", null, t("Experience Miner")), /*#__PURE__*/react.createElement("div", {
    className: "max_text"
  }, t("Max Quantity"), item == null ? void 0 : item.openMintCount), /*#__PURE__*/react.createElement("dl", {
    className: "min_status_activated"
  }, t("To be activated"))) : /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("i", null, t("Shenma Mining"), " M", item == null ? void 0 : item.type), /*#__PURE__*/react.createElement("div", {
    className: "max_text"
  }, t("Max Quantity"), Number(item == null ? void 0 : item.openMintCount) - Number(item == null ? void 0 : item.count)), /*#__PURE__*/react.createElement("dl", {
    className: "min_status_activated"
  }, t("To be activated")))), /*#__PURE__*/react.createElement("div", {
    className: "min_list_right"
  }, /*#__PURE__*/react.createElement("span", null, t("Activation fee")), /*#__PURE__*/react.createElement("em", null, item == null ? void 0 : item.priceBig, "BNB"), (item == null ? void 0 : item.type) === 0 ? /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("i", null, "+"), /*#__PURE__*/react.createElement("em", null, "1BET")) : /*#__PURE__*/react.createElement("div", {
    className: "min_list_bnom"
  }, /*#__PURE__*/react.createElement("span", null, t("month electricity bill", {
    month: 1
  })), /*#__PURE__*/react.createElement("em", null, item == null ? void 0 : item.electricityPriceBig, "USDT")))),
  // 体验矿机
  (item == null ? void 0 : item.type) === 0 ? /*#__PURE__*/react.createElement(react.Fragment, null, Number(allCoinApprove) < 1 ? /*#__PURE__*/react.createElement("div", {
    className: "min_btom_activate",
    onClick: () => {
      handleApprove(ContractsAddress.CoinTokenAddress, index);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: jihuo_namespaceObject,
    alt: ""
  }), !isApproveLoading[index] && /*#__PURE__*/react.createElement("span", null, t('Approve'), "BET"), isApproveLoading[index] && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Approve'), "BET"))) : /*#__PURE__*/react.createElement("div", {
    className: "min_btom_activate",
    onClick: () => {
      handleMintExperienceClick(item);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: jihuo_namespaceObject,
    alt: ""
  }), !isMintExperienceLoading && /*#__PURE__*/react.createElement("span", null, t('Activate')), isMintExperienceLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Activate'))))) :
  /*#__PURE__*/
  // 神马矿机
  react.createElement(react.Fragment, null, Number(allTokenApprove) < Number(item == null ? void 0 : item.electricityPriceBig) ? /*#__PURE__*/react.createElement("div", {
    className: "min_btom_activate",
    onClick: () => {
      handleApprove(ContractsAddress.USDT, index);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: jihuo_namespaceObject,
    alt: ""
  }), !isApproveLoading[index] && /*#__PURE__*/react.createElement("span", null, t('Approve'), "USDT"), isApproveLoading[index] && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Approve'), "USDT"))) : /*#__PURE__*/react.createElement(react.Fragment, null, isMintSwitch && Number(allMintTokenApprove) < 1 ? /*#__PURE__*/react.createElement("div", {
    className: "min_btom_activate",
    onClick: () => {
      handleApprove(mintToken == null ? void 0 : mintToken.address, index);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: jihuo_namespaceObject,
    alt: ""
  }), !isApproveLoading[index] && /*#__PURE__*/react.createElement("span", null, t('Approve Number')), isApproveLoading[index] && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Approve Number')))) : /*#__PURE__*/react.createElement("div", {
    className: "min_btom_activate",
    onClick: () => {
      handleActivateOpen(item);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: jihuo_namespaceObject,
    alt: ""
  }), t('Activate')))))) : /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(empty/* default */.A, {
    description: t("No Data")
  }))) : /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(spin/* default */.A, {
    indicator: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.A, {
      style: {
        fontSize: 48,
        color: "#FBBD15"
      },
      spin: true
    })
  })), installmentModal && /*#__PURE__*/react.createElement(shenmaActivatedModal, {
    modalOpen: installmentModal,
    modalCancel: () => {
      setisInstallmentModal(false);
    },
    machineImages: machineImages,
    machineDetails: machineDetails,
    handleMintShenmaClick: handleMintShenmaClick,
    isMintShenmaLoading: isMintShenmaLoading,
    allTokenApprove: allTokenApprove,
    isApproveLoading: isApproveLoading,
    handleApprove: handleApprove,
    isMintSwitch: isMintSwitch,
    mintToken: mintToken
  }));
}
/* harmony default export */ const inactive = (Inactive);
;// ./src/components/modal/shenmaChargeModal.jsx








const shenmaChargeModal_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.modal_del_flex {
		display: flex;
		align-items: center;
	}
	.modal_del_left {
		display: flex;
		align-items: center;
		span {
			display: inline-block;
			width: 116px;
			height: 116px;
			background: #F2F3F5;
			border-radius: 15px;
		}
	}
	.modal_del_right {
		margin-left: 10px;
		span {
			display: block;
			font-size: 15px;
			font-weight: bold;
			padding-bottom: 3px;
		}
		em {
			display: block;
			font-size: 13px;
			color: #666;
		}
	}
	.modal_del_fenqitit {
		font-size: 13px;
		padding-bottom: 5px;
		padding-top: 10px;
		span {
			margin-left: 5px;
		}
	}
	.ant-select-selection-item {
		font-size: 13px;
	}
	.modal_btom_activate {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		line-height: 40px;
		background: #428BC1;
		border-radius: 10px;
		text-align: center;
		font-size: 13px;
		color: #fff;
		margin-top: 15px;
		cursor: pointer;
		img {
			margin-right: 5px;
		}
	}
`;
function ShenmaChargeModal(_ref) {
  var _chain$id;
  let {
    modalOpen,
    modalCancel,
    machineImages,
    machineDetails,
    handleChargeShenmaClick,
    isChargeShenmaLoading,
    allTokenApprove,
    handleApprove,
    isApproveLoading
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const ContractsAddress = Contracts_Address[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56];
  const [monthValue, setMonthValue] = (0,react.useState)(1);
  const [allApprove, setAllApprove] = (0,react.useState)();
  const handleAllowance = async value => {
    setAllApprove((machineDetails == null ? void 0 : machineDetails.electricityPriceBig) * value);
  };
  (0,react.useEffect)(() => {
    handleAllowance(monthValue);
  }, [machineDetails, monthValue]);

  // 选择续费周期
  const selectChange = value => {
    setMonthValue(value);
  };
  return /*#__PURE__*/react.createElement(modal/* default */.A, {
    centered: true,
    open: modalOpen,
    onCancel: modalCancel
  }, /*#__PURE__*/react.createElement(shenmaChargeModal_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "modal_title"
  }, t('Renew')), /*#__PURE__*/react.createElement("div", {
    className: "modal_del_flex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "modal_del_left"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: machineImages[machineDetails == null ? void 0 : machineDetails.machineType],
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "modal_del_right"
  }, /*#__PURE__*/react.createElement("span", null, t("Shenma Mining"), " M", machineDetails == null ? void 0 : machineDetails.machineType))), /*#__PURE__*/react.createElement("div", {
    className: "modal_del_fenqitit"
  }, t("Select renewal cycle")), /*#__PURE__*/react.createElement(es_select/* default */.A, {
    defaultValue: monthValue,
    options: [{
      value: 1,
      label: t("1 Month")
    }, {
      value: 2,
      label: t("2 Month")
    }, {
      value: 3,
      label: t("3 Month")
    }, {
      value: 4,
      label: t("4 Month")
    }, {
      value: 5,
      label: t("5 Month")
    }, {
      value: 6,
      label: t("6 Month")
    }, {
      value: 7,
      label: t("7 Month")
    }, {
      value: 8,
      label: t("8 Month")
    }, {
      value: 9,
      label: t("9 Month")
    }, {
      value: 10,
      label: t("10 Month")
    }],
    style: {
      width: "100%"
    },
    onChange: selectChange
  }), /*#__PURE__*/react.createElement("div", {
    className: "modal_del_fenqitit"
  }, t("Renewal amount"), ":", /*#__PURE__*/react.createElement("span", null, Number(machineDetails == null ? void 0 : machineDetails.electricityPriceBig) * Number(monthValue), "USDT")), Number(allTokenApprove) < Number(allApprove) ? /*#__PURE__*/react.createElement("div", {
    className: "modal_btom_activate",
    onClick: () => {
      handleApprove(ContractsAddress.USDT);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: jihuo_namespaceObject,
    alt: ""
  }), !isApproveLoading && /*#__PURE__*/react.createElement("span", null, t('Approve')), isApproveLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Approve')))) : /*#__PURE__*/react.createElement("div", {
    className: "modal_btom_activate",
    onClick: () => {
      handleChargeShenmaClick(machineDetails, monthValue);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: jihuo_namespaceObject,
    alt: ""
  }), !isChargeShenmaLoading && /*#__PURE__*/react.createElement("span", null, t('Renew')), isChargeShenmaLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Renew'))))));
}
/* harmony default export */ const shenmaChargeModal = (ShenmaChargeModal);
;// ./src/components/modal/shenmaRepaymentModal.jsx








const shenmaRepaymentModal_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.modal_del_flex {
		display: flex;
		align-items: center;
	}
	.modal_del_left {
		display: flex;
		align-items: center;
		span {
			display: inline-block;
			width: 116px;
			height: 116px;
			background: #F2F3F5;
			border-radius: 15px;
		}
	}
	.modal_del_right {
		margin-left: 10px;
		span {
			display: block;
			font-size: 15px;
			font-weight: bold;
			padding-bottom: 3px;
		}
		em {
			display: block;
			font-size: 13px;
			color: #666;
		}
	}
	.modal_del_fenqitit {
		font-size: 13px;
		padding-bottom: 5px;
		padding-top: 10px;
		span {
			margin-left: 5px;
		}
	}
	.ant-select-selection-item {
		font-size: 13px;
	}
	.modal_btom_activate {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		line-height: 40px;
		background: #428BC1;
		border-radius: 10px;
		text-align: center;
		font-size: 13px;
		color: #fff;
		margin-top: 15px;
		cursor: pointer;
		img {
			margin-right: 5px;
		}
	}
	.modal_insta_number {
		font-size: 12px;
		color: #666;
		line-height: 15px;
	}
`;
function ShenmaRepaymentModal(_ref) {
  var _chain$id;
  let {
    modalOpen,
    modalCancel,
    machineImages,
    machineDetails,
    handleRepaymentShenmaClick,
    isRepaymentShenmaLoading,
    allTokenApprove,
    handleApprove,
    isApproveLoading,
    handleRepaymentAmount
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const ContractsAddress = Contracts_Address[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56];
  const [monthValue, setMonthValue] = (0,react.useState)(1);
  const [remaining, setRemaining] = (0,react.useState)(1);
  const [amount, setAmount] = (0,react.useState)();
  const [allApprove, setAllApprove] = (0,react.useState)();
  const handleAllowance = async value => {
    setAllApprove((machineDetails == null ? void 0 : machineDetails.electricityPriceBig) * value);
  };
  const handleAmount = async () => {
    // 剩余期数
    setRemaining(10 - Number(machineDetails == null ? void 0 : machineDetails.installmentPeriod));

    // 查询需要还款金额
    const am = await handleRepaymentAmount(machineDetails == null ? void 0 : machineDetails.tokenId, monthValue);
    setAmount(am);
  };
  (0,react.useEffect)(() => {
    handleAmount();
    handleAllowance(monthValue);
  }, [machineDetails, monthValue]);

  // 选择还款期数
  const selectChange = value => {
    setMonthValue(value);
    setAmount(amount * value);
  };
  return /*#__PURE__*/react.createElement(modal/* default */.A, {
    centered: true,
    open: modalOpen,
    onCancel: modalCancel
  }, /*#__PURE__*/react.createElement(shenmaRepaymentModal_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "modal_title"
  }, t('Repayment')), /*#__PURE__*/react.createElement("div", {
    className: "modal_del_flex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "modal_del_left"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: machineImages[machineDetails == null ? void 0 : machineDetails.machineType],
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "modal_del_right"
  }, /*#__PURE__*/react.createElement("span", null, t("Shenma Mining"), " M", machineDetails == null ? void 0 : machineDetails.machineType), /*#__PURE__*/react.createElement("div", {
    className: "modal_insta_number"
  }, t("Repaid periods"), ": ", machineDetails == null ? void 0 : machineDetails.installmentPeriod), /*#__PURE__*/react.createElement("div", {
    className: "modal_insta_number"
  }, t("Remaining periods"), ": ", remaining))), /*#__PURE__*/react.createElement("div", {
    className: "modal_del_fenqitit"
  }, t("Select repayment period")), /*#__PURE__*/react.createElement(es_select/* default */.A, {
    defaultValue: monthValue,
    options: [{
      value: 1,
      label: `1 ${t("Month")}`
    }, {
      value: remaining,
      label: `${remaining} ${t("Month")}`
    }],
    style: {
      width: "100%"
    },
    onChange: selectChange
  }), /*#__PURE__*/react.createElement("div", {
    className: "modal_del_fenqitit"
  }, t("Repayment amount"), ":", /*#__PURE__*/react.createElement("span", null, amount, "USDT")), Number(allTokenApprove) < Number(allApprove) ? /*#__PURE__*/react.createElement("div", {
    className: "modal_btom_activate",
    onClick: () => {
      handleApprove(ContractsAddress.USDT);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: jihuo_namespaceObject,
    alt: ""
  }), !isApproveLoading && /*#__PURE__*/react.createElement("span", null, t('Approve')), isApproveLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Approve')))) : /*#__PURE__*/react.createElement("div", {
    className: "modal_btom_activate",
    onClick: () => {
      handleRepaymentShenmaClick(machineDetails, monthValue, amount);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: jihuo_namespaceObject,
    alt: ""
  }), !isRepaymentShenmaLoading && /*#__PURE__*/react.createElement("span", null, t('Repayment')), isRepaymentShenmaLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Repayment'))))));
}
/* harmony default export */ const shenmaRepaymentModal = (ShenmaRepaymentModal);
// EXTERNAL MODULE: ./node_modules/antd-mobile/es/components/dialog/index.js + 50 modules
var dialog = __webpack_require__(608);
// EXTERNAL MODULE: ./node_modules/antd-mobile/es/global/index.js
var global = __webpack_require__(4274);
;// ./src/assets/images/mining/xiaohui.png
const xiaohui_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAI5JREFUeAGdj1ENgDAMRDvCP0hAEjjAAgpAAg7AAUgABUgACXNQuqQbY2nGwktuXZZrdwUIQMQT37QQgwy9NbIOMyT0KX6sIJ0mp6MjLaSZtEfME3s2G8tlp1r68qI7Ty5MHEnGrLnWoSEDmSKoSU1RfjVJOw3w7KOTmpRSF1/FBoMfb8II0k8Nx/liNccN345wvZaXLa4AAAAASUVORK5CYII=";
;// ./src/components/modal/shenmaDestroyDialog.jsx






function ShenmaDestroyDialog(_ref) {
  let {
    title,
    miningTimes,
    item,
    handleBurnClick,
    isDestroyLoading
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);

  // 矿机锁90天
  const LockedTime = miningTimes * 90;
  const endTime = Number(item == null ? void 0 : item.mintTime) + Number(LockedTime);
  const handleDestroyClick = () => {
    const currentsTimes = Math.floor(Date.now() / 1000);
    if (currentsTimes < endTime) {
      // 不可以销毁
      dialog/* default */.A.confirm({
        content: t("This miner requires a 90-day lock-up period from the date of purchase before it can be destroyed."),
        confirmText: t('Confirm'),
        cancelText: t('Cancel'),
        onConfirm: async () => {}
      });
    } else {
      // 可以销毁 
      dialog/* default */.A.confirm({
        content: title,
        confirmText: t('Confirm'),
        cancelText: t('Cancel'),
        onConfirm: async () => {
          handleBurnClick(item == null ? void 0 : item.tokenId, item == null ? void 0 : item.index);
        }
      });
    }
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "min_xiaohui",
    onClick: handleDestroyClick
  }, /*#__PURE__*/react.createElement("img", {
    src: xiaohui_namespaceObject,
    alt: ""
  }), !isDestroyLoading[item == null ? void 0 : item.index] && /*#__PURE__*/react.createElement("span", null, t('Destroy')), isDestroyLoading[item == null ? void 0 : item.index] && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Destroy'))));
}
/* harmony default export */ const shenmaDestroyDialog = (ShenmaDestroyDialog);
;// ./src/assets/images/mining/xufei.png
const xufei_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAALxJREFUeAGVkg0NwyAQhY9mAioBCZVQCcwBEuagc7DNQZ1QCXPQOUACO7p3260hpLzkpZR7Hz85iJRSSiP7xl7TR5Ed2F5lBnavoUmF7znMvgBMWMxi7AVymLhSQQBWdRKviwNVBDgK2EnBGPOsgVx/8ech/x21af6COLc7QmHXTSe2hY/qzF4Ilw3UqvTT2MJpcGtwJTf9LS6NBxgRGFDr8QwDck6DM5prMS4p7K9iCkfKDzjvaDG16DaI3vudA7AKJKe2AAAAAElFTkSuQmCC";
;// ./src/components/mining/charging.jsx








function Charging(_ref) {
  let {
    machineImages,
    loading,
    myMiningList,
    handleChargeShenmaClick,
    isChargeShenmaLoading,
    isChargeModal,
    setIsChargeModal,
    allTokenApprove,
    handleApprove,
    isApproveLoading,
    isRepaymentModal,
    setIsRepaymentModal,
    isRepaymentShenmaLoading,
    handleRepaymentShenmaClick,
    handleRepaymentAmount,
    miningTimes,
    handleBurnClick,
    isDestroyLoading
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const currentsTimes = Math.floor(Date.now() / 1000);
  const [machineDetails, setMachineDetails] = (0,react.useState)({});

  // 打开神马矿机续费弹窗
  const handleChargeOpen = async item => {
    setMachineDetails(item);
    setIsChargeModal(true);
  };

  // 打开神马矿机还款弹窗
  const handleRepaymentOpen = async item => {
    setMachineDetails(item);
    setIsRepaymentModal(true);
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, !loading ? /*#__PURE__*/react.createElement("div", null, (() => {
    // 先检查 myMiningList 是否存在且有长度
    if (!myMiningList || !Array.isArray(myMiningList) || myMiningList.length === 0) {
      return /*#__PURE__*/react.createElement("div", {
        className: "load_conter"
      }, /*#__PURE__*/react.createElement(empty/* default */.A, {
        description: t("No Data")
      }));
    }

    // 先过滤数据
    const validData = myMiningList.filter(item => Number(item == null ? void 0 : item.validityPeriod) < Number(currentsTimes) && Number(item == null ? void 0 : item.lpAmount) !== Number(0.000000));

    // 判断是否有数据显示
    if (validData.length > 0) {
      return validData.map((item, index) => /*#__PURE__*/react.createElement("div", {
        key: index,
        className: "min_list_conter"
      }, /*#__PURE__*/react.createElement(DataList, {
        t: t,
        machineImages: machineImages,
        item: item,
        handleChargeOpen: handleChargeOpen,
        handleRepaymentOpen: handleRepaymentOpen,
        miningTimes: miningTimes,
        handleBurnClick: handleBurnClick,
        isDestroyLoading: isDestroyLoading
      })));
    }

    // 没有数据时显示Empty
    return /*#__PURE__*/react.createElement("div", {
      className: "load_conter"
    }, /*#__PURE__*/react.createElement(empty/* default */.A, {
      description: t("No Data")
    }));
  })()) : /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(spin/* default */.A, {
    indicator: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.A, {
      style: {
        fontSize: 48,
        color: "#FBBD15"
      },
      spin: true
    })
  })), isChargeModal && /*#__PURE__*/react.createElement(shenmaChargeModal, {
    modalOpen: isChargeModal,
    modalCancel: () => {
      setIsChargeModal(false);
    },
    machineImages: machineImages,
    machineDetails: machineDetails,
    handleChargeShenmaClick: handleChargeShenmaClick,
    isChargeShenmaLoading: isChargeShenmaLoading,
    allTokenApprove: allTokenApprove,
    handleApprove: handleApprove,
    isApproveLoading: isApproveLoading
  }), isRepaymentModal && /*#__PURE__*/react.createElement(shenmaRepaymentModal, {
    modalOpen: isRepaymentModal,
    modalCancel: () => {
      setIsRepaymentModal(false);
    },
    machineImages: machineImages,
    machineDetails: machineDetails,
    handleRepaymentShenmaClick: handleRepaymentShenmaClick,
    isRepaymentShenmaLoading: isRepaymentShenmaLoading,
    allTokenApprove: allTokenApprove,
    handleApprove: handleApprove,
    isApproveLoading: isApproveLoading,
    handleRepaymentAmount: handleRepaymentAmount
  }));
}
function DataList(_ref2) {
  let {
    t,
    machineImages,
    item,
    handleChargeOpen,
    handleRepaymentOpen,
    miningTimes,
    handleBurnClick,
    isDestroyLoading
  } = _ref2;
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "min_list_flex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "min_list_left"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: machineImages[item == null ? void 0 : item.machineType],
    alt: ""
  }), (item == null ? void 0 : item.isInstallment) && /*#__PURE__*/react.createElement("div", {
    className: "install_title"
  }, t("Installment"))), (item == null ? void 0 : item.machineType) === 0 ? /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("i", null, t("Experience Miner")), /*#__PURE__*/react.createElement("dl", {
    className: "min_status_end"
  }, t("Ended"))) : /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("i", null, t("Shenma Mining"), " M", item == null ? void 0 : item.machineType), item != null && item.isInstallment ? /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "min_insta_number"
  }, t("Repaid periods"), ": ", item == null ? void 0 : item.installmentPeriod), /*#__PURE__*/react.createElement("div", {
    className: "min_insta_number"
  }, t("Remaining periods"), ": ", 10 - Number(item == null ? void 0 : item.installmentPeriod)), /*#__PURE__*/react.createElement("dl", {
    className: "min_status_activated"
  }, t("Amount Due"))) : /*#__PURE__*/react.createElement("dl", {
    className: "min_status_continued"
  }, t("To be continued")))), /*#__PURE__*/react.createElement("div", {
    className: "min_list_right"
  }, /*#__PURE__*/react.createElement("span", null, t("LP Position")), /*#__PURE__*/react.createElement("em", null, item == null ? void 0 : item.lpAmount))), (item == null ? void 0 : item.machineType) !== 0 && /*#__PURE__*/react.createElement(react.Fragment, null, item != null && item.isInstallment ?
  /*#__PURE__*/
  // 分期
  react.createElement("div", {
    className: "min_btom_activate",
    onClick: () => {
      handleRepaymentOpen(item);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: xufei_namespaceObject,
    alt: ""
  }), t("Repayment")) :
  /*#__PURE__*/
  // 全款
  react.createElement("div", {
    className: "min_btom_flex"
  }, /*#__PURE__*/react.createElement(shenmaDestroyDialog, {
    title: t('Confirm destruction of this miner?'),
    miningTimes: miningTimes,
    item: item,
    handleBurnClick: handleBurnClick,
    isDestroyLoading: isDestroyLoading
  }), /*#__PURE__*/react.createElement("em", {
    className: "min_btom_xufei",
    onClick: () => {
      handleChargeOpen(item);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: xufei_namespaceObject,
    alt: ""
  }), t("Renew")))));
}
/* harmony default export */ const charging = (Charging);
;// ./src/utils/CountdownTimestamp.jsx


function CountdownTimestamp(_ref) {
  let {
    targetTimestamp
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);

  // 使用 state 来存储目标时间，这样当 props 改变时会重新计算
  const [targetMs, setTargetMs] = (0,react.useState)(targetTimestamp.toString().length === 10 ? targetTimestamp * 1000 : targetTimestamp);
  const [msLeft, setMsLeft] = (0,react.useState)(Math.max(0, targetMs - Date.now()));
  const timerRef = (0,react.useRef)(null);

  // 当 targetTimestamp 改变时，更新目标时间
  (0,react.useEffect)(() => {
    const newTargetMs = targetTimestamp.toString().length === 10 ? targetTimestamp * 1000 : targetTimestamp;
    setTargetMs(newTargetMs);
    setMsLeft(Math.max(0, newTargetMs - Date.now()));
  }, [targetTimestamp]);
  (0,react.useEffect)(() => {
    const update = () => {
      const left = Math.max(0, targetMs - Date.now());
      setMsLeft(left);
    };
    update(); // 初始化一次
    timerRef.current = setInterval(update, 1000); // 每秒刷新

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [targetMs]); // 依赖 targetMs，当目标时间改变时重新启动计时器

  // 转换成天、时、分、秒
  const days = Math.floor(msLeft / (24 * 3600 * 1000));
  const hours = Math.floor(msLeft % (24 * 3600 * 1000) / (3600 * 1000));
  const minutes = Math.floor(msLeft % (3600 * 1000) / (60 * 1000));
  const seconds = Math.floor(msLeft % (60 * 1000) / 1000);

  // 格式化：始终两位数
  const pad = num => String(num).padStart(2, "0");
  return /*#__PURE__*/react.createElement("span", null, days, t('D'), " ", pad(hours), ":", pad(minutes), ":", pad(seconds));
}
;// ./src/components/mining/running.jsx









function Running(_ref) {
  let {
    machineImages,
    loading,
    myMiningList,
    handleMiningList,
    handleChargeShenmaClick,
    isChargeShenmaLoading,
    isChargeModal,
    setIsChargeModal,
    allTokenApprove,
    handleApprove,
    isApproveLoading,
    isRepaymentModal,
    setIsRepaymentModal,
    isRepaymentShenmaLoading,
    handleRepaymentShenmaClick,
    handleRepaymentAmount,
    miningTimes,
    handleBurnClick,
    isDestroyLoading
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const currentsTimes = Math.floor(Date.now() / 1000);
  const [machineDetails, setMachineDetails] = (0,react.useState)({});

  // 打开神马矿机续费弹窗
  const handleChargeOpen = async item => {
    setMachineDetails(item);
    setIsChargeModal(true);
  };

  // 打开神马矿机还款弹窗
  const handleRepaymentOpen = async item => {
    setMachineDetails(item);
    setIsRepaymentModal(true);
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, !loading ? /*#__PURE__*/react.createElement("div", null, (() => {
    // 先检查 myMiningList 是否存在且有长度
    if (!myMiningList || !Array.isArray(myMiningList) || myMiningList.length === 0) {
      return /*#__PURE__*/react.createElement("div", {
        className: "load_conter"
      }, /*#__PURE__*/react.createElement(empty/* default */.A, {
        description: t("No Data")
      }));
    }

    // 先过滤数据
    const validData = myMiningList.filter(item => Number(item == null ? void 0 : item.validityPeriod) > Number(currentsTimes) && Number(item == null ? void 0 : item.lpAmount) !== Number(0.000000));

    // 判断是否有数据显示
    if (validData.length > 0) {
      return validData.map((item, index) => /*#__PURE__*/react.createElement("div", {
        key: index,
        className: "min_list_conter"
      }, /*#__PURE__*/react.createElement(running_DataList, {
        t: t,
        machineImages: machineImages,
        validData: validData,
        handleMiningList: handleMiningList,
        item: item,
        index: index,
        handleChargeOpen: handleChargeOpen,
        handleRepaymentOpen: handleRepaymentOpen,
        miningTimes: miningTimes,
        handleBurnClick: handleBurnClick,
        isDestroyLoading: isDestroyLoading
      })));
    }

    // 没有数据时显示Empty
    return /*#__PURE__*/react.createElement("div", {
      className: "load_conter"
    }, /*#__PURE__*/react.createElement(empty/* default */.A, {
      description: t("No Data")
    }));
  })()) : /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(spin/* default */.A, {
    indicator: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.A, {
      style: {
        fontSize: 48,
        color: "#FBBD15"
      },
      spin: true
    })
  })), isChargeModal && /*#__PURE__*/react.createElement(shenmaChargeModal, {
    modalOpen: isChargeModal,
    modalCancel: () => {
      setIsChargeModal(false);
    },
    machineImages: machineImages,
    machineDetails: machineDetails,
    handleChargeShenmaClick: handleChargeShenmaClick,
    isChargeShenmaLoading: isChargeShenmaLoading,
    allTokenApprove: allTokenApprove,
    handleApprove: handleApprove,
    isApproveLoading: isApproveLoading
  }), isRepaymentModal && /*#__PURE__*/react.createElement(shenmaRepaymentModal, {
    modalOpen: isRepaymentModal,
    modalCancel: () => {
      setIsRepaymentModal(false);
    },
    machineImages: machineImages,
    machineDetails: machineDetails,
    handleRepaymentShenmaClick: handleRepaymentShenmaClick,
    isRepaymentShenmaLoading: isRepaymentShenmaLoading,
    allTokenApprove: allTokenApprove,
    handleApprove: handleApprove,
    isApproveLoading: isApproveLoading,
    handleRepaymentAmount: handleRepaymentAmount
  }));
}
function running_DataList(_ref2) {
  let {
    t,
    machineImages,
    validData,
    handleMiningList,
    item,
    index,
    handleChargeOpen,
    handleRepaymentOpen,
    miningTimes,
    handleBurnClick,
    isDestroyLoading
  } = _ref2;
  const [currentTimestamps, setCurrentTimestamps] = (0,react.useState)({});

  // 更新当前时间戳
  (0,react.useEffect)(() => {
    const timer = setInterval(() => {
      const now = Math.floor(Date.now() / 1000);
      const timestamps = {};
      validData.forEach((item, index) => {
        if (item != null && item.validityPeriod) {
          timestamps[index] = now;
        }
      });
      setCurrentTimestamps(timestamps);
    }, 1000);
    return () => clearInterval(timer);
  }, [validData]);

  // 计算进度百分比
  const calculateProgress = (startTime, endTime, index) => {
    if (!startTime || !endTime) return 0;
    const now = currentTimestamps[index] || Math.floor(Date.now() / 1000);
    const totalDuration = endTime - startTime;
    const remaining = endTime - now; // 剩余时间

    // 计算剩余时间的比例
    let progress = remaining / totalDuration * 100;
    progress = Math.min(100, Math.max(0, progress));
    return progress;
  };

  // 监听进度条是否为0
  (0,react.useEffect)(() => {
    if (!validData.length) return;

    // 检查是否有任何矿机进度为0
    const hasZero = validData.some((item, index) => {
      if ((item == null ? void 0 : item.machineType) === 0) {
        const progress = calculateProgress(item == null ? void 0 : item.lastRechargeTime, item == null ? void 0 : item.validityPeriod, index);
        return progress <= 0;
      }
      return false;
    });
    if (hasZero) {
      setTimeout(() => {
        handleMiningList();
      }, 3000);
    }
  }, [currentTimestamps, validData]);
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "min_list_flex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "min_list_left"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: machineImages[item == null ? void 0 : item.machineType],
    alt: ""
  }), (item == null ? void 0 : item.isInstallment) && /*#__PURE__*/react.createElement("div", {
    className: "install_title"
  }, t("Installment"))), /*#__PURE__*/react.createElement("em", null, (item == null ? void 0 : item.machineType) === 0 ? /*#__PURE__*/react.createElement("i", null, t("Experience Miner")) : /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("i", null, t("Shenma Mining"), " M", item == null ? void 0 : item.machineType), (item == null ? void 0 : item.isInstallment) && /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "min_insta_number"
  }, t("Repaid periods"), ": ", item == null ? void 0 : item.installmentPeriod), /*#__PURE__*/react.createElement("div", {
    className: "min_insta_number"
  }, t("Remaining periods"), ": ", 10 - Number(item == null ? void 0 : item.installmentPeriod)))), /*#__PURE__*/react.createElement("dl", {
    className: "min_status_running"
  }, t("Running")))), /*#__PURE__*/react.createElement("div", {
    className: "min_list_right"
  }, /*#__PURE__*/react.createElement("span", null, t("LP Position")), /*#__PURE__*/react.createElement("em", null, item == null ? void 0 : item.lpAmount))), (item == null ? void 0 : item.machineType) === 0 ?
  /*#__PURE__*/
  // 体验矿机
  react.createElement("div", {
    className: "min_countdown_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "min_countdown_flex"
  }, /*#__PURE__*/react.createElement("em", null, t("Countdown to end")), /*#__PURE__*/react.createElement(CountdownTimestamp, {
    targetTimestamp: item == null ? void 0 : item.validityPeriod
  })), /*#__PURE__*/react.createElement("div", {
    className: "min_progress_conter"
  }, calculateProgress(item == null ? void 0 : item.lastRechargeTime, item == null ? void 0 : item.validityPeriod, index) > 15 ? /*#__PURE__*/react.createElement("span", {
    className: "min_progress_1",
    style: {
      width: `${calculateProgress(item == null ? void 0 : item.lastRechargeTime, item == null ? void 0 : item.validityPeriod, index)}%`
    }
  }) : /*#__PURE__*/react.createElement("span", {
    className: "min_progress_2",
    style: {
      width: `${calculateProgress(item == null ? void 0 : item.lastRechargeTime, item == null ? void 0 : item.validityPeriod, index)}%`
    }
  }))) :
  /*#__PURE__*/
  // 神马矿机
  react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "min_countdown_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "min_countdown_flex"
  }, /*#__PURE__*/react.createElement("em", null, t("Electricity Countdown")), /*#__PURE__*/react.createElement(CountdownTimestamp, {
    targetTimestamp: item == null ? void 0 : item.validityPeriod
  })), /*#__PURE__*/react.createElement("div", {
    className: "min_progress_conter"
  }, calculateProgress(item == null ? void 0 : item.lastRechargeTime, item == null ? void 0 : item.validityPeriod, index) > 15 ? /*#__PURE__*/react.createElement("span", {
    className: "min_progress_1",
    style: {
      width: `${calculateProgress(item == null ? void 0 : item.lastRechargeTime, item == null ? void 0 : item.validityPeriod, index)}%`
    }
  }) : /*#__PURE__*/react.createElement("span", {
    className: "min_progress_2",
    style: {
      width: `${calculateProgress(item == null ? void 0 : item.lastRechargeTime, item == null ? void 0 : item.validityPeriod, index)}%`
    }
  }))), (item == null ? void 0 : item.machineType) !== 0 && /*#__PURE__*/react.createElement(react.Fragment, null, item != null && item.isInstallment ?
  /*#__PURE__*/
  // 分期
  react.createElement("div", {
    className: "min_btom_activate",
    onClick: () => {
      handleRepaymentOpen(item);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: xufei_namespaceObject,
    alt: ""
  }), t("Repayment")) :
  /*#__PURE__*/
  // 全款
  react.createElement("div", {
    className: "min_btom_flex"
  }, /*#__PURE__*/react.createElement(shenmaDestroyDialog, {
    title: t('Confirm destruction of this miner?'),
    miningTimes: miningTimes,
    item: item,
    handleBurnClick: handleBurnClick,
    isDestroyLoading: isDestroyLoading
  }), /*#__PURE__*/react.createElement("em", {
    className: "min_btom_xufei",
    onClick: () => {
      handleChargeOpen(item);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: xufei_namespaceObject,
    alt: ""
  }), t("Renew"))))));
}
/* harmony default export */ const running = (Running);
;// ./src/assets/images/mining/m1.png
const m1_namespaceObject = __webpack_require__.p + "8452e07c85559be3c3e4.png";
;// ./src/assets/images/mining/m2.png
const m2_namespaceObject = __webpack_require__.p + "c99b9245729f81f1daa3.png";
;// ./src/assets/images/mining/m3.png
const m3_namespaceObject = __webpack_require__.p + "0b52414c6eba410f9100.png";
;// ./src/assets/images/mining/m4.png
const m4_namespaceObject = __webpack_require__.p + "3df38f1f8dcf76d01c0f.png";
;// ./src/assets/images/mining/m5.png
const m5_namespaceObject = __webpack_require__.p + "1c7a3c780a106a194a16.png";
;// ./src/assets/images/mining/m6.png
const m6_namespaceObject = __webpack_require__.p + "3725b54f5276c26c1a66.png";
;// ./src/components/mining/shenma.jsx













const machineImages = {
  0: m1_namespaceObject,
  1: m2_namespaceObject,
  2: m3_namespaceObject,
  3: m4_namespaceObject,
  4: m5_namespaceObject,
  5: m6_namespaceObject
};
function Shenma() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    loading,
    miningList,
    myMiningList,
    handleMiningList,
    allCoinApprove,
    allTokenApprove,
    handleApprove,
    isApproveLoading,
    handleMintExperienceClick,
    isMintExperienceLoading,
    handleMintShenmaClick,
    isMintShenmaLoading,
    installmentModal,
    setisInstallmentModal,
    handleChargeShenmaClick,
    isChargeShenmaLoading,
    isChargeModal,
    setIsChargeModal,
    isRepaymentModal,
    setIsRepaymentModal,
    isRepaymentShenmaLoading,
    handleRepaymentShenmaClick,
    handleRepaymentAmount,
    miningTimes,
    handleBurnClick,
    isDestroyLoading,
    isMintSwitch,
    mintToken,
    allMintTokenApprove
  } = useMiningLayout();
  const [searchParams] = (0,dist/* useSearchParams */.ok)();
  const id = searchParams.get('id');
  const [tabMiningOn, setTabMiningOn] = (0,react.useState)(1);
  (0,react.useEffect)(() => {
    if (Number(id) === 1) {
      setTabMiningOn(1);
    } else if (Number(id) === 2) {
      setTabMiningOn(2);
    } else if (Number(id) === 3) {
      setTabMiningOn(3);
    }
  }, [id]);
  const handleTabClick = index => {
    setTabMiningOn(index);

    // if (id) {
    // 	const currentUrl = window.location.href;
    // 	const baseUrl = currentUrl.split('?')[0];
    // 	window.location.href = `${baseUrl}?id=${index}`;
    // }
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "min_list_title"
  }, /*#__PURE__*/react.createElement("span", {
    className: tabMiningOn === 1 ? 'on' : '',
    onClick: () => {
      handleTabClick(1);
    }
  }, t("Running")), /*#__PURE__*/react.createElement("span", {
    className: tabMiningOn === 2 ? 'on' : '',
    onClick: () => {
      handleTabClick(2);
    }
  }, t("To be continued")), /*#__PURE__*/react.createElement("span", {
    className: tabMiningOn === 3 ? 'on' : '',
    onClick: () => {
      handleTabClick(3);
    }
  }, t("Inactive"))), tabMiningOn === 1 && /*#__PURE__*/react.createElement(running, {
    machineImages: machineImages,
    loading: loading,
    myMiningList: myMiningList,
    handleMiningList: handleMiningList,
    handleChargeShenmaClick: handleChargeShenmaClick,
    isChargeShenmaLoading: isChargeShenmaLoading,
    isChargeModal: isChargeModal,
    setIsChargeModal: setIsChargeModal,
    allTokenApprove: allTokenApprove,
    handleApprove: handleApprove,
    isApproveLoading: isApproveLoading,
    isRepaymentModal: isRepaymentModal,
    setIsRepaymentModal: setIsRepaymentModal,
    isRepaymentShenmaLoading: isRepaymentShenmaLoading,
    handleRepaymentShenmaClick: handleRepaymentShenmaClick,
    handleRepaymentAmount: handleRepaymentAmount,
    miningTimes: miningTimes,
    handleBurnClick: handleBurnClick,
    isDestroyLoading: isDestroyLoading
  }), tabMiningOn === 2 && /*#__PURE__*/react.createElement(charging, {
    machineImages: machineImages,
    loading: loading,
    myMiningList: myMiningList,
    handleChargeShenmaClick: handleChargeShenmaClick,
    isChargeShenmaLoading: isChargeShenmaLoading,
    isChargeModal: isChargeModal,
    setIsChargeModal: setIsChargeModal,
    allTokenApprove: allTokenApprove,
    handleApprove: handleApprove,
    isApproveLoading: isApproveLoading,
    isRepaymentModal: isRepaymentModal,
    setIsRepaymentModal: setIsRepaymentModal,
    isRepaymentShenmaLoading: isRepaymentShenmaLoading,
    handleRepaymentShenmaClick: handleRepaymentShenmaClick,
    handleRepaymentAmount: handleRepaymentAmount,
    miningTimes: miningTimes,
    handleBurnClick: handleBurnClick,
    isDestroyLoading: isDestroyLoading
  }), tabMiningOn === 3 && /*#__PURE__*/react.createElement(inactive, {
    machineImages: machineImages,
    loading: loading,
    miningList: miningList,
    allCoinApprove: allCoinApprove,
    allTokenApprove: allTokenApprove,
    handleApprove: handleApprove,
    isApproveLoading: isApproveLoading,
    handleMintExperienceClick: handleMintExperienceClick,
    isMintExperienceLoading: isMintExperienceLoading,
    handleMintShenmaClick: handleMintShenmaClick,
    isMintShenmaLoading: isMintShenmaLoading,
    installmentModal: installmentModal,
    setisInstallmentModal: setisInstallmentModal,
    isMintSwitch: isMintSwitch,
    mintToken: mintToken,
    allMintTokenApprove: allMintTokenApprove
  }));
}
/* harmony default export */ const shenma = (Shenma);
;// ./src/config/abi/MinterStakePoolAbi.json
const MinterStakePoolAbi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"uint256","name":"_rewardAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"claimRecords","outputs":[{"internalType":"uint256","name":"claimTimestamp","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"cleanUpToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"duration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"position","type":"uint256"}],"name":"getClaimByPosition","outputs":[{"components":[{"internalType":"uint256","name":"claimTimestamp","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct BTZK_StakePool.RecordClaim","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getClaimLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"getCliamsRange","outputs":[{"components":[{"internalType":"uint256","name":"claimTimestamp","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct BTZK_StakePool.RecordClaim[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getRewardAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"}],"name":"stakeAccounts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"starttime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');
;// ./src/config/abi/MinterAbi.json
const MinterAbi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[],"name":"BIND","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"HONETCOMBNFT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STAKE","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"canMint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// ./src/utils/contractHoneyhiveUtils.js






const contractHoneyhiveUtils_ethereumHelper = window.ethereum || false;
const contractHoneyhiveUtils_web3 = new (web3_min_default())(contractHoneyhiveUtils_ethereumHelper);

/**
 * 蜂巢矿机合约
 */
class ContractHoneyhive {
  // 初始化方法
  static init(i18nInstance, messageInstance) {
    ContractHoneyhive.i18n = i18nInstance;
    ContractHoneyhive.message = messageInstance;
  }

  // 查询领取蜂巢矿机数量
  static async getBalanceOf(address, contractsAddress) {
    try {
      const contract = new contractHoneyhiveUtils_web3.eth.Contract(MinterNFTAbi_namespaceObject, contractsAddress);
      const balanceOf = await contract.methods.balanceOf(address).call();
      return balanceOf;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 查询BEE未领取数量
  static async getRewardAmount(address, contractsAddress) {
    try {
      const contract = new contractHoneyhiveUtils_web3.eth.Contract(MinterStakePoolAbi_namespaceObject, contractsAddress);
      const rewardAmount = await contract.methods.getRewardAmount(address).call();
      const rewardAmountBig = new bignumber/* default */.A(rewardAmount.toString()).shiftedBy(-18).toFixed(2);
      return rewardAmountBig;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 查询BEE已领取数量
  static async claimAmounts(address, contractsAddress) {
    try {
      const contract = new contractHoneyhiveUtils_web3.eth.Contract(MinterStakePoolAbi_namespaceObject, contractsAddress);
      const claimAmounts = await contract.methods.claimAmounts(address).call();
      const claimAmountsBig = new bignumber/* default */.A(claimAmounts.toString()).shiftedBy(-18).toFixed(2);
      return claimAmountsBig;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 查询BEE已领取数据
  static async getClaimList(address, contractsAddress) {
    try {
      const contract = new contractHoneyhiveUtils_web3.eth.Contract(MinterStakePoolAbi_namespaceObject, contractsAddress);

      // 查询BEE已领取数据长度
      const claimLength = await contract.methods.getClaimLength(address).call();
      if (claimLength > 0) {
        // 限制最多查询5条记录
        const maxQueries = 5;
        const actualQueries = Math.min(claimLength, maxQueries);

        // 创建查询任务数组
        const queryPromises = [];
        for (let i = 0; i < actualQueries; i++) {
          const position = claimLength - 1 - i;

          // 封装成 Promise
          const queryPromise = contract.methods.getClaimByPosition(address, position).call().then(data => ({
            success: true,
            position: position,
            timestamp: Number(Array.isArray(data) ? data[0] : data),
            amount: Number(Array.isArray(data) ? new bignumber/* default */.A(data[1].toString()).shiftedBy(-18).toFixed(2) : data),
            index: i + 1
          })).catch(err => ({
            success: false,
            position: position,
            error: err.message,
            index: i + 1
          }));
          queryPromises.push(queryPromise);
        }

        // 并行执行所有查询
        const results = await Promise.all(queryPromises);

        // 过滤成功的查询结果
        const successfulClaims = results.filter(result => result.success);

        // 按位置排序（从新到旧）
        successfulClaims.sort((a, b) => b.position - a.position);

        // console.log("成功的结果:", successfulClaims)
        return successfulClaims;
      }
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 领取奖励(BEE)
  static async getReward(address, contractsAddress) {
    try {
      var _ContractHoneyhive$i;
      const contract = new contractHoneyhiveUtils_web3.eth.Contract(MinterStakePoolAbi_namespaceObject, contractsAddress);
      const gas = await contractHoneyhiveUtils_web3.eth.getGasPrice();
      await contract.methods.getReward().send({
        from: address,
        gasPrice: gas
      });
      ContractHoneyhive.message.success((_ContractHoneyhive$i = ContractHoneyhive.i18n) == null ? void 0 : _ContractHoneyhive$i.t('Claimed successfully'));
      return true;
    } catch (error) {
      console.log("error===>", error);
      return false;
    }
  }

  // 查询是否可以领取NFT(蜂巢矿机)
  static async canMint(address, contractsAddress) {
    try {
      const contract = new contractHoneyhiveUtils_web3.eth.Contract(MinterAbi_namespaceObject, contractsAddress);
      const status = await contract.methods.canMint(address).call();
      return status;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 领取蜂巢矿机
  static async mintClick(address, contractsAddress) {
    try {
      var _ContractHoneyhive$i2;
      const contract = new contractHoneyhiveUtils_web3.eth.Contract(MinterAbi_namespaceObject, contractsAddress);
      const gas = await contractHoneyhiveUtils_web3.eth.getGasPrice();
      await contract.methods.mint().send({
        from: address,
        gasPrice: gas
      });
      ContractHoneyhive.message.success((_ContractHoneyhive$i2 = ContractHoneyhive.i18n) == null ? void 0 : _ContractHoneyhive$i2.t('Claimed successfully'));
      return true;
    } catch (error) {
      console.log("error===>", error);
      return false;
    }
  }
}
ContractHoneyhive.i18n = null;
ContractHoneyhive.message = null;
;// ./src/components/modal/honeycombDetailsModal.jsx






const honeycombDetailsModal_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.det_conter {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 10px;
		height: 60px;
		border-top: 1px solid #E5E5E5;
		span {
			display: inline-block;
			font-size: 13px;
		}
	}
	.det_scroll {
	    max-height: 400px;
    	overflow-y: scroll;
	}
	.det_cbg {
		height: 40px;
		background: #E9F6FF;
		border-top: 0px;
	}
`;
function HoneycombDetailsModal(_ref) {
  let {
    modalOpen,
    modalCancel,
    loading,
    claimList
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(modal/* default */.A, {
    centered: true,
    open: modalOpen,
    onCancel: () => modalCancel(false)
  }, /*#__PURE__*/react.createElement(honeycombDetailsModal_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "modal_title"
  }, t('Details')), /*#__PURE__*/react.createElement("div", {
    className: "det_conter det_cbg"
  }, /*#__PURE__*/react.createElement("span", null, t("Date")), /*#__PURE__*/react.createElement("span", null, t("Quantity"))), !loading ? /*#__PURE__*/react.createElement("div", {
    className: "det_scroll"
  }, claimList.length > 0 ? claimList.map((item, index) => /*#__PURE__*/react.createElement("div", {
    className: "det_conter",
    key: index
  }, /*#__PURE__*/react.createElement("span", null, formatTimestamp(item.timestamp * 1000)), /*#__PURE__*/react.createElement("span", null, item.amount, " BEE"))) : /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(empty/* default */.A, {
    description: t("No Data")
  }))) : /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(spin/* default */.A, {
    indicator: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.A, {
      style: {
        fontSize: 48,
        color: "#FBBD15"
      },
      spin: true
    })
  }))));
}
/* harmony default export */ const honeycombDetailsModal = (HoneycombDetailsModal);
;// ./src/assets/images/mining/jiantou.png
const jiantou_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAIxJREFUeAHlkDEKhDAQRf+IB9gjaU6wN1m2WLZUS1HBEymSC2kvGZNoYaE4Fjb6IJOBYR78AZ5BVOqPKnSyNQsgIOCRAJNuSUSC5hfXVpDtScSoorWCjtcScsVlJOa3RELgyDfGfJt/XIeudxlpdh3CoN5+r+WdQ1U68RHyNsVZLlsORQYzDrb6o+F+THGnPsgLGMoDAAAAAElFTkSuQmCC";
;// ./src/assets/images/mining/history.png
const history_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAZBJREFUeAGNks1twkAQhdfL35USQgdOB44EXIEKbCqADgIVJO4AKoDcECDhDuIO4hJ85y/fWLtoZewoK61nd/zmzc688VTNGgwGPsb3PC+/3W758XhMqnCefPr9fnC5XDKOebvdnhEwJ7Bbwmb4Vvv9fvlEQLaTuUuQZI7v9/sW0lSczWZTXhJxDIXofD6/JUkiCZV2yAKT9fVwOMzlya1WK+x0OpGc8UWNRqMHRuHf2CCXQJH1BXNyXOPr9Tqyl91ul4GZyCspe/EggHmKKTYZpuqPxUtSehSDmxXlWWbMSv1zEbzFzEQpHQTBy3A4/KgDa63LaijbXMrzNQ0JqGsO0RMQ/xfbJ8F7FTnq5BpJHlKVAXT/E4Ile+GSWKwMmEbPFEBOXeOqLJAsLAk1R6YHITsTea2MsW1KHQlmilqJ9IxzRPZ1QWZBBH9juu6UlZdJsJFhYqR7RTn2J+wTWE809Qfgiiev3VFGjZE0m2vKeWLjvHIWmTAAoZlKd+X4YlOOqiVwiETerpmDVCawCvcL7p7SZTBYFUsAAAAASUVORK5CYII=";
;// ./src/assets/images/mining/h1.png
const h1_namespaceObject = __webpack_require__.p + "9e5c8a3fb595e418c1e9.png";
;// ./src/components/mining/honeycomb.jsx













function Honeycomb() {
  var _chain$id;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  (0,react.useEffect)(() => {
    ContractHoneyhive.init(i18n, message/* default */.Ay);
  }, [i18n]);
  const {
    address
  } = useGetOwnAddress();
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const ContractsAddress = Contracts_Address[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56];
  const [honeycombCount, setHoneycombCount] = (0,react.useState)(0);
  const [rewardCount, setRewardCount] = (0,react.useState)(0);
  const [claimCount, setClaimCount] = (0,react.useState)(0);
  const [claimList, setClaimList] = (0,react.useState)([]);
  const [loading, setLoading] = (0,react.useState)(true);
  const [isClaimLoading, setIsClaimLoading] = (0,react.useState)(false);
  const [detailsOpenModal, setDetailsOpenModal] = (0,react.useState)(false);
  const [isMiningClaim, setIsMiningClaim] = (0,react.useState)(false);
  const [isMiningLoading, setIsMiningLoading] = (0,react.useState)(false);
  const [isMiningClaimLoading, setIsMiningClaimLoading] = (0,react.useState)(false);

  // 查询是否可以领取NFT(蜂巢矿机)
  const handleHasMint = async () => {
    const canMint = await ContractHoneyhive.canMint(address, ContractsAddress.MinterAddress);
    setIsMiningClaim(canMint);
    setIsMiningLoading(true);
  };

  // 查询领取蜂巢矿机数量
  const handleHoneycomb = async () => {
    const balanceOf = await ContractHoneyhive.getBalanceOf(address, ContractsAddress.MinerNFTAddress);
    setHoneycombCount(balanceOf);
  };

  // 查询BEE已领取、未领取、领取纪录
  const handleAmounts = async () => {
    setLoading(true);
    // 并行查询基础数据
    const [rewardAmount, claimAmounts, claimedList] = await Promise.all([ContractHoneyhive.getRewardAmount(address, ContractsAddress.MinerStakePoolAddress), ContractHoneyhive.claimAmounts(address, ContractsAddress.MinerStakePoolAddress), ContractHoneyhive.getClaimList(address, ContractsAddress.MinerStakePoolAddress)]);
    setRewardCount(rewardAmount);
    setClaimCount(claimAmounts);
    setClaimList(Array.isArray(claimedList) ? claimedList : []);
    setLoading(false);
  };
  (0,react.useEffect)(() => {
    if (address && chain) {
      // 查询是否可以领取NFT(蜂巢矿机)
      handleHasMint();
      // 查询领取蜂巢矿机数量
      handleHoneycomb();
      // 查询BEE已领取、未领取、领取纪录
      handleAmounts();
    } else {
      setLoading(false);
    }
  }, [address, chain]);

  // 领取奖励(BEE)
  const handleClaim = async () => {
    setIsClaimLoading(true);
    const status = await ContractHoneyhive.getReward(address, ContractsAddress.MinerStakePoolAddress);

    // 领取失败
    if (!status) {
      setIsClaimLoading(false);
    }

    // 领取成功
    if (status) {
      setIsClaimLoading(false);
      handleAmounts();
    }
  };

  // 领取蜂巢矿机
  const handleMintClick = async () => {
    setIsMiningClaimLoading(true);
    const status = await ContractHoneyhive.mintClick(address, ContractsAddress.MinterAddress);

    // 领取失败
    if (!status) {
      setIsMiningClaimLoading(false);
    }

    // 领取成功
    if (status) {
      setIsMiningClaimLoading(false);
      setIsMiningClaim(false);
      handleAmounts();
    }
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "shen_conter_revenue hon_conter_revenue"
  }, /*#__PURE__*/react.createElement("div", {
    className: "shen_revenue"
  }, t("Revenue")), /*#__PURE__*/react.createElement("div", {
    className: "shen_flex_revenue"
  }, /*#__PURE__*/react.createElement("div", {
    className: "shen_rev_pending"
  }, /*#__PURE__*/react.createElement("span", null, t("Acceptable income"), "(BEE)"), /*#__PURE__*/react.createElement("em", {
    className: "shen_rev_icoms"
  }, rewardCount), /*#__PURE__*/react.createElement("div", {
    className: "shen_rev_butom",
    onClick: handleClaim
  }, /*#__PURE__*/react.createElement("img", {
    src: jiantou_namespaceObject,
    alt: ""
  }), !isClaimLoading && /*#__PURE__*/react.createElement("span", {
    className: "shen_rev_withdraws"
  }, t("Claim")), isClaimLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, {
    className: "shen_rev_withdraws"
  }, t("Claim"))))), /*#__PURE__*/react.createElement("div", {
    className: "shen_rev_pending"
  }, /*#__PURE__*/react.createElement("span", null, t("Received income"), "(BEE)"), /*#__PURE__*/react.createElement("em", null, claimCount), /*#__PURE__*/react.createElement("div", {
    className: "shen_rev_butom",
    onClick: () => {
      setDetailsOpenModal(true);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: history_namespaceObject,
    alt: ""
  }), t("Details"))))), /*#__PURE__*/react.createElement("div", {
    className: "min_list_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "min_list_flex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "min_list_left"
  }, /*#__PURE__*/react.createElement("span", {
    className: "min_list_hon"
  }, /*#__PURE__*/react.createElement("img", {
    src: h1_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("i", null, t("Honeycomb Mining")), isMiningLoading && /*#__PURE__*/react.createElement("div", null, isMiningClaim ? /*#__PURE__*/react.createElement("dl", {
    className: "min_status_continued"
  }, t("To be claimed")) : /*#__PURE__*/react.createElement("dl", {
    className: "min_status_running"
  }, t("Running")))))), isMiningLoading && isMiningClaim && /*#__PURE__*/react.createElement("div", {
    className: "min_btom_activate hon_btom_claim",
    onClick: handleMintClick
  }, /*#__PURE__*/react.createElement("img", {
    src: jihuo_namespaceObject,
    alt: ""
  }), !isMiningClaimLoading && /*#__PURE__*/react.createElement("span", null, t("Claim Honeycomb Miner")), isMiningClaimLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t("Claim Honeycomb Miner"))))), /*#__PURE__*/react.createElement(honeycombDetailsModal, {
    modalOpen: detailsOpenModal,
    modalCancel: () => setDetailsOpenModal(false),
    loading: loading,
    claimList: claimList
  }));
}
/* harmony default export */ const honeycomb = (Honeycomb);
;// ./src/components/mining/main.jsx





const main_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
    background: #F7F7F7;
    min-height: 100vh;
	.min_table {
		padding: 30px 15px 15px 15px;
		margin-bottom: 15px;
    	border-bottom: 1px solid #D8D8D8;
		span {
			font-size: 16px;
			color: #454545;
			margin-right: 30px;
			opacity: .8;
			cursor: pointer;
		}
		.on {
			color: #000;
    		font-weight: bold;
			opacity: 1;
		}
	}
	.min_padding {
		padding: 0 15px 50px;
	}
	.shen_conter_revenue {
		background: #fff;
		border-radius: 10px;
		padding: 15px;
		margin-bottom: 30px;
	}
	.shen_revenue {
		font-size: 16px;
    	font-weight: bold;
		margin-bottom: 20px;
	}
	.shen_flex_revenue {
		display: flex;
    	gap: 10px;
	}
	.shen_rev_pending {
		width: 50%;
		background: #F2F3F5;
		border-radius: 15px;
		padding: 20px;
		span {
			display: block;
			font-size: 12px;
			color: #454545;
		}
		em {
			display: block;
			font-size: 20px;
    		font-weight: bold;
			margin-bottom: 10px;
		}
	}
	.shen_rev_icoms {
    	color: #428BC1;
	}
	.shen_rev_butom {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80%;
		height: 26px;
		margin: auto;
		font-size: 12px;
		color: #454545;
		background: #fff;
		border-radius: 15px;
		cursor: pointer;
		img {
			margin-right: 3px;
		}
	}
	.shen_rev_withdraws {
		color: #428BC1 !important;
	}
	.min_list_title {
		font-size: 16px;
		font-weight: bold;
		margin-bottom: 20px;
		span {
			font-size: 16px;
			color: #454545;
			margin-right: 20px;
			opacity: .8;
			cursor: pointer;
		}
		.on {
			color: #000;
    		font-weight: bold;
			opacity: 1;
		}
	}
	.min_list_conter {
		background: #fff;
		border-radius: 10px;
		padding: 15px 10px;
		margin-bottom: 15px;
	}
	.min_list_flex {
	    display: flex;
    	justify-content: space-between;
	}
	.min_list_left {
		display: flex;
    	align-items: center;
		span {
			position: relative;
			display: inline-block;
			width: 116px;
			height: 116px;
			background: #F2F3F5;
			border-radius: 15px;
		}
		em {
			margin-left: 10px;
		}
		i {
			display: block;
			font-size: 15px;
			font-weight: bold;
		}
		dl {
		    display: inline-block;
			height: 20px;
			line-height: 20px;
			font-size: 12px;
			padding: 0 10px;
			margin: 0px;
			border-radius: 25px;
			margin-top: 5px;
		}
	}
	.min_list_right {
		text-align: right;
		span {
		    display: block;
    		font-size: 12px;
		}
		em {
			display: block;
		    font-size: 13px;
			color: rgb(69, 69, 69);
    		opacity: 0.8;
		}
	}
	.min_status_running {
		background: #EAF7E9;
		color: #50B848;
	}
	.min_status_continued {
		background: #FFE9E9;
		color: #FF1014;
	}
	.min_status_activated {
		background: #FFF0D7;
		color: #C08300;
	}
	.min_status_end {
		background: #ccc;
    	color: #eee;
	}
	.min_countdown_conter {
	    background: #F2F3F5;
		border-radius: 8px;
		margin-top: 10px;
		padding: 10px;
	}
	.min_countdown_flex {
		display: flex;
    	justify-content: space-between;
		em {
			font-size: 12px;
		}
		span {
			font-size: 12px;
		}
		i {
			font-size: 12px;
			color: #F53F3F;
		}
	}
	.min_progress_conter {
	    position: relative;
		height: 9px;
		background: #E5E6EB;
		border-radius: 13px;
		margin-top: 5px;
		span {
			position: absolute;
			top: 0px;
			left: 0px;
			height: 100%;
			border-radius: 13px;
			max-width: 100%;
		}
	}
	.min_progress_1 {
		background: #00B42A;
	}
	.min_progress_2 {
		background: #F53F3F;
	}
	.min_btom_flex {
		display: flex;
    	gap: 10px;
		margin-top: 15px;
		em {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 50%;
			height: 40px;
			line-height: 40px;
			background: #F09700;
			border-radius: 10px;
			text-align: center;
			font-size: 13px;
			color: #fff;
			cursor: pointer;
		}
		img {
		    margin-right: 5px;
		}
	}
	.min_btom_xufei{
		background: #428BC1 !important;
	}
	.min_btom_activate {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		line-height: 40px;
		background: #428BC1;
		border-radius: 10px;
		text-align: center;
		font-size: 13px;
		color: #fff;
		margin-top: 15px;
		cursor: pointer;
		img {
		    margin-right: 5px;
		}
	}
	.min_list_hon {
		display: flex !important;
		align-items: center;
		justify-content: center;
		img {
			width: 100px;
		}
	}
	.hon_conter_revenue {
		margin-bottom: 10px !important;
	}
	.hon_btom_claim {
		margin-top: 10px;
	}
	.max_text {
		font-size: 12px;
		color: #454545;
		padding: 2px 0;
   		opacity: .8;
	}
	.install_title{
		position: absolute;
		top: 0px;
		background: #EAF7E9;
		color: #50B848;
		font-size: 12px;
		padding: 3px 5px;
		border-radius: 15px 0 0 0;
	}
	.min_insta_number {
		font-size: 12px;
		color: #666;
		line-height: 15px;
	}
	.min_xiaohui {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50%;
		height: 40px;
		line-height: 40px;
		background: #F09700;
		border-radius: 10px;
		text-align: center;
		font-size: 13px;
		color: #fff;
		cursor: pointer;
	}
	.min_list_bnom {
		margin-top: 10px;
	}
`;
function Main() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const [tabon, setTabon] = (0,react.useState)(1);
  return /*#__PURE__*/react.createElement(main_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "min_table"
  }, /*#__PURE__*/react.createElement("span", {
    className: tabon === 1 ? 'on' : '',
    onClick: () => {
      setTabon(1);
    }
  }, t("Shenma Mining")), /*#__PURE__*/react.createElement("span", {
    className: tabon === 2 ? 'on' : '',
    onClick: () => {
      setTabon(2);
    }
  }, t("Honeycomb Mining"))), /*#__PURE__*/react.createElement("div", {
    className: "min_padding"
  }, tabon === 1 && /*#__PURE__*/react.createElement(shenma, null), tabon === 2 && /*#__PURE__*/react.createElement(honeycomb, null)));
}
/* harmony default export */ const main = (Main);
;// ./src/pages/mining/index.jsx


function Mining() {
  return /*#__PURE__*/react.createElement("div", {
    className: "conter_top"
  }, /*#__PURE__*/react.createElement(main, null));
}
/* harmony default export */ const mining = (Mining);
;// ./src/assets/images/coming.png
const coming_namespaceObject = __webpack_require__.p + "6bb3989f117e757292b4.png";
;// ./src/components/finance/main.jsx




const finance_main_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	text-align: center;
	img {
	    margin-top: 50px;
	}
	span {
	    display: block;
    	margin-top: -70px;
		font-size: 14px;
    	color: #454545;
	}
`;
function main_Main() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(finance_main_CustomStyle, null, /*#__PURE__*/react.createElement("img", {
    src: coming_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, t("Coming Soon")));
}
/* harmony default export */ const finance_main = (main_Main);
;// ./src/pages/finance/index.jsx


function Finance() {
  return /*#__PURE__*/react.createElement("div", {
    className: "conter_top"
  }, /*#__PURE__*/react.createElement(finance_main, null));
}
/* harmony default export */ const finance = (Finance);
// EXTERNAL MODULE: ./node_modules/antd/es/pagination/index.js + 21 modules
var pagination = __webpack_require__(9057);
// EXTERNAL MODULE: ./node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__(2727);
var copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard);
;// ./src/assets/images/club.png
const club_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAACgklEQVR4AcyUQWsTURDH//MStLbWQ9ssRSjoRe1Ri95Uql/Ag41XvVRRiiLooaeeBKWCBD+BCLVJSy+evHgpFKGIioe0XryI4jYESbMpJNlxZmNqsrsJyaaUPt5/37yZefPL7IZnsI/jYMP4PeKqKC+kq85KK6MnnC3rh0rtboFdwcpl96wALNU/W8zOZ1ewwfzvtwTME+ip2p1japkerJhJzIrWS8sjkzV3i+c0KiAeE+XoNsotsjy31tKaolnPIQ8PJuscQBNu1cygzSguW/PMdAPMTwrp4SttUlGrRROSI7XlKbMOk1fDGy7htfhCp5MZeUCMhxpkUNxQbCG3MDSm+zCR1GLmTYnNi7zpwQam7Nn+KfuMbO6UMsNXvUjDw8kkpqSj5w0uNa2+eHzpWwqHdVMXpxGT/BkB3TyatE9r7XpM6tdNby24MO+cJeuZHDqknsJi4hKDXoHIn6vhC8dHrZQaquKb4fMOJT5IfgqM7/ANXwHOAmSY8cgxibXionXNGFoB0CcKn4Tp7XTivnTzEjGzBvn20EH4rEujmmDyizZ2g0znYKCgoV1fC4OIXsjZewDFUB+G28MMV6WzenYvK1f6C1tf/RWaOtuB+78zf2YXe+lyk25hx3+kCTaUzP8B+Jc/qdu9IXxCyGiCaZyBnl+ly/xFa/kVgMm91zMMRJ12tgffzQ3+E7XLQGcxpnUCZ6NK7s1VuTlCv3sAdiRpr8rVNR5VA0n7onYRpgCM52CKGeuj6GcUORnrcRhIfQEYLsu9wTglwdEokn/iuJwLnQEYTaLiwjlZpep4FOVh3w0liTMAEx8Gk9v2seu5bBSNJVHSGmEKhYUl7oVvX2F/AQAA//8YJLPlAAAABklEQVQDADmZXkZyBMtFAAAAAElFTkSuQmCC";
;// ./src/assets/images/copy.png
const copy_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAANJJREFUeAHVks0RAUEQhV/3cCaEDUEIsyUAUpABB6qccHJwEIIURGARgRDIgAC2n11/xe6cOOBVzWG6+n2vpqeBb0uKBT9NIq26EYkoaCCOlqa99TDe53ctNqhzc4BthSF0MoJXJ6N7f6WYnJk9iEt7KNlVdGHCqAS4JXshd9e38QVAkZfkEkAEdcvMq76PEVBztk3y5OLQFB/qzwACaVDYAHl6C3BdOy6ZonsvPX7BLD2IaivOph3y5sk02ySDuPNcfwBoGItjTcl6EADkyRP8nM6k9FY4CwTbOgAAAABJRU5ErkJggg==";
;// ./src/components/team/main.jsx

/* eslint-disable react-hooks/exhaustive-deps */















const team_main_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	background: #F7F7F7;
    min-height: 100vh;
	padding: 30px 15px 15px 15px;
	.tem_title {
		color: #000;
    	font-weight: bold;
		margin: 15px 0;
	}
	.tem_info {
	    display: flex;
    	gap: 8px;
		margin-bottom: 8px;
		span {
			display: block;
			width: 50%;
			background: #fff;
			border-radius: 8px;
			padding: 10px;
		}
		em {
			display: block;
			font-size: 12px;
    		color: #454545;
		}
		i {
			display: block;
			font-size: 22px;
			font-weight: bold;
			margin-top: 3px;
		}
	}
	.tem_club {
		background: #fff;
		border-radius: 8px;
		margin-bottom: 8px;
		padding: 10px 10px 5px 10px;
		span {
			display: flex;
    		align-items: center;
			font-size: 12px;
			padding-bottom: 5px;
		}
		em {
		    display: block;
			font-size: 14px;
			font-weight: bold;
			margin-bottom: 5px;
		}
		img {
		    width: 20px;
    		margin-right: 2px;
		    cursor: pointer;
		}
	}
	.tem_conylink {
		padding: 10px;
		background: #fff;
		border-radius: 8px;
		margin-bottom: 8px;
		span {
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 12px;
		}
		img {
		    cursor: pointer;
		}
	}
	.tem_table {
		margin-top: 30px;
		margin-bottom: 10px;
		span {
			font-size: 16px;
			color: #454545;
			margin-right: 30px;
			opacity: .8;
			cursor: pointer;
		}
		.on {
			color: #000;
    		font-weight: bold;
			opacity: 1;
		}
	}
	.tem_list_conter {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		border-radius: 6px;
		padding: 13px 10px;
		margin-bottom: 6px;
		span {
    		font-size: 12px;
		}
	}
	.tem_list_wid1 {
	    width: 45%;
	}
	.tem_list_wid2 {
		width: 25%;
	}
	.tem_list_wid3 {
		width: 30%;
		text-align: right;
	}
	.tem_claim_miner {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		line-height: 40px;
		background: #428BC1;
		border-radius: 10px;
		text-align: center;
		font-size: 13px;
		color: #fff;
		margin-bottom: 10px;
		cursor: pointer;
	}
`;
function team_main_Main() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    address
  } = useGetOwnAddress();
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const {
    referrerAddress
  } = invitationLayout();
  const [myClub, setMyClub] = (0,react.useState)("");
  const [teamCount, setTeamCount] = (0,react.useState)("-");
  const [directCount, setDirectCount] = (0,react.useState)("-");
  const [teamTotal, setTeamTotal] = (0,react.useState)("-");
  const [nodePerformance, setNodePerformance] = (0,react.useState)("-");
  const [invitationUrl, setInvitationUrl] = (0,react.useState)(0);
  const [tabon, setTabon] = (0,react.useState)(1);
  const [loading, setLoading] = (0,react.useState)(true);
  const [teamList, setTeamList] = (0,react.useState)([]);
  const [pageNo, setPageNo] = (0,react.useState)(1); // 当前页码
  const [pageSize, setPageSize] = (0,react.useState)(10); // 每页条数
  const [total, setTotal] = (0,react.useState)(); // 总共数据条数

  // 生成我的邀请链接
  const handleInvitationLink = () => {
    const currentURL = new URL(window.location.href);
    const origin = currentURL.origin;
    const url = origin + "/#/?invitation=" + address;
    setInvitationUrl(url);
  };

  // 获取用户的俱乐部信息
  const handleUserClub = async () => {
    http.get(`${axiosUrl}/user/relation/get-club?address=${address}`).then(function (res) {
      if (res.code === 0) {
        const data = res.data;
        setMyClub(data == null ? void 0 : data.name);
      }
    }).catch(function (error) {
      console.log("error===>", error);
    });
  };

  // 获取团队信息
  const handleTeamData = async () => {
    http.get(`${axiosUrl}/user/relation/invite-info?address=${address}`).then(function (res) {
      if (res.code === 0) {
        const data = res.data;
        // 团队总人数
        setTeamCount(data.teamCount);
        // 直推人数
        setDirectCount(data.inviteCount);
        // 团队总业绩
        setTeamTotal(data.performance);
        setNodePerformance(0);
      }
    }).catch(function (error) {
      console.log("error===>", error);
    });
  };

  // 获取邀请人列表
  const handleReferrerList = async () => {
    setLoading(true);
    http.get(`${axiosUrl}/user/relation/invite-list?address=${address}&pageNo=${pageNo}&pageSize=${pageSize}`).then(function (res) {
      if (res.code === 0) {
        const data = res.data;
        setLoading(false);
        setTeamList(data.list);
        setTotal(data.total);
      }
    }).catch(function (error) {
      console.log("error===>", error);
    });
  };
  (0,react.useEffect)(() => {
    if (address && chain) {
      // 生成我的邀请链接
      handleInvitationLink();
      // 获取用户的俱乐部信息
      handleUserClub();
      // 获取团队信息
      handleTeamData();
      // 获取邀请人列表
      handleReferrerList();
    } else {
      setLoading(false);
    }
  }, [address, chain]);
  const onChangePage = (page, pageSize) => {
    setPageNo(page);
    setPageSize(pageSize);
  };
  const handleCopy = text => {
    if (copy_to_clipboard_default()(text)) {
      message/* default */.Ay.success(t("Copy successful"));
    }
  };
  return /*#__PURE__*/react.createElement(team_main_CustomStyle, null, myClub && /*#__PURE__*/react.createElement("div", {
    className: "tem_club"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: club_namespaceObject,
    alt: ""
  }), t("My club")), /*#__PURE__*/react.createElement("em", null, myClub)), /*#__PURE__*/react.createElement("div", {
    className: "tem_title"
  }, t("Team Information")), /*#__PURE__*/react.createElement("div", {
    className: "tem_info"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Team count")), /*#__PURE__*/react.createElement("i", null, teamCount)), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Direct count")), /*#__PURE__*/react.createElement("i", null, directCount))), /*#__PURE__*/react.createElement("div", {
    className: "tem_info"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Team Performance")), /*#__PURE__*/react.createElement("i", null, teamTotal !== '-' ? parseNumber(teamTotal, 4) : '-')), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Team Incentives")), /*#__PURE__*/react.createElement("i", null, nodePerformance !== '-' ? parseNumber(nodePerformance, 4) : '-'))), /*#__PURE__*/react.createElement("div", {
    className: "tem_conylink"
  }, /*#__PURE__*/react.createElement("span", null, t("My superior")), referrerAddress === constants_address/* zeroAddress */.X ? /*#__PURE__*/react.createElement("span", null, t("None")) : /*#__PURE__*/react.createElement("span", {
    onClick: () => {
      handleCopy(referrerAddress);
    }
  }, referrerAddress ? `${referrerAddress.substring(0, 6)}...${referrerAddress.substr(-4)}` : '--', /*#__PURE__*/react.createElement("img", {
    src: copy_namespaceObject,
    alt: ""
  }))), address && /*#__PURE__*/react.createElement("div", {
    className: "tem_conylink"
  }, /*#__PURE__*/react.createElement("span", null, t("My invitation link")), /*#__PURE__*/react.createElement("span", {
    onClick: () => {
      handleCopy(invitationUrl);
    }
  }, invitationUrl ? `${invitationUrl.substring(0, 10)}...${invitationUrl.substr(-8)}` : '--', /*#__PURE__*/react.createElement("img", {
    src: copy_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "tem_table"
  }, /*#__PURE__*/react.createElement("span", {
    className: tabon === 1 ? 'on' : '',
    onClick: () => {
      setTabon(1);
    }
  }, t("Recommended List")), /*#__PURE__*/react.createElement("span", {
    className: tabon === 2 ? 'on' : '',
    onClick: () => {
      setTabon(2);
    }
  }, t("Reward Details"))), tabon === 1 && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "tem_list_conter"
  }, /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid1"
  }, t("Wallet address")), /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid2"
  }, t("Performance"), "(BNB)"), /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid3"
  }, t("Team Performance"), "(BNB)")), !loading ? /*#__PURE__*/react.createElement("div", null, teamList.length > 0 ? teamList.map((item, index) => /*#__PURE__*/react.createElement("div", {
    key: index,
    className: "tem_list_conter"
  }, /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid1"
  }, item.address.substring(0, 6), "...", item.address.substr(-4)), /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid2"
  }, item.totalCost ? parseNumber(item.totalCost, 4) : '0'), /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid3"
  }, item.performance ? parseNumber(item.performance, 4) : '0'))) : /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(empty/* default */.A, {
    description: t("No Data")
  }))) : /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(spin/* default */.A, {
    indicator: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.A, {
      style: {
        fontSize: 48,
        color: "#FBBD15"
      },
      spin: true
    })
  })), teamList.length > 0 && /*#__PURE__*/react.createElement("div", {
    className: "pagination_conter"
  }, /*#__PURE__*/react.createElement(pagination/* default */.A, {
    onChange: onChangePage,
    defaultCurrent: pageNo,
    defaultPageSize: pageSize,
    total: total
  }))), tabon === 2 && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "tem_list_conter"
  }, /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid1"
  }, t("Source address")), /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid2"
  }, t("Date")), /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid3"
  }, t("Quantity"))), /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(empty/* default */.A, {
    description: t("No Data")
  }))));
}
/* harmony default export */ const team_main = (team_main_Main);
;// ./src/pages/team/index.jsx


function Team() {
  return /*#__PURE__*/react.createElement("div", {
    className: "conter_top"
  }, /*#__PURE__*/react.createElement(team_main, null));
}
/* harmony default export */ const team = (Team);
;// ./src/assets/images/ecology/games_1.png
const games_1_namespaceObject = __webpack_require__.p + "1c4e15ba266ea16f6f66.png";
;// ./src/assets/images/ecology/games_2.png
const games_2_namespaceObject = __webpack_require__.p + "c4a35328d7fb6721d3d5.png";
;// ./src/assets/images/ecology/games_3.png
const games_3_namespaceObject = __webpack_require__.p + "ca4cc6ca05584dbb3855.png";
;// ./src/assets/images/ecology/games_4.png
const games_4_namespaceObject = __webpack_require__.p + "c7fd27fbcde08caf40ee.png";
;// ./src/assets/images/ecology/games_5.png
const games_5_namespaceObject = __webpack_require__.p + "9bef90e997c39001809f.png";
;// ./src/assets/images/ecology/games_6.png
const games_6_namespaceObject = __webpack_require__.p + "76b19138da401356c25b.png";
;// ./src/assets/images/ecology/games_7.png
const games_7_namespaceObject = __webpack_require__.p + "c215f906fd625a32d190.png";
;// ./src/assets/images/ecology/games_8.png
const games_8_namespaceObject = __webpack_require__.p + "83d4e33862e3b36249fe.png";
;// ./src/components/ecology/main.jsx












const ecology_main_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
    width: 90%;
    margin: auto;
	max-width: 600px;
    padding-top: 20px;
    padding-bottom: 100px;
	.game_title {
	    font-size: 20px;
		font-weight: bold;
		margin-bottom: 15px;
	}
	.game_conter {
    	padding-bottom: 40px;
	}
	.game_flex {
	    display: flex;
    	gap: 12px;
		margin-bottom: 5px;
		span {
			display: inline-block;
			width: 50%;
		}
		img {
			width: 100%;
		}
	}
	.museum_conter {
		text-align: center;
		span {
			display: block;
			margin-top: -90px;
			font-size: 14px;
    		color: #454545;
		}
	}
`;
function ecology_main_Main() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(ecology_main_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "game_title"
  }, t("Game Ecology")), /*#__PURE__*/react.createElement("div", {
    className: "game_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "game_flex"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("a", {
    href: "https://ddz.cryptoarena.io",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: games_1_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("a", {
    href: "https://tetris.cryptoarena.io",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: games_2_namespaceObject,
    alt: ""
  })))), /*#__PURE__*/react.createElement("div", {
    className: "game_flex"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("a", {
    href: "https://snake.cryptoarena.io",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: games_3_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("a", {
    href: "https://petcrush.cryptoarena.io",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: games_4_namespaceObject,
    alt: ""
  })))), /*#__PURE__*/react.createElement("div", {
    className: "game_flex"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("a", {
    href: "https://guandan.cryptoarena.io",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: games_5_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("a", {
    href: "https://mahjong.cryptoarena.io",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: games_6_namespaceObject,
    alt: ""
  })))), /*#__PURE__*/react.createElement("div", {
    className: "game_flex"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("a", {
    href: "https://cryptoarena.io/game/100006",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: games_7_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("a", {
    href: "https://cryptoarena.io/game/100008",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: games_8_namespaceObject,
    alt: ""
  }))))), /*#__PURE__*/react.createElement("div", {
    className: "game_title"
  }, t("Metaverse Museum")), /*#__PURE__*/react.createElement("div", {
    className: "museum_conter"
  }, /*#__PURE__*/react.createElement("img", {
    src: coming_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, t("Coming Soon"))));
}
/* harmony default export */ const ecology_main = (ecology_main_Main);
;// ./src/pages/ecology/index.jsx


function Ecology() {
  return /*#__PURE__*/react.createElement("div", {
    className: "conter_top"
  }, /*#__PURE__*/react.createElement(ecology_main, null));
}
/* harmony default export */ const ecology = (Ecology);
;// ./src/assets/images/news/news_bg.png
const news_bg_namespaceObject = __webpack_require__.p + "5a5a05f6a56b606edfb8.png";
;// ./src/assets/images/news/fanhui.png
const fanhui_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAARCAYAAADkIz3lAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAGxJREFUeAG10DERwDAIhWEkRAIS4ihIqINYqIQ6qJRKqIRIoHDHkCVAh/x3b/uGBAAnZkbZKyMPVUM69NCIUMsi7ZGVFep/0JVC4GWPHsuHTxAnXLdgrUW42Hm0I4Nvwx2i7KZpfBqmDCb96AewRdinA+gNrAAAAABJRU5ErkJggg==";
;// ./src/assets/images/news/des.png
const des_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAALVJREFUeAGtj70NwjAQhZ/5E2VGYAQGIEqyAWzACNChNJwbKGhCRQsTABPgSCkoYZOUSEgc584gxw18je/53jv7gF/Iiaa51suQp+WKHnBi5mCo7QpjzGOUpmcpizhJVFWW12DAUhlT25BSahdnWS367vYV0LjPUI7jE5hsiG7eHVxeQC3Tou7XvTewIBpI48LAfOVMt3QazczbtdZ7hF6YEUXWLOVBzAU8fAT6wNia5RuEf/EGRMs7JDI8JYUAAAAASUVORK5CYII=";
;// ./src/assets/images/news/gao1.png
const gao1_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAWZJREFUeAGtU8tNw0AQfTtEQigX04GpgFABDmkAOiAVIEvhwCnxCZEcgAriEqgg69AApgJcgg8IhGLPsJvEKB8HYoVnyVrt7Lx581MwaN3pc9mjoRIkecYX0U0zQQWQ/QnRPQSOAA2qkfZutVuFRHkD7RFIr1tUyJM82EaVOuvrByi62vgAiAUqUpyPc0ZcRqpag2ctEA/bIwHzI38ixD4cfCE1NREH1eCaVI9Rn9bvjer0QmIvd4Nru1NVyRoI/wBLkmIHmHIktTlJ9ZQy0yXiQAhRTZjHisj91UEhFZFEKcQs8ooPhFGvaYP3rJkMU4xSmRIx2OeMj0ad00N97Z3wu/imneneAbzFtzXzhUZat0jJOksm7dXJXFwPEfYXbRT5VhYHBYGJ2CwdbZglnYMZT8u2IlJPO/M812D269Ls13DmIeGo47WXlBSHTQQzR+r+qJhIsGr+c9i8vm5gui92FNgvS/UbP9SbxeGdxQQAAAAASUVORK5CYII=";
;// ./src/components/news/main.jsx













const news_main_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	background: #FFFFFF;
	height: 100vh;
	.news_banner_img {
		position: relative;
		img {
			width: 100%;
		}
	}
	.news_title {
		position: absolute;
		top: 10px;
		width: 100%;
		font-size: 16px;
		color: #fff;
		text-align: center;
		span {
			position: absolute;
    		left: 15px;
		}
		img {
			cursor: pointer;
		}
	}
	.news_conter {
		position: absolute;
		width: 100%;
		max-width: 600px;
		height: 30vh;
		margin-top: -30px;
		background: #FFFFFF;
		border-radius: 20px 20px 0 0;
		padding: 20px 15px;
		z-index: 9;
	}
	.news_con_title {
		font-size: 20px;
		margin-bottom: 10px;
	}
	.news_con_new {
		display: inline-block;
		background: #428BC1;
		color: #fff;
		font-size: 12px;
		border-radius: 5px;
		padding: 2px 5px;
		margin-bottom: 10px;
	}
	.news_list_conter {
		padding-bottom: 15px;
		margin-bottom: 15px;
		border-bottom: 1px solid #F0F0F0;
		cursor: pointer;
	}
	.news_des_time {
		display: flex;
    	justify-content: space-between;
		em {
			display: flex;
			align-items: center;
			font-size: 13px;
			color: #454545;
		}
		i {
			display: block;
			font-size: 13px;
			color: #000;
		}
	}
	.news_des_title {
		display: flex;
    	align-items: center;
		margin-top: 5px;
		span {
			font-size: 13px;
			margin-left: 10px;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
	}
`;
function news_main_Main() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const navigate = (0,react_router_dist/* useNavigate */.Zp)();
  const [loading, setLoading] = (0,react.useState)(true);
  const [newsList, setNewsList] = (0,react.useState)([]);
  const [pageNo, setPageNo] = (0,react.useState)(1); // 当前页码
  const [pageSize, setPageSize] = (0,react.useState)(10); // 每页条数
  const [total, setTotal] = (0,react.useState)(); // 总共数据条数

  const handleLink = link => {
    navigate(link);
    window.scrollTo(0, 0);
  };
  const goBack = () => {
    navigate(-1); // 返回上一页
  };

  // 公告列表
  const handleNewsList = async () => {
    setLoading(true);
    http.get(`${axiosUrl}/common/notice/page`).then(function (res) {
      if (res.code === 0) {
        const data = res.data;
        setLoading(false);
        setNewsList(data.list);
        setTotal(data.total);
      }
    }).catch(function (error) {
      console.log("error===>", error);
    });
  };
  (0,react.useEffect)(() => {
    // 公告列表
    handleNewsList();
  }, []);
  const onChangePage = (page, pageSize) => {
    setPageNo(page);
    setPageSize(pageSize);
  };
  return /*#__PURE__*/react.createElement(news_main_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "news_banner_img"
  }, /*#__PURE__*/react.createElement("img", {
    src: news_bg_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("div", {
    className: "news_title"
  }, /*#__PURE__*/react.createElement("span", {
    onClick: goBack
  }, /*#__PURE__*/react.createElement("img", {
    src: fanhui_namespaceObject,
    alt: ""
  })), t("Announcement"))), /*#__PURE__*/react.createElement("div", {
    className: "news_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "news_con_title"
  }, t("New Announcement")), /*#__PURE__*/react.createElement("div", {
    className: "news_con_new"
  }, "New"), !loading ? /*#__PURE__*/react.createElement("div", null, newsList.length > 0 ? newsList.map((item, index) => /*#__PURE__*/react.createElement("div", {
    key: index,
    className: "news_list_conter",
    onClick: () => {
      handleLink("/newsDetails/" + item.id);
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "news_des_time"
  }, /*#__PURE__*/react.createElement("em", null, formatTimestamp(item == null ? void 0 : item.createTime, "YYYY-MM-DD")), /*#__PURE__*/react.createElement("em", null, t("Detailss"), /*#__PURE__*/react.createElement("img", {
    src: des_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "news_des_title"
  }, /*#__PURE__*/react.createElement("img", {
    src: gao1_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, item == null ? void 0 : item.title)))) : /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(empty/* default */.A, {
    description: t("No Data")
  }))) : /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(spin/* default */.A, {
    indicator: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.A, {
      style: {
        fontSize: 48,
        color: "#FBBD15"
      },
      spin: true
    })
  })), newsList.length > 0 && /*#__PURE__*/react.createElement("div", {
    className: "pagination_conter"
  }, /*#__PURE__*/react.createElement(pagination/* default */.A, {
    onChange: onChangePage,
    defaultCurrent: pageNo,
    defaultPageSize: pageSize,
    total: total
  }))));
}
/* harmony default export */ const news_main = (news_main_Main);
;// ./src/pages/news/index.jsx


function News() {
  return /*#__PURE__*/react.createElement("div", {
    className: "conter_top"
  }, /*#__PURE__*/react.createElement(news_main, null));
}
/* harmony default export */ const news = (News);
;// ./src/assets/images/news/fanhui1.png
const fanhui1_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAR5JREFUeAHtlDF2wjAMhmX3Au2EnaljR9s5ASehR2DsVo6Sjt06doOeAB8BJmdMNyYL6b0MPB7ENoQJ/sXOi/JJjn4L4KETeoJCGWNedVWtldb/bQh+KFZCGdgIKZeACBDjKhWfDT8EI+LUe79JfZMFr+t61oO7XHAWnMERsSHwhsA2F5yEO+c+e7DvK+6gQHIITG1bEPTrEjAMga1zaKxt4AqdrJwqfaelo80CbgCfsjPIIWu2IFwoce4F30QhxBKEeMYY+Z97KNTZhrLljk4wg7HgBwksW5ESNMa5ORQoObjatt0ppb6lEG/0OK+0hhDCH4wtS9Zki7JVc+KLRi6d4odG7QttP2jdpkZu8Twn4K+aTLbUhxUlG+fW3pf2QuycbrgvBO4AAAAASUVORK5CYII=";
;// ./src/assets/images/news/des_bg.png
const des_bg_namespaceObject = __webpack_require__.p + "d47c324b7daad1a58c0f.png";
;// ./src/components/newsDetails/main.jsx









const newsDetails_main_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	padding: 0 15px;
	.news_back {
		padding: 10px 0px;
		img {
			cursor: pointer;
		}
	}
	.news_title {
		span {
		    display: block;
			font-size: 18px;
			font-weight: bold;
		}
		em {
			display: block;
			font-size: 13px;
			color: #454545;
			margin: 5px 0;
		}
	}
	.news_banner {
		img {
			width: 100%;
		}
	}
	.news_des_conter {
		margin-top: 20px;
    	padding-bottom: 50px;
		span {
		    display: block;
			font-size: 14px;
		}
	}
`;
function newsDetails_main_Main() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    id
  } = (0,react_router_dist/* useParams */.g)();
  const navigate = (0,react_router_dist/* useNavigate */.Zp)();
  const [newsDetails, setNewsDetails] = (0,react.useState)({});
  const goBack = () => {
    navigate(-1); // 返回上一页
  };

  // 公告详情
  const handleNewsDetails = async () => {
    http.get(`${axiosUrl}/common/notice/detail?id=${id}`).then(function (res) {
      if (res.code === 0) {
        const data = res.data;
        setNewsDetails(data);
      }
    }).catch(function (error) {
      console.log("error===>", error);
    });
  };
  (0,react.useEffect)(() => {
    // 公告详情
    handleNewsDetails();
  }, []);
  return /*#__PURE__*/react.createElement(newsDetails_main_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "news_back",
    onClick: goBack
  }, /*#__PURE__*/react.createElement("img", {
    src: fanhui1_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "news_title"
  }, /*#__PURE__*/react.createElement("span", null, newsDetails == null ? void 0 : newsDetails.title), /*#__PURE__*/react.createElement("em", null, formatTimestamp(newsDetails == null ? void 0 : newsDetails.createTime, "YYYY-MM-DD"))), /*#__PURE__*/react.createElement("div", {
    className: "news_banner"
  }, /*#__PURE__*/react.createElement("img", {
    src: des_bg_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "news_des_conter",
    dangerouslySetInnerHTML: {
      __html: newsDetails == null ? void 0 : newsDetails.content
    }
  }));
}
/* harmony default export */ const newsDetails_main = (newsDetails_main_Main);
;// ./src/pages/newsDetails/index.jsx


function NewsDetails() {
  return /*#__PURE__*/react.createElement("div", {
    className: "conter_top"
  }, /*#__PURE__*/react.createElement(newsDetails_main, null));
}
/* harmony default export */ const newsDetails = (NewsDetails);
;// ./src/pages/app.jsx






















const metaMaskConnector = new metaMask/* MetaMaskConnector */.j({
  chains: chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true
  }
});
const injectedConnector = new chunk_2VZS2JHJ/* InjectedConnector */.s({
  chains: chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true
  }
});
const app_client = (0,wagmi_dist/* createClient */.UU)({
  autoConnect: true,
  provider: provider,
  connectors: [metaMaskConnector, injectedConnector]
});
function App() {
  const [ready, setReady] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    setReady(true);
  }, []);

  // 启动页
  const [launch, setLaunch] = (0,react.useState)(() => getCookie('BTCSLaunch'));
  // 设置 BTCSLaunch 带过期时间
  (0,react.useEffect)(() => {
    // 如果 launch 为 null，说明需要显示启动页
    if (launch === null) {
      // 设置带 xx 秒过期的存储
      setCookie('BTCSLaunch', 'shown', 86400 * 1000);

      // xx 秒后更新状态
      const timer = setTimeout(() => {
        setLaunch(getCookie('BTCSLaunch'));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [launch]);
  if (launch === null) {
    return /*#__PURE__*/react.createElement(Launch_launch, null);
  }
  return /*#__PURE__*/react.createElement(react.Fragment, null, ready ? /*#__PURE__*/react.createElement(wagmi_dist/* WagmiConfig */.qZ, {
    client: app_client,
    className: `${"Index"}`
  }, /*#__PURE__*/react.createElement(index_esm/* HelmetProvider */.vd, null, /*#__PURE__*/react.createElement(InvitationProvider, null, /*#__PURE__*/react.createElement(MiningProvider, null, /*#__PURE__*/react.createElement(UserProvider, null, /*#__PURE__*/react.createElement(dist/* HashRouter */.I9, null, /*#__PURE__*/react.createElement(header, null), /*#__PURE__*/react.createElement(footer, null), /*#__PURE__*/react.createElement(react_router_dist/* Routes */.BV, null, /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/index",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/mining",
    element: /*#__PURE__*/react.createElement(mining, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/finance",
    element: /*#__PURE__*/react.createElement(finance, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/team",
    element: /*#__PURE__*/react.createElement(team, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/ecology",
    element: /*#__PURE__*/react.createElement(ecology, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/news",
    element: /*#__PURE__*/react.createElement(news, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/newsDetails/:id",
    element: /*#__PURE__*/react.createElement(newsDetails, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "*",
    element: /*#__PURE__*/react.createElement(index, null)
  })))))))) : null);
}
/* harmony default export */ const app = (App);
// EXTERNAL MODULE: ./node_modules/dayjs/locale/zh-cn.js
var zh_cn = __webpack_require__(6033);
// EXTERNAL MODULE: ./src/assets/css/common.css
var common = __webpack_require__(7566);
;// ./src/index.jsx





if (typeof BigInt === 'undefined') {
  window.BigInt = function (n) {
    return Number(n);
  };
}
const root = client.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/react.createElement(app, null));

/***/ },

/***/ 7790
() {

/* (ignored) */

/***/ },

/***/ 2038
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"Connect","Select Language":"Select Language","Home":"Home","Mining":"Mining","Finance":"Finance","Team":"Team","Ecology":"Ecology","Coming Soon":"Coming Soon","Team Information":"Team Information","Direct List":"Direct List","Game List":"Game List","Metaverse Museum":"Metaverse Museum","None":"None","Referral wallet address":"Referral wallet address","Invalid referrer wallet address format":"Invalid referrer wallet address format","Incorrect binding address":"Incorrect binding address","Bind successful":"Bind successful","Bind":"Bind","From Bitcoin to Layer 2 revolution!":"From Bitcoin to Layer 2 revolution!","BTC Rollup Network BTCS carries Bitcoin\'s original vision — not just a store of value, but the foundational operating system for the global economy.":"BTC Rollup Network BTCS carries Bitcoin\'s original vision — not just a store of value, but the foundational operating system for the global economy.","My Assets":"My Assets","Buy Miners":"Buy Miners","Renew Miners":"Renew Miners","BTC Rollup Network":"BTC Rollup Network","BTCS and Satoshi Nakamoto\'s block born synchronously":"BTCS and Satoshi Nakamoto\'s block born synchronously","On January 3, 2009 at 18:15:05 UTC, Satoshi Nakamoto mined the Bitcoin genesis block, ushering in a new era of decentralization and free circulation.":"On January 3, 2009 at 18:15:05 UTC, Satoshi Nakamoto mined the Bitcoin genesis block, ushering in a new era of decentralization and free circulation.","BTCS was also born at this historical moment, sharing the same block and starting point as Bitcoin, inheriting its decentralized spirit. Since then, BTCS has rooted itself in the legendary origin, paying tribute to its original intention and moving towards the future of blockchain.":"BTCS was also born at this historical moment, sharing the same block and starting point as Bitcoin, inheriting its decentralized spirit. Since then, BTCS has rooted itself in the legendary origin, paying tribute to its original intention and moving towards the future of blockchain.","Solve BTC scalability bottleneck":"Solve BTC scalability bottleneck","Layer 2 networks (Rollup / Cross-chain / Sidechain)":"Layer 2 networks (Rollup / Cross-chain / Sidechain)","Instant confirmation":"Instant confirmation","DeFi、NFT、RWA、SocialFi":"DeFi、NFT、RWA、SocialFi","Low fees & high throughput":"Low fees & high throughput","Move BTC from \'store of value\' to \'circulation\'":"Move BTC from \'store of value\' to \'circulation\'","Security":"Security","Anchored to BTC mainnet, inheriting security":"Anchored to BTC mainnet, inheriting security","Blockchain Browser":"Blockchain Browser","Partner":"Partner","Follow us":"Follow us","Recommended address":"Recommended address","Enter recommended address":"Enter recommended address","Confirm":"Confirm","Game Ecology":"Game Ecology","Shenma Mining":"Shenma Mining","Honeycomb Mining":"Honeycomb Mining","Revenue":"Revenue","Pending income":"Pending income","Cumulative Return":"Cumulative Return","Withdraws":"Withdraws","Details":"Details","Mining List":"Mining List","Running":"Running","LP Position":"LP Position","Electricity Countdown":"Electricity Countdown","D":"天","Destroy":"Destroy","Renew":"Renew","To be continued":"To be continued","Renewal cycle":"Renewal cycle","Activation fee":"Activation fee","To be activated":"To be activated","Activate":"Activate","Mining ID":"Mining ID","Times":"Times","Quantity":"Quantity","Claimed successfully":"Claimed successfully","Team count":"Team count","Direct count":"Direct count","Team Performance":"Team Performance","Team Incentives":"Team Incentives","My superior":"My superior","My invitation link":"My invitation link","Recommended List":"Recommended List","Reward Details":"Reward Details","Wallet address":"Wallet address","Performance":"Performance","Source address":"Source address","Date":"Date","Copy successful":"Copy successful","Claim Honeycomb Miner":"Claim Honeycomb Miner","Acceptable income":"Acceptable income","Received income":"Received income","Claim":"Claim","To be claimed":"To be claimed","Experience Miner":"Experience Miner","Experience miner activation successful":"Experience miner activation successful","Activation successful":"Activation successful","Insufficient balance":"Insufficient balance","BNB Insufficient balance":"BNB Insufficient balance","USDT Insufficient balance":"USDT Insufficient balance","Experience Coin Insufficient balance":"Experience Coin Insufficient balance","Experience Coin":"Experience Coin","Approve":"Approve","Mining type":"Mining type","Installment or not":"Installment or not","Installment-free":"Installment-free","Installment: 10 installments":"Installment: 10 installments","Installment":"Installment","Inactive":"Inactive","Needs charging":"Needs charging","Max Quantity":"Max Quantity:","Countdown to end":"Countdown to end","No Data":"No Data","Ended":"Ended","Select renewal cycle":"Select renewal cycle","Month":" Month","1 Month":"1 Month","2 Month":"2 Month","3 Month":"3 Month","4 Month":"4 Month","5 Month":"5 Month","6 Month":"6 Month","7 Month":"7 Month","8 Month":"8 Month","9 Month":"9 Month","10 Month":"10 Month","Renewal successful":"Renewal successful","Renewal amount":"Renewal amount","Amount Due":"Amount Due","Repayment":"Repayment","Repaid periods":"Repaid periods","Remaining periods":"Remaining periods","Select repayment period":"Select repayment period","Repayment amount":"Repayment amount","Repayment successful":"Repayment successful","Miner destroyed successfully":"Miner destroyed successfully","Cancel":"Cancel","Confirm destruction of this miner?":"Confirm destruction of this miner?","The miner is currently running. Confirm destruction of this miner? The remaining electricity fee will be refunded after destruction.":"The miner is currently running. Confirm destruction of this miner? The remaining electricity fee will be refunded after destruction.","This miner requires a 90-day lock-up period from the date of purchase before it can be destroyed.":"This miner requires a 90-day lock-up period from the date of purchase before it can be destroyed.","Electricity fee recharge":"Electricity fee recharge","insufficientBalance":"{{symbol}} Insufficient balance","My club":"My club","Announcement":"Announcement","New Announcement":"New Announcement","Detailss":"Details","The user declined to sign":"The user declined to sign","Daily Rewards":"Daily Rewards","Team Rewards":"Team Rewards","Node Rewards":"Node Rewards","Electricity Profit":"Electricity Profit","Type":"Type","Expenditure":"Expenditure","Income":"Income","Time":"Time","Withdraws successful":"Withdraws successful","Airdrop":"Airdrop","Transfer":"Transfer","Unknown":"Unknown","NFT Rewards":"NFT Rewards","Signature login failed, please refresh the page and try again":"Signature login failed, please refresh the page and try again","Asset Details":"Details","Withdraws Details":"Withdraws Details","Dividend":"Dividend","Pending Withdrawal":"Pending Withdrawal","Withdrawn":"Withdrawn","Status":"Status","Electricity bill":"Electricity bill","One month electricity bill":"One month electricity bill","month electricity bill":"{{month}} month electricity bill","Please contact the club to queue for a number":"Please contact the club to queue for a number","Approve Number":"Approve Number","Loading...":"Loading...","":""}');

/***/ },

/***/ 8062
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"Ikonekta ang Wallet","Select Language":"Pumili ng Wika","Home":"Home","Mining":"Miner","Finance":"Pananalapi","Team":"Team","Ecology":"Ekolohiya","Coming Soon":"Malapit na","Team Information":"Impormasyon ng Team","Direct List":"Listahan ng Direktang Referral","Game List":"Listahan ng Laro","Metaverse Museum":"Metaverse Museum","None":"Wala","Referral wallet address":"Pakilagay ang wallet address ng nag-refer","Invalid referrer wallet address format":"Hindi wasto ang format ng wallet address ng nag-refer","Incorrect binding address":"Mali ang binding address","Bind successful":"Matagumpay na nai-bind","Bind":"I-bind","From Bitcoin to Layer 2 revolution!":"Mula Bitcoin hanggang Layer 2 na rebolusyon!","BTC Rollup Network BTCS carries Bitcoin\'s original vision — not just a store of value, but the foundational operating system for the global economy.":"Ang BTC Rollup Network BTCS ay nagdadala ng orihinal na pananaw ng Bitcoin — hindi lamang isang imbakan ng halaga, kundi ang pangunahing operating system para sa pandaigdigang ekonomiya.","My Assets":"Aking mga Asset","Buy Miners":"Bumili ng Miner","Renew Miners":"I-renew ang Miner","BTC Rollup Network":"BTC Rollup Network","BTCS and Satoshi Nakamoto\'s block born synchronously":"Ang BTCS at block ni Satoshi Nakamoto ay sabay na isinilang","On January 3, 2009 at 18:15:05 UTC, Satoshi Nakamoto mined the Bitcoin genesis block, ushering in a new era of decentralization and free circulation.":"Noong Enero 3, 2009 sa 18:15:05 UTC, minina ni Satoshi Nakamoto ang Bitcoin genesis block, nagbigay-daan sa bagong panahon ng desentralisasyon at malayang sirkulasyon.","BTCS was also born at this historical moment, sharing the same block and starting point as Bitcoin, inheriting its decentralized spirit. Since then, BTCS has rooted itself in the legendary origin, paying tribute to its original intention and moving towards the future of blockchain.":"Ang BTCS ay isinilang din sa makasaysayang sandaling ito, kapareho ng block at panimulang punto ng Bitcoin, nagmana ng diwa ng desentralisasyon. Mula noon, ang BTCS ay nag-ugat sa maalamat na pinagmulan, nagbibigay-pugay sa orihinal na layunin at patungo sa kinabukasan ng blockchain.","Solve BTC scalability bottleneck":"Lutasin ang bottleneck ng scalability ng BTC","Layer 2 networks (Rollup / Cross-chain / Sidechain)":"Layer 2 networks (Rollup / Cross-chain / Sidechain)","Instant confirmation":"Agad na kumpirmasyon","DeFi、NFT、RWA、SocialFi":"DeFi, NFT, RWA, SocialFi","Low fees & high throughput":"Mababang bayad at mataas na throughput","Move BTC from \'store of value\' to \'circulation\'":"Ilipat ang BTC mula sa \'imbakan ng halaga\' tungo sa \'sirkulasyon\'","Security":"Seguridad","Anchored to BTC mainnet, inheriting security":"Naka-angkla sa BTC mainnet, nagmamana ng seguridad","Blockchain Browser":"Blockchain Browser","Partner":"Kasosyo","Follow us":"I-follow kami","Recommended address":"Inirerekomendang address","Enter recommended address":"Pakilagay ang inirerekomendang address","Confirm":"Kumpirmahin","Game Ecology":"Ekolohiya ng Laro","Shenma Mining":"Shenma Miner","Honeycomb Mining":"Honeycomb Miner","Revenue":"Pangkalahatang Kita","Pending income":"Kita na naghihintay","Cumulative Return":"Naipong Kita","Withdraws":"Mag-withdraw","Details":"Mga Detalye","Mining List":"Listahan ng Miner","Running":"Tumatakbo","LP Position":"LP Position","Electricity Countdown":"Countdown ng Kuryente","D":"Araw","Destroy":"Wasakin","Renew":"I-renew","To be continued":"Kailangang i-renew","Renewal cycle":"Cycle ng pag-renew","Activation fee":"Bayad sa pag-activate","To be activated":"Kailangang i-activate","Activate":"I-activate","Mining ID":"Miner ID","Times":"Oras ng pagbibigay","Quantity":"Dami","Claimed successfully":"Matagumpay na nakuha","Team count":"Kabuuang miyembro ng team","Direct count":"Bilang ng direktang referral","Team Performance":"Performance ng Team","Team Incentives":"Mga Gantimpala ng Team","My superior":"Aking superior","My invitation link":"Aking invitation link","Recommended List":"Listahan ng Rekomendasyon","Reward Details":"Detalye ng Gantimpala","Wallet address":"Wallet address","Performance":"Personal na performance","Source address":"Pinagmulang address","Date":"Petsa","Copy successful":"Matagumpay na nakopya","Claim Honeycomb Miner":"Kunin ang Honeycomb Miner","Acceptable income":"Kitang maaaring makuha","Received income":"Kitang natanggap na","Claim":"Kunin","To be claimed":"Hinihintay na makuha","Experience Miner":"Experience Miner","Experience miner activation successful":"Matagumpay na na-activate ang Experience Miner","Activation successful":"Matagumpay na pag-activate","Insufficient balance":"Hindi sapat ang balanse","BNB Insufficient balance":"Hindi sapat ang balanse ng BNB","USDT Insufficient balance":"Hindi sapat ang balanse ng USDT","Experience Coin Insufficient balance":"Hindi sapat ang balanse ng Experience Coin","Experience Coin":"Experience Coin","Approve":"Aprubahan","Mining type":"Uri ng miner","Installment or not":"Mag-installment o hindi","Installment-free":"Walang installment","Installment: 10 installments":"Installment: 10 na installment","Installment":"Installment","Inactive":"Hindi pa aktibo","Needs charging":"Kailangang i-charge","Max Quantity":"Pinakamataas na dami ng bibilhin:","Countdown to end":"Countdown hanggang matapos","No Data":"Walang Data","Ended":"Tapos na","Select renewal cycle":"Pumili ng cycle ng pag-renew","Month":"buwan","1 Month":"1 buwan","2 Month":"2 buwan","3 Month":"3 buwan","4 Month":"4 na buwan","5 Month":"5 buwan","6 Month":"6 na buwan","7 Month":"7 buwan","8 Month":"8 buwan","9 Month":"9 na buwan","10 Month":"10 buwan","Renewal successful":"Matagumpay na na-renew","Renewal amount":"Halaga ng pag-renew","Amount Due":"Halagang dapat bayaran","Repayment":"Magbayad","Repaid periods":"Mga nabayarang period","Remaining periods":"Natitirang period","Select repayment period":"Pumili ng period na babayaran","Repayment amount":"Halagang babayaran","Repayment successful":"Matagumpay na pagbabayad","Miner destroyed successfully":"Matagumpay na nasira ang miner","Cancel":"Kanselahin","Confirm destruction of this miner?":"Kumpirmahin ang pagsira ng miner na ito?","The miner is currently running. Confirm destruction of this miner? The remaining electricity fee will be refunded after destruction.":"Ang miner ay kasalukuyang tumatakbo. Kumpirmahin ang pagsira ng miner na ito? Ang natitirang bayad sa kuryente ay ibabalik pagkatapos masira.","This miner requires a 90-day lock-up period from the date of purchase before it can be destroyed.":"Ang miner na ito ay nangangailangan ng 90-araw na lock-up period mula sa petsa ng pagbili bago ito masira.","Electricity fee recharge":"Mag-recharge ng bayad sa kuryente","insufficientBalance":"Hindi sapat ang balanse ng {{symbol}}","My club":"Aking club","Announcement":"Anunsyo","New Announcement":"Bagong Anunsyo","Detailss":"Detalye","The user declined to sign":"Tumanggi ang user na pumirma","Daily Rewards":"Araw-araw na Pagbabahagi ng Coin","Team Rewards":"Mga Gantimpala ng Team","Node Rewards":"Kita sa Node","Electricity Profit":"Kita sa Kuryente","Type":"Uri","Expenditure":"Gastos","Income":"Kita","Time":"Oras","Withdraws successful":"Matagumpay na nag-withdraw","Airdrop":"Airdrop","Transfer":"Maglipat","Unknown":"Hindi alam","NFT Rewards":"Kita sa NFT","Signature login failed, please refresh the page and try again":"Nabigo ang signature login, paki-refresh ang page at subukan muli","Asset Details":"Detalye ng Asset","Withdraws Details":"Detalye ng Withdrawal","Dividend":"Dynamic na Dividend","Pending Withdrawal":"Naghihintay na withdrawal","Withdrawn":"Na-withdraw na","Status":"Status","Electricity bill":"Bayad sa kuryente","One month electricity bill":"Isang buwang bayad sa kuryente","month electricity bill":"{{month}} buwang bayad sa kuryente","Please contact the club to queue for a number":"Mangyaring makipag-ugnayan sa club para pumila para sa numero","Approve Number":"Numero ng Pag-apruba","Loading...":"Naglo-load...","":""}');

/***/ },

/***/ 7352
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"Hubungkan Dompet","Select Language":"Pilih Bahasa","Home":"Beranda","Mining":"Penambang","Finance":"Keuangan","Team":"Tim","Ecology":"Ekosistem","Coming Soon":"Segera Hadir","Team Information":"Informasi Tim","Direct List":"Daftar Referensi Langsung","Game List":"Daftar Game","Metaverse Museum":"Museum Metaverse","None":"Tidak Ada","Referral wallet address":"Masukkan alamat dompet referensi","Invalid referrer wallet address format":"Format alamat dompet referensi tidak valid","Incorrect binding address":"Alamat pengikatan salah","Bind successful":"Pengikatan berhasil","Bind":"Ikat","From Bitcoin to Layer 2 revolution!":"Dari Bitcoin ke revolusi Layer 2!","BTC Rollup Network BTCS carries Bitcoin\'s original vision — not just a store of value, but the foundational operating system for the global economy.":"Jaringan BTC Rollup BTCS membawa visi asli Bitcoin — bukan hanya penyimpan nilai, tetapi sistem operasi dasar untuk ekonomi global.","My Assets":"Aset Saya","Buy Miners":"Beli Penambang","Renew Miners":"Perbarui Penambang","BTC Rollup Network":"Jaringan BTC Rollup","BTCS and Satoshi Nakamoto\'s block born synchronously":"BTCS dan blok Satoshi Nakamoto lahir secara sinkron","On January 3, 2009 at 18:15:05 UTC, Satoshi Nakamoto mined the Bitcoin genesis block, ushering in a new era of decentralization and free circulation.":"Pada 3 Januari 2009 pukul 18:15:05 UTC, Satoshi Nakamoto menambang blok genesis Bitcoin, membuka era baru desentralisasi dan sirkulasi bebas.","BTCS was also born at this historical moment, sharing the same block and starting point as Bitcoin, inheriting its decentralized spirit. Since then, BTCS has rooted itself in the legendary origin, paying tribute to its original intention and moving towards the future of blockchain.":"BTCS juga lahir pada momen bersejarah ini, berbagi blok dan titik awal yang sama dengan Bitcoin, mewarisi semangat desentralisasinya. Sejak itu, BTCS berakar pada asal usul legendaris, memberikan penghormatan kepada niat aslinya dan bergerak menuju masa depan blockchain.","Solve BTC scalability bottleneck":"Atasi hambatan skalabilitas BTC","Layer 2 networks (Rollup / Cross-chain / Sidechain)":"Jaringan Layer 2 (Rollup / Lintas Rantai / Rantai Samping)","Instant confirmation":"Konfirmasi instan","DeFi、NFT、RWA、SocialFi":"DeFi, NFT, RWA, SocialFi","Low fees & high throughput":"Biaya rendah & throughput tinggi","Move BTC from \'store of value\' to \'circulation\'":"Pindahkan BTC dari \'penyimpan nilai\' ke \'sirkulasi\'","Security":"Keamanan","Anchored to BTC mainnet, inheriting security":"Berlabuh ke mainnet BTC, mewarisi keamanan","Blockchain Browser":"Peramban Blockchain","Partner":"Mitra","Follow us":"Ikuti kami","Recommended address":"Alamat yang direkomendasikan","Enter recommended address":"Masukkan alamat yang direkomendasikan","Confirm":"Konfirmasi","Game Ecology":"Ekosistem Game","Shenma Mining":"Penambang Shenma","Honeycomb Mining":"Penambang Honeycomb","Revenue":"Ikhtisar Pendapatan","Pending income":"Pendapatan yang belum diambil","Cumulative Return":"Pengembalian Kumulatif","Withdraws":"Penarikan","Details":"Rincian","Mining List":"Daftar Penambang","Running":"Berjalan","LP Position":"Posisi LP","Electricity Countdown":"Hitung Mundur Listrik","D":"H","Destroy":"Hancurkan","Renew":"Perbarui","To be continued":"Perlu diperbarui","Renewal cycle":"Siklus pembaruan","Activation fee":"Biaya aktivasi","To be activated":"Belum diaktifkan","Activate":"Aktifkan","Mining ID":"ID Penambang","Times":"Waktu pencairan","Quantity":"Jumlah","Claimed successfully":"Berhasil diklaim","Team count":"Jumlah anggota tim","Direct count":"Jumlah referensi langsung","Team Performance":"Kinerja Tim","Team Incentives":"Insentif Tim","My superior":"Atasan saya","My invitation link":"Tautan undangan saya","Recommended List":"Daftar Rekomendasi","Reward Details":"Rincian Hadiah","Wallet address":"Alamat dompet","Performance":"Kinerja pribadi","Source address":"Alamat sumber","Date":"Tanggal","Copy successful":"Salinan berhasil","Claim Honeycomb Miner":"Klaim Penambang Honeycomb","Acceptable income":"Pendapatan yang dapat diklaim","Received income":"Pendapatan yang diterima","Claim":"Klaim","To be claimed":"Belum diklaim","Experience Miner":"Penambang Pengalaman","Experience miner activation successful":"Aktivasi penambang pengalaman berhasil","Activation successful":"Aktivasi berhasil","Insufficient balance":"Saldo tidak mencukupi","BNB Insufficient balance":"Saldo BNB tidak mencukupi","USDT Insufficient balance":"Saldo USDT tidak mencukupi","Experience Coin Insufficient balance":"Saldo Koin Pengalaman tidak mencukupi","Experience Coin":"Koin Pengalaman","Approve":"Setujui","Mining type":"Jenis penambang","Installment or not":"Cicilan atau tidak","Installment-free":"Tanpa cicilan","Installment: 10 installments":"Cicilan: 10 cicilan","Installment":"Cicilan","Inactive":"Belum diaktifkan","Needs charging":"Perlu diisi daya","Max Quantity":"Jumlah maksimum:","Countdown to end":"Hitung mundur berakhir","No Data":"Tidak Ada Data","Ended":"Berakhir","Select renewal cycle":"Pilih siklus pembaruan","Month":"bulan","1 Month":"1 bulan","2 Month":"2 bulan","3 Month":"3 bulan","4 Month":"4 bulan","5 Month":"5 bulan","6 Month":"6 bulan","7 Month":"7 bulan","8 Month":"8 bulan","9 Month":"9 bulan","10 Month":"10 bulan","Renewal successful":"Pembaruan berhasil","Renewal amount":"Jumlah pembaruan","Amount Due":"Jumlah yang harus dibayar","Repayment":"Pembayaran kembali","Repaid periods":"Periode yang telah dibayar","Remaining periods":"Sisa periode","Select repayment period":"Pilih periode pembayaran kembali","Repayment amount":"Jumlah pembayaran kembali","Repayment successful":"Pembayaran kembali berhasil","Miner destroyed successfully":"Penambang berhasil dihancurkan","Cancel":"Batal","Confirm destruction of this miner?":"Konfirmasi penghancuran penambang ini?","The miner is currently running. Confirm destruction of this miner? The remaining electricity fee will be refunded after destruction.":"Penambang sedang berjalan. Konfirmasi penghancuran penambang ini? Biaya listrik yang tersisa akan dikembalikan setelah penghancuran.","This miner requires a 90-day lock-up period from the date of purchase before it can be destroyed.":"Penambang ini memerlukan periode lock-up 90 hari dari tanggal pembelian sebelum dapat dihancurkan.","Electricity fee recharge":"Isi ulang biaya listrik","insufficientBalance":"Saldo {{symbol}} tidak mencukupi","My club":"Klub saya","Announcement":"Pengumuman","New Announcement":"Pengumuman Terbaru","Detailss":"Rincian","The user declined to sign":"Pengguna menolak untuk menandatangani","Daily Rewards":"Hadiah Harian","Team Rewards":"Hadiah Tim","Node Rewards":"Hadiah Node","Electricity Profit":"Keuntungan Listrik","Type":"Jenis","Expenditure":"Pengeluaran","Income":"Pendapatan","Time":"Waktu","Withdraws successful":"Penarikan berhasil","Airdrop":"Airdrop","Transfer":"Transfer","Unknown":"Tidak diketahui","NFT Rewards":"Hadiah NFT","Signature login failed, please refresh the page and try again":"Login tanda tangan gagal, silakan refresh halaman dan coba lagi","Asset Details":"Rincian Aset","Withdraws Details":"Rincian Penarikan","Dividend":"Dividen Dinamis","Pending Withdrawal":"Penarikan Tertunda","Withdrawn":"Telah ditarik","Status":"Status","Electricity bill":"Tagihan listrik","One month electricity bill":"Tagihan listrik satu bulan","month electricity bill":"Tagihan listrik {{month}} bulan","Please contact the club to queue for a number":"Silakan hubungi klub untuk mengantre mengambil nomor","Approve Number":"Nomor Persetujuan","Loading...":"Memuat...","":""}');

/***/ },

/***/ 4175
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"ウォレット接続","Select Language":"言語選択","Home":"ホーム","Mining":"マイナー","Finance":"資産運用","Team":"チーム","Ecology":"エコシステム","Coming Soon":"近日公開","Team Information":"チーム情報","Direct List":"直紹介リスト","Game List":"ゲームリスト","Metaverse Museum":"メタバースミュージアム","None":"なし","Referral wallet address":"紹介者のウォレットアドレスを入力してください","Invalid referrer wallet address format":"紹介者のウォレットアドレス形式が正しくありません","Incorrect binding address":"バインドアドレスが正しくありません","Bind successful":"バインド成功","Bind":"バインド","From Bitcoin to Layer 2 revolution!":"ビットコインからレイヤー2革命へ！","BTC Rollup Network BTCS carries Bitcoin\'s original vision — not just a store of value, but the foundational operating system for the global economy.":"BTC Rollup Network BTCSはビットコインの本来のビジョンを継承します — 単なる価値保存手段ではなく、世界経済の基盤オペレーティングシステムです。","My Assets":"資産","Buy Miners":"マイナー購入","Renew Miners":"マイナー更新","BTC Rollup Network":"BTC Rollup Network","BTCS and Satoshi Nakamoto\'s block born synchronously":"BTCSとサトシ・ナカモトの同期誕生ブロック","On January 3, 2009 at 18:15:05 UTC, Satoshi Nakamoto mined the Bitcoin genesis block, ushering in a new era of decentralization and free circulation.":"2009年1月3日18:15:05（UTC）、サトシ・ナカモトはビットコインのジェネシスブロックを採掘し、分散化と自由流通の新時代を切り開きました。","BTCS was also born at this historical moment, sharing the same block and starting point as Bitcoin, inheriting its decentralized spirit. Since then, BTCS has rooted itself in the legendary origin, paying tribute to its original intention and moving towards the future of blockchain.":"BTCSもこの歴史的な瞬間に誕生し、ビットコインと同じブロックと出発点を共有し、その分散化の精神を受け継いでいます。それ以来、BTCSは伝説の原点に根ざし、初心に敬意を表し、ブロックチェーンの未来へと歩みを進めています。","Solve BTC scalability bottleneck":"BTCのスケーラビリティボトルネックを解決","Layer 2 networks (Rollup / Cross-chain / Sidechain)":"レイヤー2ネットワーク（Rollup / クロスチェーン / サイドチェーン）","Instant confirmation":"秒単位の確認","DeFi、NFT、RWA、SocialFi":"DeFi、NFT、RWA、SocialFi","Low fees & high throughput":"低手数料＆高スループット","Move BTC from \'store of value\' to \'circulation\'":"BTCを「価値の保存」から「流通」へ","Security":"セキュリティ","Anchored to BTC mainnet, inheriting security":"BTCメインネットにアンカー、セキュリティを継承","Blockchain Browser":"ブロックチェーンブラウザ","Partner":"パートナー","Follow us":"フォローする","Recommended address":"紹介アドレス","Enter recommended address":"紹介アドレスを入力してください","Confirm":"確認","Game Ecology":"ゲームエコシステム","Shenma Mining":"シェンママイナー","Honeycomb Mining":"ハニカムマイナー","Revenue":"収益概要","Pending income":"未受取収益","Cumulative Return":"累計収益","Withdraws":"引き出し","Details":"明細","Mining List":"マイナーリスト","Running":"稼働中","LP Position":"LPポジション","Electricity Countdown":"電気代カウントダウン","D":"日","Destroy":"破棄","Renew":"更新","To be continued":"更新待ち","Renewal cycle":"更新サイクル","Activation fee":"アクティベーション手数料","To be activated":"アクティベーション待ち","Activate":"アクティベート","Mining ID":"マイナーID","Times":"配布時間","Quantity":"数量","Claimed successfully":"受取成功","Team count":"チーム総人数","Direct count":"直紹介人数","Team Performance":"チーム実績","Team Incentives":"チーム報酬","My superior":"私の上位者","My invitation link":"招待リンク","Recommended List":"紹介リスト","Reward Details":"報酬明細","Wallet address":"ウォレットアドレス","Performance":"個人実績","Source address":"送信元アドレス","Date":"日付","Copy successful":"コピー成功","Claim Honeycomb Miner":"ハニカムマイナー受取","Acceptable income":"受取可能収益","Received income":"受取済み収益","Claim":"受取","To be claimed":"受取待ち","Experience Miner":"体験マイナー","Experience miner activation successful":"体験マイナーのアクティベーション成功","Activation successful":"アクティベーション成功","Insufficient balance":"残高不足","BNB Insufficient balance":"BNB残高不足","USDT Insufficient balance":"USDT残高不足","Experience Coin Insufficient balance":"体験コイン残高不足","Experience Coin":"体験コイン","Approve":"承認","Mining type":"マイナータイプ","Installment or not":"分割払いの有無","Installment-free":"一括払い","Installment: 10 installments":"分割：10回","Installment":"分割払い","Inactive":"アクティベーション待ち","Needs charging":"チャージ待ち","Max Quantity":"最大購入数量：","Countdown to end":"終了カウントダウン","No Data":"データなし","Ended":"終了","Select renewal cycle":"更新サイクルを選択","Month":"ヶ月","1 Month":"1ヶ月","2 Month":"2ヶ月","3 Month":"3ヶ月","4 Month":"4ヶ月","5 Month":"5ヶ月","6 Month":"6ヶ月","7 Month":"7ヶ月","8 Month":"8ヶ月","9 Month":"9ヶ月","10 Month":"10ヶ月","Renewal successful":"更新成功","Renewal amount":"更新金額","Amount Due":"返済待ち","Repayment":"返済","Repaid periods":"返済済み回数","Remaining periods":"残り回数","Select repayment period":"返済回数を選択","Repayment amount":"返済金額","Repayment successful":"返済成功","Miner destroyed successfully":"マイナー破棄成功","Cancel":"キャンセル","Confirm destruction of this miner?":"このマイナーを破棄しますか？","The miner is currently running. Confirm destruction of this miner? The remaining electricity fee will be refunded after destruction.":"このマイナーは現在稼働中です。破棄しますか？破棄後、残りの電気代は返金されます。","This miner requires a 90-day lock-up period from the date of purchase before it can be destroyed.":"このマイナーは購入日から90日間のロックアップ期間が必要です","Electricity fee recharge":"電気代チャージ","insufficientBalance":"{{symbol}}の残高が不足しています","My club":"マイクラブ","Announcement":"お知らせ","New Announcement":"最新お知らせ","Detailss":"詳細","The user declined to sign":"ユーザーが署名を拒否しました","Daily Rewards":"日次分配","Team Rewards":"チーム報酬","Node Rewards":"ノード収益","Electricity Profit":"電気代収益","Type":"タイプ","Expenditure":"支出","Income":"収入","Time":"時間","Withdraws successful":"引き出し成功","Airdrop":"エアドロップ","Transfer":"送金","Unknown":"不明","NFT Rewards":"NFT収益","Signature login failed, please refresh the page and try again":"署名ログインに失敗しました。ページを更新して再度お試しください","Asset Details":"資産明細","Withdraws Details":"引き出し明細","Dividend":"動的配当","Pending Withdrawal":"引き出し待ち","Withdrawn":"引き出し済み","Status":"ステータス","Electricity bill":"電気代","One month electricity bill":"1ヶ月分の電気代","month electricity bill":"{{month}}ヶ月分の電気代","Please contact the club to queue for a number":"クラブに連絡して整理券をお受け取りください","Approve Number":"認証ナンバープレート","Loading...":"読み込み中...","":""}');

/***/ },

/***/ 6628
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"지갑 연결","Select Language":"언어 선택","Home":"홈","Mining":"채굴기","Finance":"금융","Team":"팀","Ecology":"생태계","Coming Soon":"곧 오픈","Team Information":"팀 정보","Direct List":"직접 추천 목록","Game List":"게임 목록","Metaverse Museum":"메타버스 박물관","None":"없음","Referral wallet address":"추천인 지갑 주소를 입력하세요","Invalid referrer wallet address format":"추천인 지갑 주소 형식이 올바르지 않습니다","Incorrect binding address":"바인딩 주소가 올바르지 않습니다","Bind successful":"바인딩 성공","Bind":"바인딩","From Bitcoin to Layer 2 revolution!":"비트코인에서 레이어 2 혁명으로!","BTC Rollup Network BTCS carries Bitcoin\'s original vision — not just a store of value, but the foundational operating system for the global economy.":"BTC Rollup Network BTCS는 비트코인의 원래 비전을 계승합니다 — 단순한 가치 저장 수단이 아니라 세계 경제의 기반 운영 체제입니다.","My Assets":"내 자산","Buy Miners":"채굴기 구매","Renew Miners":"채굴기 연장","BTC Rollup Network":"BTC Rollup 네트워크","BTCS and Satoshi Nakamoto\'s block born synchronously":"BTCS와 사토시 나카모토의 블록 동시 탄생","On January 3, 2009 at 18:15:05 UTC, Satoshi Nakamoto mined the Bitcoin genesis block, ushering in a new era of decentralization and free circulation.":"2009년 1월 3일 18:15:05 (UTC), 사토시 나카모토가 비트코인 제네시스 블록을 채굴하여 탈중앙화와 자유 유통의 새로운 시대를 열었습니다.","BTCS was also born at this historical moment, sharing the same block and starting point as Bitcoin, inheriting its decentralized spirit. Since then, BTCS has rooted itself in the legendary origin, paying tribute to its original intention and moving towards the future of blockchain.":"BTCS도 이 역사적인 순간에 탄생하여 비트코인과 같은 블록과 출발점을 공유하며 탈중앙화 정신을 계승했습니다. 그 이후 BTCS는 전설적인 기원에 뿌리를 내리고, 초심에 경의를 표하며 블록체인의 미래로 나아가고 있습니다.","Solve BTC scalability bottleneck":"BTC 확장성 병목 현상 해결","Layer 2 networks (Rollup / Cross-chain / Sidechain)":"레이어 2 네트워크 (Rollup / 크로스체인 / 사이드체인)","Instant confirmation":"초단위 확인","DeFi、NFT、RWA、SocialFi":"DeFi, NFT, RWA, SocialFi","Low fees & high throughput":"낮은 수수료 & 높은 처리량","Move BTC from \'store of value\' to \'circulation\'":"BTC를 \'가치 저장\'에서 \'유통\'으로 전환","Security":"보안성","Anchored to BTC mainnet, inheriting security":"BTC 메인넷에 앵커링되어 보안성 계승","Blockchain Browser":"블록체인 브라우저","Partner":"파트너","Follow us":"팔로우하기","Recommended address":"추천 주소","Enter recommended address":"추천 주소를 입력하세요","Confirm":"확인","Game Ecology":"게임 생태계","Shenma Mining":"선마 채굴기","Honeycomb Mining":"허니콤 채굴기","Revenue":"수익 개요","Pending income":"수령 대기 수익","Cumulative Return":"누적 수익","Withdraws":"출금","Details":"내역","Mining List":"채굴기 목록","Running":"운영 중","LP Position":"LP 포지션","Electricity Countdown":"전기료 카운트다운","D":"일","Destroy":"소각","Renew":"연장","To be continued":"연장 대기","Renewal cycle":"연장 주기","Activation fee":"활성화 수수료","To be activated":"활성화 대기","Activate":"활성화","Mining ID":"채굴기 ID","Times":"지급 시간","Quantity":"수량","Claimed successfully":"수령 성공","Team count":"팀 총 인원","Direct count":"직접 추천 인원","Team Performance":"팀 실적","Team Incentives":"팀 보상","My superior":"내 상급자","My invitation link":"내 초대 링크","Recommended List":"추천 목록","Reward Details":"보상 내역","Wallet address":"지갑 주소","Performance":"개인 실적","Source address":"출처 주소","Date":"날짜","Copy successful":"복사 성공","Claim Honeycomb Miner":"허니콤 채굴기 수령","Acceptable income":"수령 가능 수익","Received income":"수령 완료 수익","Claim":"수령","To be claimed":"수령 대기","Experience Miner":"체험 채굴기","Experience miner activation successful":"체험 채굴기 활성화 성공","Activation successful":"활성화 성공","Insufficient balance":"잔액 부족","BNB Insufficient balance":"BNB 잔액 부족","USDT Insufficient balance":"USDT 잔액 부족","Experience Coin Insufficient balance":"체험 코인 잔액 부족","Experience Coin":"체험 코인","Approve":"승인","Mining type":"채굴기 유형","Installment or not":"할부 여부","Installment-free":"할부 없음","Installment: 10 installments":"할부: 10회","Installment":"할부","Inactive":"활성화 대기","Needs charging":"충전 필요","Max Quantity":"최대 구매 수량:","Countdown to end":"종료 카운트다운","No Data":"데이터 없음","Ended":"종료됨","Select renewal cycle":"연장 주기 선택","Month":"개월","1 Month":"1개월","2 Month":"2개월","3 Month":"3개월","4 Month":"4개월","5 Month":"5개월","6 Month":"6개월","7 Month":"7개월","8 Month":"8개월","9 Month":"9개월","10 Month":"10개월","Renewal successful":"연장 성공","Renewal amount":"연장 금액","Amount Due":"상환 대기","Repayment":"상환","Repaid periods":"상환 완료 회차","Remaining periods":"남은 회차","Select repayment period":"상환 회차 선택","Repayment amount":"상환 금액","Repayment successful":"상환 성공","Miner destroyed successfully":"채굴기 소각 성공","Cancel":"취소","Confirm destruction of this miner?":"이 채굴기를 소각하시겠습니까?","The miner is currently running. Confirm destruction of this miner? The remaining electricity fee will be refunded after destruction.":"이 채굴기는 현재 운영 중입니다. 소각하시겠습니까? 소각 후 남은 전기료는 환불됩니다.","This miner requires a 90-day lock-up period from the date of purchase before it can be destroyed.":"이 채굴기는 구매일로부터 90일간의 락업 기간이 필요합니다","Electricity fee recharge":"전기료 충전","insufficientBalance":"{{symbol}} 잔액이 부족합니다","My club":"내 클럽","Announcement":"공지사항","New Announcement":"최신 공지사항","Detailss":"상세 내용","The user declined to sign":"사용자가 서명을 거부했습니다","Daily Rewards":"일일 코인 분배","Team Rewards":"팀 보상","Node Rewards":"노드 수익","Electricity Profit":"전기료 수익","Type":"유형","Expenditure":"지출","Income":"수입","Time":"시간","Withdraws successful":"출금 성공","Airdrop":"에어드랍","Transfer":"전송","Unknown":"알 수 없음","NFT Rewards":"NFT 수익","Signature login failed, please refresh the page and try again":"서명 로그인에 실패했습니다. 페이지를 새로고침한 후 다시 시도해주세요","Asset Details":"자산 내역","Withdraws Details":"출금 내역","Dividend":"동적 배당","Pending Withdrawal":"출금 대기","Withdrawn":"출금 완료","Status":"상태","Electricity bill":"전기료","One month electricity bill":"1개월 전기료","month electricity bill":"{{month}}개월 전기료","Please contact the club to queue for a number":"클럽에 연락하여 번호표를 받으세요","Approve Number":"승인 번호판","Loading...":"로딩 중...","":""}');

/***/ },

/***/ 3232
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"Sambung Dompet","Select Language":"Pilih Bahasa","Home":"Laman Utama","Mining":"Pelombong","Finance":"Kewangan","Team":"Pasukan","Ecology":"Ekologi","Coming Soon":"Akan Datang","Team Information":"Maklumat Pasukan","Direct List":"Senarai Rujukan Langsung","Game List":"Senarai Permainan","Metaverse Museum":"Muzium Metaverse","None":"Tiada","Referral wallet address":"Masukkan alamat dompet penyokong","Invalid referrer wallet address format":"Format alamat dompet penyokong tidak sah","Incorrect binding address":"Alamat pengikatan tidak betul","Bind successful":"Pengikatan berjaya","Bind":"Ikat","From Bitcoin to Layer 2 revolution!":"Dari Bitcoin ke revolusi Lapisan 2!","BTC Rollup Network BTCS carries Bitcoin\'s original vision — not just a store of value, but the foundational operating system for the global economy.":"Rangkaian BTC Rollup BTCS membawa visi asal Bitcoin — bukan sekadar penyimpan nilai, tetapi sistem operasi asas untuk ekonomi global.","My Assets":"Aset Saya","Buy Miners":"Beli Pelombong","Renew Miners":"Perbaharui Pelombong","BTC Rollup Network":"Rangkaian BTC Rollup","BTCS and Satoshi Nakamoto\'s block born synchronously":"BTCS dan blok Satoshi Nakamoto lahir secara serentak","On January 3, 2009 at 18:15:05 UTC, Satoshi Nakamoto mined the Bitcoin genesis block, ushering in a new era of decentralization and free circulation.":"Pada 3 Januari 2009 jam 18:15:05 UTC, Satoshi Nakamoto melombong blok genesis Bitcoin, membuka era baru desentralisasi dan peredaran bebas.","BTCS was also born at this historical moment, sharing the same block and starting point as Bitcoin, inheriting its decentralized spirit. Since then, BTCS has rooted itself in the legendary origin, paying tribute to its original intention and moving towards the future of blockchain.":"BTCS juga lahir pada saat bersejarah ini, berkongsi blok dan titik permulaan yang sama dengan Bitcoin, mewarisi semangat desentralisasinya. Sejak itu, BTCS berakar pada asal usul legenda, memberi penghormatan kepada niat asalnya dan bergerak ke arah masa depan blockchain.","Solve BTC scalability bottleneck":"Selesaikan hambatan skalabiliti BTC","Layer 2 networks (Rollup / Cross-chain / Sidechain)":"Rangkaian Lapisan 2 (Rollup / Rantaian Silang / Rantaian Sisi)","Instant confirmation":"Pengesahan segera","DeFi、NFT、RWA、SocialFi":"DeFi, NFT, RWA, SocialFi","Low fees & high throughput":"Yuran rendah & daya pemprosesan tinggi","Move BTC from \'store of value\' to \'circulation\'":"Gerakkan BTC dari \'penyimpan nilai\' ke \'peredaran\'","Security":"Keselamatan","Anchored to BTC mainnet, inheriting security":"Berlabuh ke rangkaian utama BTC, mewarisi keselamatan","Blockchain Browser":"Pelayar Blockchain","Partner":"Rakan Kongsi","Follow us":"Ikuti kami","Recommended address":"Alamat yang disyorkan","Enter recommended address":"Masukkan alamat yang disyorkan","Confirm":"Sahkan","Game Ecology":"Ekologi Permainan","Shenma Mining":"Pelombong Shenma","Honeycomb Mining":"Pelombong Honeycomb","Revenue":"Gambaran Pendapatan","Pending income":"Pendapatan belum diterima","Cumulative Return":"Pulangan Terkumpul","Withdraws":"Pengeluaran","Details":"Butiran","Mining List":"Senarai Pelombong","Running":"Berjalan","LP Position":"Kedudukan LP","Electricity Countdown":"Kiraan Undur Elektrik","D":"H","Destroy":"Musnah","Renew":"Perbaharui","To be continued":"Perlu diperbaharui","Renewal cycle":"Kitaran pembaharuan","Activation fee":"Yuran pengaktifan","To be activated":"Belum diaktifkan","Activate":"Aktifkan","Mining ID":"ID Pelombong","Times":"Masa pengeluaran","Quantity":"Kuantiti","Claimed successfully":"Berjaya dituntut","Team count":"Jumlah ahli pasukan","Direct count":"Bilangan rujukan langsung","Team Performance":"Prestasi Pasukan","Team Incentives":"Insentif Pasukan","My superior":"Atasan saya","My invitation link":"Pautan jemputan saya","Recommended List":"Senarai Cadangan","Reward Details":"Butiran Ganjaran","Wallet address":"Alamat dompet","Performance":"Prestasi peribadi","Source address":"Alamat sumber","Date":"Tarikh","Copy successful":"Salinan berjaya","Claim Honeycomb Miner":"Tuntut Pelombong Honeycomb","Acceptable income":"Pendapatan boleh dituntut","Received income":"Pendapatan diterima","Claim":"Tuntut","To be claimed":"Belum dituntut","Experience Miner":"Pelombong Pengalaman","Experience miner activation successful":"Pengaktifan pelombong pengalaman berjaya","Activation successful":"Pengaktifan berjaya","Insufficient balance":"Baki tidak mencukupi","BNB Insufficient balance":"Baki BNB tidak mencukupi","USDT Insufficient balance":"Baki USDT tidak mencukupi","Experience Coin Insufficient balance":"Baki Syiling Pengalaman tidak mencukupi","Experience Coin":"Syiling Pengalaman","Approve":"Luluskan","Mining type":"Jenis pelombong","Installment or not":"Ansuran atau tidak","Installment-free":"Tanpa ansuran","Installment: 10 installments":"Ansuran: 10 ansuran","Installment":"Ansuran","Inactive":"Belum diaktifkan","Needs charging":"Perlu dicaj","Max Quantity":"Kuantiti maksimum:","Countdown to end":"Kiraan undur tamat","No Data":"Tiada Data","Ended":"Tamat","Select renewal cycle":"Pilih kitaran pembaharuan","Month":"bulan","1 Month":"1 bulan","2 Month":"2 bulan","3 Month":"3 bulan","4 Month":"4 bulan","5 Month":"5 bulan","6 Month":"6 bulan","7 Month":"7 bulan","8 Month":"8 bulan","9 Month":"9 bulan","10 Month":"10 bulan","Renewal successful":"Pembaharuan berjaya","Renewal amount":"Jumlah pembaharuan","Amount Due":"Jumlah perlu dibayar","Repayment":"Pembayaran balik","Repaid periods":"Tempoh telah dibayar","Remaining periods":"Tempoh berbaki","Select repayment period":"Pilih tempoh pembayaran balik","Repayment amount":"Jumlah pembayaran balik","Repayment successful":"Pembayaran balik berjaya","Miner destroyed successfully":"Pelombong berjaya dimusnahkan","Cancel":"Batal","Confirm destruction of this miner?":"Sahkan pemusnahan pelombong ini?","The miner is currently running. Confirm destruction of this miner? The remaining electricity fee will be refunded after destruction.":"Pelombong sedang berjalan. Sahkan pemusnahan pelombong ini? Yuran elektrik yang tinggal akan dikembalikan selepas pemusnahan.","This miner requires a 90-day lock-up period from the date of purchase before it can be destroyed.":"Pelombong ini memerlukan tempoh lock-up 90 hari dari tarikh pembelian sebelum boleh dimusnahkan.","Electricity fee recharge":"Isi semula yuran elektrik","insufficientBalance":"Baki {{symbol}} tidak mencukupi","My club":"Kelab saya","Announcement":"Pengumuman","New Announcement":"Pengumuman Terkini","Detailss":"Butiran","The user declined to sign":"Pengguna enggan menandatangani","Daily Rewards":"Ganjaran Harian","Team Rewards":"Ganjaran Pasukan","Node Rewards":"Ganjaran Nod","Electricity Profit":"Keuntungan Elektrik","Type":"Jenis","Expenditure":"Perbelanjaan","Income":"Pendapatan","Time":"Masa","Withdraws successful":"Pengeluaran berjaya","Airdrop":"Airdrop","Transfer":"Pindahan","Unknown":"Tidak diketahui","NFT Rewards":"Ganjaran NFT","Signature login failed, please refresh the page and try again":"Log masuk tandatangan gagal, sila muat semula halaman dan cuba lagi","Asset Details":"Butiran Aset","Withdraws Details":"Butiran Pengeluaran","Dividend":"Dividen Dinamik","Pending Withdrawal":"Pengeluaran Belum Selesai","Withdrawn":"Telah dikeluarkan","Status":"Status","Electricity bill":"Bil elektrik","One month electricity bill":"Bil elektrik sebulan","month electricity bill":"Bil elektrik {{month}} bulan","Please contact the club to queue for a number":"Sila hubungi kelab untuk排队 mengambil nombor","Approve Number":"Nombor Kelulusan","Loading...":"Memuat...","":""}');

/***/ },

/***/ 8150
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"เชื่อมต่อกระเป๋าเงิน","Select Language":"เลือกภาษา","Home":"หน้าหลัก","Mining":"เครื่องขุด","Finance":"การเงิน","Team":"ทีม","Ecology":"ระบบนิเวศ","Coming Soon":"เร็วๆ นี้","Team Information":"ข้อมูลทีม","Direct List":"รายการแนะนำตรง","Game List":"รายการเกม","Metaverse Museum":"พิพิธภัณฑ์ Metaverse","None":"ไม่มี","Referral wallet address":"กรุณากรอกที่อยู่กระเป๋าเงินผู้แนะนำ","Invalid referrer wallet address format":"รูปแบบที่อยู่กระเป๋าเงินผู้แนะนำไม่ถูกต้อง","Incorrect binding address":"ที่อยู่ผูกพันไม่ถูกต้อง","Bind successful":"ผูกพันสำเร็จ","Bind":"ผูกพัน","From Bitcoin to Layer 2 revolution!":"จาก Bitcoin สู่การปฏิวัติ Layer 2!","BTC Rollup Network BTCS carries Bitcoin\'s original vision — not just a store of value, but the foundational operating system for the global economy.":"เครือข่าย BTC Rollup BTCS สืบสานวิสัยทัศน์ดั้งเดิมของ Bitcoin — ไม่ใช่แค่การเก็บมูลค่า แต่เป็นระบบปฏิบัติการพื้นฐานสำหรับเศรษฐกิจโลก","My Assets":"สินทรัพย์ของฉัน","Buy Miners":"ซื้อเครื่องขุด","Renew Miners":"ต่ออายุเครื่องขุด","BTC Rollup Network":"เครือข่าย BTC Rollup","BTCS and Satoshi Nakamoto\'s block born synchronously":"BTCS และบล็อกของ Satoshi Nakamoto เกิดพร้อมกัน","On January 3, 2009 at 18:15:05 UTC, Satoshi Nakamoto mined the Bitcoin genesis block, ushering in a new era of decentralization and free circulation.":"เมื่อวันที่ 3 มกราคม 2009 เวลา 18:15:05 UTC Satoshi Nakamoto ได้ขุดบล็อก genesis ของ Bitcoin เปิดศักราชใหม่แห่งการกระจายอำนาจและการหมุนเวียนอย่างเสรี","BTCS was also born at this historical moment, sharing the same block and starting point as Bitcoin, inheriting its decentralized spirit. Since then, BTCS has rooted itself in the legendary origin, paying tribute to its original intention and moving towards the future of blockchain.":"BTCS ก็ถือกำเนิดขึ้นในช่วงเวลาประวัติศาสตร์นี้ แชร์บล็อกและจุดเริ่มต้นเดียวกันกับ Bitcoin สืบทอดจิตวิญญาณแห่งการกระจายอำนาจ นับตั้งแต่นั้น BTCS ได้หยั่งรากลึกในต้นกำเนิดในตำนาน สดุดีเจตนารมณ์ดั้งเดิมและก้าวไปสู่อนาคตของ blockchain","Solve BTC scalability bottleneck":"แก้ปัญหาคอขวดด้านความสามารถในการขยายขนาดของ BTC","Layer 2 networks (Rollup / Cross-chain / Sidechain)":"เครือข่าย Layer 2 (Rollup / Cross-chain / Sidechain)","Instant confirmation":"ยืนยันทันที","DeFi、NFT、RWA、SocialFi":"DeFi, NFT, RWA, SocialFi","Low fees & high throughput":"ค่าธรรมเนียมต่ำและปริมาณงานสูง","Move BTC from \'store of value\' to \'circulation\'":"ขับเคลื่อน BTC จาก \'การเก็บมูลค่า\' สู่ \'การหมุนเวียน\'","Security":"ความปลอดภัย","Anchored to BTC mainnet, inheriting security":"ยึดกับ mainnet ของ BTC สืบทอดความปลอดภัย","Blockchain Browser":"เบราว์เซอร์ Blockchain","Partner":"พันธมิตร","Follow us":"ติดตามเรา","Recommended address":"ที่อยู่แนะนำ","Enter recommended address":"กรุณากรอกที่อยู่แนะนำ","Confirm":"ยืนยัน","Game Ecology":"ระบบนิเวศเกม","Shenma Mining":"เครื่องขุด Shenma","Honeycomb Mining":"เครื่องขุด Honeycomb","Revenue":"ภาพรวมรายได้","Pending income":"รายได้ที่รอรับ","Cumulative Return":"ผลตอบแทนสะสม","Withdraws":"ถอน","Details":"รายละเอียด","Mining List":"รายการเครื่องขุด","Running":"กำลังทำงาน","LP Position":"สถานะ LP","Electricity Countdown":"นับถอยหลังค่าไฟฟ้า","D":"วัน","Destroy":"ทำลาย","Renew":"ต่ออายุ","To be continued":"รอต่ออายุ","Renewal cycle":"รอบการต่ออายุ","Activation fee":"ค่าธรรมเนียมการเปิดใช้งาน","To be activated":"รอเปิดใช้งาน","Activate":"เปิดใช้งาน","Mining ID":"ID เครื่องขุด","Times":"เวลาแจกจ่าย","Quantity":"จำนวน","Claimed successfully":"รับสำเร็จ","Team count":"จำนวนสมาชิกในทีมทั้งหมด","Direct count":"จำนวนผู้แนะนำตรง","Team Performance":"ผลงานทีม","Team Incentives":"รางวัลทีม","My superior":"ผู้บังคับบัญชาของฉัน","My invitation link":"ลิงก์เชิญของฉัน","Recommended List":"รายการแนะนำ","Reward Details":"รายละเอียดรางวัล","Wallet address":"ที่อยู่กระเป๋าเงิน","Performance":"ผลงานส่วนบุคคล","Source address":"ที่อยู่ต้นทาง","Date":"วันที่","Copy successful":"คัดลอกสำเร็จ","Claim Honeycomb Miner":"รับเครื่องขุด Honeycomb","Acceptable income":"รายได้ที่สามารถรับได้","Received income":"รายได้ที่ได้รับแล้ว","Claim":"รับ","To be claimed":"รอรับ","Experience Miner":"เครื่องขุดทดลอง","Experience miner activation successful":"เปิดใช้งานเครื่องขุดทดลองสำเร็จ","Activation successful":"เปิดใช้งานสำเร็จ","Insufficient balance":"ยอดเงินไม่เพียงพอ","BNB Insufficient balance":"ยอด BNB ไม่เพียงพอ","USDT Insufficient balance":"ยอด USDT ไม่เพียงพอ","Experience Coin Insufficient balance":"ยอดเหรียญทดลองไม่เพียงพอ","Experience Coin":"เหรียญทดลอง","Approve":"อนุมัติ","Mining type":"ประเภทเครื่องขุด","Installment or not":"ผ่อนชำระหรือไม่","Installment-free":"ไม่ผ่อนชำระ","Installment: 10 installments":"ผ่อนชำระ: 10 งวด","Installment":"ผ่อนชำระ","Inactive":"รอเปิดใช้งาน","Needs charging":"รอชาร์จ","Max Quantity":"จำนวนซื้อสูงสุด:","Countdown to end":"นับถอยหลังสิ้นสุด","No Data":"ไม่มีข้อมูล","Ended":"สิ้นสุดแล้ว","Select renewal cycle":"เลือกรอบการต่ออายุ","Month":"เดือน","1 Month":"1 เดือน","2 Month":"2 เดือน","3 Month":"3 เดือน","4 Month":"4 เดือน","5 Month":"5 เดือน","6 Month":"6 เดือน","7 Month":"7 เดือน","8 Month":"8 เดือน","9 Month":"9 เดือน","10 Month":"10 เดือน","Renewal successful":"ต่ออายุสำเร็จ","Renewal amount":"จำนวนเงินต่ออายุ","Amount Due":"รอชำระ","Repayment":"ชำระคืน","Repaid periods":"จำนวนงวดที่ชำระแล้ว","Remaining periods":"จำนวนงวดที่เหลือ","Select repayment period":"เลือกงวดการชำระคืน","Repayment amount":"จำนวนเงินชำระคืน","Repayment successful":"ชำระคืนสำเร็จ","Miner destroyed successfully":"ทำลายเครื่องขุดสำเร็จ","Cancel":"ยกเลิก","Confirm destruction of this miner?":"ยืนยันการทำลายเครื่องขุดนี้หรือไม่?","The miner is currently running. Confirm destruction of this miner? The remaining electricity fee will be refunded after destruction.":"เครื่องขุดนี้กำลังทำงานอยู่ ยืนยันการทำลายเครื่องขุดนี้หรือไม่? ค่าไฟฟ้าที่เหลือจะถูกคืนหลังจากทำลาย","This miner requires a 90-day lock-up period from the date of purchase before it can be destroyed.":"เครื่องขุดนี้ต้องล็อค 90 วันนับจากวันที่ซื้อจึงจะสามารถทำลายได้","Electricity fee recharge":"เติมค่าไฟฟ้า","insufficientBalance":"ยอด {{symbol}} ไม่เพียงพอ","My club":"คลับของฉัน","Announcement":"ประกาศ","New Announcement":"ประกาศล่าสุด","Detailss":"รายละเอียด","The user declined to sign":"ผู้ใช้ปฏิเสธการลงนาม","Daily Rewards":"แจกเหรียญรายวัน","Team Rewards":"รางวัลทีม","Node Rewards":"รายได้โหนด","Electricity Profit":"กำไรค่าไฟฟ้า","Type":"ประเภท","Expenditure":"รายจ่าย","Income":"รายรับ","Time":"เวลา","Withdraws successful":"ถอนสำเร็จ","Airdrop":"แจกฟรี","Transfer":"โอน","Unknown":"ไม่ทราบ","NFT Rewards":"รายได้ NFT","Signature login failed, please refresh the page and try again":"เข้าสู่ระบบด้วยลายเซ็นล้มเหลว โปรดรีเฟรชหน้าและลองอีกครั้ง","Asset Details":"รายละเอียดสินทรัพย์","Withdraws Details":"รายละเอียดการถอน","Dividend":"เงินปันผลแบบไดนามิก","Pending Withdrawal":"รอการถอน","Withdrawn":"ถอนแล้ว","Status":"สถานะ","Electricity bill":"ค่าไฟฟ้า","One month electricity bill":"ค่าไฟฟ้าหนึ่งเดือน","month electricity bill":"ค่าไฟฟ้า {{month}} เดือน","Please contact the club to queue for a number":"โปรดติดต่อคลับเพื่อเข้ารับคิว","Approve Number":"ป้ายทะเบียนอนุมัติ","Loading...":"กำลังโหลด...","":""}');

/***/ },

/***/ 7095
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"Kết nối ví","Select Language":"Chọn ngôn ngữ","Home":"Trang chủ","Mining":"Máy đào","Finance":"Tài chính","Team":"Đội nhóm","Ecology":"Hệ sinh thái","Coming Soon":"Sắp mở","Team Information":"Thông tin đội nhóm","Direct List":"Danh sách giới thiệu trực tiếp","Game List":"Danh sách game","Metaverse Museum":"Bảo tàng Metaverse","None":"Không có","Referral wallet address":"Vui lòng nhập địa chỉ ví người giới thiệu","Invalid referrer wallet address format":"Định dạng địa chỉ ví người giới thiệu không đúng","Incorrect binding address":"Địa chỉ liên kết không đúng","Bind successful":"Liên kết thành công","Bind":"Liên kết","From Bitcoin to Layer 2 revolution!":"Từ Bitcoin đến cuộc cách mạng Layer 2!","BTC Rollup Network BTCS carries Bitcoin\'s original vision — not just a store of value, but the foundational operating system for the global economy.":"Mạng BTC Rollup BTCS mang tầm nhìn ban đầu của Bitcoin — không chỉ là kho lưu trữ giá trị, mà còn là hệ điều hành nền tảng cho nền kinh tế toàn cầu.","My Assets":"Tài sản của tôi","Buy Miners":"Mua máy đào","Renew Miners":"Gia hạn máy đào","BTC Rollup Network":"Mạng BTC Rollup","BTCS and Satoshi Nakamoto\'s block born synchronously":"BTCS và khối của Satoshi Nakamoto ra đời đồng bộ","On January 3, 2009 at 18:15:05 UTC, Satoshi Nakamoto mined the Bitcoin genesis block, ushering in a new era of decentralization and free circulation.":"Vào lúc 18:15:05 UTC ngày 3 tháng 1 năm 2009, Satoshi Nakamoto đã đào khối khởi nguyên Bitcoin, mở ra kỷ nguyên mới của phi tập trung hóa và lưu thông tự do.","BTCS was also born at this historical moment, sharing the same block and starting point as Bitcoin, inheriting its decentralized spirit. Since then, BTCS has rooted itself in the legendary origin, paying tribute to its original intention and moving towards the future of blockchain.":"BTCS cũng ra đời vào thời khắc lịch sử này, chia sẻ cùng một khối và điểm khởi đầu với Bitcoin, kế thừa tinh thần phi tập trung của nó. Kể từ đó, BTCS bám rễ vào nguồn gốc huyền thoại, tri ân ý định ban đầu và hướng tới tương lai của blockchain.","Solve BTC scalability bottleneck":"Giải quyết nút thắt mở rộng BTC","Layer 2 networks (Rollup / Cross-chain / Sidechain)":"Mạng Layer 2 (Rollup / Cross-chain / Sidechain)","Instant confirmation":"Xác nhận tức thì","DeFi、NFT、RWA、SocialFi":"DeFi, NFT, RWA, SocialFi","Low fees & high throughput":"Phí thấp & thông lượng cao","Move BTC from \'store of value\' to \'circulation\'":"Đưa BTC từ \'kho lưu trữ giá trị\' sang \'lưu thông\'","Security":"Bảo mật","Anchored to BTC mainnet, inheriting security":"Neo vào mạng chính BTC, kế thừa bảo mật","Blockchain Browser":"Trình duyệt Blockchain","Partner":"Đối tác","Follow us":"Theo dõi chúng tôi","Recommended address":"Địa chỉ giới thiệu","Enter recommended address":"Vui lòng nhập địa chỉ giới thiệu","Confirm":"Xác nhận","Game Ecology":"Hệ sinh thái game","Shenma Mining":"Máy đào Shenma","Honeycomb Mining":"Máy đào Honeycomb","Revenue":"Tổng quan thu nhập","Pending income":"Thu nhập chờ nhận","Cumulative Return":"Lợi nhuận tích lũy","Withdraws":"Rút","Details":"Chi tiết","Mining List":"Danh sách máy đào","Running":"Đang chạy","LP Position":"Vị thế LP","Electricity Countdown":"Đếm ngược tiền điện","D":"Ngày","Destroy":"Hủy","Renew":"Gia hạn","To be continued":"Chờ gia hạn","Renewal cycle":"Chu kỳ gia hạn","Activation fee":"Phí kích hoạt","To be activated":"Chờ kích hoạt","Activate":"Kích hoạt","Mining ID":"ID máy đào","Times":"Thời gian phát","Quantity":"Số lượng","Claimed successfully":"Nhận thành công","Team count":"Tổng số thành viên nhóm","Direct count":"Số người giới thiệu trực tiếp","Team Performance":"Hiệu suất nhóm","Team Incentives":"Thưởng nhóm","My superior":"Cấp trên của tôi","My invitation link":"Link mời của tôi","Recommended List":"Danh sách giới thiệu","Reward Details":"Chi tiết thưởng","Wallet address":"Địa chỉ ví","Performance":"Hiệu suất cá nhân","Source address":"Địa chỉ nguồn","Date":"Ngày","Copy successful":"Sao chép thành công","Claim Honeycomb Miner":"Nhận máy đào Honeycomb","Acceptable income":"Thu nhập có thể nhận","Received income":"Thu nhập đã nhận","Claim":"Nhận","To be claimed":"Chờ nhận","Experience Miner":"Máy đào trải nghiệm","Experience miner activation successful":"Kích hoạt máy đào trải nghiệm thành công","Activation successful":"Kích hoạt thành công","Insufficient balance":"Số dư không đủ","BNB Insufficient balance":"Số dư BNB không đủ","USDT Insufficient balance":"Số dư USDT không đủ","Experience Coin Insufficient balance":"Số dư Coin trải nghiệm không đủ","Experience Coin":"Coin trải nghiệm","Approve":"Ủy quyền","Mining type":"Loại máy đào","Installment or not":"Có trả góp không","Installment-free":"Không trả góp","Installment: 10 installments":"Trả góp: 10 kỳ","Installment":"Trả góp","Inactive":"Chờ kích hoạt","Needs charging":"Chờ nạp","Max Quantity":"Số lượng mua tối đa:","Countdown to end":"Đếm ngược kết thúc","No Data":"Không có dữ liệu","Ended":"Đã kết thúc","Select renewal cycle":"Chọn chu kỳ gia hạn","Month":"tháng","1 Month":"1 tháng","2 Month":"2 tháng","3 Month":"3 tháng","4 Month":"4 tháng","5 Month":"5 tháng","6 Month":"6 tháng","7 Month":"7 tháng","8 Month":"8 tháng","9 Month":"9 tháng","10 Month":"10 tháng","Renewal successful":"Gia hạn thành công","Renewal amount":"Số tiền gia hạn","Amount Due":"Chờ thanh toán","Repayment":"Thanh toán","Repaid periods":"Số kỳ đã thanh toán","Remaining periods":"Số kỳ còn lại","Select repayment period":"Chọn kỳ thanh toán","Repayment amount":"Số tiền thanh toán","Repayment successful":"Thanh toán thành công","Miner destroyed successfully":"Hủy máy đào thành công","Cancel":"Hủy","Confirm destruction of this miner?":"Xác nhận hủy máy đào này?","The miner is currently running. Confirm destruction of this miner? The remaining electricity fee will be refunded after destruction.":"Máy đào này đang chạy. Xác nhận hủy máy đào này? Phí điện còn lại sẽ được hoàn lại sau khi hủy.","This miner requires a 90-day lock-up period from the date of purchase before it can be destroyed.":"Máy đào này cần khóa 90 ngày kể từ ngày mua mới có thể hủy","Electricity fee recharge":"Nạp tiền điện","insufficientBalance":"Số dư {{symbol}} không đủ","My club":"Câu lạc bộ của tôi","Announcement":"Thông báo","New Announcement":"Thông báo mới nhất","Detailss":"Chi tiết","The user declined to sign":"Người dùng từ chối ký","Daily Rewards":"Chia coin hàng ngày","Team Rewards":"Thưởng nhóm","Node Rewards":"Thu nhập node","Electricity Profit":"Lợi nhuận điện","Type":"Loại","Expenditure":"Chi","Income":"Thu","Time":"Thời gian","Withdraws successful":"Rút thành công","Airdrop":"Airdrop","Transfer":"Chuyển","Unknown":"Không xác định","NFT Rewards":"Thu nhập NFT","Signature login failed, please refresh the page and try again":"Đăng nhập chữ ký thất bại, vui lòng làm mới trang và thử lại","Asset Details":"Chi tiết tài sản","Withdraws Details":"Chi tiết rút","Dividend":"Cổ tức động","Pending Withdrawal":"Chờ rút","Withdrawn":"Đã rút","Status":"Trạng thái","Electricity bill":"Tiền điện","One month electricity bill":"Tiền điện một tháng","month electricity bill":"Tiền điện tháng {{month}}","Please contact the club to queue for a number":"Vui lòng liên hệ câu lạc bộ để xếp hàng lấy số","Approve Number":"Biển số ủy quyền","Loading...":"Đang tải...","":""}');

/***/ },

/***/ 5372
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"连接钱包","Select Language":"选择语言","Home":"首页","Mining":"矿机","Finance":"理财","Team":"团队","Ecology":"生态","Coming Soon":"即将开放","Team Information":"团队信息","Direct List":"直推列表","Game List":"游戏列表","Metaverse Museum":"元宇宙博物馆","None":"无","Referral wallet address":"请输入推荐人钱包地址","Invalid referrer wallet address format":"推荐人钱包地址格式不正确","Incorrect binding address":"绑定地址不正确","Bind successful":"绑定成功","Bind":"绑定","From Bitcoin to Layer 2 revolution!":"从比特币到二层革新!","BTC Rollup Network BTCS carries Bitcoin\'s original vision — not just a store of value, but the foundational operating system for the global economy.":"BTC Rollup Network BTCS承接比特币的初心，让它不仅是储值工具，更成为全球经济运行的底层操作系统。","My Assets":"我的资产","Buy Miners":"购买矿机","Renew Miners":"续费矿机","BTC Rollup Network":"BTC Rollup Network","BTCS and Satoshi Nakamoto\'s block born synchronously":"BTCS与中本聪同步诞生的区块","On January 3, 2009 at 18:15:05 UTC, Satoshi Nakamoto mined the Bitcoin genesis block, ushering in a new era of decentralization and free circulation.":"2009年1月3日18:15:05 (UTC)，中本聪挖出了比特币创世区块，开启了去中心化与自由流通的新时代。","BTCS was also born at this historical moment, sharing the same block and starting point as Bitcoin, inheriting its decentralized spirit. Since then, BTCS has rooted itself in the legendary origin, paying tribute to its original intention and moving towards the future of blockchain.":"BTCS同样诞生于这一历史时刻，与比特币共享同一区块与起点，继承其去中心化精神。自此，BTCS 扎根传奇原点，致敬初心，迈向区块链的未来。","Solve BTC scalability bottleneck":"解决 BTC 扩容瓶颈","Layer 2 networks (Rollup / Cross-chain / Sidechain)":"二层网络（Rollup / 跨链 / 侧链）","Instant confirmation":"秒级确认","DeFi、NFT、RWA、SocialFi":"DeFi、NFT、RWA、SocialFi","Low fees & high throughput":"低费率 & 高并发","Move BTC from \'store of value\' to \'circulation\'":"推动 BTC 从「储值」走向「流通」","Security":"安全性","Anchored to BTC mainnet, inheriting security":"与 BTC 主链锚定，继承安全性","Blockchain Browser":"区块链浏览器","Partner":"合作伙伴","Follow us":"关注我们","Recommended address":"推荐地址","Enter recommended address":"请输入推荐地址","Confirm":"确认","Game Ecology":"游戏生态","Shenma Mining":"神马矿机","Honeycomb Mining":"蜂巢矿机","Revenue":"收益概览","Pending income":"待领取收益","Cumulative Return":"累计收益","Withdraws":"提取","Details":"明细","Mining List":"矿机列表","Running":"运行中","LP Position":"LP持仓","Electricity Countdown":"电费倒计时","D":"天","Destroy":"销毁","Renew":"续费","To be continued":"待续费","Renewal cycle":"续费周期","Activation fee":"激活费用","To be activated":"待激活","Activate":"激活","Mining ID":"矿机ID","Times":"发放时间","Quantity":"数量","Claimed successfully":"领取成功","Team count":"团队总人数","Direct count":"直推人数","Team Performance":"团队业绩","Team Incentives":"团队奖励","My superior":"我的上级","My invitation link":"我的邀请链接","Recommended List":"推荐列表","Reward Details":"奖励明细","Wallet address":"钱包地址","Performance":"个人业绩","Source address":"来源地址","Date":"日期","Copy successful":"复制成功","Claim Honeycomb Miner":"领取蜂巢矿机","Acceptable income":"可领取收益","Received income":"已领取收益","Claim":"领取","To be claimed":"待领取","Experience Miner":"体验矿机","Experience miner activation successful":"体验矿机激活成功","Activation successful":"激活成功","Insufficient balance":"余额不足","BNB Insufficient balance":"BNB余额不足","USDT Insufficient balance":"USDT余额不足","Experience Coin Insufficient balance":"体验币余额不足","Experience Coin":"体验币","Approve":"授权","Mining type":"矿机类型","Installment or not":"是否分期","Installment-free":"不分期","Installment: 10 installments":"分期：10期","Installment":"分期","Inactive":"待激活","Needs charging":"待充电","Max Quantity":"最大购买数量:","Countdown to end":"结束倒计时","No Data":"暂无数据","Ended":"已结束","Select renewal cycle":"选择续费周期","Month":"个月","1 Month":"1个月","2 Month":"2个月","3 Month":"3个月","4 Month":"4个月","5 Month":"5个月","6 Month":"6个月","7 Month":"7个月","8 Month":"8个月","9 Month":"9个月","10 Month":"10个月","Renewal successful":"续费成功","Renewal amount":"续费金额","Amount Due":"待还款","Repayment":"还款","Repaid periods":"已还期数","Remaining periods":"剩余期数","Select repayment period":"选择还款期数","Repayment amount":"还款金额","Repayment successful":"还款成功","Miner destroyed successfully":"矿机销毁成功","Cancel":"取消","Confirm destruction of this miner?":"确认销毁该矿机？","The miner is currently running. Confirm destruction of this miner? The remaining electricity fee will be refunded after destruction.":"该矿机正在运行中，确认销毁改矿机？销毁后将退还剩余电费。","This miner requires a 90-day lock-up period from the date of purchase before it can be destroyed.":"该矿机自购买之日起，需要锁仓90天才可以销毁","Electricity fee recharge":"充值电费","insufficientBalance":"{{symbol}}余额不足","My club":"我的俱乐部","Announcement":"公告","New Announcement":"最新公告","Detailss":"详情","The user declined to sign":"用户拒绝签名","Daily Rewards":"每日分币","Team Rewards":"团队奖励","Node Rewards":"节点收益","Electricity Profit":"电费收益","Type":"类型","Expenditure":"支出","Income":"收入","Time":"时间","Withdraws successful":"提取成功","Airdrop":"空投","Transfer":"转账","Unknown":"未知","NFT Rewards":"NFT收益","Signature login failed, please refresh the page and try again":"签名登录失败，请刷新页面重试","Asset Details":"资产明细","Withdraws Details":"提取明细","Dividend":"动态分红","Pending Withdrawal":"待提取","Withdrawn":"已提取","Status":"状态","Electricity bill":"电费","One month electricity bill":"一个月电费","month electricity bill":"{{month}}月电费","Please contact the club to queue for a number":"请联系俱乐部排队取号","Approve Number":"授权号牌","Loading...":"加载中...","":""}');

/***/ },

/***/ 8380
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"連接錢包","Select Language":"選擇語言","Home":"首頁","Mining":"礦機","Finance":"理財","Team":"團隊","Ecology":"生態","Coming Soon":"即將開放","Team Information":"團隊資訊","Direct List":"直推列表","Game List":"遊戲列表","Metaverse Museum":"元宇宙博物館","None":"無","Referral wallet address":"請輸入推薦人錢包地址","Invalid referrer wallet address format":"推薦人錢包地址格式不正確","Incorrect binding address":"綁定地址不正確","Bind successful":"綁定成功","Bind":"綁定","From Bitcoin to Layer 2 revolution!":"從比特幣到二層革新！","BTC Rollup Network BTCS carries Bitcoin\'s original vision — not just a store of value, but the foundational operating system for the global economy.":"BTC Rollup Network BTCS承接比特幣的初心，讓它不僅是儲值工具，更成為全球經濟運行的底層作業系統。","My Assets":"我的資產","Buy Miners":"購買礦機","Renew Miners":"續費礦機","BTC Rollup Network":"BTC Rollup Network","BTCS and Satoshi Nakamoto\'s block born synchronously":"BTCS與中本聰同步誕生的區塊","On January 3, 2009 at 18:15:05 UTC, Satoshi Nakamoto mined the Bitcoin genesis block, ushering in a new era of decentralization and free circulation.":"2009年1月3日18:15:05 (UTC)，中本聰挖出了比特幣創世區塊，開啟了去中心化與自由流通的新時代。","BTCS was also born at this historical moment, sharing the same block and starting point as Bitcoin, inheriting its decentralized spirit. Since then, BTCS has rooted itself in the legendary origin, paying tribute to its original intention and moving towards the future of blockchain.":"BTCS同樣誕生於這一歷史時刻，與比特幣共享同一區塊與起點，繼承其去中心化精神。自此，BTCS扎根傳奇原點，致敬初心，邁向區塊鏈的未來。","Solve BTC scalability bottleneck":"解決 BTC 擴容瓶頸","Layer 2 networks (Rollup / Cross-chain / Sidechain)":"二層網路（Rollup / 跨鏈 / 側鏈）","Instant confirmation":"秒級確認","DeFi、NFT、RWA、SocialFi":"DeFi、NFT、RWA、SocialFi","Low fees & high throughput":"低費率 ＆ 高並發","Move BTC from \'store of value\' to \'circulation\'":"推動 BTC 從「儲值」走向「流通」","Security":"安全性","Anchored to BTC mainnet, inheriting security":"與 BTC 主鏈錨定，繼承安全性","Blockchain Browser":"區塊鏈瀏覽器","Partner":"合作夥伴","Follow us":"關注我們","Recommended address":"推薦地址","Enter recommended address":"請輸入推薦地址","Confirm":"確認","Game Ecology":"遊戲生態","Shenma Mining":"神馬礦機","Honeycomb Mining":"蜂巢礦機","Revenue":"收益概覽","Pending income":"待領取收益","Cumulative Return":"累計收益","Withdraws":"提取","Details":"明細","Mining List":"礦機列表","Running":"運行中","LP Position":"LP持倉","Electricity Countdown":"電費倒計時","D":"天","Destroy":"銷毀","Renew":"續費","To be continued":"待續費","Renewal cycle":"續費週期","Activation fee":"激活費用","To be activated":"待激活","Activate":"激活","Mining ID":"礦機ID","Times":"發放時間","Quantity":"數量","Claimed successfully":"領取成功","Team count":"團隊總人數","Direct count":"直推人數","Team Performance":"團隊業績","Team Incentives":"團隊獎勵","My superior":"我的上級","My invitation link":"我的邀請連結","Recommended List":"推薦列表","Reward Details":"獎勵明細","Wallet address":"錢包地址","Performance":"個人業績","Source address":"來源地址","Date":"日期","Copy successful":"複製成功","Claim Honeycomb Miner":"領取蜂巢礦機","Acceptable income":"可領取收益","Received income":"已領取收益","Claim":"領取","To be claimed":"待領取","Experience Miner":"體驗礦機","Experience miner activation successful":"體驗礦機激活成功","Activation successful":"激活成功","Insufficient balance":"餘額不足","BNB Insufficient balance":"BNB餘額不足","USDT Insufficient balance":"USDT餘額不足","Experience Coin Insufficient balance":"體驗幣餘額不足","Experience Coin":"體驗幣","Approve":"授權","Mining type":"礦機類型","Installment or not":"是否分期","Installment-free":"不分期","Installment: 10 installments":"分期：10期","Installment":"分期","Inactive":"待激活","Needs charging":"待充電","Max Quantity":"最大購買數量：","Countdown to end":"結束倒計時","No Data":"暫無數據","Ended":"已結束","Select renewal cycle":"選擇續費週期","Month":"個月","1 Month":"1個月","2 Month":"2個月","3 Month":"3個月","4 Month":"4個月","5 Month":"5個月","6 Month":"6個月","7 Month":"7個月","8 Month":"8個月","9 Month":"9個月","10 Month":"10個月","Renewal successful":"續費成功","Renewal amount":"續費金額","Amount Due":"待還款","Repayment":"還款","Repaid periods":"已還期數","Remaining periods":"剩餘期數","Select repayment period":"選擇還款期數","Repayment amount":"還款金額","Repayment successful":"還款成功","Miner destroyed successfully":"礦機銷毀成功","Cancel":"取消","Confirm destruction of this miner?":"確認銷毀該礦機？","The miner is currently running. Confirm destruction of this miner? The remaining electricity fee will be refunded after destruction.":"該礦機正在運行中，確認銷毀該礦機？銷毀後將退還剩餘電費。","This miner requires a 90-day lock-up period from the date of purchase before it can be destroyed.":"該礦機自購買之日起，需要鎖倉90天才可以銷毀","Electricity fee recharge":"充值電費","insufficientBalance":"{{symbol}}餘額不足","My club":"我的俱樂部","Announcement":"公告","New Announcement":"最新公告","Detailss":"詳情","The user declined to sign":"用戶拒絕簽名","Daily Rewards":"每日分幣","Team Rewards":"團隊獎勵","Node Rewards":"節點收益","Electricity Profit":"電費收益","Type":"類型","Expenditure":"支出","Income":"收入","Time":"時間","Withdraws successful":"提取成功","Airdrop":"空投","Transfer":"轉帳","Unknown":"未知","NFT Rewards":"NFT收益","Signature login failed, please refresh the page and try again":"簽名登入失敗，請重新整理頁面後重試","Asset Details":"資產明細","Withdraws Details":"提取明細","Dividend":"動態分紅","Pending Withdrawal":"待提取","Withdrawn":"已提取","Status":"狀態","Electricity bill":"電費","One month electricity bill":"一個月電費","month electricity bill":"{{month}}月電費","Please contact the club to queue for a number":"請聯繫俱樂部排隊取號","Approve Number":"授權號牌","Loading...":"載入中...","":""}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktoken"] = self["webpackChunktoken"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [620], () => (__webpack_require__(6060)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;