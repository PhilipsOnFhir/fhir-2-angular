import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Catalog_RelatedItem } from './STU3_Catalog_RelatedItem'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Catalog_Entry      extends STU3_BackboneElement
{

   static def : string = 'Catalog_Entry';
   type : STU3_CodeableConcept ;
   referencedItem : STU3_Reference ;
   identifier : STU3_Identifier ;
   additionalIdentifier : STU3_Identifier [];
   classification : STU3_Identifier [];
   status : STU3_CodeableConcept ;
   validFrom : string ;
   validTo : string ;
   lastUpdated : string ;
   additionalCharacteristic : STU3_CodeableConcept [];
   additionalClassification : STU3_CodeableConcept [];
   relatedItem : STU3_Catalog_RelatedItem [];
}
