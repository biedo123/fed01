import {View} from 'backbone';
import MosterDetails from "../models/MonsterDetails";
import createDomElement from '../modules/domElement';


let monsterDetailList;
let monsterDetail;
let obj;
const MonsterDetailView = View.extend({

    initialize: function () {
        App.events.on('newMonster', this.showMonsterDetail, this);
        //use this model
        this.model = new MosterDetails();

    },

    showMonsterDetail: function(monsterObj){
        //get info from the url
        this.model.url = monsterObj;
        this.model.fetch({
            success : (data) => this.showMonsterDetailSuccessHandler(data),
            error: (data, response) => this.showMonsterDetailErrorHandler(data, response),
            data: {}

        });
    },

        showMonsterDetailSuccessHandler: function (data){

            monsterDetailList = document.getElementById("monsterdetails");
            //remove the old data, if there is any
            while (monsterDetailList.firstChild){
                monsterDetailList.removeChild(monsterDetailList.firstChild);
            }


            monsterDetail = data.attributes;
            //create list
            let list = createDomElement({tagname: 'Ul', attributes: {class:'monsterdetaillist'}});
            monsterDetailList.appendChild(list);
            //loop through the data
            for (var item in monsterDetail){
                obj = monsterDetail[item];
                let li = createDomElement({tagName: 'li', attributes:{class: item}, content: item + " : " + obj});
                list.appendChild(li);
            }



        },
        showMonsterDetailErrorHandler: function (data, response){

        }


    });
export default MonsterDetailView;