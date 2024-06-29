import Nat "mo:base/Nat";
import Principal "mo:base/Principal";
import Option "mo:base/Option";
import Trie "mo:base/Trie";
import Debug "mo:base/Debug";
actor Token {
    let peridotCanister = "ehy27-jyaaa-aaaan-qmn7a-cai";

    public type TransferArgs = {
        to : {
            owner : Principal;
            subaccount : ?[Nat8];
        };
        fee : ?Nat;
        memo : ?[Nat8];
        from_subaccount : ?[Nat8];
        created_at_time : ?Nat64;
        amount : Nat;
    };
    public type BalanceOfArgs = {
        owner : Principal;
        subaccount : ?[Nat8];
    };

    // post
    // public func icrc1_transfer(principalIdText : Text, amount : Nat) : async Bool {
    //     let principalId = Principal.fromText(principalIdText);

    //     let args : TransferArgs = {
    //         to = {
    //             owner = principalId;
    //             subaccount = null;
    //         };
    //         fee = null;
    //         memo = null;
    //         from_subaccount = null;
    //         created_at_time = null;
    //         amount = amount;
    //     };

    //     let peridot = actor (peridotCanister) : actor {
    //         icrc1_transfer : (TransferArgs) -> async Bool;
    //     };

    //     return await peridot.icrc1_transfer(args);
    // };

    // read
    public func balance_of(principalIdText : Text) : async Nat {
        let principalId = Principal.fromText(principalIdText);
        let args : BalanceOfArgs = {
            owner = principalId;
            subaccount = null;
        };
        let peridot = actor (peridotCanister) : actor {
            icrc1_balance_of : (BalanceOfArgs) -> async Nat;
        };
        return await peridot.icrc1_balance_of(args);
    };

    public func per_total_supply() : async Nat {
        let peridot = actor (peridotCanister) : actor {
            icrc1_total_supply : () -> async Nat;
        };
        return await peridot.icrc1_total_supply();
    };

    public func token_name() : async Text {
        let result = actor (peridotCanister) : actor {
            icrc1_name : () -> async Text;
        };
        return await result.icrc1_name();
    };

    // public shared ({ caller }) func per_balance_of() : async Nat {
    //   let peridot = actor (peridotCanister) : actor {
    //     icrc1_balance_of : (owner : Principal, subaccount : ?[Nat8]) -> async Nat;
    //   };
    //   return await peridot.icrc1_balance_of(caller, null);
    // };

    // public shared ({ caller }) func per_balance_of(owner : Principal, subaccount : ?[Nat8]) : async Nat {
    //   let peridot = actor (peridotCanister) : PeridotActor;
    //   return await peridot.icrc1_balance_of({
    //     owner = owner;
    //     subaccount = subaccount;
    //   });
    // };
};
