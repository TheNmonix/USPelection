

(model.Votes.methods.voteForMe = function(id) {
	if(isNaN(id) || id<1) return null;
	  
	 var vote=new ds.Votes();
	 vote.date=new Date();
	 vote.profil=ds.Profil(id);
	 //vote.ip;
	 vote.save();
	 return true;
	 
}).scope="public";


 