import { ethers } from "ethers";

// Replace with your deployed contract addresses
// const factoryContractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
const batchContractABI = require("../abi/Batch.json"); // ABI of Batch contract
const batchBytecode = "0x608060405234801561001057600080fd5b506040516132f23803806132f283398181016040528101906100329190610994565b826000808201518160000190816100499190610c38565b506020820151816001015560408201518160020190816100699190610c38565b50606082015181600301908161007f9190610c38565b5060808201518160040190816100959190610c38565b5060a08201518160050190816100ab9190610c38565b5090505081600660008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e08201518160070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101008201518160080160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050600f8190806001815401808255809150506001900390600052602060002090600802016000909190919091506000820151816000015560208201518160010190816103809190610c38565b5060408201518160020190816103969190610c38565b5060608201518160030190816103ac9190610c38565b5060808201518160040190816103c29190610c38565b5060a08201518160050190816103d89190610c38565b5060c08201518160060190816103ee9190610c38565b5060e082015181600701555050505050610d0a565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6104658261041c565b810181811067ffffffffffffffff821117156104845761048361042d565b5b80604052505050565b6000610497610403565b90506104a3828261045c565b919050565b600080fd5b600080fd5b600080fd5b600067ffffffffffffffff8211156104d2576104d161042d565b5b6104db8261041c565b9050602081019050919050565b60005b838110156105065780820151818401526020810190506104eb565b60008484015250505050565b6000610525610520846104b7565b61048d565b905082815260208101848484011115610541576105406104b2565b5b61054c8482856104e8565b509392505050565b600082601f830112610569576105686104ad565b5b8151610579848260208601610512565b91505092915050565b6000819050919050565b61059581610582565b81146105a057600080fd5b50565b6000815190506105b28161058c565b92915050565b600060c082840312156105ce576105cd610417565b5b6105d860c061048d565b9050600082015167ffffffffffffffff8111156105f8576105f76104a8565b5b61060484828501610554565b6000830152506020610618848285016105a3565b602083015250604082015167ffffffffffffffff81111561063c5761063b6104a8565b5b61064884828501610554565b604083015250606082015167ffffffffffffffff81111561066c5761066b6104a8565b5b61067884828501610554565b606083015250608082015167ffffffffffffffff81111561069c5761069b6104a8565b5b6106a884828501610554565b60808301525060a082015167ffffffffffffffff8111156106cc576106cb6104a8565b5b6106d884828501610554565b60a08301525092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061070f826106e4565b9050919050565b61071f81610704565b811461072a57600080fd5b50565b60008151905061073c81610716565b92915050565b6000610120828403121561075957610758610417565b5b61076461012061048d565b905060006107748482850161072d565b60008301525060206107888482850161072d565b602083015250604061079c8482850161072d565b60408301525060606107b08482850161072d565b60608301525060806107c48482850161072d565b60808301525060a06107d88482850161072d565b60a08301525060c06107ec8482850161072d565b60c08301525060e06108008482850161072d565b60e0830152506101006108158482850161072d565b6101008301525092915050565b6000610100828403121561083957610838610417565b5b61084461010061048d565b90506000610854848285016105a3565b600083015250602082015167ffffffffffffffff811115610878576108776104a8565b5b61088484828501610554565b602083015250604082015167ffffffffffffffff8111156108a8576108a76104a8565b5b6108b484828501610554565b604083015250606082015167ffffffffffffffff8111156108d8576108d76104a8565b5b6108e484828501610554565b606083015250608082015167ffffffffffffffff811115610908576109076104a8565b5b61091484828501610554565b60808301525060a082015167ffffffffffffffff811115610938576109376104a8565b5b61094484828501610554565b60a08301525060c082015167ffffffffffffffff811115610968576109676104a8565b5b61097484828501610554565b60c08301525060e0610988848285016105a3565b60e08301525092915050565b600080600061016084860312156109ae576109ad61040d565b5b600084015167ffffffffffffffff8111156109cc576109cb610412565b5b6109d8868287016105b8565b93505060206109e986828701610742565b92505061014084015167ffffffffffffffff811115610a0b57610a0a610412565b5b610a1786828701610822565b9150509250925092565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610a7357607f821691505b602082108103610a8657610a85610a2c565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610aee7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610ab1565b610af88683610ab1565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610b35610b30610b2b84610582565b610b10565b610582565b9050919050565b6000819050919050565b610b4f83610b1a565b610b63610b5b82610b3c565b848454610abe565b825550505050565b600090565b610b78610b6b565b610b83818484610b46565b505050565b5b81811015610ba757610b9c600082610b70565b600181019050610b89565b5050565b601f821115610bec57610bbd81610a8c565b610bc684610aa1565b81016020851015610bd5578190505b610be9610be185610aa1565b830182610b88565b50505b505050565b600082821c905092915050565b6000610c0f60001984600802610bf1565b1980831691505092915050565b6000610c288383610bfe565b9150826002028217905092915050565b610c4182610a21565b67ffffffffffffffff811115610c5a57610c5961042d565b5b610c648254610a5b565b610c6f828285610bab565b600060209050601f831160018114610ca25760008415610c90578287015190505b610c9a8582610c1c565b865550610d02565b601f198416610cb086610a8c565b60005b82811015610cd857848901518255600182019150602085019450602081019050610cb3565b86831015610cf55784890151610cf1601f891682610bfe565b8355505b6001600288020188555050505b505050505050565b6125d980610d196000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631a2b415d1461006757806332c94d00146100835780636c4470fb146100a1578063b4c2f727146100c7578063c83df131146100fe578063dd6f8c8614610121575b600080fd5b610081600480360381019061007c9190611a88565b610140565b005b61008b6105f7565b6040516100989190611df5565b60405180910390f35b6100a96109d7565b6040516100be99989796959493929190611e58565b60405180910390f35b6100e160048036038101906100dc9190611ee5565b610b33565b6040516100f5989796959493929190611f6b565b60405180910390f35b610106610ebb565b60405161011896959493929190612013565b60405180910390f35b61012961118d565b604051610137929190612202565b60405180910390f35b600660000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806101ef5750600660010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b8061024a5750600660020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b806102a55750600660030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b806103005750600660040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b8061035b5750600660050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b806103b557506006800160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b806104105750600660070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b8061046b5750600660080160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b6104aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104a1906122a5565b60405180910390fd5b600f60405180610100016040528089815260200188815260200187815260200186815260200185815260200184815260200183815260200142815250908060018154018082558091505060019003906000526020600020906008020160009091909190915060008201518160000155602082015181600101908161052e91906124d1565b50604082015181600201908161054491906124d1565b50606082015181600301908161055a91906124d1565b50608082015181600401908161057091906124d1565b5060a082015181600501908161058691906124d1565b5060c082015181600601908161059c91906124d1565b5060e0820151816007015550507f1463649467cca7271e7d074257e00c78870fc95ca75262a69e5ec70774bdcc8e87878787878787426040516105e6989796959493929190611f6b565b60405180910390a150505050505050565b6060600f805480602002602001604051908101604052809291908181526020016000905b828210156109ce57838290600052602060002090600802016040518061010001604052908160008201548152602001600182018054610659906122f4565b80601f0160208091040260200160405190810160405280929190818152602001828054610685906122f4565b80156106d25780601f106106a7576101008083540402835291602001916106d2565b820191906000526020600020905b8154815290600101906020018083116106b557829003601f168201915b505050505081526020016002820180546106eb906122f4565b80601f0160208091040260200160405190810160405280929190818152602001828054610717906122f4565b80156107645780601f1061073957610100808354040283529160200191610764565b820191906000526020600020905b81548152906001019060200180831161074757829003601f168201915b5050505050815260200160038201805461077d906122f4565b80601f01602080910402602001604051908101604052809291908181526020018280546107a9906122f4565b80156107f65780601f106107cb576101008083540402835291602001916107f6565b820191906000526020600020905b8154815290600101906020018083116107d957829003601f168201915b5050505050815260200160048201805461080f906122f4565b80601f016020809104026020016040519081016040528092919081815260200182805461083b906122f4565b80156108885780601f1061085d57610100808354040283529160200191610888565b820191906000526020600020905b81548152906001019060200180831161086b57829003601f168201915b505050505081526020016005820180546108a1906122f4565b80601f01602080910402602001604051908101604052809291908181526020018280546108cd906122f4565b801561091a5780601f106108ef5761010080835404028352916020019161091a565b820191906000526020600020905b8154815290600101906020018083116108fd57829003601f168201915b50505050508152602001600682018054610933906122f4565b80601f016020809104026020016040519081016040528092919081815260200182805461095f906122f4565b80156109ac5780601f10610981576101008083540402835291602001916109ac565b820191906000526020600020905b81548152906001019060200180831161098f57829003601f168201915b505050505081526020016007820154815250508152602001906001019061061b565b50505050905090565b60068060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060080160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905089565b600f8181548110610b4357600080fd5b9060005260206000209060080201600091509050806000015490806001018054610b6c906122f4565b80601f0160208091040260200160405190810160405280929190818152602001828054610b98906122f4565b8015610be55780601f10610bba57610100808354040283529160200191610be5565b820191906000526020600020905b815481529060010190602001808311610bc857829003601f168201915b505050505090806002018054610bfa906122f4565b80601f0160208091040260200160405190810160405280929190818152602001828054610c26906122f4565b8015610c735780601f10610c4857610100808354040283529160200191610c73565b820191906000526020600020905b815481529060010190602001808311610c5657829003601f168201915b505050505090806003018054610c88906122f4565b80601f0160208091040260200160405190810160405280929190818152602001828054610cb4906122f4565b8015610d015780601f10610cd657610100808354040283529160200191610d01565b820191906000526020600020905b815481529060010190602001808311610ce457829003601f168201915b505050505090806004018054610d16906122f4565b80601f0160208091040260200160405190810160405280929190818152602001828054610d42906122f4565b8015610d8f5780601f10610d6457610100808354040283529160200191610d8f565b820191906000526020600020905b815481529060010190602001808311610d7257829003601f168201915b505050505090806005018054610da4906122f4565b80601f0160208091040260200160405190810160405280929190818152602001828054610dd0906122f4565b8015610e1d5780601f10610df257610100808354040283529160200191610e1d565b820191906000526020600020905b815481529060010190602001808311610e0057829003601f168201915b505050505090806006018054610e32906122f4565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5e906122f4565b8015610eab5780601f10610e8057610100808354040283529160200191610eab565b820191906000526020600020905b815481529060010190602001808311610e8e57829003601f168201915b5050505050908060070154905088565b6000806000018054610ecc906122f4565b80601f0160208091040260200160405190810160405280929190818152602001828054610ef8906122f4565b8015610f455780601f10610f1a57610100808354040283529160200191610f45565b820191906000526020600020905b815481529060010190602001808311610f2857829003601f168201915b505050505090806001015490806002018054610f60906122f4565b80601f0160208091040260200160405190810160405280929190818152602001828054610f8c906122f4565b8015610fd95780601f10610fae57610100808354040283529160200191610fd9565b820191906000526020600020905b815481529060010190602001808311610fbc57829003601f168201915b505050505090806003018054610fee906122f4565b80601f016020809104026020016040519081016040528092919081815260200182805461101a906122f4565b80156110675780601f1061103c57610100808354040283529160200191611067565b820191906000526020600020905b81548152906001019060200180831161104a57829003601f168201915b50505050509080600401805461107c906122f4565b80601f01602080910402602001604051908101604052809291908181526020018280546110a8906122f4565b80156110f55780601f106110ca576101008083540402835291602001916110f5565b820191906000526020600020905b8154815290600101906020018083116110d857829003601f168201915b50505050509080600501805461110a906122f4565b80601f0160208091040260200160405190810160405280929190818152602001828054611136906122f4565b80156111835780601f1061115857610100808354040283529160200191611183565b820191906000526020600020905b81548152906001019060200180831161116657829003601f168201915b5050505050905086565b6111956117b0565b61119d6117e6565b60006006816040518060c00160405290816000820180546111bd906122f4565b80601f01602080910402602001604051908101604052809291908181526020018280546111e9906122f4565b80156112365780601f1061120b57610100808354040283529160200191611236565b820191906000526020600020905b81548152906001019060200180831161121957829003601f168201915b5050505050815260200160018201548152602001600282018054611259906122f4565b80601f0160208091040260200160405190810160405280929190818152602001828054611285906122f4565b80156112d25780601f106112a7576101008083540402835291602001916112d2565b820191906000526020600020905b8154815290600101906020018083116112b557829003601f168201915b505050505081526020016003820180546112eb906122f4565b80601f0160208091040260200160405190810160405280929190818152602001828054611317906122f4565b80156113645780601f1061133957610100808354040283529160200191611364565b820191906000526020600020905b81548152906001019060200180831161134757829003601f168201915b5050505050815260200160048201805461137d906122f4565b80601f01602080910402602001604051908101604052809291908181526020018280546113a9906122f4565b80156113f65780601f106113cb576101008083540402835291602001916113f6565b820191906000526020600020905b8154815290600101906020018083116113d957829003601f168201915b5050505050815260200160058201805461140f906122f4565b80601f016020809104026020016040519081016040528092919081815260200182805461143b906122f4565b80156114885780601f1061145d57610100808354040283529160200191611488565b820191906000526020600020905b81548152906001019060200180831161146b57829003601f168201915b505050505081525050915080604051806101200160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016006820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016007820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016008820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050915091509091565b6040518060c001604052806060815260200160008152602001606081526020016060815260200160608152602001606081525090565b604051806101200160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61191f8161190c565b811461192a57600080fd5b50565b60008135905061193c81611916565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6119958261194c565b810181811067ffffffffffffffff821117156119b4576119b361195d565b5b80604052505050565b60006119c76118f8565b90506119d3828261198c565b919050565b600067ffffffffffffffff8211156119f3576119f261195d565b5b6119fc8261194c565b9050602081019050919050565b82818337600083830152505050565b6000611a2b611a26846119d8565b6119bd565b905082815260208101848484011115611a4757611a46611947565b5b611a52848285611a09565b509392505050565b600082601f830112611a6f57611a6e611942565b5b8135611a7f848260208601611a18565b91505092915050565b600080600080600080600060e0888a031215611aa757611aa6611902565b5b6000611ab58a828b0161192d565b975050602088013567ffffffffffffffff811115611ad657611ad5611907565b5b611ae28a828b01611a5a565b965050604088013567ffffffffffffffff811115611b0357611b02611907565b5b611b0f8a828b01611a5a565b955050606088013567ffffffffffffffff811115611b3057611b2f611907565b5b611b3c8a828b01611a5a565b945050608088013567ffffffffffffffff811115611b5d57611b5c611907565b5b611b698a828b01611a5a565b93505060a088013567ffffffffffffffff811115611b8a57611b89611907565b5b611b968a828b01611a5a565b92505060c088013567ffffffffffffffff811115611bb757611bb6611907565b5b611bc38a828b01611a5a565b91505092959891949750929550565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611c078161190c565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611c47578082015181840152602081019050611c2c565b60008484015250505050565b6000611c5e82611c0d565b611c688185611c18565b9350611c78818560208601611c29565b611c818161194c565b840191505092915050565b600061010083016000830151611ca56000860182611bfe565b5060208301518482036020860152611cbd8282611c53565b91505060408301518482036040860152611cd78282611c53565b91505060608301518482036060860152611cf18282611c53565b91505060808301518482036080860152611d0b8282611c53565b91505060a083015184820360a0860152611d258282611c53565b91505060c083015184820360c0860152611d3f8282611c53565b91505060e0830151611d5460e0860182611bfe565b508091505092915050565b6000611d6b8383611c8c565b905092915050565b6000602082019050919050565b6000611d8b82611bd2565b611d958185611bdd565b935083602082028501611da785611bee565b8060005b85811015611de35784840389528151611dc48582611d5f565b9450611dcf83611d73565b925060208a01995050600181019050611dab565b50829750879550505050505092915050565b60006020820190508181036000830152611e0f8184611d80565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611e4282611e17565b9050919050565b611e5281611e37565b82525050565b600061012082019050611e6e600083018c611e49565b611e7b602083018b611e49565b611e88604083018a611e49565b611e956060830189611e49565b611ea26080830188611e49565b611eaf60a0830187611e49565b611ebc60c0830186611e49565b611ec960e0830185611e49565b611ed7610100830184611e49565b9a9950505050505050505050565b600060208284031215611efb57611efa611902565b5b6000611f098482850161192d565b91505092915050565b611f1b8161190c565b82525050565b600082825260208201905092915050565b6000611f3d82611c0d565b611f478185611f21565b9350611f57818560208601611c29565b611f608161194c565b840191505092915050565b600061010082019050611f81600083018b611f12565b8181036020830152611f93818a611f32565b90508181036040830152611fa78189611f32565b90508181036060830152611fbb8188611f32565b90508181036080830152611fcf8187611f32565b905081810360a0830152611fe38186611f32565b905081810360c0830152611ff78185611f32565b905061200660e0830184611f12565b9998505050505050505050565b600060c082019050818103600083015261202d8189611f32565b905061203c6020830188611f12565b818103604083015261204e8187611f32565b905081810360608301526120628186611f32565b905081810360808301526120768185611f32565b905081810360a083015261208a8184611f32565b9050979650505050505050565b600060c08301600083015184820360008601526120b48282611c53565b91505060208301516120c96020860182611bfe565b50604083015184820360408601526120e18282611c53565b915050606083015184820360608601526120fb8282611c53565b915050608083015184820360808601526121158282611c53565b91505060a083015184820360a086015261212f8282611c53565b9150508091505092915050565b61214581611e37565b82525050565b61012082016000820151612162600085018261213c565b506020820151612175602085018261213c565b506040820151612188604085018261213c565b50606082015161219b606085018261213c565b5060808201516121ae608085018261213c565b5060a08201516121c160a085018261213c565b5060c08201516121d460c085018261213c565b5060e08201516121e760e085018261213c565b506101008201516121fc61010085018261213c565b50505050565b600061014082019050818103600083015261221d8185612097565b905061222c602083018461214b565b9392505050565b7f4f6e6c7920617574686f72697a6564207061727469636970616e74732063616e60008201527f207570646174652062617463682064657461696c730000000000000000000000602082015250565b600061228f603583611f21565b915061229a82612233565b604082019050919050565b600060208201905081810360008301526122be81612282565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061230c57607f821691505b60208210810361231f5761231e6122c5565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026123877fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261234a565b612391868361234a565b95508019841693508086168417925050509392505050565b6000819050919050565b60006123ce6123c96123c48461190c565b6123a9565b61190c565b9050919050565b6000819050919050565b6123e8836123b3565b6123fc6123f4826123d5565b848454612357565b825550505050565b600090565b612411612404565b61241c8184846123df565b505050565b5b8181101561244057612435600082612409565b600181019050612422565b5050565b601f8211156124855761245681612325565b61245f8461233a565b8101602085101561246e578190505b61248261247a8561233a565b830182612421565b50505b505050565b600082821c905092915050565b60006124a86000198460080261248a565b1980831691505092915050565b60006124c18383612497565b9150826002028217905092915050565b6124da82611c0d565b67ffffffffffffffff8111156124f3576124f261195d565b5b6124fd82546122f4565b612508828285612444565b600060209050601f83116001811461253b5760008415612529578287015190505b61253385826124b5565b86555061259b565b601f19841661254986612325565b60005b828110156125715784890151825560018201915060208501945060208101905061254c565b8683101561258e578489015161258a601f891682612497565b8355505b6001600288020188555050505b50505050505056fea2646970667358221220863d6950b0378870c65ab6a48d96b10ddb7a16d6cf15a3400cfcede433b1133164736f6c634300081c0033"

// Initialize BrowserProvider and get the signer


// Connect to the factory contract
// const factoryContract = new ethers.Contract(factoryContractAddress, factoryABI, signer);

// returns batch details including particiapnt addresses for a specific batch
export async function getBatchDetails(batchAddress) {
    try {
        const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545/");

        console.log(batchAddress)
        const batchContract = new ethers.Contract(batchAddress, batchContractABI, provider); // Use provider here for read-only functions
        const batchDetails = await batchContract.getBatchDetails();
        // console.log("BatchDetails:", batchDetails);
        return batchDetails;
    } catch (error) {
        console.error("Error getting batch details:", error);
    }
}

// returns all updates for a specific batch
export async function getBatchUpdates(batchAddress) {
    try {
        const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545/");

        const batchContract = new ethers.Contract(batchAddress, batchContractABI, provider, {
            gasLimit: 5000000 // Adjust gas limit as needed
        }); // Use provider here for read-only functions
        const updates = await batchContract.getAllUpdates();
        // console.log("Batch Updates:", updates);
        return updates;
    } catch (error) {
        console.error("Error getting batch updates:", error);
    }
}


export async function createNewSmartContract(
    supply_chain,
    origin,
    bean_type,
    roasting_type,
    processing_type,
    participant_addresses,
    batch_quantity,
    location,
) {
    try {
        if (!window.ethereum) throw new Error("MetaMask not installed!");

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        // Ensure you have the ABI and Bytecode loaded
        const factory = new ethers.ContractFactory(batchContractABI, batchBytecode, signer);

        console.log("Deploying Batch Contract...");

        // Convert struct objects into arrays
        const batchDetailsArray = [
            supply_chain,
            Math.floor(Date.now() / 1000),
            origin,
            bean_type,
            roasting_type,
            processing_type
        ];

        const participantsArray = [
            participant_addresses[0].ethereum_address,
            participant_addresses[1].ethereum_address,
            participant_addresses[2].ethereum_address,
            participant_addresses[3].ethereum_address,
            participant_addresses[4].ethereum_address,
            participant_addresses[5].ethereum_address,
            participant_addresses[6].ethereum_address,
            participant_addresses[7].ethereum_address,
            participant_addresses[8].ethereum_address,
        ];

        const initialUpdateArray = [
            batch_quantity,
            location,
            "Farmer",
            "N/A", // prevouis stage doesnt exist yet
            "Cultivation",
            "Batch created",
            "Initial batch creation",
            Math.floor(Date.now() / 1000)  // timestamp
        ];
        console.log(batchDetailsArray, participantsArray, initialUpdateArray, participant_addresses)

        // Deploy contract with array arguments
        const batchContract = await factory.deploy(batchDetailsArray, participantsArray, initialUpdateArray);
        await batchContract.waitForDeployment();

        const contractAddress = await batchContract.getAddress();

        console.log("Batch contract deployed at:", contractAddress);
        alert(`Batch contract deployed at: ${contractAddress}`);

        return contractAddress

    } catch (error) {
        console.error("Error deploying batch:", error);
        alert("Failed to deploy batch. See console for details.");
    }
}

export async function updateBatch(
    smart_contract_address,
    batch_quantity,
    location,
    current_holder,
    previous_stage,
    next_stage,
    status,
    additional_notes
) {
    try {

        if (!window.ethereum) throw new Error("MetaMask not installed!");

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        // Provide the contract address of the deployed batch contract

        // Create the contract instance
        const batchContract = new ethers.Contract(smart_contract_address, batchContractABI, signer);

        // Call the updateBatch function
        const tx = await batchContract.updateBatch(
            batch_quantity,
            location,
            current_holder,
            previous_stage,
            next_stage,
            status,
            additional_notes
        );

        console.log("Transaction sent:", tx.hash);

        // Wait for the transaction to be mined
        await tx.wait();

        console.log("Batch updated successfully!");
        alert("Batch updated successfully!");
        return (true);

    } catch (error) {

        console.error("Error updating batch:", error);
        alert("Failed to update batch. See console for details.");
        return (false);
    }

}