import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Money } from './R4_Money'

export class R4_ClaimResponse_Total      extends R4_BackboneElement
{

   static def : string = 'ClaimResponse_Total';
   category : R4_CodeableConcept ;
   amount : R4_Money ;
}
