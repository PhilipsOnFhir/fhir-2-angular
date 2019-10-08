import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_InsurancePlan_Limit } from './R4_1_InsurancePlan_Limit'

export class R4_1_InsurancePlan_Benefit      extends R4_1_BackboneElement
{

   static def : string = 'InsurancePlan_Benefit';
   type : R4_1_CodeableConcept ;
   requirement : string ;
   limit : R4_1_InsurancePlan_Limit [];
}
