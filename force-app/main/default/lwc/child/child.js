import { LightningElement,api } from 'lwc';

export default class Child extends LightningElement {
    @api messageInChild;

    sendMessageToParent(event){
        const sendMesageFromChild = new CustomEvent('childmessage',{detail:'Hi I am from Child'});
        this.dispatchEvent(sendMesageFromChild);
    }
}