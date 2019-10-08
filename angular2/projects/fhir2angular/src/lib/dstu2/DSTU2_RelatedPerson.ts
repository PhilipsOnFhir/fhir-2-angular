import { DSTU2_Address } from './DSTU2_Address'
import { DSTU2_Attachment } from './DSTU2_Attachment'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_ContactPoint } from './DSTU2_ContactPoint'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_HumanName } from './DSTU2_HumanName'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_RelatedPerson      extends DSTU2_DomainResource
{

   static def : string = 'RelatedPerson';
   identifier : DSTU2_Identifier [];
   patient : DSTU2_Reference ;
   relationship : DSTU2_CodeableConcept ;
   name : DSTU2_HumanName ;
   telecom : DSTU2_ContactPoint [];
   gender : string ;
   birthDate : string ;
   address : DSTU2_Address [];
   photo : DSTU2_Attachment [];
   period : DSTU2_Period ;
}
