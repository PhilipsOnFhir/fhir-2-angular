import { R4_CatalogEntry_RelatedEntry } from './R4_CatalogEntry_RelatedEntry'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_Reference } from './R4_Reference'

export class R4_CatalogEntry      extends R4_DomainResource
{

   static def : string = 'CatalogEntry';
   identifier : R4_Identifier [];
   type : R4_CodeableConcept ;
   orderable : boolean ;
   referencedItem : R4_Reference ;
   additionalIdentifier : R4_Identifier [];
   classification : R4_CodeableConcept [];
   status : R4_PublicationStatusEnum ;
   validityPeriod : R4_Period ;
   validTo : string ;
   lastUpdated : string ;
   additionalCharacteristic : R4_CodeableConcept [];
   additionalClassification : R4_CodeableConcept [];
   relatedEntry : R4_CatalogEntry_RelatedEntry [];
}
