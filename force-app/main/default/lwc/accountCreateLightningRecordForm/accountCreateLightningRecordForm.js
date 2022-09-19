import { api, LightningElement } from 'lwc';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Type from '@salesforce/schema/Account.Type';
import Account_Industry from '@salesforce/schema/Account.Industry';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from "lightning/navigation";

export default class AccountCreateLightningRecordForm extends NavigationMixin(LightningElement) {
    fields = [Account_Name,Account_Type,Account_Industry];
   // @api recordId;
    objectApiName = 'Account';

    handleSuccess(event){
        const evt = new ShowToastEvent({
            title: 'Account created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
              objectApiName: 'Account',
              actionName: 'view',
              recordId: event.detail.id
            },
          });
    }
}