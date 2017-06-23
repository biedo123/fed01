import {Collection} from 'backbone';
import Monster from '../models/Monster';

const MonstersCollection = Collection.extend({
    model: Monster,
    url: 'http://www.dnd5eapi.co/api/monsters'
});

export default MonstersCollection;