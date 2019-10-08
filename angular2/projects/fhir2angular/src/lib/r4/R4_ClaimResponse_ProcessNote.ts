import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_NoteTypeEnum } from './R4_NoteTypeEnum'

export class R4_ClaimResponse_ProcessNote      extends R4_BackboneElement
{

   static def : string = 'ClaimResponse_ProcessNote';
   number : string ;
   type : R4_NoteTypeEnum ;
   text : string ;
   language : R4_CodeableConcept ;
}
