import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Coverage_Class } from './R4_1_Coverage_Class'
import { R4_1_Coverage_CostToBeneficiary } from './R4_1_Coverage_CostToBeneficiary'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_FinancialResourceStatusCodesEnum } from './R4_1_FinancialResourceStatusCodesEnum'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Coverage      extends R4_1_DomainResource
{

   static def : string = 'Coverage';
   identifier : R4_1_Identifier [];
   status : R4_1_FinancialResourceStatusCodesEnum ;
   type : R4_1_CodeableConcept ;
   policyHolder : R4_1_Reference ;
   subscriber : R4_1_Reference ;
   subscriberId : string ;
   beneficiary : R4_1_Reference ;
   dependent : string ;
   relationship : R4_1_CodeableConcept ;
   period : R4_1_Period ;
   payor : R4_1_Reference [];
   class : R4_1_Coverage_Class [];
   order : string ;
   network : string ;
   costToBeneficiary : R4_1_Coverage_CostToBeneficiary [];
   subrogation : boolean ;
   contract : R4_1_Reference [];
}
