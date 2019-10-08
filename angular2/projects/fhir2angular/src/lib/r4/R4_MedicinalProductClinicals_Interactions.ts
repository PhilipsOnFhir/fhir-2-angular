import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_MedicinalProductClinicals_Interactions      extends R4_BackboneElement
{

   static def : string = 'MedicinalProductClinicals_Interactions';
   interaction : string ;
   interactant : R4_CodeableConcept [];
   type : R4_CodeableConcept ;
   effect : R4_CodeableConcept ;
   incidence : R4_CodeableConcept ;
   management : R4_CodeableConcept ;
}
