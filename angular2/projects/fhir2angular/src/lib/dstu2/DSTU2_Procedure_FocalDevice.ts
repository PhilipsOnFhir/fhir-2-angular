import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Procedure_FocalDevice      extends DSTU2_BackboneElement
{

   static def : string = 'Procedure_FocalDevice';
   action : DSTU2_CodeableConcept ;
   manipulated : DSTU2_Reference ;
}
