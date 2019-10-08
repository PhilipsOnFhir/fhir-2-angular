import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DocumentRelationshipTypeEnum } from './R4_DocumentRelationshipTypeEnum'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_DocumentReference_RelatesTo      extends R4_BackboneElement
{

   static def : string = 'DocumentReference_RelatesTo';
   code : R4_DocumentRelationshipTypeEnum ;
   target : R4_Reference ;
}
