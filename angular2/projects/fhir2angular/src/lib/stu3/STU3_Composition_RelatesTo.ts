import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DocumentRelationshipTypeEnum } from './STU3_DocumentRelationshipTypeEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Composition_RelatesTo      extends STU3_BackboneElement
{

   static def : string = 'Composition_RelatesTo';
   code : STU3_DocumentRelationshipTypeEnum ;
   targetIdentifier : STU3_Identifier ;
   targetReference : STU3_Reference ;
}
