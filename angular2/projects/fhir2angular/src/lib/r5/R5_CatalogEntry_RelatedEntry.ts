import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CatalogEntryRelationTypeEnum } from './R5_CatalogEntryRelationTypeEnum'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_CatalogEntry_RelatedEntry      extends R5_BackboneElement
{

   static def : string = 'CatalogEntry_RelatedEntry';
   relationtype : R5_CatalogEntryRelationTypeEnum ;
   item : R5_Reference ;
}
