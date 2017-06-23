import {View} from 'backbone';
import createDomElement from '../modules/domElement';
import PlayersCollection from '../collections/PlayersCollection';
let Players = new PlayersCollection;
let playerList;

const PlayerView = View.extend({

    initialize:function(){

        this.showPlayer();
    },

    showPlayer: function(player){

        //get info from the url
        this.model = Players;
        this.model.fetch({
            success : (player) => this.showPlayerDetailSuccessHandler(player),
            error: (player, response) => this.shoPlayerDetailErrorHandler(player, response),
            data: {}

        });
    },

    showPlayerDetailSuccessHandler: function (player){
        let count = 0;
        playerList = document.getElementById("playerlist");
        for (var item in player){
            let li = createDomElement({tagName: 'li', attributes:{class: "player"}, content: player.models[""+count+""].attributes.name + " has " + player.models[""+count+""].attributes.health + "hp left"});
            playerList.appendChild(li);

            count++
        }


    },
    showPlayerDetailErrorHandler: function (player, response){

    }
});

export default PlayerView;
