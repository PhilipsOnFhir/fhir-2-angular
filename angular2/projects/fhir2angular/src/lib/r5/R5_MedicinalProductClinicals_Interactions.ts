import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_MedicinalProductClinicals_Interactions      extends R5_BackboneElement
{

   static def : string = 'MedicinalProductClinicals_Interactions';
   interaction : string ;
   interactant : R5_CodeableConcept [];
   type : R5_CodeableConcept ;
   effect : R5_CodeableConcept ;
   incidence : R5_CodeableConcept ;
   management : R5_CodeableConcept ;
}
