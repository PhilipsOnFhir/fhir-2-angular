import { STU3_AllergyIntoleranceSeverityEnum } from './STU3_AllergyIntoleranceSeverityEnum'
import { STU3_Annotation } from './STU3_Annotation'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_AllergyIntolerance_Reaction      extends STU3_BackboneElement
{

   static def : string = 'AllergyIntolerance_Reaction';
   substance : STU3_CodeableConcept ;
   manifestation : STU3_CodeableConcept [];
   description : string ;
   onset : string ;
   severity : STU3_AllergyIntoleranceSeverityEnum ;
   exposureRoute : STU3_CodeableConcept ;
   note : STU3_Annotation [];
}
