import { LightningElement,track } from 'lwc';

export default class Parent extends LightningElement {
    @track parentMessage;
    @track messageFromChild;
    sendDataToChild(event){
        this.parentMessage="Data from Parent!!!";
    }

    handleChildMessage(event){
        this.messageFromChild = event.detail;
    }
}