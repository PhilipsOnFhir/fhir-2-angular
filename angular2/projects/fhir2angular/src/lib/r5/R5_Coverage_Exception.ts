import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'

export class R5_Coverage_Exception      extends R5_BackboneElement
{

   static def : string = 'Coverage_Exception';
   type : R5_CodeableConcept ;
   period : R5_Period ;
}
