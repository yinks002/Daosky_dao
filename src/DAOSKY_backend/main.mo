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





actor Daosky{
  var count= 1.0;

  type Dao = Types.Dao;
  type DaoPayload = Types.DaoPayload;
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
            let call = Array.find<Principal>(currentDao.Delegates, func(x) { x == caller });
            D.print(debug_show(call));
            if (Array.find<Principal>(currentDao.Delegates, func(x) { x == caller }) != null) {
                return "Error: Address is already a delegate in this DAO";
            } else {
                let delegates = Buffer.fromArray<Principal>(currentDao.Delegates);
                delegates.add(caller);
                let ArrayDelegates = Buffer.toArray<Principal>(delegates);
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
