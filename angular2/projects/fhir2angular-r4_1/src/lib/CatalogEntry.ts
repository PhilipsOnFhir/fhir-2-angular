import { Annotation } from './Annotation'
import { CatalogEntryStatusEnum } from './CatalogEntryStatusEnum'
import { CatalogEntryTypeEnum } from './CatalogEntryTypeEnum'
import { CatalogEntry_RelatedEntry } from './CatalogEntry_RelatedEntry'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class CatalogEntry      extends DomainResource
{

   static def : string = 'CatalogEntry';
   identifier : Identifier [];
   name : string ;
   type : CatalogEntryTypeEnum ;
   status : CatalogEntryStatusEnum ;
   effectivePeriod : Period ;
   orderable : boolean ;
   referencedItem : Reference ;
   relatedEntry : CatalogEntry_RelatedEntry [];
   updatedBy : Reference ;
   note : Annotation [];
   estimatedDuration : string ;
   billingCode : CodeableConcept [];
   billingSummary : string ;
   scheduleSummary : string ;
   limitationSummary : string ;
   regulatorySummary : string ;
}
