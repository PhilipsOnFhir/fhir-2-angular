import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Practitioner_Qualification      extends DSTU2_BackboneElement
{

   static def : string = 'Practitioner_Qualification';
   identifier : DSTU2_Identifier [];
   code : DSTU2_CodeableConcept ;
   period : DSTU2_Period ;
   issuer : DSTU2_Reference ;
}
