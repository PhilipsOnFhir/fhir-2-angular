import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_NoteTypeEnum } from './R4_NoteTypeEnum'

export class R4_ProcessResponse_ProcessNote      extends R4_BackboneElement
{

   static def : string = 'ProcessResponse_ProcessNote';
   type : R4_NoteTypeEnum ;
   text : string ;
}
