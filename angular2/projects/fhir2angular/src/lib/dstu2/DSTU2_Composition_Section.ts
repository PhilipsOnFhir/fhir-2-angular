import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Narrative } from './DSTU2_Narrative'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Composition_Section      extends DSTU2_BackboneElement
{

   static def : string = 'Composition_Section';
   title : string ;
   code : DSTU2_CodeableConcept ;
   text : DSTU2_Narrative ;
   mode : string ;
   orderedBy : DSTU2_CodeableConcept ;
   entry : DSTU2_Reference [];
   emptyReason : DSTU2_CodeableConcept ;
   section : DSTU2_Composition_Section [];
}
