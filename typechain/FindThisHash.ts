/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface FindThisHashInterface extends utils.Interface {
  functions: {
    "hash()": FunctionFragment;
    "solve(string)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "hash" | "solve"): FunctionFragment;

  encodeFunctionData(functionFragment: "hash", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "solve",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "hash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "solve", data: BytesLike): Result;

  events: {};
}

export interface FindThisHash extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FindThisHashInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    hash(overrides?: CallOverrides): Promise<[string]>;

    solve(
      solution: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  hash(overrides?: CallOverrides): Promise<string>;

  solve(
    solution: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    hash(overrides?: CallOverrides): Promise<string>;

    solve(
      solution: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    hash(overrides?: CallOverrides): Promise<BigNumber>;

    solve(
      solution: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    hash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    solve(
      solution: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
