import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DocumentRelationshipTypeEnum } from './DSTU2_DocumentRelationshipTypeEnum'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_DocumentReference_RelatesTo      extends DSTU2_BackboneElement
{

   static def : string = 'DocumentReference_RelatesTo';
   code : DSTU2_DocumentRelationshipTypeEnum ;
   target : DSTU2_Reference ;
}
