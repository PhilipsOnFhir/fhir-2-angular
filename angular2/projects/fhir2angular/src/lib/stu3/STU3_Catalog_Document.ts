import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Catalog_Document      extends STU3_BackboneElement
{

   static def : string = 'Catalog_Document';
   status : STU3_CodeableConcept ;
   provider : STU3_Reference ;
   contentType : STU3_CodeableConcept ;
   updateMode : STU3_CodeableConcept ;
   identifier : STU3_Identifier ;
   contentVersion : STU3_Identifier ;
   issueDate : string ;
   validFrom : string ;
   validTo : string ;
}
