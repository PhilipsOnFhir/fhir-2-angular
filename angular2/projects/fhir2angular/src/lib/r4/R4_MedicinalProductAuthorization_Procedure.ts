import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'

export class R4_MedicinalProductAuthorization_Procedure      extends R4_BackboneElement
{

   static def : string = 'MedicinalProductAuthorization_Procedure';
   identifier : R4_Identifier ;
   type : R4_CodeableConcept ;
   datePeriod : R4_Period ;
   dateDateTime : string ;
   application : R4_MedicinalProductAuthorization_Procedure [];
}
