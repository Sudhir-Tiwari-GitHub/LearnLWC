import { api, LightningElement } from 'lwc';
import contact_LastName from '@salesforce/schema/Contact.LastName';
import contact_Email from '@salesforce/schema/Contact.Email';
import contact_Account from '@salesforce/schema/Contact.AccountId';
import contact_Birthdate from '@salesforce/schema/Contact.Birthdate';
import contact_FirstName from '@salesforce/schema/Contact.FirstName';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ContactQuickUpdateLightningRecordUpdateForm extends LightningElement {

    @api recordId;
    @api objectApiName;
    fieldList=[contact_LastName,contact_Email,contact_Account,contact_Birthdate,contact_FirstName];

    handleContactUpdate(event){
        const evt = new ShowToastEvent({
            title: 'Contact created',
            message: 'Contact Last Name:'+event.detail.fields.LastName.value+' has been successfully updated',
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }
}