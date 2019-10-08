import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Coverage_Class } from './R4_Coverage_Class'
import { R4_Coverage_CostToBeneficiary } from './R4_Coverage_CostToBeneficiary'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_FinancialResourceStatusCodesEnum } from './R4_FinancialResourceStatusCodesEnum'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_Coverage      extends R4_DomainResource
{

   static def : string = 'Coverage';
   identifier : R4_Identifier [];
   status : R4_FinancialResourceStatusCodesEnum ;
   type : R4_CodeableConcept ;
   policyHolder : R4_Reference ;
   subscriber : R4_Reference ;
   subscriberId : string ;
   beneficiary : R4_Reference ;
   dependent : string ;
   relationship : R4_CodeableConcept ;
   period : R4_Period ;
   payor : R4_Reference [];
   class : R4_Coverage_Class [];
   order : string ;
   network : string ;
   costToBeneficiary : R4_Coverage_CostToBeneficiary [];
   subrogation : boolean ;
   contract : R4_Reference [];
}
