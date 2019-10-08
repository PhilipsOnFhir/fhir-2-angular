import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_NoteTypeEnum } from './R5_NoteTypeEnum'

export class R5_ClaimResponse_ProcessNote      extends R5_BackboneElement
{

   static def : string = 'ClaimResponse_ProcessNote';
   number : string ;
   type : R5_NoteTypeEnum ;
   text : string ;
   language : R5_CodeableConcept ;
}
