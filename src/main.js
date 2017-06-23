import _ from 'underscore';
import {Events} from 'backbone';
import Monsters from './collections/MonstersCollection';
import MonsterManual from './views/MonsterManual';
import MonsterLinks from './views/MonsterLinks';
import MonsterDetailView from './views/MonsterDetailsView';
import PlayerView from './views/PlayerView';

(function ()
{

    let setGlobalVariables = function ()
    {
        window.App = {};
        App.MostersCollection = {};
        App.events = _.clone(Events);
    };

    /**
     * Run after dom is ready
     */
    let init = function ()
    {
        setGlobalVariables();

        App.MonstersCollection = new Monsters();
        new MonsterManual({el: "#monstermanual", collection: App.MonstersCollection});
        new MonsterLinks({el: "#monstermanual"});
        new MonsterDetailView({el: "#monsterdetails"});
        new PlayerView({el: "#playerlist"});

        Backbone.history.start({pushState: true, root: 'DNDEncounterManager'});
    };

    window.addEventListener('load', init);
})();



