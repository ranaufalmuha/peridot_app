import Trie "mo:base/Trie";
import Iter "mo:base/Iter";
// import Option "mo:base/Option";
import Principal "mo:base/Principal";
import Time "mo:base/Time";
import Blob "mo:base/Blob";

actor User {
    public type Users = {
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

    public type UsersNoDate = {
        profilePic : Text;
        username : Text;
        bio : Text;
        fullname : Text;
        usertype : Text;
        email : Text;
        birthdate : Text;
    };

    private var users : Trie.Trie<Principal, Users> = Trie.empty();

    private func key(x : Principal) : Trie.Key<Principal> {
        return { hash = Blob.hash(Principal.toBlob(x)); key = x };
    };

    // Create or Login
    public func loginOrRegister(principalIdText : Text) : async ?Users {
        let existingUser = await findUser(principalIdText);
        let principalId = Principal.fromText(principalIdText);
        if (existingUser == null) {
            let newUser = {
                profilePic = "";
                username = "";
                bio = "";
                fullname = "";
                usertype = "";
                email = "";
                birthdate = "";
                createdAt = Time.now();
                updatedAt = Time.now();
            };
            users := Trie.replace(
                users,
                key(principalId),
                Principal.equal,
                ?newUser,
            ).0;

            return ?newUser;
        } else {
            return existingUser;
        };
    };

    // Read All
    public query func readAll() : async [(Principal, Users)] {
        return Iter.toArray(Trie.iter(users));
    };

    public query ({ caller }) func testcaller() : async Principal {
        return caller;
    };

    public query func findUser(principalIdText : Text) : async ?Users {
        let principalId = Principal.fromText(principalIdText);
        let result = Trie.find(users, key(principalId), Principal.equal);
        return result;
    };

    public query func isUsernameExists(username : Text) : async Text {
        for ((_, user) in Iter.fromArray(Iter.toArray(Trie.iter(users)))) {
            if (user.username == username) {
                return username;
            };
        };
        return "";
    };

    // Update
    public func update(principalIdText : Text, userinput : UsersNoDate) : async Bool {
        let principalId = Principal.fromText(principalIdText);
        let resultUser = Trie.find(users, key(principalId), Principal.equal);
        let usernameexist = await isUsernameExists(userinput.username);
        var finalusername : Text = "";

        switch resultUser {
            case (?existingUser) {
                if (userinput.username != "") {
                    finalusername := userinput.username;
                    if (usernameexist == userinput.username and userinput.username != existingUser.username) {
                        return false;
                    };
                } else {
                    finalusername := existingUser.username;
                };

                let updatedUser = {
                    profilePic = if (userinput.profilePic != "") userinput.profilePic else existingUser.profilePic;
                    username = finalusername;
                    bio = if (userinput.bio != "") userinput.bio else existingUser.bio;
                    fullname = if (userinput.fullname != "") userinput.fullname else existingUser.fullname;
                    usertype = if (userinput.usertype != "") userinput.usertype else existingUser.usertype;
                    email = if (userinput.email != "") userinput.email else existingUser.email;
                    birthdate = if (userinput.birthdate != "") userinput.birthdate else existingUser.birthdate;
                    createdAt = existingUser.createdAt;
                    updatedAt = Time.now();
                };
                users := Trie.replace(
                    users,
                    key(principalId),
                    Principal.equal,
                    ?updatedUser,
                ).0;
                return true;
            };
            case null {
                return false;
            };
        };
    };

    // Delete
    // public func delete(principalIdText : Text) : async Bool {
    //     let principalId = Principal.fromText(principalIdText);
    //     let resultUser = Trie.find(users, key(principalId), Principal.equal);

    //     if (Option.isSome(resultUser)) {
    //         users := Trie.replace(
    //             users,
    //             key(principalId),
    //             Principal.equal,
    //             null,
    //         ).0;
    //         return true;
    //     };
    //     return false;
    // };
};
