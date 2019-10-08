import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_InsurancePlan_Benefit } from './R4_1_InsurancePlan_Benefit'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_InsurancePlan_Coverage      extends R4_1_BackboneElement
{

   static def : string = 'InsurancePlan_Coverage';
   type : R4_1_CodeableConcept ;
   network : R4_1_Reference [];
   benefit : R4_1_InsurancePlan_Benefit [];
}
