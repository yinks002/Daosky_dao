import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Result "mo:base/Result";
import Option "mo:base/Option";


actor class Token(name: Text, symbol: Text){
    public type Result<T, E> = Result.Result<T, E>;
    let tokenName = name;
    let tokenSymbol= symbol;
    let ledger = HashMap.HashMap<Principal, Nat>(0, Principal.equal, Principal.hash);

    public func mint(owner : Principal, amount : Nat) : async Result<(), Text> {
            let balance = Option.get(ledger.get(owner), 0);
            ledger.put(owner, balance + amount);
            return #ok();
    };
    public func burn(owner : Principal, amount : Nat) : async Result<(), Text> {
            let balance = Option.get(ledger.get(owner), 0);
            if (balance < amount) {
                return #err("Insufficient balance to burn");
            };
            ledger.put(owner, balance - amount);
            return #ok();
    };
    func _burn(owner : Principal, amount : Nat) : () {
            let balance = Option.get(ledger.get(owner), 0);
            ledger.put(owner, balance - amount);
            return;
    };
    public  func transfer(from : Principal, to : Principal, amount : Nat) : async Result<(), Text> {
            let balanceFrom = Option.get(ledger.get(from), 0);
            let balanceTo = Option.get(ledger.get(to), 0);
            if (balanceFrom < amount) {
                return #err("Insufficient balance to transfer");
            };
            ledger.put(from, balanceFrom - amount);
            ledger.put(to, balanceTo + amount);
            return #ok();
        };
    public query func balanceOf(owner : Principal) : async Nat {
        return (Option.get(ledger.get(owner), 0));
    };

    public query func totalSupply() : async Nat {
        var total = 0;
        for (balance in ledger.vals()) {
            total += balance;
        };
        return total;
    };

}

