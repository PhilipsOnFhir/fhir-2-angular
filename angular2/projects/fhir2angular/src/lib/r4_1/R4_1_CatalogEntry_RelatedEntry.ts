import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CatalogEntryRelationTypeEnum } from './R4_1_CatalogEntryRelationTypeEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_CatalogEntry_RelatedEntry      extends R4_1_BackboneElement
{

   static def : string = 'CatalogEntry_RelatedEntry';
   relationtype : R4_1_CatalogEntryRelationTypeEnum ;
   item : R4_1_Reference ;
}
