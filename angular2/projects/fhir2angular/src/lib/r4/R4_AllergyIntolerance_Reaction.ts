import { R4_AllergyIntoleranceSeverityEnum } from './R4_AllergyIntoleranceSeverityEnum'
import { R4_Annotation } from './R4_Annotation'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_AllergyIntolerance_Reaction      extends R4_BackboneElement
{

   static def : string = 'AllergyIntolerance_Reaction';
   substance : R4_CodeableConcept ;
   manifestation : R4_CodeableConcept [];
   description : string ;
   onset : string ;
   severity : R4_AllergyIntoleranceSeverityEnum ;
   exposureRoute : R4_CodeableConcept ;
   note : R4_Annotation [];
}
