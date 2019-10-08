import { DSTU2_AllergyIntoleranceCertaintyEnum } from './DSTU2_AllergyIntoleranceCertaintyEnum'
import { DSTU2_AllergyIntoleranceSeverityEnum } from './DSTU2_AllergyIntoleranceSeverityEnum'
import { DSTU2_Annotation } from './DSTU2_Annotation'
import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_AllergyIntolerance_Reaction      extends DSTU2_BackboneElement
{

   static def : string = 'AllergyIntolerance_Reaction';
   substance : DSTU2_CodeableConcept ;
   certainty : DSTU2_AllergyIntoleranceCertaintyEnum ;
   manifestation : DSTU2_CodeableConcept [];
   description : string ;
   onset : string ;
   severity : DSTU2_AllergyIntoleranceSeverityEnum ;
   exposureRoute : DSTU2_CodeableConcept ;
   note : DSTU2_Annotation ;
}
