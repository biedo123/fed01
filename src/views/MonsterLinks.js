import {View} from 'backbone';
import MonstersRouter from "../routers/MonstersRouter";

const MonsterLinks = View.extend({
    router:null,
    
    events: {
        'click a': 'monsterclickHandler'
    },
    
    initialize: function () {
        this.router = new MonstersRouter();
    },

    monsterclickHandler: function(e)
    {
        e.preventDefault();
        let target = e.target;
        let url = target.dataset.slug;
        this.router.navigate(url,{trigger:true, replace:true});
    }
});


export default MonsterLinks;