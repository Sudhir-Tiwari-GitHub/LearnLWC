import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Phone from '@salesforce/schema/Account.Phone';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from "lightning/navigation";
import { createRecord } from 'lightning/uiRecordApi';

export default class AccountCreateUsingJavaScriptAPI extends NavigationMixin(LightningElement) {
    name='';
    phone='';

    handleChange(event){
        if(event.target.label=='Name'){
            this.name = event.target.value;
        }
        if(event.target.label=='Phone'){
            this.phone = event.target.value;
        }
    }

    /*
    createAccount(){
        var fields = {'Name' : this.name, 'Phone' : this.phone};
        // Record details to pass to create method with api name of Object.
        var objRecordInput = {'apiName' : 'Account', fields};
        // LDS method to create record.
        createRecord(objRecordInput)
        .then(response => {
            alert('Account created with Id: ' +response.id);
        })
        .catch(error => {
            alert('Error: ' +JSON.stringify(error));
        });
    }
    */

    createAccount(){
        const fields = {};
        fields[Account_Name.fieldApiName] = this.name;
        fields[Account_Phone.fieldApiName] = this.phone;
        const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
        createRecord(recordInput)
        .then(account => {
            this.accountId = account.id;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Account created',
                    variant: 'success',
                }),
            );
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: account.id,
                    objectApiName: 'Account',
                    actionName: 'view'
                },
            });
        })
        .catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: error.body.message,
                    variant: 'error',
                }),
            );
        });
    }
}