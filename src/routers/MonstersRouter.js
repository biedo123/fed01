import {Router} from 'backbone';

const MonstersRouter = Router.extend({
    routes: {
        'monsters/:name': 'nameAction'
    },

    nameAction: function(index){
        //get the url of the smecific mosnter
        let data = App.MonstersCollection.models["0"].attributes.results[index].url;
        //trigger the event
        App.events.trigger('newMonster', data);
    }
});

export default MonstersRouter;