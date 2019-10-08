import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Coverage_Class } from './R5_Coverage_Class'
import { R5_Coverage_CostToBeneficiary } from './R5_Coverage_CostToBeneficiary'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_FinancialResourceStatusCodesEnum } from './R5_FinancialResourceStatusCodesEnum'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_Coverage      extends R5_DomainResource
{

   static def : string = 'Coverage';
   identifier : R5_Identifier [];
   status : R5_FinancialResourceStatusCodesEnum ;
   type : R5_CodeableConcept ;
   policyHolder : R5_Reference ;
   subscriber : R5_Reference ;
   subscriberId : string ;
   beneficiary : R5_Reference ;
   dependent : string ;
   relationship : R5_CodeableConcept ;
   period : R5_Period ;
   payor : R5_Reference [];
   class : R5_Coverage_Class [];
   order : string ;
   network : string ;
   costToBeneficiary : R5_Coverage_CostToBeneficiary [];
   subrogation : boolean ;
   contract : R5_Reference [];
}
