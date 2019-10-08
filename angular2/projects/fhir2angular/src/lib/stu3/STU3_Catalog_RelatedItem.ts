import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Catalog_RelatedItem      extends STU3_BackboneElement
{

   static def : string = 'Catalog_RelatedItem';
   relationtype : STU3_CodeableConcept ;
   type : STU3_CodeableConcept ;
   identifier : STU3_Reference ;
}
