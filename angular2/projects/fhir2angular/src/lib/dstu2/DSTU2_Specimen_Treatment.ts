import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Specimen_Treatment      extends DSTU2_BackboneElement
{

   static def : string = 'Specimen_Treatment';
   description : string ;
   procedure : DSTU2_CodeableConcept ;
   additive : DSTU2_Reference [];
}
