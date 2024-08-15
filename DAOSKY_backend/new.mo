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
  };
    dao.put(newId, newDao);
    return newId;
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
                  Token= 1000;
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
                };
                dao.put(id, updatedDao);
                "Dao Joined";
            }
        }
    }
};

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
                  
                    let voters = Buffer.fromArray<Principal>(proposal.voters);
                    voters.add(caller);
                    let newProposal :Proposal = {
                      id= proposal.id;
                      title=proposal.title;
                      description=proposal.description;
                      state=  proposal.state;
                      voters=Buffer.toArray(voters);
                      proposer= proposal.proposer;
                      voteCount= proposal.voteCount;
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
                    };
                    dao.put(daoId, updatedDao); 
                    
                    // Perform the voting logic here
                    return "Vote submitted successfully";
                     
                    
                };
                
            }
        };
    }
};

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
        if (Array.find<Member>(currentDao.Delegates, func(x) { x.id == caller }) == null) {
                return "You are not a delegate in this dao";
        }else{
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
          };
          dao.put(daoId, updatedDao);
          return "ik"
        };
          return "okay"
        
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
