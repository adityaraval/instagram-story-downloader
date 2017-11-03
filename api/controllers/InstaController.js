/**
 * InstaController
 *
 * @description :: Server-side logic for managing instas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const {
    getStories,
    getMediaByCode,
    getUserByUsername
  } = require('instagram-stories')

module.exports = {

    getInstaStories:function(req,res){
        var values = req.allParams();
        var storyID = values.storyID;
        var userID = values.userID;
        var sessionID = values.sessionID;
        getStories({ id: storyID, userid: userID, sessionid: sessionID }).then(stories => {
            res.ok(stories)       
        });
    }
	
};

