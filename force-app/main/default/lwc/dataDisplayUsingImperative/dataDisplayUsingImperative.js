import { LightningElement,track } from 'lwc';
import getAccountRecordList from '@salesforce/apex/AccountController.getAccountRecordList';

export default class DataDisplayUsingImperative extends LightningElement {
    @track accountRecords;
    @track errors;
    @track columns = [{label:'Name',fieldName:'Name',type:'text'},
                      {label:'Industry',fieldName:'Industry',type:'text'},
                      {label:'Phone',fieldName:'Phone',type:'phone'}
];

    connectedCallback(){
        getAccountRecordList()
            .then(result=>{
                this.accountRecords = result;
            })
            .catch(error=>{
                this.errors = error;
            });
    }
}