import { LightningElement,track } from 'lwc';

export default class Parent extends LightningElement {
    @track parentMessage;
    sendDataToChild(event){
        this.parentMessage="Data from Parent!!!";
    }
}