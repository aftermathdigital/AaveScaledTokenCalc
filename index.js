import Web3 from 'web3';
import Multicall from '@dopex-io/web3-multicall';

const uiABI = [
    {
       "inputs":[
          {
             "internalType":"contract IEACAggregatorProxy",
             "name":"_networkBaseTokenPriceInUsdProxyAggregator",
             "type":"address"
          },
          {
             "internalType":"contract IEACAggregatorProxy",
             "name":"_marketReferenceCurrencyPriceInUsdProxyAggregator",
             "type":"address"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"constructor"
    },
    {
       "inputs":[
          
       ],
       "name":"ETH_CURRENCY_UNIT",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"MKR_ADDRESS",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"bytes32",
             "name":"_bytes32",
             "type":"bytes32"
          }
       ],
       "name":"bytes32ToString",
       "outputs":[
          {
             "internalType":"string",
             "name":"",
             "type":"string"
          }
       ],
       "stateMutability":"pure",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"contract IPoolAddressesProvider",
             "name":"provider",
             "type":"address"
          }
       ],
       "name":"getReservesData",
       "outputs":[
          {
             "components":[
                {
                   "internalType":"address",
                   "name":"underlyingAsset",
                   "type":"address"
                },
                {
                   "internalType":"string",
                   "name":"name",
                   "type":"string"
                },
                {
                   "internalType":"string",
                   "name":"symbol",
                   "type":"string"
                },
                {
                   "internalType":"uint256",
                   "name":"decimals",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"baseLTVasCollateral",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"reserveLiquidationThreshold",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"reserveLiquidationBonus",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"reserveFactor",
                   "type":"uint256"
                },
                {
                   "internalType":"bool",
                   "name":"usageAsCollateralEnabled",
                   "type":"bool"
                },
                {
                   "internalType":"bool",
                   "name":"borrowingEnabled",
                   "type":"bool"
                },
                {
                   "internalType":"bool",
                   "name":"stableBorrowRateEnabled",
                   "type":"bool"
                },
                {
                   "internalType":"bool",
                   "name":"isActive",
                   "type":"bool"
                },
                {
                   "internalType":"bool",
                   "name":"isFrozen",
                   "type":"bool"
                },
                {
                   "internalType":"uint128",
                   "name":"liquidityIndex",
                   "type":"uint128"
                },
                {
                   "internalType":"uint128",
                   "name":"variableBorrowIndex",
                   "type":"uint128"
                },
                {
                   "internalType":"uint128",
                   "name":"liquidityRate",
                   "type":"uint128"
                },
                {
                   "internalType":"uint128",
                   "name":"variableBorrowRate",
                   "type":"uint128"
                },
                {
                   "internalType":"uint128",
                   "name":"stableBorrowRate",
                   "type":"uint128"
                },
                {
                   "internalType":"uint40",
                   "name":"lastUpdateTimestamp",
                   "type":"uint40"
                },
                {
                   "internalType":"address",
                   "name":"aTokenAddress",
                   "type":"address"
                },
                {
                   "internalType":"address",
                   "name":"stableDebtTokenAddress",
                   "type":"address"
                },
                {
                   "internalType":"address",
                   "name":"variableDebtTokenAddress",
                   "type":"address"
                },
                {
                   "internalType":"address",
                   "name":"interestRateStrategyAddress",
                   "type":"address"
                },
                {
                   "internalType":"uint256",
                   "name":"availableLiquidity",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"totalPrincipalStableDebt",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"averageStableRate",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"stableDebtLastUpdateTimestamp",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"totalScaledVariableDebt",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"priceInMarketReferenceCurrency",
                   "type":"uint256"
                },
                {
                   "internalType":"address",
                   "name":"priceOracle",
                   "type":"address"
                },
                {
                   "internalType":"uint256",
                   "name":"variableRateSlope1",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"variableRateSlope2",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"stableRateSlope1",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"stableRateSlope2",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"baseStableBorrowRate",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"baseVariableBorrowRate",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"optimalUsageRatio",
                   "type":"uint256"
                },
                {
                   "internalType":"bool",
                   "name":"isPaused",
                   "type":"bool"
                },
                {
                   "internalType":"bool",
                   "name":"isSiloedBorrowing",
                   "type":"bool"
                },
                {
                   "internalType":"uint128",
                   "name":"accruedToTreasury",
                   "type":"uint128"
                },
                {
                   "internalType":"uint128",
                   "name":"unbacked",
                   "type":"uint128"
                },
                {
                   "internalType":"uint128",
                   "name":"isolationModeTotalDebt",
                   "type":"uint128"
                },
                {
                   "internalType":"bool",
                   "name":"flashLoanEnabled",
                   "type":"bool"
                },
                {
                   "internalType":"uint256",
                   "name":"debtCeiling",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"debtCeilingDecimals",
                   "type":"uint256"
                },
                {
                   "internalType":"uint8",
                   "name":"eModeCategoryId",
                   "type":"uint8"
                },
                {
                   "internalType":"uint256",
                   "name":"borrowCap",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"supplyCap",
                   "type":"uint256"
                },
                {
                   "internalType":"uint16",
                   "name":"eModeLtv",
                   "type":"uint16"
                },
                {
                   "internalType":"uint16",
                   "name":"eModeLiquidationThreshold",
                   "type":"uint16"
                },
                {
                   "internalType":"uint16",
                   "name":"eModeLiquidationBonus",
                   "type":"uint16"
                },
                {
                   "internalType":"address",
                   "name":"eModePriceSource",
                   "type":"address"
                },
                {
                   "internalType":"string",
                   "name":"eModeLabel",
                   "type":"string"
                },
                {
                   "internalType":"bool",
                   "name":"borrowableInIsolation",
                   "type":"bool"
                }
             ],
             "internalType":"struct IUiPoolDataProviderV3.AggregatedReserveData[]",
             "name":"",
             "type":"tuple[]"
          },
          {
             "components":[
                {
                   "internalType":"uint256",
                   "name":"marketReferenceCurrencyUnit",
                   "type":"uint256"
                },
                {
                   "internalType":"int256",
                   "name":"marketReferenceCurrencyPriceInUsd",
                   "type":"int256"
                },
                {
                   "internalType":"int256",
                   "name":"networkBaseTokenPriceInUsd",
                   "type":"int256"
                },
                {
                   "internalType":"uint8",
                   "name":"networkBaseTokenPriceDecimals",
                   "type":"uint8"
                }
             ],
             "internalType":"struct IUiPoolDataProviderV3.BaseCurrencyInfo",
             "name":"",
             "type":"tuple"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"contract IPoolAddressesProvider",
             "name":"provider",
             "type":"address"
          }
       ],
       "name":"getReservesList",
       "outputs":[
          {
             "internalType":"address[]",
             "name":"",
             "type":"address[]"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"contract IPoolAddressesProvider",
             "name":"provider",
             "type":"address"
          },
          {
             "internalType":"address",
             "name":"user",
             "type":"address"
          }
       ],
       "name":"getUserReservesData",
       "outputs":[
          {
             "components":[
                {
                   "internalType":"address",
                   "name":"underlyingAsset",
                   "type":"address"
                },
                {
                   "internalType":"uint256",
                   "name":"scaledATokenBalance",
                   "type":"uint256"
                },
                {
                   "internalType":"bool",
                   "name":"usageAsCollateralEnabledOnUser",
                   "type":"bool"
                },
                {
                   "internalType":"uint256",
                   "name":"stableBorrowRate",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"scaledVariableDebt",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"principalStableDebt",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"stableBorrowLastUpdateTimestamp",
                   "type":"uint256"
                }
             ],
             "internalType":"struct IUiPoolDataProviderV3.UserReserveData[]",
             "name":"",
             "type":"tuple[]"
          },
          {
             "internalType":"uint8",
             "name":"",
             "type":"uint8"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"marketReferenceCurrencyPriceInUsdProxyAggregator",
       "outputs":[
          {
             "internalType":"contract IEACAggregatorProxy",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"networkBaseTokenPriceInUsdProxyAggregator",
       "outputs":[
          {
             "internalType":"contract IEACAggregatorProxy",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    }
]

const dataABI = [
    {
       "inputs":[
          {
             "internalType":"contract IPoolAddressesProvider",
             "name":"addressesProvider",
             "type":"address"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"constructor"
    },
    {
       "inputs":[
          
       ],
       "name":"ADDRESSES_PROVIDER",
       "outputs":[
          {
             "internalType":"contract IPoolAddressesProvider",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"asset",
             "type":"address"
          }
       ],
       "name":"getATokenTotalSupply",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"getAllATokens",
       "outputs":[
          {
             "components":[
                {
                   "internalType":"string",
                   "name":"symbol",
                   "type":"string"
                },
                {
                   "internalType":"address",
                   "name":"tokenAddress",
                   "type":"address"
                }
             ],
             "internalType":"struct AaveProtocolDataProvider.TokenData[]",
             "name":"",
             "type":"tuple[]"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"getAllReservesTokens",
       "outputs":[
          {
             "components":[
                {
                   "internalType":"string",
                   "name":"symbol",
                   "type":"string"
                },
                {
                   "internalType":"address",
                   "name":"tokenAddress",
                   "type":"address"
                }
             ],
             "internalType":"struct AaveProtocolDataProvider.TokenData[]",
             "name":"",
             "type":"tuple[]"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"asset",
             "type":"address"
          }
       ],
       "name":"getDebtCeiling",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"getDebtCeilingDecimals",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"pure",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"asset",
             "type":"address"
          }
       ],
       "name":"getInterestRateStrategyAddress",
       "outputs":[
          {
             "internalType":"address",
             "name":"irStrategyAddress",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"asset",
             "type":"address"
          }
       ],
       "name":"getLiquidationProtocolFee",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"asset",
             "type":"address"
          }
       ],
       "name":"getPaused",
       "outputs":[
          {
             "internalType":"bool",
             "name":"isPaused",
             "type":"bool"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"asset",
             "type":"address"
          }
       ],
       "name":"getReserveCaps",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"borrowCap",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"supplyCap",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"asset",
             "type":"address"
          }
       ],
       "name":"getReserveConfigurationData",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"decimals",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"ltv",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"liquidationThreshold",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"liquidationBonus",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"reserveFactor",
             "type":"uint256"
          },
          {
             "internalType":"bool",
             "name":"usageAsCollateralEnabled",
             "type":"bool"
          },
          {
             "internalType":"bool",
             "name":"borrowingEnabled",
             "type":"bool"
          },
          {
             "internalType":"bool",
             "name":"stableBorrowRateEnabled",
             "type":"bool"
          },
          {
             "internalType":"bool",
             "name":"isActive",
             "type":"bool"
          },
          {
             "internalType":"bool",
             "name":"isFrozen",
             "type":"bool"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"asset",
             "type":"address"
          }
       ],
       "name":"getReserveData",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"unbacked",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"accruedToTreasuryScaled",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"totalAToken",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"totalStableDebt",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"totalVariableDebt",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"liquidityRate",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"variableBorrowRate",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"stableBorrowRate",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"averageStableBorrowRate",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"liquidityIndex",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"variableBorrowIndex",
             "type":"uint256"
          },
          {
             "internalType":"uint40",
             "name":"lastUpdateTimestamp",
             "type":"uint40"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"asset",
             "type":"address"
          }
       ],
       "name":"getReserveEModeCategory",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"asset",
             "type":"address"
          }
       ],
       "name":"getReserveTokensAddresses",
       "outputs":[
          {
             "internalType":"address",
             "name":"aTokenAddress",
             "type":"address"
          },
          {
             "internalType":"address",
             "name":"stableDebtTokenAddress",
             "type":"address"
          },
          {
             "internalType":"address",
             "name":"variableDebtTokenAddress",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"asset",
             "type":"address"
          }
       ],
       "name":"getSiloedBorrowing",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"asset",
             "type":"address"
          }
       ],
       "name":"getTotalDebt",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"asset",
             "type":"address"
          }
       ],
       "name":"getUnbackedMintCap",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"asset",
             "type":"address"
          },
          {
             "internalType":"address",
             "name":"user",
             "type":"address"
          }
       ],
       "name":"getUserReserveData",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"currentATokenBalance",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"currentStableDebt",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"currentVariableDebt",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"principalStableDebt",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"scaledVariableDebt",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"stableBorrowRate",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"liquidityRate",
             "type":"uint256"
          },
          {
             "internalType":"uint40",
             "name":"stableRateLastUpdated",
             "type":"uint40"
          },
          {
             "internalType":"bool",
             "name":"usageAsCollateralEnabled",
             "type":"bool"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    }
 ]

function raymul(a, b) {
    return (halfRAY + (a*b)) / RAY
}

const RAY = BigInt(1e27);
const halfRAY = RAY / BigInt(2);

const poolAddressesProvider = "0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb"
const user = "0x542fa573c6ecb433fe45286787c6b8ca65858b2a"
const weth = "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"

async function main() {
  const web3 = new Web3("https://arbitrum-one-rpc.publicnode.com");

  const multicall = new Multicall({
    chainId: 42161,
    multicallAddress: "0xcA11bde05977b3631167028862bE2a173976CA11",
    provider: web3,
  });

  const ui = new web3.eth.Contract(uiABI, "0x145dE30c929a065582da84Cf96F88460dB9745A7")
  const data = new web3.eth.Contract(dataABI, "0x69FA688f1Dc47d4B5d8029D5a35FB7a548310654")

  const out = await multicall.aggregate([
    ui.methods.getReservesData(poolAddressesProvider),
    ui.methods.getUserReservesData(poolAddressesProvider, user),
    data.methods.getUserReserveData(weth, user),
  ]);

  const weth_reserve_data = out[0][0][4]
  const ui_user_weth_reserve_data = out[1][0][4]
  const data_user_weth_reserve_data = out[2]

//   console.log(weth_reserve_data)
//   console.log(ui_user_weth_reserve_data)
//   console.log(data_user_weth_reserve_data)


  const weth_liquidity_index = BigInt(weth_reserve_data[13])
  const weth_scaledATokenBalance = BigInt(ui_user_weth_reserve_data[1])
  console.log("liquidityIndex:\t\t\t",weth_liquidity_index)
  console.log("scaledATokenBalance:\t\t",weth_scaledATokenBalance)
  const calculatedATokenBalance = raymul(weth_scaledATokenBalance, weth_liquidity_index)
  console.log("calculated ATokenBalance:\t",calculatedATokenBalance)
  const currentATokenBalance = BigInt(data_user_weth_reserve_data[0])
  console.log("currentATokenBalance:\t\t", currentATokenBalance)

}

main();