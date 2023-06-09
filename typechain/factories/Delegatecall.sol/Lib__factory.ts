/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Lib, LibInterface } from "../../Delegatecall.sol/Lib";

const _abi = [
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
    name: "pwn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061015b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80638da5cb5b1461003b578063dd365b8b14610059575b600080fd5b610043610063565b604051610050919061010a565b60405180910390f35b610061610087565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100f4826100c9565b9050919050565b610104816100e9565b82525050565b600060208201905061011f60008301846100fb565b9291505056fea2646970667358221220c7931f6119ccd6ea84e517bed269ef541e2bf9dcd8f9c5910282b2859e6b6e7c64736f6c63430008110033";

type LibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lib__factory extends ContractFactory {
  constructor(...args: LibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Lib> {
    return super.deploy(overrides || {}) as Promise<Lib>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Lib {
    return super.attach(address) as Lib;
  }
  override connect(signer: Signer): Lib__factory {
    return super.connect(signer) as Lib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibInterface {
    return new utils.Interface(_abi) as LibInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Lib {
    return new Contract(address, _abi, signerOrProvider) as Lib;
  }
}
