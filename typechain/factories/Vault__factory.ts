/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Vault, VaultInterface } from "../Vault";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_password",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_password",
        type: "bytes32",
      },
    ],
    name: "addUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "data",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "slot",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "elementSize",
        type: "uint256",
      },
    ],
    name: "getArrayLocation",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "slot",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "key",
        type: "uint256",
      },
    ],
    name: "getMapLocation",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "isTrue",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "someConst",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "u16",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052607b60005533600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060146101000a81548160ff021916908315150217905550601f600160156101000a81548161ffff021916908361ffff16021790555034801561008e57600080fd5b5060405161085338038061085383398181016040528101906100b091906100f8565b8060028190555050610125565b600080fd5b6000819050919050565b6100d5816100c2565b81146100e057600080fd5b50565b6000815190506100f2816100cc565b92915050565b60006020828403121561010e5761010d6100bd565b5b600061011c848285016100e3565b91505092915050565b61071f806101346000396000f3fe608060405234801561001057600080fd5b50600436106100925760003560e01c8063881374d711610066578063881374d71461010f5780638da5cb5b1461013f5780638faf850d1461015d578063992ddc6f14610179578063f0ba8440146101a957610092565b806274530a1461009757806306661abd146100b55780630a6b4e06146100d357806359d168b6146100f1575b600080fd5b61009f6101d9565b6040516100ac919061037b565b60405180910390f35b6100bd6101ec565b6040516100ca91906103af565b60405180910390f35b6100db6101f2565b6040516100e891906103e7565b60405180910390f35b6100f9610206565b60405161010691906103af565b60405180910390f35b61012960048036038101906101249190610433565b61020b565b60405161013691906103af565b60405180910390f35b610147610241565b60405161015491906104b4565b60405180910390f35b61017760048036038101906101729190610505565b610267565b005b610193600480360381019061018e9190610532565b6102fa565b6040516101a091906103af565b60405180910390f35b6101c360048036038101906101be9190610585565b610345565b6040516101d091906105c1565b60405180910390f35b600160149054906101000a900460ff1681565b60005481565b600160159054906101000a900461ffff1681565b607b81565b600081836040516020016102209291906105fd565b6040516020818303038152906040528051906020012060001c905092915050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006040518060400160405280600680549050815260200183815250905060068190806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505080600760008360000151815260200190815260200160002060008201518160000155602082015181600101559050505050565b600081836103089190610658565b84604051602001610319919061069a565b6040516020818303038152906040528051906020012060001c61033c91906106b5565b90509392505050565b6003816003811061035557600080fd5b016000915090505481565b60008115159050919050565b61037581610360565b82525050565b6000602082019050610390600083018461036c565b92915050565b6000819050919050565b6103a981610396565b82525050565b60006020820190506103c460008301846103a0565b92915050565b600061ffff82169050919050565b6103e1816103ca565b82525050565b60006020820190506103fc60008301846103d8565b92915050565b600080fd5b61041081610396565b811461041b57600080fd5b50565b60008135905061042d81610407565b92915050565b6000806040838503121561044a57610449610402565b5b60006104588582860161041e565b92505060206104698582860161041e565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061049e82610473565b9050919050565b6104ae81610493565b82525050565b60006020820190506104c960008301846104a5565b92915050565b6000819050919050565b6104e2816104cf565b81146104ed57600080fd5b50565b6000813590506104ff816104d9565b92915050565b60006020828403121561051b5761051a610402565b5b6000610529848285016104f0565b91505092915050565b60008060006060848603121561054b5761054a610402565b5b60006105598682870161041e565b935050602061056a8682870161041e565b925050604061057b8682870161041e565b9150509250925092565b60006020828403121561059b5761059a610402565b5b60006105a98482850161041e565b91505092915050565b6105bb816104cf565b82525050565b60006020820190506105d660008301846105b2565b92915050565b6000819050919050565b6105f76105f282610396565b6105dc565b82525050565b600061060982856105e6565b60208201915061061982846105e6565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061066382610396565b915061066e83610396565b925082820261067c81610396565b9150828204841483151761069357610692610629565b5b5092915050565b60006106a682846105e6565b60208201915081905092915050565b60006106c082610396565b91506106cb83610396565b92508282019050808211156106e3576106e2610629565b5b9291505056fea26469706673582212209293b9fc466e698b297fa284ef7fa9d4754f1f60c1ff7f4792a0cefb9fe3b24c64736f6c63430008110033";

type VaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Vault__factory extends ContractFactory {
  constructor(...args: VaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _password: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Vault> {
    return super.deploy(_password, overrides || {}) as Promise<Vault>;
  }
  override getDeployTransaction(
    _password: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_password, overrides || {});
  }
  override attach(address: string): Vault {
    return super.attach(address) as Vault;
  }
  override connect(signer: Signer): Vault__factory {
    return super.connect(signer) as Vault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VaultInterface {
    return new utils.Interface(_abi) as VaultInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Vault {
    return new Contract(address, _abi, signerOrProvider) as Vault;
  }
}
