import { LightningElement,track } from 'lwc';
import getSumResult from '@salesforce/apex/CalculateSum.getSummResult';

export default class CalculateSum extends LightningElement {

    @track fstNumber;
    @track scdNumber;
    @track sum;
    @track errors;

    handleClick(){
        getSumResult({firstNumber:this.fstNumber, secondNumber:this.scdNumber})
        .then(result=>{
            this.sum = result;
        })
        .catch(error=>{
            this.errors = error;
        });
    }
    handleChange(event){
        if(event.target.name === 'fNumber'){
            this.fstNumber = event.target.value;
        }
        else if(event.target.name === 'sNumber'){
            this.scdNumber = event.target.value;
        }
    }
}