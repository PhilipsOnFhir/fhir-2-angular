import { R5_AllergyIntoleranceSeverityEnum } from './R5_AllergyIntoleranceSeverityEnum'
import { R5_Annotation } from './R5_Annotation'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_AllergyIntolerance_Reaction      extends R5_BackboneElement
{

   static def : string = 'AllergyIntolerance_Reaction';
   substance : R5_CodeableConcept ;
   manifestation : R5_CodeableConcept [];
   description : string ;
   onset : string ;
   severity : R5_AllergyIntoleranceSeverityEnum ;
   exposureRoute : R5_CodeableConcept ;
   note : R5_Annotation [];
}
