import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Immunization_Practitioner      extends STU3_BackboneElement
{

   static def : string = 'Immunization_Practitioner';
   role : STU3_CodeableConcept ;
   actor : STU3_Reference ;
}
