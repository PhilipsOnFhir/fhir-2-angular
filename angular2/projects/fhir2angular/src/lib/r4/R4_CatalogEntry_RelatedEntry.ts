import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CatalogEntryRelationTypeEnum } from './R4_CatalogEntryRelationTypeEnum'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_CatalogEntry_RelatedEntry      extends R4_BackboneElement
{

   static def : string = 'CatalogEntry_RelatedEntry';
   relationtype : R4_CatalogEntryRelationTypeEnum ;
   item : R4_Reference ;
}
