import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Money } from './R5_Money'

export class R5_InsurancePlan_GeneralCost      extends R5_BackboneElement
{

   static def : string = 'InsurancePlan_GeneralCost';
   type : R5_CodeableConcept ;
   groupSize : string ;
   cost : R5_Money ;
   comment : string ;
}
