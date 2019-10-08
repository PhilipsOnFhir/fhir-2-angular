import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DocumentRelationshipTypeEnum } from './R4_1_DocumentRelationshipTypeEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_DocumentReference_RelatesTo      extends R4_1_BackboneElement
{

   static def : string = 'DocumentReference_RelatesTo';
   code : R4_1_DocumentRelationshipTypeEnum ;
   target : R4_1_Reference ;
}
