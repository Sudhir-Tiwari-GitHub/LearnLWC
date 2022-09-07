public with sharing class CalculateSum {
    public CalculateSum() {

    }

    @AuraEnabled
    public static integer getSummResult(integer firstNumber, integer secondNumber){
        try {
            return(firstNumber+secondNumber);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
