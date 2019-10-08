import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DocumentRelationshipTypeEnum } from './STU3_DocumentRelationshipTypeEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_DocumentReference_RelatesTo      extends STU3_BackboneElement
{

   static def : string = 'DocumentReference_RelatesTo';
   code : STU3_DocumentRelationshipTypeEnum ;
   target : STU3_Reference ;
}
