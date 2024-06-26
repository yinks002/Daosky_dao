import D "mo:base/Debug";
import Hash "mo:base/Hash";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Prim "mo:prim";
import Types "types";
import Random "mo:base/Random";
import Time "mo:base/Time";
import Nat8 "mo:base/Nat8";
import Principal "mo:base/Principal";
import Array "mo:base/Array";
import Iter "mo:base/Iter";
import Float "mo:base/Float";
import Blob "mo:base/Blob";
import HashMap "mo:base/HashMap";
import Int "mo:base/Int";
import Buffer "mo:base/Buffer";
import Result "mo:base/Result";
import Bool "mo:base/Bool";
import Cycles "mo:base/ExperimentalCycles";






actor Daosky{
  var count= 1.0;
  // type Token = Token.Token;

  type Dao = Types.Dao;
  type Member= Types.Member;
  type DaoPayload = Types.DaoPayload;
  public type Result<T, E> = Result.Result<T, E>;
  type Proposal= Types.Proposal;
 let dao = HashMap.HashMap<Int, Dao>(0,Int.equal, Int.hash);







 

  public shared({caller}) func createDao(payload : DaoPayload) :async Int{
    let newId = await RandomNum();
    let newDao: Dao = {
      name = payload.name;
      subject = payload.subject;
      Delegates = [];
      logo = payload.logo;
      delegatesCount = 0;
      Proposals = [];
      createdAt = 3345;
      creator = caller;
      status = payload.status;
  };
    dao.put(newId, newDao);
    return newId;
  };

  public shared({caller}) func leaveDao(daoId: Int): async Text {
    let oldDao: ?Dao = dao.get(daoId);
    switch (oldDao) {
        case (null) { "DAO doesn't exist" };
        case (?currentDao) {
            let updatedDelegates = Array.filter<Member>(currentDao.Delegates, func(x) { x.id != caller });
            if (Array.size(updatedDelegates) == Array.size(currentDao.Delegates)) {
                return "Member is not part of this DAO";
            } else {
                let updatedDao: Dao = {
                    name = currentDao.name;
                    subject = currentDao.subject;
                    Delegates = updatedDelegates;
                    logo = currentDao.logo;
                    delegatesCount = currentDao.delegatesCount - 1; // Decrease the count of delegates
                    Proposals = currentDao.Proposals;
                    createdAt = currentDao.createdAt;
                    creator = currentDao.creator;
                    status = currentDao.status
                };
                dao.put(daoId, updatedDao);
                "You have left the DAO";
            };
        };
    }
};
 public shared({caller}) func joinDao(id: Int): async Text {
    let oldDao: ?Dao = dao.get(id);
    
    switch (oldDao) {
        case (null) return "Dao doesn't exist";
        case (?currentDao) {
            let call = Array.find<Member>(currentDao.Delegates, func(x) { x.id == caller });
            D.print(debug_show(call));
            if (Array.find<Member>(currentDao.Delegates, func(x) { x.id == caller }) != null) {
                return "Error: Address is already a delegate in this DAO";
            } else {
                let delegates = Buffer.fromArray<Member>(currentDao.Delegates);
                delegates.add({
                  id = caller;
                  amount_e8s = 5;
                });
                let ArrayDelegates = Buffer.toArray<Member>(delegates);
                let updatedDao: Dao = {
                    name = currentDao.name;
                    subject = currentDao.subject;
                    Delegates = ArrayDelegates;
                    logo = currentDao.logo;
                    delegatesCount = currentDao.delegatesCount;
                    Proposals = [];
                    createdAt = currentDao.createdAt;
                    creator = currentDao.creator;
                    status = currentDao.status
                };
                dao.put(id, updatedDao);
                "Dao Joined";
            }
        }
    }
};
//   public shared({caller}) func mintToken(daoId: Int): async Text {
//     let oldDao: ?Dao = dao.get(daoId);
//     switch (oldDao) {
//         case (null) { "DAO doesn't exist" };
//         case (?currentDao) {
//             switch (Array.find<Member>(currentDao.Delegates, func(x) { x.id == caller })) {
//                 case (null) { "Member is not part of this DAO" };
//                 case (?member) {
//                     if (member.amount_e8s < 20) {
//                         // Perform the minting logic
//                         let updatedMember = {
//                             id = member.id;
//                             amount_e8s = member.amount_e8s + 1; // Increase the member's token balance by 1
//                         };
//                         let updatedDelegates = Buffer.fromArray<Member>(currentDao.Delegates);
//                         updatedDelegates.put(updatedMember);
//                         let updatedDao: Dao = {
//                             name = currentDao.name;
//                             subject = currentDao.subject;
//                             Delegates = Buffer.toArray(updatedDelegates);
//                             logo = currentDao.logo;
//                             delegatesCount = currentDao.delegatesCount;
//                             Proposals = currentDao.Proposals;
//                             createdAt = currentDao.createdAt;
//                             creator = currentDao.creator;
//                         };
//                         dao.put(daoId, updatedDao);
//                         return "Token minted successfully";
//                     } else {
//                         return "Member already has 20 or more tokens";
//                     }
//                 };
//             }
//         };
//     }
// };




public shared({caller}) func voteProposal(daoId: Int, proposalId: Int, vote: Bool): async Text {
    let oldDao: ?Dao = dao.get(daoId);
    switch (oldDao) {
        case (null) { "DAO doesn't exist" };
        case (?currentDao) {
            switch (Array.find<Proposal>(currentDao.Proposals, func(p) { p.id == proposalId })) {
                case (null) { "Proposal doesn't exist in this DAO" };
                case (?proposal) {
                  let hasvoted= Array.find<Principal>(proposal.voters, func(x) { x == caller });
                   if(hasvoted != null){
                    return "caller already voted";
                   };
                   let votingPower = switch (Array.find<Member>(currentDao.Delegates, func(member) { member.id == caller })) {
                        case (null) { 0 }; // Default to 0 if the member is not found
                        case (?foundMember) { foundMember.amount_e8s };
                    };
                    D.print(debug_show(votingPower));
                   // Update the vote count based on the caller's vote
                    let voteMultiplier = if(vote == true){
                      1;
                    }else{
                      -1
                    };
                    let finalVoteCount = votingPower * voteMultiplier;

                    // let newVoteCount = proposal.voteCount + voteMultiplier;
                    let voters = Buffer.fromArray<Principal>(proposal.voters);
                    voters.add(caller);
                    let newProposal :Proposal = {
                      id= proposal.id;
                      title=proposal.title;
                      description=proposal.description;
                      state=  proposal.state;
                      voters=Buffer.toArray(voters);
                      proposer= proposal.proposer;
                      voteCount= proposal.voteCount + finalVoteCount;
                      createdAt=  proposal.createdAt;
                      executed =proposal.executed;
                    };

                    let propIndex= await getProposalIndex(daoId, proposalId);
                     
                    let newprops=Buffer.fromArray<Proposal>(currentDao.Proposals);
                    newprops.put(propIndex, newProposal);

  
                     let updatedDao: Dao = {
                        name = currentDao.name;
                        subject = currentDao.subject;
                        Delegates = currentDao.Delegates;
                        logo = currentDao.logo;
                        delegatesCount = currentDao.delegatesCount;
                        Proposals = Buffer.toArray(newprops);
                        createdAt = currentDao.createdAt;
                        creator = currentDao.creator;
                        status = currentDao.status
                    };
                    dao.put(daoId, updatedDao); 
                    
                    // Perform the voting logic here
                    return "Vote submitted successfully";
                     
                    
                };
                
            }
        };
    }
};


public shared ({caller}) func mintToken(daoId: Int, Amount: Nat): async Text {
    let oldDao: ?Dao = dao.get(daoId);
    assert(Amount <= 100);
    switch (oldDao) {
        case (null) { "DAO doesn't exist" };
        case (?currentDao) {
            let callerMember = Array.find<Member>(currentDao.Delegates, func(x) { x.id == caller });
            switch (callerMember) {
                case (null) { "Caller is not a member of this DAO" };
                case (?member) {
                    if (member.amount_e8s < 10) {
                        // Create a new member data with 10 tokens
                        let newMember: Member = {
                            id = caller;
                            amount_e8s = Amount;
                        };
                        let memberIndex = await getMemberIndex(daoId);
                        // Update the delegates list
                        let updatedDelegates = Buffer.fromArray<Member>(currentDao.Delegates);
                        updatedDelegates.put(memberIndex,newMember);
                        let updatedDao: Dao = {
                            name = currentDao.name;
                            subject = currentDao.subject;
                            Delegates = Buffer.toArray(updatedDelegates);
                            logo = currentDao.logo;
                            delegatesCount = currentDao.delegatesCount; 
                            Proposals = currentDao.Proposals;
                            createdAt = currentDao.createdAt;
                            creator = currentDao.creator;
                            status = currentDao.status
                        };
                        dao.put(daoId, updatedDao);
                        "Tokens minted successfully";
                    } else {
                        "Caller already has 10 or more tokens";
                    }
                };
            }
        };
    };
    
};
// public shared ({caller}) func transferToken(daoId: Int, fromMemberId: Principal, toMemberId: Principal, amount: Nat8): async Text {
//     let oldDao: ?Dao = dao.get(daoId);
//     switch (oldDao) {
//         case (null) { "DAO doesn't exist" };
//         case (?currentDao) {
//             let fromMember = Array.find<Member>(currentDao.Delegates, func(x) { x.id == fromMemberId });
//             let toMember = Array.find<Member>(currentDao.Delegates, func(x) { x.id == toMemberId });
//             switch (fromMember, toMember) {
//                 case (null, _) (_, null) {"Sender or recipient member not found in the DAO"};
//                 case (?from, ?to) {
//                     if (from.amount_e8s < amount) {
//                         "Insufficient balance for transfer";
//                     } else {
//                         from.amount_e8s -= amount;
//                         to.amount_e8s += amount;
//                         let updatedDelegates = Buffer.fromArray<Member>(currentDao.Delegates);
//                         let fromIndex = Buffer.indexOf<Member>(updatedDelegates, from);
//                         let toIndex = Buffer.indexOf<Member>(updatedDelegates, to);
//                         updatedDelegates.put(fromIndex, from);
//                         updatedDelegates.put(toIndex, to);
//                         let updatedDao: Dao = {
//                             name = currentDao.name;
//                             subject = currentDao.subject;
//                             Delegates = Buffer.toArray(updatedDelegates);
//                             logo = currentDao.logo;
//                             delegatesCount = currentDao.delegatesCount;
//                             Proposals = currentDao.Proposals;
//                             createdAt = currentDao.createdAt;
//                             creator = currentDao.creator;
//                         };
//                         dao.put(daoId, updatedDao);
//                         "Tokens transferred successfully";
//                     }
//                 };
//             }
//         };
//     };
// };
// public shared({caller}) func voteProposal(daoId: Int, proposalId: Int, vote: Bool): async Text {
//     let oldDao: ?Dao = dao.get(daoId);
//     switch (oldDao) {
//         case (null) { "DAO doesn't exist" };
//         case (?currentDao) {
//             let delegate = Array.find<Principal>(currentDao.Delegates, func(x) { x == caller });
//             switch (delegate) {
//                 case (null) { "You are not a delegate in this DAO" };
//                 case (?_) {
//                     var proposalIndex = -1;
//                     for (i in Iter.range(0, Array.size(currentDao.Proposals) - 1)) {
//                         if (currentDao.Proposals[i].id == proposalId) {
//                             proposalIndex := i;
//                             return "Vote submitted successfully";
//                         }
//                     };
//                     return "Proposal doesn't exist in this DAO";
//                 };
//             }
//         };
//     }
// };
public func getProposalIndex(daoId: Int, proposalId: Int): async Nat {
    let oldDao: ?Dao = dao.get(daoId);
    switch (oldDao) {
        case (null) { 8 };
        case (?currentDao) {
            var index = 0;
            for (i in Iter.range(0, Array.size(currentDao.Proposals) - 1)) {
                if (currentDao.Proposals[i].id == proposalId) {
                    index := i;
                }
            };
            index;
        };
    }
};
public shared({caller}) func getMemberIndex(daoId: Int): async Nat {
    let oldDao: ?Dao = dao.get(daoId);
    switch (oldDao) {
        case (null) { 0 };
        case (?currentDao) {
            var index = 0;
            for (i in Iter.range(0, Array.size(currentDao.Delegates) - 1)) {
                if (currentDao.Delegates[i].id == caller) {
                    index := i;
                    D.print(debug_show(i));
                }
            };
            index;
        };
    }
};
  public query func getProposal(daoId: Int, proposalId: Int): async ?Proposal {
    let oldDao: ?Dao = dao.get(daoId);
    switch (oldDao) {
        case (null) { null };
        case (?currentDao) {
            let proposal = Array.find<Proposal>(currentDao.Proposals, func(p) { p.id == proposalId });
            proposal;
        };
    }
};
  public shared({caller}) func createProposal(daoId: Int, title: Text, description: Text): async Text{
    let oldDao: ?Dao = dao.get(daoId);
    switch(oldDao){
      case(null) "Dao doesnt exist";

      case(?currentDao){
        
         let hasToken = switch (Array.find<Member>(currentDao.Delegates, func(x) { x.id == caller })) {
                case (null) { false }; // Member is not part of this DAO
                case (?member) {
                    member.amount_e8s >= 10; // Return true if the member has at least 10 tokens
                };
            };
        if(hasToken == false){
          return "Not enough tokens to create Proposal";
        };
        // assert(hasSufficientTokens == true);
        // if (hasSufficientTokens == false){
        //   return "you do not have enough tokens"
        // };
        if (Array.find<Member>(currentDao.Delegates, func(x) { x.id == caller }) == null) {
                return "You are not a delegate in this dao";
        }
        else{
        // let hasSufficientTokens: Bool = await checkTokenBalanceForProposal(daoId);
        // D.print(debug_show(await checkTokenBalanceForProposal(daoId)));
          let idd = await RandomNum();
          let newproposal: Proposal = {
            id = idd;
            title = title;
            description = description;
            state = #open;
            voters = [];
            proposer = caller;
            voteCount = 0;
            createdAt = Time.now();
            executed = null;
          };

          let updateProposer = Buffer.fromArray<Proposal>(currentDao.Proposals);
          updateProposer.add(newproposal);
          let updatedDao: Dao = {
            name = currentDao.name;
            subject = currentDao.subject;
            Delegates = currentDao.Delegates;
            logo = currentDao.logo;
            delegatesCount = currentDao.delegatesCount;
            Proposals = Buffer.toArray(updateProposer);
            createdAt = currentDao.createdAt;
            creator = currentDao.creator;
            status = currentDao.status
          };
          dao.put(daoId, updatedDao);
          return "Proposal Created"
        };
          return "okay"
        
      };

    }
  };
  public shared({caller}) func checkTokenBalanceForProposal(daoId: Int): async Bool {
    let oldDao: ?Dao = dao.get(daoId);
    switch (oldDao) {
        case (null) { false }; // DAO doesn't exist
        case (?currentDao) {
            switch (Array.find<Member>(currentDao.Delegates, func(x) { x.id == caller })) {
                case (null) { false }; // Member is not part of this DAO
                case (?member) {
                    return member.amount_e8s >= 10; // Return true if the member has at least 10 tokens
                };
            }
            };
        }
    };
 
  public query func getProposalsInDao(id : Int):async [Proposal]{
    let oldDao: ?Dao = dao.get(id);
    switch(oldDao){
      case(null){[]};
      case(?currentDao){
        return currentDao.Proposals;
      };
    }
  };
  public query func getAllDao(): async [Dao]{
    Iter.toArray(dao.vals());
  };
  public func getDaoById(id: Int):async ?Dao{
   dao.get(id);
 };
 public shared({caller}) func deleteDao(id: Int){
  let oldDao: ?Dao = dao.get(id);
  switch(oldDao){
    case(null){ };
    case(?curent) ignore dao.remove(id);
  }
 };
 public shared({caller}) func updateDao(id: Int, payload: DaoPayload): async Text{
  let oldDao: ?Dao = dao.get(id);

  switch(oldDao){
    case(null) return "Dao doesnt exist";
    case(?currentDao){
     let updatedDao: Dao = {
      name = payload.name;
      subject = payload.subject;
      Delegates = [];
      logo = payload.logo;
      delegatesCount = 0;
      Proposals = [];
      createdAt = 3345;
      creator = caller;
      you = 23;
      status = #open
  };
    dao.put(id, updatedDao);
    "Dao updated successfully";
    }
  }
 };

  



   func RandomNum(): async Int {
    let someBlob : Blob = Blob.fromArray([14, 201, 114, 9, 3, 212, 213, 114, 130, 149, 229, 67, 175, 250, 169, 68, 73, 47, 37, 86, 19, 243, 110, 199, 176, 135, 220, 118, 8, 105, 20, 207]);
    let random = Random.rangeFrom(255, someBlob); // Generate a random number between 0 and 4294967295
    let newRandom = Float.fromInt(random) /count; // Convert the random number to a float between 0 and 1
    count := count + 1.0;
    let tt = Float.toInt(newRandom);
    return tt;
};

};
