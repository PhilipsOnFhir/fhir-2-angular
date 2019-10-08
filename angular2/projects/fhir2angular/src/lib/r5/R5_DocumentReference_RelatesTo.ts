import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DocumentRelationshipTypeEnum } from './R5_DocumentRelationshipTypeEnum'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_DocumentReference_RelatesTo      extends R5_BackboneElement
{

   static def : string = 'DocumentReference_RelatesTo';
   code : R5_DocumentRelationshipTypeEnum ;
   target : R5_Reference ;
}
