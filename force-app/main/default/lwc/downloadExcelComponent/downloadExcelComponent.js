import { LightningElement } from 'lwc';
import demo_Excel from '@salesforce/resourceUrl/demoExcel';

export default class DownloadExcelComponent extends LightningElement {
    downloadSampleCSV(event){
        console.log('downloadSampleCsv');
        const resourcePath = demo_Excel;
        console.log('resourcePath',resourcePath);
        window.open(resourcePath,'_blank');
        return null;
    }

}