import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_SpecimenContainedPreferenceEnum } from './R4_1_SpecimenContainedPreferenceEnum'
import { R4_1_SpecimenDefinition_Container } from './R4_1_SpecimenDefinition_Container'
import { R4_1_SpecimenDefinition_Handling } from './R4_1_SpecimenDefinition_Handling'

export class R4_1_SpecimenDefinition_TypeTested      extends R4_1_BackboneElement
{

   static def : string = 'SpecimenDefinition_TypeTested';
   isDerived : boolean ;
   type : R4_1_CodeableConcept ;
   preference : R4_1_SpecimenContainedPreferenceEnum ;
   container : R4_1_SpecimenDefinition_Container ;
   requirement : string ;
   retentionTime : string ;
   rejectionCriterion : R4_1_CodeableConcept [];
   handling : R4_1_SpecimenDefinition_Handling [];
}
