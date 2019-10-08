import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Money } from './R5_Money'

export class R5_ClaimResponse_Adjudication      extends R5_BackboneElement
{

   static def : string = 'ClaimResponse_Adjudication';
   category : R5_CodeableConcept ;
   reason : R5_CodeableConcept ;
   amount : R5_Money ;
   value : string ;
}
