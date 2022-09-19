import { LightningElement } from 'lwc';

export default class ColorPicker extends LightningElement {

    handleColorchange(event){
        const colorCodeVal = event.target.value;
        const colorCodeEvent = new CustomEvent('selectedColorChange', {detail: {colorCodeVal}});
        this.dispatchEvent(colorCodeEvent);
    }
}