import {View} from 'backbone';
import createDomElement from '../modules/domElement';

let monsterManualList;
let monsterData;

const MonsterManual = View.extend({

    initialize:function(){
        this.loadMonsters();
    },

    loadMonsters: function (data) {
        this.collection.fetch({
            success: (collection) => this.loadMonstersSuccessHandler(collection),
            error: (collection, response) => this.loadMonstersErrorHandler(collection, response),
            data: {}
        });
    },



    /**
     * Success Handler will add HTML of matches to this $el
     *
     * @param collection
    //  */
    loadMonstersSuccessHandler: function (collection)
    {
        //get the data that we need
        monsterData = collection.models["0"].attributes.results;

        //creates all the html-elements for the data and fills it with the data
        monsterManualList = document.getElementById('monstermanual');
        let monsterEntryNumber = 0;
          monsterData.map((monster)=> {
              let monsterEntry = createDomElement({
                  tagname: 'div',
                  attributes: {class: 'monster entry ' + monsterEntryNumber}
              });

              let name = createDomElement({
                  tagName: 'H2',
                  attributes: {class: 'name'},
                  content: collection.models["0"].attributes.results[monsterEntryNumber].name
              });
              let monsterLink = createDomElement({
                  tagName: 'A',
                  attributes: {
                      class: 'load-monsters show-monsters',
                      href: '/monsters/' + collection.models["0"].attributes.results[monsterEntryNumber].name,
                      id: 'monster-links' + monsterEntryNumber,
                      'data-slug' : '/monsters/' + monsterEntryNumber
                  },
                  content: 'Show monster entry'
              });

              monsterEntry.appendChild(name);
              monsterEntry.appendChild(monsterLink);

              monsterManualList.appendChild(monsterEntry);
              monsterEntryNumber++;

          })
    },

    /**
     * On error, show error message in this $el
     *
     * @param collection
     * @param response
     */
    loadMonstersErrorHandler: function (collection, response)
    {
       console.log (response, " , something went wrong, Collection: ", collection);

    }
});

export default MonsterManual;