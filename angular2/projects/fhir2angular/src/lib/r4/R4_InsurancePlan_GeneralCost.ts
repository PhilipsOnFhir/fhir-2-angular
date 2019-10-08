import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Money } from './R4_Money'

export class R4_InsurancePlan_GeneralCost      extends R4_BackboneElement
{

   static def : string = 'InsurancePlan_GeneralCost';
   type : R4_CodeableConcept ;
   groupSize : string ;
   cost : R4_Money ;
   comment : string ;
}
