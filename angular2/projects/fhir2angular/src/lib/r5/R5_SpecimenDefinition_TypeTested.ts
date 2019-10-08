import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_SpecimenContainedPreferenceEnum } from './R5_SpecimenContainedPreferenceEnum'
import { R5_SpecimenDefinition_Container } from './R5_SpecimenDefinition_Container'
import { R5_SpecimenDefinition_Handling } from './R5_SpecimenDefinition_Handling'

export class R5_SpecimenDefinition_TypeTested      extends R5_BackboneElement
{

   static def : string = 'SpecimenDefinition_TypeTested';
   isDerived : boolean ;
   type : R5_CodeableConcept ;
   preference : R5_SpecimenContainedPreferenceEnum ;
   container : R5_SpecimenDefinition_Container ;
   requirement : string ;
   retentionTime : string ;
   rejectionCriterion : R5_CodeableConcept [];
   handling : R5_SpecimenDefinition_Handling [];
}
