// const { IDL } = require('@dfinity/candid');

export default function idlFactory({ IDL }) {
    return IDL.Service({
        'icrc1_name': IDL.Func([], [IDL.Text], ['query']),
        'icrc1_symbol': IDL.Func([], [IDL.Text], ['query']),
        'icrc1_total_supply': IDL.Func([], [IDL.Nat], ['query']),
        'icrc1_fee': IDL.Func([], [IDL.Nat], ['query']),
        'icrc1_balance_of': IDL.Func(
            [IDL.Record({
                owner: IDL.Principal,
                subaccount: IDL.Opt(IDL.Vec(IDL.Nat8)),
            })],
            [IDL.Nat],
            ['query']
        ),
    });
};

