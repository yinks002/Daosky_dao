import D "mo:base/Debug";
import Nat "mo:base/Nat";
import Types "types";
import Random "mo:base/Random";
import Time "mo:base/Time";
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
// import Cycles "mo:base/ExperimentalCycles";
import Text "mo:base/Text";
import None "mo:base/None";






actor Daosky{
  var count= 1.0;
    var counter  = 1;
    public query func get() : async Nat {
    counter;
  };
   public func inc() : async () {
    counter += 1;
  };
   public func add(n : Nat) : async () {
    counter += n;
  };
  public shared({caller}) func getPrincipalId(): async Principal{
    return caller;
  };
  // type Token = Token.Token;

  type Dao = Types.Dao;
  type DaoState = Types.DaoState;
  type Member= Types.Member;
  type DaoPayload = Types.DaoPayload;
  public type Result<T, E> = Result.Result<T, E>;
  type Proposal= Types.Proposal;
let dao = HashMap.HashMap<Int, Dao>(0,Int.equal, Int.hash);







 

 public shared({caller}) func createDao(payload : DaoPayload) : async Result<Int,()>{
    let newId = await RandomNum();
    let newDao: Dao = {
        name = payload.name;
        subject = payload.subject;
        Delegates = [{
            id = caller;
            amount_e8s = 101;  // Set the initial token balance for the creator
        }];
        logo = payload.logo;
        delegatesCount = 1;  // Increase the count of delegates
        Proposals = [];
        createdAt = Time.now();
        creator = caller;
        status = payload.status;
    };
    dao.put(newId, newDao);
    return #ok(newId);
};
//lets the caller leave the dao
  public shared({caller}) func leaveDao(daoId: Int): async Result<Text,Text> {
    let oldDao: ?Dao = dao.get(daoId);
    switch (oldDao) {
        //checks if the dao exist
        case (null) { #err("DAO doesn't exist") };
        case (?currentDao) {
            //checks if member is already part of the dao
            let updatedDelegates = Array.filter<Member>(currentDao.Delegates, func(x) { x.id != caller });
            if (Array.size(updatedDelegates) == Array.size(currentDao.Delegates)) {
                return  #err("Member is not part of this DAO");
            } else {
                let updatedDao: Dao = {
                    name = currentDao.name;
                    subject = currentDao.subject;
                    Delegates = updatedDelegates;
                    logo = currentDao.logo;
                    delegatesCount = currentDao.delegatesCount - 1;
                    Proposals = currentDao.Proposals;
                    createdAt = currentDao.createdAt;
                    creator = currentDao.creator;
                    status = currentDao.status;
                };
                dao.put(daoId, updatedDao);
                #ok("You have left the DAO");
            };
        };
    }
};
//lets the caller join the dao
public shared({caller}) func joinDao(id: Int): async Result<Text,Text> {
    let oldDao: ?Dao = dao.get(id);
    
    switch (oldDao) {
        case (null) return  #err("Dao doesn't exist");
        case (?currentDao) {
            //checks if dao status is opened,only then caller can join a public dao
            if (currentDao.status != #open) {
                return  #err("Cannot join a non-public DAO");
            } else {
                let call = Array.find<Member>(currentDao.Delegates, func(x) { x.id == caller });
                D.print(debug_show(call));
                 //checks if member is already part of the dao
                if (Array.find<Member>(currentDao.Delegates, func(x) { x.id == caller }) != null) {
                    return  #err("Error: Address is already a delegate in this DAO");
                } else {
                    //adds caller to the array if the checks passes
                    let delegates = Buffer.fromArray<Member>(currentDao.Delegates);
                    delegates.add({
                      id = caller;
                      amount_e8s = 10;
                    });
                    let ArrayDelegates = Buffer.toArray<Member>(delegates);
                    let updatedDao: Dao = {
                        name = currentDao.name;
                        subject = currentDao.subject;
                        Delegates = ArrayDelegates;
                        logo = currentDao.logo;
                        delegatesCount = currentDao.delegatesCount + 1;
                        Proposals = [];
                        createdAt = currentDao.createdAt;
                        creator = currentDao.creator;
                        status = currentDao.status;
                    };
                    dao.put(id, updatedDao);
                    #ok("Dao Joined");
                }
            }
        }
    }
};
//  public shared({caller}) func joinDao(id: Int): async Text {
//     let oldDao: ?Dao = dao.get(id);
    
//     switch (oldDao) {
//         case (null) return "Dao doesn't exist";
//         case (?currentDao) {
//             let call = Array.find<Member>(currentDao.Delegates, func(x) { x.id == caller });
//             D.print(debug_show(call));
//             if (Array.find<Member>(currentDao.Delegates, func(x) { x.id == caller }) != null) {
//                 return "Error: Address is already a delegate in this DAO";
//             } else {
//                 let delegates = Buffer.fromArray<Member>(currentDao.Delegates);
//                 delegates.add({
//                   id = caller;
//                   amount_e8s = 5;
//                 });
//                 let ArrayDelegates = Buffer.toArray<Member>(delegates);
//                 let updatedDao: Dao = {
//                     name = currentDao.name;
//                     subject = currentDao.subject;
//                     Delegates = ArrayDelegates;
//                     logo = currentDao.logo;
//                     delegatesCount = currentDao.delegatesCount;
//                     Proposals = [];
//                     createdAt = currentDao.createdAt;
//                     creator = currentDao.creator;
//                     status = currentDao.status
//                 };
//                 dao.put(id, updatedDao);
//                 "Dao Joined";
//             }
//         }
//     }
// };


//adds the caller to a private status dao
public shared({caller}) func addCallerToPrivateDao(daoId: Int, callerToAdd: Principal): async Result<Text,Text> {
    let oldDao: ?Dao = dao.get(daoId);
    switch (oldDao) {
        case (null) {  #err("DAO doesn't exist") };
        case (?currentDao) {
            if (currentDao.creator != caller) {
                //checks if the caller of the func if the creator of the dao
                return  #err("Only the creator of the DAO can add a caller");
                //checks if the dao status is closed
            } else if (currentDao.status != #priv and currentDao.status != #open){
                return  #err("The DAO is closed");
            } else {
                let existingCaller = Array.find<Member>(currentDao.Delegates, func(x) { x.id == callerToAdd });
                if (existingCaller != null) {
                    //checks if caller is already a delegate
                    return  #err("Caller is already a delegate in this DAO");
                } else {
                    let newDelegates = Buffer.fromArray<Member>(currentDao.Delegates);
                    newDelegates.add({
                        id = callerToAdd;
                        amount_e8s = 5; // Set the initial token balance for the new caller
                    });
                    let updatedDao: Dao = {
                        name = currentDao.name;
                        subject = currentDao.subject;
                        Delegates = Buffer.toArray(newDelegates);
                        logo = currentDao.logo;
                        delegatesCount = currentDao.delegatesCount + 1; // Increase the count of delegates
                        Proposals = currentDao.Proposals;
                        createdAt = currentDao.createdAt;
                        creator = currentDao.creator;
                        status = currentDao.status;
                    };
                    dao.put(daoId, updatedDao);
                    #ok("Caller added to the DAO");
                }
            }
        };
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



//lets a delegate vote on existing proposal in the dao
// public shared({caller}) func voteProposal(daoId: Int, proposalId: Int, vote: Bool): async Result<Text,Text> {
//     let oldDao: ?Dao = dao.get(daoId);
//     switch (oldDao) {
//         case (null) {  #err("DAO doesn't exist") };
//         case (?currentDao) {
//             switch (Array.find<Proposal>(currentDao.Proposals, func(p) { p.id == proposalId })) {
//                 //checks if proposal exists in the dao
//                 case (null) {  #err("Proposal doesn't exist in this DAO") };
//                 case (?proposal) {
//                 //   let hasvoted= Array.find<Principal>(proposal.voters, func(x) { x == caller });
//                 //    if(hasvoted != null){
//                 //     return "caller already voted";
//                 //    };
//                    if(proposal.state != #open){
//                     // checks if proposal is open for voting
//                     return  #err("The proposal is not open for voting")
//                    };
//                    let hasExe = await checkAndExecuteProposal(daoId, proposalId);
//                    if(hasExe == "Proposal executed successfully"){
//                     return #ok(hasExe);
//                    }; 
//                    let votingPower = switch (Array.find<Member>(currentDao.Delegates, func(member) { member.id == caller })) {
//                         case (null) { 0 }; // Default to 0 if the member is not found
//                         case (?foundMember) { foundMember.amount_e8s };
//                     };
//                     D.print(debug_show(votingPower));
//                    // Update the vote count based on the caller's vote
//                     let voteMultiplier = if(vote == true){
//                       1;
//                     }else{
//                       -1
//                     };
//                     //multiplies the token amount of caller by 1 or -1 depending on voters decision of true or false
//                     let finalVoteCount = votingPower * voteMultiplier;

//                     // let newVoteCount = proposal.voteCount + voteMultiplier;
//                     let voters = Buffer.fromArray<Principal>(proposal.voters);
//                     let finalVote = proposal.voteCount + finalVoteCount;
//                     voters.add(caller);
//                     let newProposal :Proposal = {
//                       id= proposal.id;
//                       title=proposal.title;
//                       description=proposal.description;
//                       //if the vote is more than 100, proposal is suceeded, if it is less than -100, proposal is rejected, if its neither, its left opened
//                       state =  if(finalVote > 100){
//                         #suceeded
//                       }else if (finalVote < -100){
//                         #rejected
//                       }else{
//                         #open
//                       };
//                       voters=Buffer.toArray(voters);
//                       proposer= proposal.proposer;
//                       voteCount= finalVote;
//                       createdAt=  proposal.createdAt;
//                       //execute proposal time if proposal is executed
//                       executed =if (finalVote > 100 or finalVote < 100) { ?Time.now() } else { proposal.executed };
//                     };

//                     let propIndex= await getProposalIndex(daoId, proposalId);
                     
//                     let newprops=Buffer.fromArray<Proposal>(currentDao.Proposals);
//                     newprops.put(propIndex, newProposal);

  
//                      let updatedDao: Dao = {
//                         name = currentDao.name;
//                         subject = currentDao.subject;
//                         Delegates = currentDao.Delegates;
//                         logo = currentDao.logo;
//                         delegatesCount = currentDao.delegatesCount;
//                         Proposals = Buffer.toArray(newprops);
//                         createdAt = currentDao.createdAt;
//                         creator = currentDao.creator;
//                         status = currentDao.status
//                     };
//                     dao.put(daoId, updatedDao); 
                    
//                     // Perform the voting logic here
//                     return #ok("Vote submitted successfully");
                     
                    
//                 };
                
//             }
//         };
//     }
// };


//prevents bug  Prevent Duplicate Voting in voteProposal and also add staking 


public shared({caller}) func voteProposal(daoId: Int, proposalId: Int, vote: Bool): async Result<Text, Text> {
    let oldDao: ?Dao = dao.get(daoId);
    switch (oldDao) {
        case (null) { #err("DAO doesn't exist") };
        case (?currentDao) {
            let proposal = Array.find<Proposal>(currentDao.Proposals, func(p) { p.id == proposalId });
            switch (proposal) {
                case (null) { #err("Proposal doesn't exist") };
                case (?prop) {
                    if (prop.state != #open or Time.now() > prop.expiry) {
                        return #err("Proposal is not open for voting or has expired");
                    };
                    if (Array.find<Principal>(prop.voters, func(x) { x == caller }) != null) {
                        return #err("Caller has already voted");
                    };
                    let callerMember = Array.find<Member>(currentDao.Delegates, func(x) { x.id == caller });
                    switch (callerMember) {
                        case (null) { #err("Caller is not a delegate") };
                        case (?member) {
                            let stakedAmount = Array.foldLeft<Stake, Nat>(
                                prop.stakes,
                                0,
                                func(acc, stake) { if (stake.memberId == caller) { acc + stake.amount } else { acc } }
                            );
                            let votingPower = member.amount_e8s + stakedAmount;
                            if (votingPower == 0) {
                                return #err("No voting power available");
                            };
                            let voteMultiplier = if (vote) { 1 } else { -1 };
                            let finalVoteCount = prop.voteCount + (votingPower * voteMultiplier);
                            let voters = Buffer.fromArray<Principal>(prop.voters);
                            voters.add(caller);
                            let newProposal: Proposal = {
                                id = prop.id;
                                title = prop.title;
                                description = prop.description;
                                proposalType = prop.proposalType;
                                state = if (finalVoteCount > 100) { #suceeded }
                                        else if (finalVoteCount < -100) { #rejected }
                                        else { #open };
                                voters = Buffer.toArray(voters);
                                proposer = prop.proposer;
                                voteCount = finalVoteCount;
                                createdAt = prop.createdAt;
                                executed = if (finalVoteCount > 100 or finalVoteCount < -100) { ?Time.now() } else { prop.executed };
                                expiry = prop.expiry;
                                comments = prop.comments;
                                stakes = prop.stakes;
                            };
                            let propIndex = await getProposalIndex(daoId, proposalId);
                            let newProposals = Buffer.fromArray<Proposal>(currentDao.Proposals);
                            newProposals.put(propIndex, newProposal);
                            let updatedDao: Dao = {
                                name = currentDao.name;
                                subject = currentDao.subject;
                                Delegates = currentDao.Delegates;
                                logo = currentDao.logo;
                                delegatesCount = currentDao.delegatesCount;
                                Proposals = Buffer.toArray(newProposals);
                                createdAt = currentDao.createdAt;
                                creator = currentDao.creator;
                                status = currentDao.status;
                                stakes = currentDao.stakes;
                            };
                            dao.put(daoId, updatedDao);
                            #ok("Vote submitted successfully");
                        };
                    };
                };
            };
        };
    };
};

public func checkAndExecuteProposal(daoId: Int, proposalId: Int): async Text {
    let oldDao: ?Dao = dao.get(daoId);
    switch (oldDao) {
        case (null) { "DAO doesn't exist" };
        case (?currentDao) {
            switch (Array.find<Proposal>(currentDao.Proposals, func(p) { p.id == proposalId })) {
                case (null) { "Proposal doesn't exist in this DAO" };
                case (?proposal) {
                    if (proposal.state != #open) {
                        return "The proposal is not open for execution";
                    } else if (proposal.voteCount > 100) {
                        let executedProposal: Proposal = {
                            id = proposal.id;
                            title = proposal.title;
                            description = proposal.description;
                            state = #suceeded;
                            voters = proposal.voters;
                            proposer = proposal.proposer;
                            voteCount = proposal.voteCount;
                            createdAt = proposal.createdAt;
                            executed = ?Time.now();
                        };
                        let propIndex = await getProposalIndex(daoId, proposalId);
                        let newProps = Buffer.fromArray<Proposal>(currentDao.Proposals);
                        newProps.put(propIndex, executedProposal);
                        let updatedDao: Dao = {
                            name = currentDao.name;
                            subject = currentDao.subject;
                            Delegates = currentDao.Delegates;
                            logo = currentDao.logo;
                            delegatesCount = currentDao.delegatesCount;
                            Proposals = Buffer.toArray(newProps);
                            createdAt = currentDao.createdAt;
                            creator = currentDao.creator;
                            status = currentDao.status;
                        };
                        dao.put(daoId, updatedDao);
                        "Proposal executed successfully";
                    } else {
                        return "Vote count is not sufficient for execution";
                    }
                };
            }
        };
    }
};

public shared ({caller}) func mintToken(daoId: Int, Amount: Nat): async Result<Text,Text> {
    let oldDao: ?Dao = dao.get(daoId);
    assert(Amount <= 100);
    switch (oldDao) {
        case (null) {  #err("DAO doesn't exist") };
        case (?currentDao) {
            let callerMember = Array.find<Member>(currentDao.Delegates, func(x) { x.id == caller });
            switch (callerMember) {
                case (null) { #ok("Caller is not a member of this DAO") };
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
                        #ok("Tokens minted successfully");
                    } else {
                         #err("Caller already has 10 or more tokens");
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


//allows the creator of the dao to change dao status
public shared({caller}) func changeDaoStatus(id: Int, newStatus: DaoState): async Result<Text,Text> {
    let oldDao: ?Dao = dao.get(id);
    switch (oldDao) {
        case (null) { return #err("DAO doesn't exist") };
        case (?currentDao) {
            if(currentDao.creator != caller){
                //checks if caller is the creator of the dao
                return #err("you're not the creator op;f this dao");
            }else{

                switch (Array.find<Member>(currentDao.Delegates, func(x) { x.id == caller })) {
                case (null) { return #err("Caller is not a member of this DAO") };
                case ( ?member) {
                    if (member.amount_e8s < 100) {
                        //caller must have 100 tokens to be able to create a dao
                        return #err("Caller does not have enough tokens to change the status");
                    }
                    
                     else {
                        // Deduct 50 tokens from the caller's balance
                        let updatedDelegates = Buffer.fromArray<Member>(currentDao.Delegates);
                        let changeDelegates : Member = {
                            id =  member.id;
                            amount_e8s = member.amount_e8s - 50;
                        };
                        let memberIndex = await getMemberIndex(id);
                        updatedDelegates.put(memberIndex, changeDelegates);
                        let updatedDao: Dao = {
                            name = currentDao.name;
                            subject = currentDao.subject;
                            Delegates = Buffer.toArray(updatedDelegates);
                            logo = currentDao.logo;
                            delegatesCount = currentDao.delegatesCount;
                            Proposals = currentDao.Proposals;
                            createdAt = currentDao.createdAt;
                            creator = currentDao.creator;
                            status = newStatus;
                        };
                        dao.put(id, updatedDao);
                        return #ok("DAO status changed successfully");
                    }
                };
            }
            }
            
        };
    }
};
//gets the index of a proposal in an array with the proposal id
public func getProposalIndex(daoId: Int, proposalId: Int): async Nat {
    let oldDao: ?Dao = dao.get(daoId);
    switch (oldDao) {
        case (null) { 0 };
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
////gets the index of a delegate in an array with the dao id
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
//func to output proposal
  public query func getProposal(daoId: Int, proposalId: Int): async Result<?Proposal,Text> {
    let oldDao: ?Dao = dao.get(daoId);
    switch (oldDao) {
        case (null) {  #err("Proposal not Found") };
        case (?currentDao) {
            let proposal = Array.find<Proposal>(currentDao.Proposals, func(p) { p.id == proposalId });
            #ok(proposal);
        };
    }
};

//func to create proposal
  public shared({caller}) func createProposal(daoId: Int, title: Text, description: Text): async Result<Text,Text>{
    let oldDao: ?Dao = dao.get(daoId);
    switch(oldDao){
      case(null)  #err("Dao doesnt exist");

      case(?currentDao){
        
         let hasToken = switch (Array.find<Member>(currentDao.Delegates, func(x) { x.id == caller })) {
                case (null) { false }; // Member is not part of this DAO
                case (?member) {
                    member.amount_e8s >= 10; // Return true if the member has at least 10 tokens
                };
            };
        // if(hasToken == false){
        //   return  #err("Not enough tokens to create Proposal");
        // };
        // assert(hasSufficientTokens == true);
        // if (hasSufficientTokens == false){
        //   return "you do not have enough tokens"
        // };
        

        //checks if a member is a delegate of the dao
        if (Array.find<Member>(currentDao.Delegates, func(x) { x.id == caller }) == null) {
                return  #err("You are not a delegate in this dao");
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
          return #ok("Proposal Created")
        };
      
        
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
 //output the proposals in a dao
  public query func getProposalsInDao(id : Int):async [Proposal]{
    let oldDao: ?Dao = dao.get(id);
    switch(oldDao){
      case( null ){ [] };
      case(?currentDao){
        return currentDao.Proposals;
      };
    }
  };
  //output all daos in the canister
  public query func getAllDao(): async [Dao]{
    Iter.toArray(dao.vals());
  };
  //gets dao info by id
  public func getDaoById(id: Int):async ?Dao{
   dao.get(id);
 };
 //deletes a dao
 public  func deleteDao(id: Int){
  let oldDao: ?Dao = dao.get(id);
  switch(oldDao){
    case(null){ };
    case(?curent) ignore dao.remove(id);
  }
 };
//create dao proposal 
public shared({caller}) func createDaoUpdateProposal(
    daoId: Int,
    proposedName: Text,
    proposedSubject: Text,
    proposedLogo: Text,
    proposedStatus: DaoState
): async Result<Text, Text> {
    let oldDao: ?Dao = dao.get(daoId);
    switch (oldDao) {
        case (null) { #err("DAO doesn't exist") };
        case (?currentDao) {
            // Check if caller is a delegate
            let callerMember = Array.find<Member>(currentDao.Delegates, func(x) { x.id == caller });
            switch (callerMember) {
                case (null) { #err("You are not a delegate in this DAO") };
                case (?member) {
                    // Check if member has enough tokens (similar to createProposal)
                    if (member.amount_e8s < 10) {
                        return #err("Not enough tokens to create proposal");
                    };

                    // Create a description that includes all proposed changes
                    let description = "Proposed DAO Update:\n" #
                        "New Name: " # proposedName # "\n" #
                        "New Subject: " # proposedSubject # "\n" #
                        "New Logo: " # proposedLogo # "\n" #
                        "New Status: " # (switch(proposedStatus) {
                            case (#open) "Open";
                            case (#priv) "Private";
                            case (#closed) "Closed";
                        });

                    // Create new proposal
                    let id = await RandomNum();
                    let newProposal: Proposal = {
                        id = id;
                        title = "DAO Update Proposal";
                        description = description;
                        state = #open;
                        voters = [];
                        proposer = caller;
                        voteCount = 0;
                        createdAt = Time.now();
                        executed = null;
                    };

                    // Add proposal to DAO
                    let updateProposals = Buffer.fromArray<Proposal>(currentDao.Proposals);
                    updateProposals.add(newProposal);
                    let updatedDao: Dao = {
                        name = currentDao.name;
                        subject = currentDao.subject;
                        Delegates = currentDao.Delegates;
                        logo = currentDao.logo;
                        delegatesCount = currentDao.delegatesCount;
                        Proposals = Buffer.toArray(updateProposals);
                        createdAt = currentDao.createdAt;
                        creator = currentDao.creator;
                        status = currentDao.status;
                    };
                    dao.put(daoId, updatedDao);
                    #ok("DAO update proposal created successfully");
                };
            };
        };
    }
};

//release staked tokens after proposal
public shared({caller}) func releaseStakedTokens(daoId: Int, proposalId: Int): async Result<Text, Text> {
    let oldDao: ?Dao = dao.get(daoId);
    switch (oldDao) {
        case (null) { #err("DAO doesn't exist") };
        case (?currentDao) {
            let proposal = Array.find<Proposal>(currentDao.Proposals, func(p) { p.id == proposalId });
            switch (proposal) {
                case (null) { #err("Proposal doesn't exist") };
                case (?prop) {
                    if (prop.state == #open and Time.now() <= prop.expiry) {
                        return #err("Proposal is still open");
                    };
                    let callerStakes = Array.filter<Stake>(currentDao.stakes, func(s) { s.memberId == caller and s.proposalId == proposalId });
                    if (Array.size(callerStakes) == 0) {
                        return #err("No stakes found for this proposal");
                    };
                    let totalStaked = Array.foldLeft<Stake, Nat>(callerStakes, 0, func(acc, s) { acc + s.amount });
                    let callerMember = Array.find<Member>(currentDao.Delegates, func(x) { x.id == caller });
                    switch (callerMember) {
                        case (null) { #err("Caller is not a delegate") };
                        case (?member) {
                            let updatedMember: Member = {
                                id = member.id;
                                amount_e8s = member.amount_e8s + totalStaked;
                            };
                            let memberIndex = await getMemberIndex(daoId);
                            let updatedDelegates = Buffer.fromArray<Member>(currentDao.Delegates);
                            updatedDelegates.put(memberIndex, updatedMember);
                            let updatedStakes = Array.filter<Stake>(currentDao.stakes, func(s) { s.memberId != caller or s.proposalId != proposalId });
                            let updatedDao: Dao = {
                                name = currentDao.name;
                                subject = currentDao.subject;
                                Delegates = Buffer.toArray(updatedDelegates);
                                logo = currentDao.logo;
                                delegatesCount = currentDao.delegatesCount;
                                Proposals = currentDao.Proposals;
                                createdAt = currentDao.createdAt;
                                creator = currentDao.creator;
                                status = currentDao.status;
                                stakes = updatedStakes;
                            };
                            dao.put(daoId, updatedDao);
                            #ok("Staked tokens released successfully");
                        };
                    };
                };
            };
        };
    };
};

//execute update dao proposal 
public shared({caller}) func executeDaoUpdateProposal(daoId: Int, proposalId: Int): async Result<Text, Text> {
    let oldDao: ?Dao = dao.get(daoId);
    switch (oldDao) {
        case (null) { #err("DAO doesn't exist") };
        case (?currentDao) {
            let proposal = Array.find<Proposal>(currentDao.Proposals, func(p) { p.id == proposalId });
            switch (proposal) {
                case (null) { #err("Proposal doesn't exist") };
                case (?prop) {
                    if (prop.state != #suceeded) {
                        return #err("Proposal has not succeeded");
                    };
                    if (prop.executed != null) {
                        return #err("Proposal already executed");
                    };

                    // Parse the description to extract proposed changes
                    // Note: This is a simple parsing approach; you might want to store proposed changes differently
                    let lines = Iter.toArray(Text.split(prop.description, #char '\n'));
                    var newName = currentDao.name;
                    var newSubject = currentDao.subject;
                    var newLogo = currentDao.logo;
                    var newStatus = currentDao.status;

                    for (line in lines.vals()) {
                        if (Text.startsWith(line, #text "New Name: ")) {
                            newName := Text.trimStart(line, #text "New Name: ");
                        };
                        if (Text.startsWith(line, #text "New Subject: ")) {
                            newSubject := Text.trimStart(line, #text "New Subject: ");
                        };
                        if (Text.startsWith(line, #text "New Logo: ")) {
                            newLogo := Text.trimStart(line, #text "New Logo: ");
                        };
                        if (Text.startsWith(line, #text "New Status: ")) {
                            let statusText = Text.trimStart(line, #text "New Status: ");
                            newStatus := switch (statusText) {
                                case ("Open") #open;
                                case ("Private") #priv;
                                case ("Closed") #closed;
                                case (_) currentDao.status; // Keep current status if invalid
                            };
                        };
                    };

                    // Update the proposal to mark as executed
                    let updatedProposal: Proposal = {
                        id = prop.id;
                        title = prop.title;
                        description = prop.description;
                        state = #suceeded;
                        voters = prop.voters;
                        proposer = prop.proposer;
                        voteCount = prop.voteCount;
                        createdAt = prop.createdAt;
                        executed = ?Time.now();
                    };

                    // Update the proposals array
                    let propIndex = await getProposalIndex(daoId, proposalId);
                    let newProposals = Buffer.fromArray<Proposal>(currentDao.Proposals);
                    newProposals.put(propIndex, updatedProposal);

                    // Update the DAO with new values
                    let updatedDao: Dao = {
                        name = newName;
                        subject = newSubject;
                        Delegates = currentDao.Delegates;
                        logo = newLogo;
                        delegatesCount = currentDao.delegatesCount;
                        Proposals = Buffer.toArray(newProposals);
                        createdAt = currentDao.createdAt;
                        creator = currentDao.creator;
                        status = newStatus;
                    };
                    dao.put(daoId, updatedDao);
                    #ok("DAO updated successfully via proposal");
                };
            };
        };
    }
};

//function to add comments 
public shared({caller}) func addProposalComment(daoId: Int, proposalId: Int, content: Text): async Result<Text, Text> {
    let oldDao: ?Dao = dao.get(daoId);
    switch (oldDao) {
        case (null) { #err("DAO doesn't exist") };
        case (?currentDao) {
            let proposal = Array.find<Proposal>(currentDao.Proposals, func(p) { p.id == proposalId });
            switch (proposal) {
                case (null) { #err("Proposal doesn't exist") };
                case (?prop) {
                    if (prop.state != #open) {
                        return #err("Cannot comment on a closed proposal");
                    };
                    if (Text.size(content) == 0 or Text.size(content) > 500) {
                        return #err("Comment must be between 1 and 500 characters");
                    };
                    let callerMember = Array.find<Member>(currentDao.Delegates, func(x) { x.id == caller });
                    switch (callerMember) {
                        case (null) { #err("You are not a delegate in this DAO") };
                        case (?member) {
                            let newComment: Comment = {
                                commenter = caller;
                                content = content;
                                timestamp = Time.now();
                            };
                            let updatedComments = Buffer.fromArray<Comment>(prop.comments);
                            updatedComments.add(newComment);
                            let updatedProposal: Proposal = {
                                id = prop.id;
                                title = prop.title;
                                description = prop.description;
                                proposalType = prop.proposalType;
                                state = prop.state;
                                voters = prop.voters;
                                proposer = prop.proposer;
                                voteCount = prop.voteCount;
                                createdAt = prop.createdAt;
                                executed = prop.executed;
                                expiry = prop.expiry;
                                comments = Buffer.toArray(updatedComments);
                            };
                            let propIndex = await getProposalIndex(daoId, proposalId);
                            let newProposals = Buffer.fromArray<Proposal>(currentDao.Proposals);
                            newProposals.put(propIndex, updatedProposal);
                            let updatedDao: Dao = {
                                name = currentDao.name;
                                subject = currentDao.subject;
                                Delegates = currentDao.Delegates;
                                logo = currentDao.logo;
                                delegatesCount = currentDao.delegatesCount;
                                Proposals = Buffer.toArray(newProposals);
                                createdAt = currentDao.createdAt;
                                creator = currentDao.creator;
                                status = currentDao.status;
                            };
                            dao.put(daoId, updatedDao);
                            #ok("Comment added successfully");
                        };
                    };
                };
            };
        };
    };
};

//query to retrieve comments
public query func getProposalComments(daoId: Int, proposalId: Int): async Result<[Comment], Text> {
    let oldDao: ?Dao = dao.get(daoId);
    switch (oldDao) {
        case (null) { #err("DAO doesn't exist") };
        case (?currentDao) {
            let proposal = Array.find<Proposal>(currentDao.Proposals, func(p) { p.id == proposalId });
            switch (proposal) {
                case (null) { #err("Proposal doesn't exist") };
                case (?prop) { #ok(prop.comments) };
            };
        };
    };
};

//token staking for voting power 
public shared({caller}) func stakeTokens(daoId: Int, proposalId: Int, amount: Nat): async Result<Text, Text> {
    let oldDao: ?Dao = dao.get(daoId);
    switch (oldDao) {
        case (null) { #err("DAO doesn't exist") };
        case (?currentDao) {
            let proposal = Array.find<Proposal>(currentDao.Proposals, func(p) { p.id == proposalId });
            switch (proposal) {
                case (null) { #err("Proposal doesn't exist") };
                case (?prop) {
                    if (prop.state != #open or Time.now() > prop.expiry) {
                        return #err("Proposal is not open for staking");
                    };
                    let callerMember = Array.find<Member>(currentDao.Delegates, func(x) { x.id == caller });
                    switch (callerMember) {
                        case (null) { #err("You are not a delegate in this DAO") };
                        case (?member) {
                            if (member.amount_e8s < amount) {
                                return #err("Insufficient tokens to stake");
                            };
                            let newStake: Stake = {
                                memberId = caller;
                                proposalId = proposalId;
                                amount = amount;
                                stakedAt = Time.now();
                            };
                            let updatedMember: Member = {
                                id = member.id;
                                amount_e8s = member.amount_e8s - amount;
                            };
                            let memberIndex = await getMemberIndex(daoId);
                            let updatedDelegates = Buffer.fromArray<Member>(currentDao.Delegates);
                            updatedDelegates.put(memberIndex, updatedMember);
                            let updatedStakes = Buffer.fromArray<Stake>(currentDao.stakes);
                            updatedStakes.add(newStake);
                            let updatedProposalStakes = Buffer.fromArray<Stake>(prop.stakes);
                            updatedProposalStakes.add(newStake);
                            let updatedProposal: Proposal = {
                                id = prop.id;
                                title = prop.title;
                                description = prop.description;
                                proposalType = prop.proposalType;
                                state = prop.state;
                                voters = prop.voters;
                                proposer = prop.proposer;
                                voteCount = prop.voteCount;
                                createdAt = prop.createdAt;
                                executed = prop.executed;
                                expiry = prop.expiry;
                                comments = prop.comments;
                                stakes = Buffer.toArray(updatedProposalStakes);
                            };
                            let propIndex = await getProposalIndex(daoId, proposalId);
                            let newProposals = Buffer.fromArray<Proposal>(currentDao.Proposals);
                            newProposals.put(propIndex, updatedProposal);
                            let updatedDao: Dao = {
                                name = currentDao.name;
                                subject = currentDao.subject;
                                Delegates = Buffer.toArray(updatedDelegates);
                                logo = currentDao.logo;
                                delegatesCount = currentDao.delegatesCount;
                                Proposals = Buffer.toArray(newProposals);
                                createdAt = currentDao.createdAt;
                                creator = currentDao.creator;
                                status = currentDao.status;
                                stakes = Buffer.toArray(updatedStakes);
                            };
                            dao.put(daoId, updatedDao);
                            #ok("Tokens staked successfully");
                        };
                    };
                };
            };
        };
    };
};



 //updates a dao
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
      status = payload.status
  };
    dao.put(id, updatedDao);
    "Dao updated successfully";
    }
  }
 };

  


//function to generate random num
   func RandomNum(): async Int {
    let someBlob : Blob = Blob.fromArray([14, 201, 114, 9, 3, 212, 213, 114, 130, 149, 229, 67, 175, 250, 169, 68, 73, 47, 37, 86, 19, 243, 110, 199, 176, 135, 220, 118, 8, 105, 20, 207]);
    let random = Random.rangeFrom(255, someBlob); // Generate a random number between 0 and 4294967295
    let newRandom = Float.fromInt(random) /count; // Convert the random number to a float between 0 and 1
    count := count + 1.0;
    let tt = Float.toInt(newRandom);
    return tt;
};

};
