import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_InsurancePlan_Benefit } from './R4_InsurancePlan_Benefit'
import { R4_Reference } from './R4_Reference'

export class R4_InsurancePlan_Coverage      extends R4_BackboneElement
{

   static def : string = 'InsurancePlan_Coverage';
   type : R4_CodeableConcept ;
   network : R4_Reference [];
   benefit : R4_InsurancePlan_Benefit [];
}
