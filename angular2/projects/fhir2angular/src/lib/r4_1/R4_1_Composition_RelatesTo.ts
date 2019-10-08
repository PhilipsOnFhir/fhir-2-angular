import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DocumentRelationshipTypeEnum } from './R4_1_DocumentRelationshipTypeEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Composition_RelatesTo      extends R4_1_BackboneElement
{

   static def : string = 'Composition_RelatesTo';
   code : R4_1_DocumentRelationshipTypeEnum ;
   targetIdentifier : R4_1_Identifier ;
   targetReference : R4_1_Reference ;
}
