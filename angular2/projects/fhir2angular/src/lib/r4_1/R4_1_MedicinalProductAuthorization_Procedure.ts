import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'

export class R4_1_MedicinalProductAuthorization_Procedure      extends R4_1_BackboneElement
{

   static def : string = 'MedicinalProductAuthorization_Procedure';
   identifier : R4_1_Identifier ;
   type : R4_1_CodeableConcept ;
   datePeriod : R4_1_Period ;
   dateDateTime : string ;
   application : R4_1_MedicinalProductAuthorization_Procedure [];
}
