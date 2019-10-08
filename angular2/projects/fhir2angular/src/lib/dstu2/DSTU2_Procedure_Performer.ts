import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Procedure_Performer      extends DSTU2_BackboneElement
{

   static def : string = 'Procedure_Performer';
   actor : DSTU2_Reference ;
   role : DSTU2_CodeableConcept ;
}
