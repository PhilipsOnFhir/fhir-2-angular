import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coverage_Grouping } from './STU3_Coverage_Grouping'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_FinancialResourceStatusCodesEnum } from './STU3_FinancialResourceStatusCodesEnum'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Coverage      extends STU3_DomainResource
{

   static def : string = 'Coverage';
   identifier : STU3_Identifier [];
   status : STU3_FinancialResourceStatusCodesEnum ;
   type : STU3_CodeableConcept ;
   policyHolder : STU3_Reference ;
   subscriber : STU3_Reference ;
   subscriberId : string ;
   beneficiary : STU3_Reference ;
   relationship : STU3_CodeableConcept ;
   period : STU3_Period ;
   payor : STU3_Reference [];
   grouping : STU3_Coverage_Grouping ;
   dependent : string ;
   sequence : string ;
   order : string ;
   network : string ;
   contract : STU3_Reference [];
}
