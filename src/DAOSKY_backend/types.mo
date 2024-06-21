import D "mo:base/Debug";
import Hash "mo:base/Hash";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Principal "mo:base/Principal";
import Time "mo:base/Time";
import Int "mo:base/Int";

module{
    public type Dao = {
        name : Text;
        subject : Text;
        Delegates: [Member];
        logo : Text;
        delegatesCount: Nat;
        Proposals: [Proposal];
        createdAt : Int;
        creator: Principal;
    };
    public type DaoPayload = {
        name: Text;
        subject: Text;
        logo: Text;
    };
    public type Proposal = {
        id: Int;
        title: Text;
        description: Text;
        state: ProposalState;
        voters: [Principal];
        proposer: Principal;
        voteCount: Int;
        createdAt: Time.Time;
        executed : ?Time.Time;
    };
    public type Member = {
        id: Principal;
        tokenBalace: Nat
    };
    public type ProposalState = {
        #open;
        #suceeded;
        #rejected;
    }
};