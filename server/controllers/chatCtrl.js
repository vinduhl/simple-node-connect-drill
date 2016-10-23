var chats = [];
module.exports = {

  getChats:function(req,res){
    return res.status(200).json(chats);
  },
  postChats:function(req,res){
    let chat = req.body;
    chat.timestamp = new Date();
    chats.push(chat);
    return res.status(201).json(chats);
  },
  deleteChats:function(req,res){
    chats = [];
    return res.status(200).json(chats);
  }
}
