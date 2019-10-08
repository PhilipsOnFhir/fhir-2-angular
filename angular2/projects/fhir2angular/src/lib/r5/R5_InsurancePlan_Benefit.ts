import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_InsurancePlan_Limit } from './R5_InsurancePlan_Limit'

export class R5_InsurancePlan_Benefit      extends R5_BackboneElement
{

   static def : string = 'InsurancePlan_Benefit';
   type : R5_CodeableConcept ;
   requirement : string ;
   limit : R5_InsurancePlan_Limit [];
}
