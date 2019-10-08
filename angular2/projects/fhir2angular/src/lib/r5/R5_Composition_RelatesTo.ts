import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DocumentRelationshipTypeEnum } from './R5_DocumentRelationshipTypeEnum'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_Composition_RelatesTo      extends R5_BackboneElement
{

   static def : string = 'Composition_RelatesTo';
   code : R5_DocumentRelationshipTypeEnum ;
   targetIdentifier : R5_Identifier ;
   targetReference : R5_Reference ;
}
