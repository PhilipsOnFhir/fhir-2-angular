import { R4_1_CatalogEntry_RelatedEntry } from './R4_1_CatalogEntry_RelatedEntry'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_CatalogEntry      extends R4_1_DomainResource
{

   static def : string = 'CatalogEntry';
   identifier : R4_1_Identifier [];
   type : R4_1_CodeableConcept ;
   orderable : boolean ;
   referencedItem : R4_1_Reference ;
   additionalIdentifier : R4_1_Identifier [];
   classification : R4_1_CodeableConcept [];
   status : R4_1_PublicationStatusEnum ;
   validityPeriod : R4_1_Period ;
   validTo : string ;
   lastUpdated : string ;
   additionalCharacteristic : R4_1_CodeableConcept [];
   additionalClassification : R4_1_CodeableConcept [];
   relatedEntry : R4_1_CatalogEntry_RelatedEntry [];
}
