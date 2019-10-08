import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_MedicinalProductClinicals_Interactions      extends R4_1_BackboneElement
{

   static def : string = 'MedicinalProductClinicals_Interactions';
   interaction : string ;
   interactant : R4_1_CodeableConcept [];
   type : R4_1_CodeableConcept ;
   effect : R4_1_CodeableConcept ;
   incidence : R4_1_CodeableConcept ;
   management : R4_1_CodeableConcept ;
}
