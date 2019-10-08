import { R5_CatalogEntry_RelatedEntry } from './R5_CatalogEntry_RelatedEntry'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_Reference } from './R5_Reference'

export class R5_CatalogEntry      extends R5_DomainResource
{

   static def : string = 'CatalogEntry';
   identifier : R5_Identifier [];
   type : R5_CodeableConcept ;
   orderable : boolean ;
   referencedItem : R5_Reference ;
   additionalIdentifier : R5_Identifier [];
   classification : R5_CodeableConcept [];
   status : R5_PublicationStatusEnum ;
   validityPeriod : R5_Period ;
   validTo : string ;
   lastUpdated : string ;
   additionalCharacteristic : R5_CodeableConcept [];
   additionalClassification : R5_CodeableConcept [];
   relatedEntry : R5_CatalogEntry_RelatedEntry [];
}
