import { R4_1_AllergyIntoleranceSeverityEnum } from './R4_1_AllergyIntoleranceSeverityEnum'
import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_AllergyIntolerance_Reaction      extends R4_1_BackboneElement
{

   static def : string = 'AllergyIntolerance_Reaction';
   substance : R4_1_CodeableConcept ;
   manifestation : R4_1_CodeableConcept [];
   description : string ;
   onset : string ;
   severity : R4_1_AllergyIntoleranceSeverityEnum ;
   exposureRoute : R4_1_CodeableConcept ;
   note : R4_1_Annotation [];
}
