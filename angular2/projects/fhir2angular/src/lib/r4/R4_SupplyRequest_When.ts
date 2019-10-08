import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Timing } from './R4_Timing'

export class R4_SupplyRequest_When      extends R4_BackboneElement
{

   static def : string = 'SupplyRequest_When';
   code : R4_CodeableConcept ;
   schedule : R4_Timing ;
}
