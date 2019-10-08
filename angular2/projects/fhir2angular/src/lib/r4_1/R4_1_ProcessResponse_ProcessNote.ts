import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_NoteTypeEnum } from './R4_1_NoteTypeEnum'

export class R4_1_ProcessResponse_ProcessNote      extends R4_1_BackboneElement
{

   static def : string = 'ProcessResponse_ProcessNote';
   type : R4_1_NoteTypeEnum ;
   text : string ;
}
