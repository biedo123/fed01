import {Collection} from 'backbone';
import Player from '../models/Player';

const PlayersCollection = Collection.extend({
    model: Player,
    url:"src/data/players.json"
});

export default PlayersCollection;