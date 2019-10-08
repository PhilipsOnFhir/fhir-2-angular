import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_SpecimenDefinition_TypeTested } from './R4_SpecimenDefinition_TypeTested'

export class R4_SpecimenDefinition      extends R4_DomainResource
{

   static def : string = 'SpecimenDefinition';
   identifier : R4_Identifier ;
   typeCollected : R4_CodeableConcept ;
   patientPreparation : R4_CodeableConcept [];
   timeAspect : string ;
   collection : R4_CodeableConcept [];
   typeTested : R4_SpecimenDefinition_TypeTested [];
}
