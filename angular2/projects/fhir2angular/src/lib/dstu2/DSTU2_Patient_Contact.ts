import { DSTU2_Address } from './DSTU2_Address'
import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_ContactPoint } from './DSTU2_ContactPoint'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_HumanName } from './DSTU2_HumanName'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Patient_Contact      extends DSTU2_BackboneElement
{

   static def : string = 'Patient_Contact';
   relationship : DSTU2_CodeableConcept [];
   name : DSTU2_HumanName ;
   telecom : DSTU2_ContactPoint [];
   address : DSTU2_Address ;
   gender : string ;
   organization : DSTU2_Reference ;
   period : DSTU2_Period ;
}
