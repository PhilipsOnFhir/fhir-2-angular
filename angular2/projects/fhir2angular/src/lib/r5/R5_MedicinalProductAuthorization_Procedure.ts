import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'

export class R5_MedicinalProductAuthorization_Procedure      extends R5_BackboneElement
{

   static def : string = 'MedicinalProductAuthorization_Procedure';
   identifier : R5_Identifier ;
   type : R5_CodeableConcept ;
   datePeriod : R5_Period ;
   dateDateTime : string ;
   application : R5_MedicinalProductAuthorization_Procedure [];
}
