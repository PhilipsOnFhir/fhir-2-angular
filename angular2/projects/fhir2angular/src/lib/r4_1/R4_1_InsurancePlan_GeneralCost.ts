import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Money } from './R4_1_Money'

export class R4_1_InsurancePlan_GeneralCost      extends R4_1_BackboneElement
{

   static def : string = 'InsurancePlan_GeneralCost';
   type : R4_1_CodeableConcept ;
   groupSize : string ;
   cost : R4_1_Money ;
   comment : string ;
}
