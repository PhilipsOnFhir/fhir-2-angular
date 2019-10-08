import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_InsurancePlan_Limit } from './R4_InsurancePlan_Limit'

export class R4_InsurancePlan_Benefit      extends R4_BackboneElement
{

   static def : string = 'InsurancePlan_Benefit';
   type : R4_CodeableConcept ;
   requirement : string ;
   limit : R4_InsurancePlan_Limit [];
}
