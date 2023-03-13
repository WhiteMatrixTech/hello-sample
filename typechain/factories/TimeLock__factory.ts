/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { TimeLock, TimeLockInterface } from "../TimeLock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
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
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_secondsToIncrease",
        type: "uint256",
      },
    ],
    name: "increaseLockTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lockTime",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610591806100206000396000f3fe60806040526004361061004a5760003560e01c806327e235e31461004f5780633ccfd60b146100b457806379af55e4146100cb578063a4beda6314610106578063d0e30db01461016b575b600080fd5b34801561005b57600080fd5b5061009e6004803603602081101561007257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610175565b6040518082815260200191505060405180910390f35b3480156100c057600080fd5b506100c961018d565b005b3480156100d757600080fd5b50610104600480360360208110156100ee57600080fd5b810190808035906020019092919050505061045c565b005b34801561011257600080fd5b506101556004803603602081101561012957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104ac565b6040518082815260200191505060405180910390f35b6101736104c4565b005b60006020528060005260406000206000915090505481565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411610241576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f496e73756666696369656e742066756e6473000000000000000000000000000081525060200191505060405180910390fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205442116102f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f4c6f636b2074696d65206e6f742065787069726564000000000000000000000081525060200191505060405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060003373ffffffffffffffffffffffffffffffffffffffff168260405180600001905060006040518083038185875af1925050503d80600081146103dc576040519150601f19603f3d011682016040523d82523d6000602084013e6103e1565b606091505b5050905080610458576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f4661696c656420746f2073656e6420457468657200000000000000000000000081525060200191505060405180910390fd5b5050565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555050565b60016020528060005260406000206000915090505481565b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555062093a804201600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555056fea2646970667358221220ab7a8bec3643eec82b8568925c4e2b1c8855e2a3c26ed3a6ba878bf4e79a1c6664736f6c63430007060033";

type TimeLockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimeLockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TimeLock__factory extends ContractFactory {
  constructor(...args: TimeLockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TimeLock> {
    return super.deploy(overrides || {}) as Promise<TimeLock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TimeLock {
    return super.attach(address) as TimeLock;
  }
  override connect(signer: Signer): TimeLock__factory {
    return super.connect(signer) as TimeLock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimeLockInterface {
    return new utils.Interface(_abi) as TimeLockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimeLock {
    return new Contract(address, _abi, signerOrProvider) as TimeLock;
  }
}
