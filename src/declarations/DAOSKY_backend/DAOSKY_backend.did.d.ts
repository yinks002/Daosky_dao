import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Dao {
  'status' : DaoState,
  'creator' : Principal,
  'Delegates' : Array<Member>,
  'subject' : string,
  'logo' : string,
  'name' : string,
  'createdAt' : bigint,
  'Proposals' : Array<Proposal__1>,
  'delegatesCount' : bigint,
}
export interface DaoPayload {
  'status' : DaoState,
  'subject' : string,
  'logo' : string,
  'name' : string,
}
export type DaoState = { 'closed' : null } |
  { 'open' : null } |
  { 'priv' : null };
export type DaoState__1 = { 'closed' : null } |
  { 'open' : null } |
  { 'priv' : null };
export interface Member { 'id' : Principal, 'amount_e8s' : bigint }
export interface Proposal {
  'id' : bigint,
  'title' : string,
  'voteCount' : bigint,
  'createdAt' : Time,
  'description' : string,
  'voters' : Array<Principal>,
  'state' : ProposalState,
  'proposer' : Principal,
  'executed' : [] | [Time],
}
export type ProposalState = { 'open' : null } |
  { 'rejected' : null } |
  { 'suceeded' : null };
export interface Proposal__1 {
  'id' : bigint,
  'title' : string,
  'voteCount' : bigint,
  'createdAt' : Time,
  'description' : string,
  'voters' : Array<Principal>,
  'state' : ProposalState,
  'proposer' : Principal,
  'executed' : [] | [Time],
}
export type Result = { 'ok' : string } |
  { 'err' : string };
export type Result_1 = { 'ok' : [] | [Proposal] } |
  { 'err' : string };
export type Result_2 = { 'ok' : bigint } |
  { 'err' : null };
export type Time = bigint;
export interface _SERVICE {
  'add' : ActorMethod<[bigint], undefined>,
  'addCallerToPrivateDao' : ActorMethod<[bigint, Principal], Result>,
  'changeDaoStatus' : ActorMethod<[bigint, DaoState__1], Result>,
  'checkAndExecuteProposal' : ActorMethod<[bigint, bigint], string>,
  'checkTokenBalanceForProposal' : ActorMethod<[bigint], boolean>,
  'createDao' : ActorMethod<[DaoPayload], Result_2>,
  'createProposal' : ActorMethod<[bigint, string, string], Result>,
  'deleteDao' : ActorMethod<[bigint], undefined>,
  'get' : ActorMethod<[], bigint>,
  'getAllDao' : ActorMethod<[], Array<Dao>>,
  'getDaoById' : ActorMethod<[bigint], [] | [Dao]>,
  'getMemberIndex' : ActorMethod<[bigint], bigint>,
  'getPrincipalId' : ActorMethod<[], Principal>,
  'getProposal' : ActorMethod<[bigint, bigint], Result_1>,
  'getProposalIndex' : ActorMethod<[bigint, bigint], bigint>,
  'getProposalsInDao' : ActorMethod<[bigint], Array<Proposal>>,
  'inc' : ActorMethod<[], undefined>,
  'joinDao' : ActorMethod<[bigint], Result>,
  'leaveDao' : ActorMethod<[bigint], Result>,
  'mintToken' : ActorMethod<[bigint, bigint], Result>,
  'updateDao' : ActorMethod<[bigint, DaoPayload], string>,
  'voteProposal' : ActorMethod<[bigint, bigint, boolean], Result>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
