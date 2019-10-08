import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_SpecimenDefinition_TypeTested } from './R4_1_SpecimenDefinition_TypeTested'

export class R4_1_SpecimenDefinition      extends R4_1_DomainResource
{

   static def : string = 'SpecimenDefinition';
   identifier : R4_1_Identifier ;
   typeCollected : R4_1_CodeableConcept ;
   patientPreparation : R4_1_CodeableConcept [];
   timeAspect : string ;
   collection : R4_1_CodeableConcept [];
   typeTested : R4_1_SpecimenDefinition_TypeTested [];
}
