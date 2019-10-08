import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_Specimen_Treatment      extends R4_BackboneElement
{

   static def : string = 'Specimen_Treatment';
   description : string ;
   procedure : R4_CodeableConcept ;
   additive : R4_Reference [];
}
