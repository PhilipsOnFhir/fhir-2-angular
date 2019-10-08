import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_SpecimenContainedPreferenceEnum } from './R4_SpecimenContainedPreferenceEnum'
import { R4_SpecimenDefinition_Container } from './R4_SpecimenDefinition_Container'
import { R4_SpecimenDefinition_Handling } from './R4_SpecimenDefinition_Handling'

export class R4_SpecimenDefinition_TypeTested      extends R4_BackboneElement
{

   static def : string = 'SpecimenDefinition_TypeTested';
   isDerived : boolean ;
   type : R4_CodeableConcept ;
   preference : R4_SpecimenContainedPreferenceEnum ;
   container : R4_SpecimenDefinition_Container ;
   requirement : string ;
   retentionTime : string ;
   rejectionCriterion : R4_CodeableConcept [];
   handling : R4_SpecimenDefinition_Handling [];
}
