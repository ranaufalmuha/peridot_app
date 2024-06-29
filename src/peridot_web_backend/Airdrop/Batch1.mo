import Principal "mo:base/Principal";
import Trie "mo:base/Trie";
import Blob "mo:base/Blob";
import Nat "mo:base/Nat";

actor Batch1 {
    let userCanister = "dirvh-faaaa-aaaap-ahkha-cai";
    let peridotCanister = "ehy27-jyaaa-aaaan-qmn7a-cai";

    let airdrop_ammount : Nat = 5000_0000_0000;

    // Storage for tracking claimed users
    var claimedUsers : Trie.Trie<Principal, Bool> = Trie.empty();

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

    // Dummy function to simulate token transfer
    private func transferTokens(principalIdText : Text) : async Bool {
        let principalId = Principal.fromText(principalIdText);

        let args : TransferArgs = {
            to = {
                owner = principalId;
                subaccount = null;
            };
            fee = null;
            memo = null;
            from_subaccount = null;
            created_at_time = null;
            amount = airdrop_ammount;
        };

        let peridot = actor (peridotCanister) : actor {
            icrc1_transfer : (TransferArgs) -> async Bool;
        };

        let dummy = await peridot.icrc1_transfer(args);
        return true;
    };
    // Check fields and claim tokens
    public func checkFieldsNotEmptyAndClaim(principalIdText : Text) : async Text {
        let user = actor (userCanister) : actor {
            findUser : (Text) -> async ?{
                profilePic : Text;
                username : Text;
                bio : Text;
                fullname : Text;
                usertype : Text;
                email : Text;
                birthdate : Text;
                createdAt : Int;
                updatedAt : Int;
            };
        };

        let principalId = Principal.fromText(principalIdText);
        let userInfo = await user.findUser(principalIdText);
        let isClaimed = Trie.find(claimedUsers, key(principalId), Principal.equal);

        switch userInfo {
            case (?user) {
                switch isClaimed {
                    case (?true) {
                        return "Already claimed";
                    };
                    case (?false) {
                        // Attempt to claim tokens
                        // claimedUsers := Trie.replace(
                        //     claimedUsers,
                        //     key(principalId),
                        //     Principal.equal,
                        //     ?true,
                        // ).0;
                        let result = await claimTokens(user, principalIdText);
                        // Always mark as claimed regardless of success or failure
                        result;
                    };
                    case null {
                        // Attempt to claim tokens
                        // claimedUsers := Trie.replace(
                        //     claimedUsers,
                        //     key(principalId),
                        //     Principal.equal,
                        //     ?true,
                        // ).0;
                        let result = await claimTokens(user, principalIdText);
                        // Always mark as claimed regardless of success or failure
                        result;
                    };
                };
            };
            case null {
                return "User not found";
            };
        };
    };

    private func claimTokens(
        user : {
            profilePic : Text;
            username : Text;
            bio : Text;
            fullname : Text;
            usertype : Text;
            email : Text;
            birthdate : Text;
            createdAt : Int;
            updatedAt : Int;
        },
        principalIdText : Text,
    ) : async Text {
        if (user.username != "" and user.bio != "" and user.fullname != "" and user.usertype != "" and user.email != "" and user.birthdate != "") {
            let principalId = Principal.fromText(principalIdText);
            let isClaimed = Trie.find(claimedUsers, key(principalId), Principal.equal);
            claimedUsers := Trie.replace(
                claimedUsers,
                key(principalId),
                Principal.equal,
                ?true,
            ).0;
            let transferStatus = await transferTokens(principalIdText);

            if (transferStatus) {
                return "claimed 200 PER token";
            } else {
                return "transfer failed";
            };
        } else {
            return "Some fields are still empty";
        };
    };

    public func checkField(principalIdText : Text, fieldName : Text) : async Text {
        let user = actor (userCanister) : actor {
            findUser : (Text) -> async ?{
                profilePic : Text;
                username : Text;
                bio : Text;
                fullname : Text;
                usertype : Text;
                email : Text;
                birthdate : Text;
                createdAt : Int;
                updatedAt : Int;
            };
        };

        let userInfo = await user.findUser(principalIdText);
        switch userInfo {
            case (?user) {
                switch fieldName {
                    case "username" {
                        return if (user.username != "") "Username is not empty" else "Username is empty";
                    };
                    case "bio" {
                        return if (user.bio != "") "Bio is not empty" else "Bio is empty";
                    };
                    case "fullname" {
                        return if (user.fullname != "") "Fullname is not empty" else "Fullname is empty";
                    };
                    case "usertype" {
                        return if (user.usertype != "") "Usertype is not empty" else "Usertype is empty";
                    };
                    case "email" {
                        return if (user.email != "") "Email is not empty" else "Email is empty";
                    };
                    case "birthdate" {
                        return if (user.birthdate != "") "Birthdate is not empty" else "Birthdate is empty";
                    };
                    case _ { return "Invalid field name" };
                };
            };
            case null {
                return "User not found";
            };
        };
    };

    public query func hasClaimed(principalIdText : Text) : async Bool {
        let principalId = Principal.fromText(principalIdText);
        let isClaimed = Trie.find(claimedUsers, key(principalId), Principal.equal);

        switch isClaimed {
            case (?true) { return true };
            case (?false) { return false };
            case null { return false };
        };
    };

    private func key(x : Principal) : Trie.Key<Principal> {
        return { hash = Blob.hash(Principal.toBlob(x)); key = x };
    };
};
