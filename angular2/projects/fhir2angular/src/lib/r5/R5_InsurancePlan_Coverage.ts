import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_InsurancePlan_Benefit } from './R5_InsurancePlan_Benefit'
import { R5_Reference } from './R5_Reference'

export class R5_InsurancePlan_Coverage      extends R5_BackboneElement
{

   static def : string = 'InsurancePlan_Coverage';
   type : R5_CodeableConcept ;
   network : R5_Reference [];
   benefit : R5_InsurancePlan_Benefit [];
}
