export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  const DaoState__1 = IDL.Variant({
    'closed' : IDL.Null,
    'open' : IDL.Null,
    'priv' : IDL.Null,
  });
  const DaoState = IDL.Variant({
    'closed' : IDL.Null,
    'open' : IDL.Null,
    'priv' : IDL.Null,
  });
  const DaoPayload = IDL.Record({
    'status' : DaoState,
    'subject' : IDL.Text,
    'logo' : IDL.Text,
    'name' : IDL.Text,
  });
  const Result_2 = IDL.Variant({ 'ok' : IDL.Int, 'err' : IDL.Null });
  const Member = IDL.Record({ 'id' : IDL.Principal, 'amount_e8s' : IDL.Nat });
  const Time = IDL.Int;
  const ProposalState = IDL.Variant({
    'open' : IDL.Null,
    'rejected' : IDL.Null,
    'suceeded' : IDL.Null,
  });
  const Proposal__1 = IDL.Record({
    'id' : IDL.Int,
    'title' : IDL.Text,
    'voteCount' : IDL.Int,
    'createdAt' : Time,
    'description' : IDL.Text,
    'voters' : IDL.Vec(IDL.Principal),
    'state' : ProposalState,
    'proposer' : IDL.Principal,
    'executed' : IDL.Opt(Time),
  });
  const Dao = IDL.Record({
    'status' : DaoState,
    'creator' : IDL.Principal,
    'Delegates' : IDL.Vec(Member),
    'subject' : IDL.Text,
    'logo' : IDL.Text,
    'name' : IDL.Text,
    'createdAt' : IDL.Int,
    'Proposals' : IDL.Vec(Proposal__1),
    'delegatesCount' : IDL.Int,
  });
  const Proposal = IDL.Record({
    'id' : IDL.Int,
    'title' : IDL.Text,
    'voteCount' : IDL.Int,
    'createdAt' : Time,
    'description' : IDL.Text,
    'voters' : IDL.Vec(IDL.Principal),
    'state' : ProposalState,
    'proposer' : IDL.Principal,
    'executed' : IDL.Opt(Time),
  });
  const Result_1 = IDL.Variant({ 'ok' : IDL.Opt(Proposal), 'err' : IDL.Text });
  return IDL.Service({
    'add' : IDL.Func([IDL.Nat], [], []),
    'addCallerToPrivateDao' : IDL.Func([IDL.Int, IDL.Principal], [Result], []),
    'changeDaoStatus' : IDL.Func([IDL.Int, DaoState__1], [Result], []),
    'checkAndExecuteProposal' : IDL.Func([IDL.Int, IDL.Int], [IDL.Text], []),
    'checkTokenBalanceForProposal' : IDL.Func([IDL.Int], [IDL.Bool], []),
    'createDao' : IDL.Func([DaoPayload], [Result_2], []),
    'createProposal' : IDL.Func([IDL.Int, IDL.Text, IDL.Text], [Result], []),
    'deleteDao' : IDL.Func([IDL.Int], [], ['oneway']),
    'get' : IDL.Func([], [IDL.Nat], ['query']),
    'getAllDao' : IDL.Func([], [IDL.Vec(Dao)], ['query']),
    'getDaoById' : IDL.Func([IDL.Int], [IDL.Opt(Dao)], []),
    'getMemberIndex' : IDL.Func([IDL.Int], [IDL.Nat], []),
    'getPrincipalId' : IDL.Func([], [IDL.Principal], []),
    'getProposal' : IDL.Func([IDL.Int, IDL.Int], [Result_1], ['query']),
    'getProposalIndex' : IDL.Func([IDL.Int, IDL.Int], [IDL.Nat], []),
    'getProposalsInDao' : IDL.Func([IDL.Int], [IDL.Vec(Proposal)], ['query']),
    'inc' : IDL.Func([], [], []),
    'joinDao' : IDL.Func([IDL.Int], [Result], []),
    'leaveDao' : IDL.Func([IDL.Int], [Result], []),
    'mintToken' : IDL.Func([IDL.Int, IDL.Nat], [Result], []),
    'updateDao' : IDL.Func([IDL.Int, DaoPayload], [IDL.Text], []),
    'voteProposal' : IDL.Func([IDL.Int, IDL.Int, IDL.Bool], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };
