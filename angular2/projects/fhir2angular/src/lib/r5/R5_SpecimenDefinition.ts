import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_SpecimenDefinition_TypeTested } from './R5_SpecimenDefinition_TypeTested'

export class R5_SpecimenDefinition      extends R5_DomainResource
{

   static def : string = 'SpecimenDefinition';
   identifier : R5_Identifier ;
   typeCollected : R5_CodeableConcept ;
   patientPreparation : R5_CodeableConcept [];
   timeAspect : string ;
   collection : R5_CodeableConcept [];
   typeTested : R5_SpecimenDefinition_TypeTested [];
}
